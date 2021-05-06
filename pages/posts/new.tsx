import React from 'react';
import {ErrorMessage, Formik, FormikErrors, FormikHelpers, Field} from "formik";
import postService from "../../services/postService";
import MainLayout from "../../layouts/mainLayout";
import {FormContainer,ErrorMessageStyled,TextArea,Input} from "../../styles/fromStyles";
import {Btn, LinkContainer} from "../../styles/mainStyles";
import Link from "next/link";

interface FormValues {
    title: string;
    body: string;
}

const CreatePost = () => {

    const {createPost} = postService()

    const initialValues: FormValues = {
        body: "",
        title: ""
    }

    const validate = (values: FormValues) => {
        const errors: FormikErrors<FormValues> = {}
        if (values.title.length < 1) {
            errors.title = "You should add title"
        }
        if (values.body.length < 1) {
            errors.body = "Yo should add text of post"
        }
        return errors
    }

    const subminFunction = (values: FormValues, actions: FormikHelpers<FormValues>): void => {
        const todo: FormValues = {
            body: values.body,
            title: values.title
        }
        createPost(todo).then(body => {
            console.log(body)
        })
        actions.resetForm()
    }
    return (
        <MainLayout show={false}>
            <Link href={"/"}>
                <LinkContainer>
                    {"<"} Back to all posts
                </LinkContainer>
            </Link>
            <div>
                <Formik
                    initialValues={initialValues}
                    validate={validate}
                    onSubmit={subminFunction}
                >
                    {props => (
                        <form onSubmit={props.handleSubmit} onReset={props.handleReset}>
                            <FormContainer>
                            <label htmlFor="title">Title</label>
                            <Field name="title"
                                   render={({field}: any) => (
                                       <Input {...field} type="text" placeholder="input title" id="title"/>
                                   )}
                            />
                            <ErrorMessage name="title" render={msg => <ErrorMessageStyled>{msg}</ErrorMessageStyled>}/>
                            <label htmlFor="body">Text</label>
                            <Field name="body"
                                   render={({field}: any) => (
                                       <TextArea {...field} placeholder="input text" id="body"/>
                                   )}
                            />
                            <ErrorMessage name="body" render={msg => <ErrorMessageStyled>{msg}</ErrorMessageStyled>}/>
                            <div>
                                <Btn color={"red"} type="submit">Submit</Btn>
                                <Btn color={"green"} type="reset">Reset</Btn>
                            </div>
                            </FormContainer>
                        </form>
                    )}
                </Formik>
            </div>
        </MainLayout>
    );
};


export default CreatePost;