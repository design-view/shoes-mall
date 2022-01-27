import React, { useEffect, useState } from "react";
import { useNavigate , useParams } from "react-router-dom";
import "./Detail.scss";
import styled from 'styled-components';
let Boxdiv = styled.div`
  padding : 20px;
`;
let TitleH4 = styled.h4`
  font-size : 25px;
  color : ${ props => props.색상 }
`;
function Detail2(props) {
    let { id } = useParams();
    let 찾은상품 = props.shoes.find(function(product){
      return product.id == id;
    });
    console.log(찾은상품);
    return (
        <div>
             <Boxdiv>
                <TitleH4 color="black" className="red">상세페이지 Detail</TitleH4>
            </Boxdiv>
            <div className="row">
                <div className="col-md-6">
                    <img src={ `https://codingapple1.github.io/shop/shoes${찾은상품.id+1}.jpg` } width="100%" alt="ddd" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{찾은상품.title}</h4>
                    <p>{찾은상품.content}</p>
                    <p>{찾은상품.price}원</p>
                </div>
            </div>
        </div>
    );
}

export default Detail2;