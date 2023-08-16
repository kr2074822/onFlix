import { styled } from "styled-components";
import { CommonSpan, CommonInput } from "./CommonStyled";
import { useDispatch } from "react-redux";
import { userHandler } from "../../../store/store";
// import { useState } from "react";

const InputWrap = styled.div`
    &:not(:last-child) {
        margin-bottom: 20px;
    }
    display: flex;
    justify-content: left;
    align-items: flex-start;
    flex-direction: column;
`;


const infoData = { id: '', pw: '' };


function InputWrapper(props) {
    const dispatch = useDispatch();
    const infoVal = function (e) {
        if (props.type === 'text') {
            infoData.id = e.target.value;
        } else {
            infoData.pw = e.target.value;
        }
        
        dispatch(userHandler(infoData));
    }

    return (
        <InputWrap>
            <CommonSpan>{props.label}</CommonSpan>
            <CommonInput type={props.type} placeholder={props.placeholder} onChange={infoVal} />
        </InputWrap>
    )
}

export default InputWrapper;