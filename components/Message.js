import { formatRelative } from "date-fns";
export default function Message({
  createdAt = null,
  text = "",
  displayName = "",
  photoURL = "",
  user
}) {
  console.log(text)
  return (
    <>
    
    
    {user.displayName===displayName?
    <div className="flex justify-end pt-2 pl-10 mb-3">
    {" "}
    <span
      className="bg-green-900 h-auto text-gray-200 text-xs font-normal p-1 rounded-sm px-1 items-end flex justify-end "
      style={{ "fontSize": "13px" }}
    >
      {text}{" "}


      {createdAt?.seconds ? (
          <span
          className="text-gray-400 pl-1"
          style={{ "fontSize": "8px" }}
        >
   {formatRelative(new Date(createdAt.seconds * 1000), new Date())}
        </span>
            
          
        ) : null}
      
    </span>{" "}
  </div>
    
    :

    <div className="flex items-center pr-10 mb-3">
      
      {photoURL ? (
        <img
          src={photoURL}
          className="rounded-full shadow-xl"
          width="25"
          height="25"
        />
      ) : null}

      <span
        className=" flex-col flex ml-1 h-auto bg-gray-900 text-gray-200 text-xs font-normal rounded-sm px-1 p-1 items-start"
        style={{ "fontSize": "13px" }}
      >
        <span className="italic text-gray-400 mb-1">{displayName}</span>
       {text}
        {createdAt?.seconds ? (
          <span className="text-gray-400 " style={{ "fontSize": "8px" }}>
            {formatRelative(new Date(createdAt.seconds * 1000), new Date())}
          </span>
        ) : null}
      </span>
      </div>
      }
    </>
  );
}
