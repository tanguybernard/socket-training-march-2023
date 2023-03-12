import React from "react";
import {CardImage, CardTextBody, CardTextTitle, CardTextWrapper, CardWrapper} from "./CardStyles";
import {CardType} from "./CardType";

function CardContent(props: {title: string, description:string}) {
    return (
        <>
        <CardTextTitle>{props.title}</CardTextTitle>
        <CardTextBody>
            {props.description}
        </CardTextBody>
        </>
    );
}

export const Card = ({ title, description, imgUrl }: CardType) => {
    return (
        <>
        <CardWrapper>
            <CardImage background={imgUrl} />
            <CardTextWrapper>
                <CardContent
                    title={title}
                    description={description}
                />
            </CardTextWrapper>

        </CardWrapper>

        </>
    )
}

