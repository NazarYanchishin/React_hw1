import React from "react";
import "./style.css"

function Post(props) {
    return (
        <div className={'post'}>
            <div className={'userBar'}>
                <img className={'userImg'} src={props.author.photo} alt=""/>
                <div className={'userText'}>
                    <span className={'userName'}>{props.author.name}</span>
                    <span className={'nickname'}>@dark_vader</span>
                    <span className={'date'}>{props.date}</span>
                    <p>{props.content}</p>
                </div>
            </div>
            <div className={'imgCont'}>
                <img className={'contentImg'} src={props.image} alt=""/>

                <div className={"likeBar"}>
                    <span className={'like'}>228</span>
                    <span className={'comments'}>322</span>
                    <span className={'share'}>69</span>
                    <span className={'save'}></span>
                </div>
            </div>
        </div>
    );
}

export default Post