import {
  chakra,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { collection, doc, setDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setNewProduct } from "redux/productsSlice";
import { db } from "firebaseApi/client";

function AddProducts() {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productType, setProductType] = useState("0");
  const [roomSize, setRoomSize] = useState("0");
  const [bookingDuration, setBookingDuration] = useState("0");
  const [setProductPhotoFile] = useState(null);
  const [productPhotoURL, setProductPhotoURL] = useState("");
  const [photoLoading, setPhotoLoading] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(roomName, roomCapacity);
  }, [
    productName,
    productDescription,
    productPrice,
    productType,
    roomSize,
    bookingDuration,
  ]);

  const handleImageFile = (e) => {
    setProductPhotoFile(e.target.files[0]);
    handleUploadPhoto(e);
  };

  const handleUploadPhoto = async (event) => {
    try {
      event.preventDefault();
      console.log(event.target.files[0]);
      let file = event.target.files[0];
      console.log(file);

      const storage = getStorage();
      const storageRef = ref(storage, "uploads/products/" + file.name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setPhotoLoading("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              setPhotoLoading("Upload is paused");
              break;
            case "running":
              setPhotoLoading("Upload is running");
              break;
            default:
          }
        },
        (error) => {
          setPhotoLoading(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            setProductPhotoURL(downloadURL);
          });
        }
      );
    } catch (error) {
      setPhotoLoading(error.message);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: productName,
      productDescription: productDescription,
      price: productPrice,
      type: productType,
      room: roomSize,
      duration: bookingDuration,
      photoURL: productPhotoURL,
    };
    try {
      const newProductInfoRef = doc(collection(db, "products"));
      await setDoc(newProductInfoRef, data).then(function () {
        alert("Product info successfully sent!");
        dispatch(
          setNewProduct({ product: { ...data, id: newProductInfoRef.id } })
        );
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Flex
      align="center"
      justify="center"
      flexDir="column"
      w="600px"
      h="fit-content"
      mt={10}
      mb={10}
      p={7}
      border="1px"
      borderColor="gray.200"
      borderRadius="5"
      boxShadow="lg"
      className="add_product"
      bg="white"
    >
      <Flex
        w="100%"
        flexDir="column"
        alignItems="flex-start"
        gap={2}
        className="add_product__container"
      >
        <Flex
          mb={4}
          alignItems="flex-start"
          className="add_product__container__header"
        >
          <Text
            textAlign={["left", "center"]}
            fontSize="1.5em"
            fontWeight={700}
          >
            Add Product
          </Text>
        </Flex>
        <Flex
          align="center"
          alignItems="flex-start"
          textAlign="left"
          justify="flex-start"
          flexDir="column"
          w="100%"
          gap={2}
          className="add_product__container__form"
        >
          <form onSubmit={handleFormSubmit}>
            <FormControl isRequired>
              <FormLabel>Product Name</FormLabel>
              <Input
                name="name"
                type="text"
                placeholder=""
                // onChange={setRoomName()}
                onChange={(e) => setProductName(e.target.value)}
                value={productName}
              />
            </FormControl>

            <FormControl isRequired mt={10}>
              <FormLabel>Product Description</FormLabel>
              <Input
                name="name"
                type="text"
                placeholder=""
                // onChange={setRoomName()}
                onChange={(e) => setProductDescription(e.target.value)}
                value={productDescription}
              />
            </FormControl>
            <FormControl isRequired mt={10}>
              <FormLabel>Price</FormLabel>
              <Input
                price="price"
                type="text"
                placeholder=""
                // onChange={setRoomName()}
                onChange={(e) => setProductPrice(e.target.value)}
                value={productPrice}
              />
            </FormControl>
            <FormControl mt={6} isRequired>
              <FormLabel>Product Type</FormLabel>
              <NumberInput
                name="quantity"
                min={0}
                max={20}
                // onChange={handleCapacityChange}
                onChange={(e) => setProductType(e)}
                value={productType}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <FormControl mt={6} isRequired>
              <FormLabel>Room</FormLabel>
              <NumberInput
                name="quantity"
                min={0}
                max={20}
                // onChange={handleCapacityChange}
                onChange={(e) => setRoomSize(e)}
                value={roomSize}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <FormControl mt={6} isRequired>
              <FormLabel>Duration</FormLabel>
              <NumberInput
                name="quantity"
                min={0}
                max={20}
                // onChange={handleCapacityChange}
                onChange={(e) => setBookingDuration(e)}
                value={bookingDuration}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <FormControl mt={6} isRequired>
              <FormLabel>Photo</FormLabel>
              <Input
                name="photoURL"
                focusBorderColor="lime"
                lineHeight={6}
                pt={1}
                pl={1}
                type="file"
                accept="image/*"
                onChange={handleImageFile}
              />
            </FormControl>
            {productPhotoURL ? (
              <Image
                boxSize="150px"
                objectFit="cover"
                src={productPhotoURL}
                alt="product-photo"
                mt={5}
              />
            ) : (
              <Text
                textAlign={["left", "center"]}
                fontSize="1em"
                fontWeight={400}
              >
                {photoLoading}
              </Text>
            )}
            <chakra.button
              mt={10}
              w="200px"
              px="3"
              py="2"
              bg={`gray.200`}
              rounded="5"
              _hover={{ bg: `gray.300` }}
              onClick={() => console.log("Add Product")}
              type="submit"
            >
              Add Product
            </chakra.button>
          </form>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default AddProducts;
