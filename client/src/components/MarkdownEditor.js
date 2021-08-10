import React from "react";
import ReactDOM from "react-dom";

import MDEditor from '@uiw/react-md-editor';
import FlexDiv from "../design-system/FlexDiv";
import Button from "../design-system/Button";
import { Input } from "../design-system/Input";
import { formatError } from "graphql";
import makeApiRequest from "../services/makeApiRequest";

export default function MarkdownEditor({ handleSave, auth }) {
    const [markdownString, setMarkdownString] = React.useState("**Hello world!!!**");
    const [metaForm, setMetaForm] = React.useState({
        title: null,
        description: null,
        date: null,
        author: null,
        category: null
    })

    const handleMetaChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setMetaForm({ ...metaForm, [name]: value });
        const body = { metaForm, value }


    }
    return (
        <div className="container">


            <h3>Title</h3>

            <Input onChange={handleMetaChange} name="title" altTheme label="Title" />
            <h3>Meta</h3>
            <FlexDiv vert>
                <Input onChange={handleMetaChange} name="description" altTheme label="Description" />
                <Input onChange={handleMetaChange} name="date" altTheme label="Date" />
                <Input onChange={handleMetaChange} name="author" altTheme label="Author" />
                <Input onChange={handleMetaChange} name="category" altTheme label="Category" />
            </FlexDiv>

            <FlexDiv align="center">
                <FlexDiv>      <h3>Markdown content</h3></FlexDiv>
                <FlexDiv justify="flex-end">Unsaved changes</FlexDiv>
                <FlexDiv justify="flex-end"><Button label="Save" onClick={() => {
                    handleSave(metaForm, markdownString)
                }} /></FlexDiv>
            </FlexDiv>

            <MDEditor
                value={markdownString}
                onChange={setMarkdownString}
                style={{ maxWidth: 1600 }}
            />
            <MDEditor.Markdown source={markdownString} />
        </div>
    );
}