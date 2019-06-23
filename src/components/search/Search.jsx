import React from 'react';
import ContentInput from "../profile/ContentInput";
import './search.css'


class Search extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         'groups': []
    //     }
    // }
    // componentDidMount(){
    //     fetch('https://socialnetworktensor.herokuapp.com/get/groups')
    //         .then(response => response.json())
    //         .then(json =>{
    //             this.setState({
    //                 groups: json
    //             })
    //         })
    //         .catch((error) => {
    //             console.error(error)
    //         });
    // }
    render() {
        return (
            <div className="search">
                <h1>Поиск</h1>
                <div className="search__input">
                    <ContentInput placeholder="Кого будем искать?"/>
                </div>
            </div>
        );
    }
}

export default (Search);