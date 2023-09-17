interface RoomProps {
  roomID: string;
}

const Room = ({ roomID }: RoomProps) => {
  return <div>Room is {roomID}</div>;
};

export default Room;
