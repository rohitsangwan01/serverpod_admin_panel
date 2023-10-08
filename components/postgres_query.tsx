
import React, { useState } from 'react';
import { ApiClient } from 'adminjs'
import { Button, TextArea, Text } from '@adminjs/design-system'

const api = new ApiClient()

const PostgresQuery: React.FC = () => {
    const [queryText, setQueryText] = useState("");
    const [queryResult, setQueryResult] = useState("");

    const handleSubmit = (event) => {
        setQueryResult("");
        event.preventDefault();

        if (queryText === "") return;

        api.getPage({
            pageName: 'aboutServerpod',
            params: {
                query: queryText,
            }
        }).then((response) => {
            var data = response.data;
            setQueryResult(JSON.stringify(data))
        }).catch((error) => {
            setQueryResult(error)
        });
        // setQueryText("");
    }
    return (
        <div style={{ padding: '1rem' }}>
            <form onSubmit={handleSubmit} >
                <TextArea
                    id="input"
                    name="input"
                    placeholder="Enter your query here..."
                    value={queryText}
                    style={{ width: '100%', height: '40vh' }}
                    onChange={(e) => setQueryText(e.target.value)}
                    rows={10}
                ></TextArea>
                <div style={{
                    marginTop: '1rem', display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Button bg="primary60">Run</Button>
                </div>
            </form >
            <Text mt="xl">{queryResult}</Text>
        </div>

    )
};


export default PostgresQuery;