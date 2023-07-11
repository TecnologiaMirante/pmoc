import { Container, Frame139, Frame140, Frame61, NomeEstacao, Image } from "./styles";
import quadrado from '../../assets/quadrado.png';

type Props = {
    title: string;
    id?:number;
}

export function CardEstacao({id, title}:Props) {
    return(
        <Container>
            <Frame140>
                <Frame139>
                    <Image src={quadrado} alt="quadrado"/>
                    <Frame61>
                        <NomeEstacao>{title}</NomeEstacao>
                    </Frame61>
                </Frame139>
            </Frame140>
        </Container>
    );
}