import styled from "styled-components";
import React from "react";

export const Container = styled.div`
    width:100%;
    height:600px;
    background-color: grey;
    display:flex;
    flex-direction: row;
`

export const Image = styled.img`
    width: 50%;
    height: 600px;
    background-color: white;

`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 600px;
    background-color: grey;
    

`

export const Title = styled.h1`
    margin-top: 176px;
    margin-bottom: 35px;
    margin-left: 69px;
    margin-right: 60px;
    font-size: 40px;
    font-color: black;

`

export const Content = styled.p `
    margin-left: 69px;
    margin-right: 60px;
    font-size: 18px;
    font-color: black;
`