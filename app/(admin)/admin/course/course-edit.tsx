import { Edit, NumberInput, SimpleForm, TextInput, required } from "react-admin"

export const CourseEdit = () => {
    return (
        <Edit>
            <SimpleForm>
                <NumberInput
                    source="id"
                    label="Id"
                    validate={[required()]}
                />
                <TextInput
                    source="title"
                    label="Título"
                    validate={[required()]}
                />
                <TextInput
                    source="imageSrc"
                    label="Imagem"
                    validate={[required()]}
                />
            </SimpleForm>
        </Edit>
    )
}