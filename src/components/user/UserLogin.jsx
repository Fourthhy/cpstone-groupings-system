import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// import studentList from "../../json/studentList.json"
import { fetchRoomList } from "../../functions/adminFunctions";

import { Button, TextInput, Label, Select } from "flowbite-react";

import Loading from "../ReusableComponents/Loading";

export default function App() {
  const [enterCode, setEnterCode] = useState('');
  const [inputResponse, setInputResponse] = useState(0);

  const [isLoading, setIsLoading] = useState(false);
  const [loadingPath, setLoadingPath] = useState(``);

  const customButtonDesign = "bg-gradient-to-br from-purple-200 to-cyan-200 text-white focus:ring-2 focus:ring-cyan-100 enabled:hover:bg-gradient-to-bl dark:focus:ring-cyan-800 w-full mt-[5px]";

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission

    const rooms = await fetchRoomList();
    let roomFound = false;

    rooms.forEach((room) => {
      if (room.roomCode === enterCode) {
        setInputResponse(1);
        setTimeout(() => {
          setIsLoading(true);
          setLoadingPath(`selfvouch/${enterCode}/`);
        }, 1000);
        roomFound = true;
      }
    });

    if (!roomFound) {
      setInputResponse(2);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading origin={'userLogin'} path={loadingPath} purpose={'Logging in'} />
      ) : (
        <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
          <div className="h-[500px] w-[400px] font-raleway flex justify-center items-center flex-col border-[1px] rounded-lg bg-white">
            <div className="w-[380px] h-full flex flex-col justify-center items-center">
              <h2 className="font-bold mt-[20px] text-center text-xl">Join Room</h2>
              <form className="w-[75%]" onSubmit={handleSubmit}>
                <div className="my-5">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Room Code</label>
                  <TextInput
                    required
                    value={enterCode}
                    onChange={(e) => setEnterCode(e.target.value)}
                    type="text"
                    color={inputResponse === 1 ? 'success' :
                      inputResponse === 2 ? 'failure' : 'gray'
                    }
                    placeholder="123456"
                    helperText={inputResponse === 1 ? 'Room found!' :
                      inputResponse === 2 ? 'Room not found' : ''}
                  />
                </div>
                <div className="mt-[20px]">
                  <Button
                    outline
                    type="submit"
                    className={customButtonDesign}>
                    Join Room
                  </Button>
                </div>
                <div className="my-[10px] flex justify-center items-center gap-5">
                  <hr className="border-gray-400 w-[50px]" />
                  <p>or</p>
                  <hr className="border-gray-400 w-[50px]" />
                </div>
                <div className="w-full">
                  <Link to="/">
                    <Button
                      color="gray"
                      className="w-full">
                      Go Back
                    </Button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
