import { ButtonIcon } from "@components/ButtonIcon";
import { Container, Icon, Name } from "./styles";

type Props = {
    name: string
    remove: () => void
}

export function PlayerCard({ name, remove }: Props) {
    return (
        <Container>
            <Icon
                name="person"
            />

            <Name>
                {name}
            </Name>

            <ButtonIcon
                icon="close"
                type="SECONDARY"
                onPress={remove}
            />
        </Container>
    )
}