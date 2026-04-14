
import MultiActionAreaCard from './MaterialUIComponents/MultiActionAreaCard';

export default function UserCard({id,name, picture,RemoveThePersistedUser}:{id: string, name: string, picture: string, RemoveThePersistedUser: (id: string) => void}) {
  return (
   <div style={{width:"200px"}}>
     <MultiActionAreaCard id={id} name={name} picture={picture} RemoveThePersistedUser={RemoveThePersistedUser}/>
   </div>
  );
}