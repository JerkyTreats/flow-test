import React from 'react'
import { AuthCluster } from './AuthCluster'
import { AuthClusterStyle } from "./AuthCluster.style"
import styled from 'styled-components'

export const Header = () => {
    return (
        <TopHeader>
            <h1 > Random Site Doing the Thign</h1>  
            <AuthBox>
                <AuthCluster /> 
            </AuthBox> 
        </TopHeader>
    )
}

const TopHeader = styled.div`
  display: flex;
  align-items: center;
  border-style: hidden hidden solid  ;
  border-color: grey;
`

const AuthBox = styled.div`
    position: fixed;
    top: 15px;
    right: 50px;
`