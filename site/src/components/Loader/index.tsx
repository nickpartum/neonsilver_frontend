import React from 'react';
import * as S from "./Loader.styles"

interface LoaderProps {
}

const Loader:React.FC<LoaderProps> = ({}) => {
    return (
        <S.Wrapper>
            <S.Title>
                Loading
            </S.Title>
            {new Array(10).fill(1).map((e,i)=>{
                return(
                    <S.Plane key={i} className="plane">
                        <S.Triangle className="triangle"></S.Triangle>
                    </S.Plane>
                )
            })}
        </S.Wrapper>
    );
};



export default Loader;
