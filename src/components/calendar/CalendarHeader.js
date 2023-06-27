import React from 'react';
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs';
import { format } from 'date-fns';
import styled, {} from 'styled-components';
import { isSameMonth, isSameDay, addDays, parse } from 'date-fns';


const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gray;
`;

const StyledDiv = styled.div`
  .heder-start{
    
  }
  .heder-end{

  }

  svg {
    margin-left: 5px;
    margin-right: 5px;
  }
`;

const StyledSpan = styled.span`
  .month {
    font-size: 20px;
    margin-left: 10px;
    margin-right: 7px ;
    font-weight: bold;
  }
  .year {
    font-size: 14px;
    font-weight: 400;
  }
`;



function CalendarHeader({ currentMonth, prevMonth, nextMonth }) {
  return (
    <Header className='heder'>
      <StyledDiv className='heder-start'>
        <StyledSpan className='year'>
          <StyledSpan className='month'>
            {format(currentMonth, 'M')}월
          </StyledSpan>
          {format(currentMonth, 'yyyy')}
        </StyledSpan>
      </StyledDiv>

      <StyledDiv className='heder-end'>
        <BsFillArrowLeftCircleFill className='left' size={18} color='grey' onClick={prevMonth}/>
        <BsFillArrowRightCircleFill className='right' size={18} color='grey' onClick={nextMonth }/>
      </StyledDiv>
    </Header>
  );
}

export default CalendarHeader;