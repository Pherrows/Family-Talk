import React, { useState } from 'react';
import styled from 'styled-components';

const StyledListItem = styled.div`
  width: 100%;
  height: 90px;
  border: 2px solid #efefef;
  border-radius: 8px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #efefef;
  }

  & + & {
    margin-top: 20px;
  }
`;

const StyledMembership = styled.div`
  & .membership-content {
    font-size: 12px;
    margin-top: 6px;
  }
`;

const StyledPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & p {
    margin-left: 10px
  }

  & :first-child {
    color: #ccc;
    text-decoration: line-through;
    font-size: 14px
  }

  .free {
    color: #f5cc8d;
    font-size: 18px;
  }
`;

function PassListItem(props) {
  const { pass: { membershipName, membershipContent, price, discountPrice } } = props;
  const [selectPass, setSelectPass] = useState([]);

  // console.log(selectPass);
  const handleClickPass = () => {
    // setSelectPass(
    //   {membershipName, discountPrice}
    // );
    
    // console.log(membershipName, price);
  };

  return (
    <StyledListItem onClick={handleClickPass}>
      <StyledMembership>
        <p>{membershipName}</p>
        <p className='membership-content'>{membershipContent}</p>
      </StyledMembership>
      <StyledPrice>
        <p>&#92;{price}</p>
        <p className={discountPrice === "0" ? "free" : undefined}>{discountPrice === "0" ? '무료' : `${discountPrice} /월`}</p>
      </StyledPrice>
    </StyledListItem>
  );
}

export default PassListItem;