import { Edit, SimpleForm, TextInput, required } from "react-admin"

export const CourseEdit = () => {
    return (
        <Edit>
            <SimpleForm>
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