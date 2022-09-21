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
} from '@chakra-ui/react';
import React, { useState } from 'react';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import { collection, doc, setDoc } from 'firebase/firestore';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setNewRoom } from '../redux/roomsSlice';
import { db } from '../firebase/client';

function AddRooms() {
  const [roomName, setRoomName] = useState('');
  const [roomCapacity, setRoomCapacity] = useState('0');
  const [roomPhotoFile, setRoomPhotoFile] = useState(null);
  const [roomPhotoURL, setRoomPhotoURL] = useState('');
  const [photoLoading, setPhotoLoading] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(roomName, roomCapacity);
  }, [roomName, roomCapacity]);

  const handleImageFile = (e) => {
    setRoomPhotoFile(e.target.files[0]);
    handleUploadPhoto(e);
  };

  const handleUploadPhoto = async (event) => {
    try {
      event.preventDefault();
      console.log(event.target.files[0]);
      let file = event.target.files[0];
      console.log(file);

      const storage = getStorage();
      const storageRef = ref(storage, 'uploads/rooms/' + file.name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setPhotoLoading('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              setPhotoLoading('Upload is paused');
              break;
            case 'running':
              setPhotoLoading('Upload is running');
              break;
          }
        },
        (error) => {
          setPhotoLoading(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
            setRoomPhotoURL(downloadURL);
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
      name: roomName,
      capacity: roomCapacity,
      photoURL: roomPhotoURL,
    };
    try {
      const newRoomInfoRef = doc(collection(db, 'rooms'));
      await setDoc(newRoomInfoRef, data).then(function () {
        alert('Room info successfully sent!');
        dispatch(setNewRoom({ room: { ...data, id: newRoomInfoRef.id } }));
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
      className="add_room"
    >
      <Flex
        w="100%"
        flexDir="column"
        alignItems="flex-start"
        gap={2}
        className="add_room__container"
      >
        <Flex
          mb={4}
          alignItems="flex-start"
          className="add_room__container__header"
        >
          <Text
            textAlign={['left', 'center']}
            fontSize="1.5em"
            fontWeight={700}
          >
            Add Room
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
          className="add_room__container__form"
        >
          <form onSubmit={handleFormSubmit}>
            <FormControl isRequired>
              <FormLabel>Room Name</FormLabel>
              <Input
                name="name"
                type="text"
                placeholder=""
                // onChange={setRoomName()}
                onChange={(e) => setRoomName(e.target.value)}
                value={roomName}
              />
            </FormControl>
            <FormControl mt={6} isRequired>
              <FormLabel>Capacity</FormLabel>
              <NumberInput
                name="capacity"
                min={0}
                max={20}
                // onChange={handleCapacityChange}
                onChange={(e) => setRoomCapacity(e)}
                value={roomCapacity}
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
            {roomPhotoURL ? (
              <Image
                boxSize="150px"
                objectFit="cover"
                src={roomPhotoURL}
                alt="room-photo"
                mt={5}
              />
            ) : (
              <Text
                textAlign={['left', 'center']}
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
              onClick={() => console.log('Add Room')}
              type="submit"
            >
              Add Room
            </chakra.button>
          </form>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default AddRooms;
