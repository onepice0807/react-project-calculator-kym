import { Button } from '@mui/material';
import { ButtonTypes } from '../components/Button';
import './CalculatorPage.css';
import { useState } from 'react';

const CalculatorPage = () => {
  const [result, setResult] = useState(0);

  return (
    <div className='container'>
      <div className='resultContainer'>
        <div className='text'>{result}</div>
      </div>
      <div className='buttonContainer'>
        <div className='leftPad'>
          <div className='number'>
            {/* 숫자 버튼 */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num, index) => (
              <Button
                key={index}
                title={num.toString()}
                onPress={() => {}}
                buttonStyle={{
                  width: 20,
                  height: 20,
                  marginTop: 1,
                }}
                buttonType={ButtonTypes.NUMBER}
              />
            ))}
          </div>
          <div className='bottom'>
            {/* 0, = */}
            <Button
              title='0'
              onPress={() => {}}
              buttonStyle={{
                width: 40,
                height: 20,
                marginBottom: 1,
              }}
              buttonType={ButtonTypes.NUMBER}
            />
            <Button
              title='='
              onPress={() => {}}
              buttonStyle={{
                width: 20,
                height: 20,
                marginTop: 1,
              }}
              buttonType={ButtonTypes.OPERATOR}
            />
          </div>
        </div>

        <div>
          {/* 연산자 버튼 */}
          <Button
            title='C'
            onPress={() => {}}
            buttonStyle={{
              width: 20,
              height: 20,
              marginTop: 1,
            }}
            buttonType={ButtonTypes.OPERATOR}
          />
          <Button
            title='-'
            onPress={() => {}}
            buttonStyle={{
              width: 20,
              height: 20,
              marginTop: 1,
            }}
            buttonType={ButtonTypes.OPERATOR}
          />
          <Button
            title='+'
            onPress={() => {}}
            buttonStyle={{
              width: 40,
              height: 20,
              marginTop: 1,
            }}
            buttonType={ButtonTypes.OPERATOR}
          />
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
