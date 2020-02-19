//Composant qui va afficher des utilisateurs
// [{name:"Jean", lastName:"Smith",age:20, address:"rue general leclerc"}]
// la liste , ligne : Jean Smith, 20 ans, domicile : rue general leclerc


//2eme version
// passer en paramètres du composant le tableau des utilisateurs (props)


//3eme version
// Rajouter un input pour chaque ligne d'utilisateur
// Rajouter un button Update pour chaque ligne d'utilisateur 
// Quand je clique sur le button Update ça me change le prénom de l'utilisateur sur la ligne avec la valeur de l'input
import React, {useState} from 'react';
//key
function ShowUsers(props) {
	const [users, setUsers] = useState(props.users);

	function updateFirstName(event,index) {
		let usersUpdated = users;
		usersUpdateds[index].name = event.target.value;
		setUsers([...usersUpdates]);
	}

    return (<div>
        <ul>
            {users.map((user, index) => {
                return (<li key={index}>
                    {user.name} {user.lastName},{user.age} {user.age < 2 ? "an" : "ans"},domicile: {user.address}
                </li>
                <input type="text" onChange={(event) => {updatefirstname(event,index) }}/>);
            })}
        </ul>
    </div>);
}

// class ShowUsers extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             users : props.users
//         }
//     }

//     componentDidMount(){
//         setInterval(tick,1000);
//     }

//     componentDidUpdate(){
//         setInterval(tick,1000);
//     }

//     componentWillUnmount(){

//     }

//     render(){
//         return <div className="maClasseCss">        <ul>
//         {this.state.users.map((user) => {
//             return (<li>
//                 {user.name} {user.lastName},{user.age} {user.age < 2 ? "an" : "ans"},domicile: {user.address}
//             </li>);
//         })}
//     </ul></div>;
//     }
// }

export default ShowUsers;