import { BooleanInput, Edit, NumberInput, ReferenceInput, SimpleForm, TextInput, required } from "react-admin"

export const ChallengeOptionEdit = () => {
    return (
        <Edit>
            <SimpleForm>
                <NumberInput
                    source="id"
                    label="Id"
                    validate={[required()]}
                />
                <TextInput
                    source="text"
                    label="Resposta"
                    validate={[required()]}
                />
                <BooleanInput
                    source="correct"
                    label="Resposta correta"
                />
                <ReferenceInput
                    source="challengeId"
                    reference="challenges"
                />
                <TextInput
                    source="imageSrc"
                    label="Caminho imagem"
                    validate={[required()]}
                />
                <TextInput
                    source="audioSrc"
                    label="Caminho áudio"
                    validate={[required()]}
                />
            </SimpleForm>
        </Edit>
    )
}