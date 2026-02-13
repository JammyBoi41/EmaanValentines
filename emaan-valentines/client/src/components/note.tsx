import { valentineColors } from '../constants/colors';
import deleteGrievance from '../hooks/deleteGrievance';

interface NoteProp {
    text: string,
    id: string
};

const Note = ({text, id}: NoteProp) => {
    function getRandomValentineColor() {
        const values = Object.values(valentineColors);
        const index = Math.floor(Math.random() * values.length);
        return values[index];
    }
    
  return (
    <div style={{backgroundColor: getRandomValentineColor()}} className="relative flex justify-center items-center max-w-80 h-50 md:min-w-[5rem] md:min-h-[5rem] font-mono text-sm md:text-4xxl rounded">
        <div onClick={() => {

            deleteGrievance(id).then(res => {
                window.location.reload();
            }); 
            
            }} className="absolute top-0 right-0 w-8">
            <img className="hover:scale-110 transition-all ease-in-out" style={{width: '100%', height: '100%', cursor: "pointer"}} src={'trash.png'}/>
        </div>
        {text}
    </div>
  )
}

export default Note;