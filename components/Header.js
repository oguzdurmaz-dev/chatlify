import { FaSignInAlt } from "react-icons/fa";
export default function HeaderPage({ displayName,photoURL,signOut}) {
  return (
    <>
      <nav className="w-full h-10 bg-gray-900 flex justify-between items-center fixed">
        <div className="flex justify-center items-center">
          {photoURL ? (
             <img
             src={photoURL}
             className="rounded-full ml-1"
             width="25"
             height="25"
           />
          ) : null}

          {displayName ? (
            <span className="text-xs font-medium text-gray-300 ml-1">
              {displayName}{" "}
            </span>
          ) : null}
        </div>
        <div className="flex items-center">
          <button onClick={signOut}><FaSignInAlt className="text-white mr-2" /></button>
        </div>
      </nav>
    </>
  );
}
