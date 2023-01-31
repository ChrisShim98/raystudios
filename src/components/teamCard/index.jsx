import React, {useState, useEffect} from "react";
import './index.css'

const TeamCard = ({role, staffNumber}) => {
    let [name, setName] = useState();
    let [staff, setStaff] = useState();

    useEffect(() => {
        if (staffNumber === 1) {
            setName('Niel Summer');
            setStaff('https://res.cloudinary.com/diywkaahn/image/upload/v1673716648/RayStudios/The%20Team/Niel_Summer_v86gx5.jpg');
        } else if (staffNumber === 2) {
            setName('Bill Piano');
            setStaff('https://res.cloudinary.com/diywkaahn/image/upload/v1673716648/RayStudios/The%20Team/Bill_Piano_rpudsd.jpg');
        } else if (staffNumber === 3) {
            setName('Carl Smith');
            setStaff('https://res.cloudinary.com/diywkaahn/image/upload/v1673716648/RayStudios/The%20Team/Carl_Smith_xx9kx1.jpg');
        } else if (staffNumber === 4) {
            setName('Malarie Cruz');
            setStaff('https://res.cloudinary.com/diywkaahn/image/upload/v1673716648/RayStudios/The%20Team/Malarie_Cruz_nplha5.jpg');
        } else if (staffNumber === 5) {
            setName('Tom Banks');
            setStaff('https://res.cloudinary.com/diywkaahn/image/upload/v1673716648/RayStudios/The%20Team/Tom_Banks_lb7bjd.jpg');
        } else {
            setName('Debbie Crocker');
            setStaff('https://res.cloudinary.com/diywkaahn/image/upload/v1673716648/RayStudios/The%20Team/Debbie_Crocker_nlg5yr.jpg');
        }
    }, [staffNumber])   
        
  return (
    <div className="card h-[15rem] w-[20rem]">
        <img className="profile-pic" src={staff} alt="" />
        <h1 className="text-white absolute bottom-[0.65rem] left-0 text-xl font-medium left-text opacity-30">{name}</h1>
        <h1 className="text-white absolute bottom-[3.25rem] left-6 text-sm font-medium left-text opacity-30">{role}</h1>
        <h1 className="text-white absolute bottom-1 left-7 text-lg font-medium">{name}</h1>
        <h1 className="text-white absolute bottom-7 left-7 text-sm font-medium">{role}</h1>
    </div>
  );
};

export default TeamCard;
