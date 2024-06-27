import { Create, SimpleForm, TextInput, required } from "react-admin"

export const CourseCreate = () => {
    return (
        <Create>
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
        </Create>
    )
}