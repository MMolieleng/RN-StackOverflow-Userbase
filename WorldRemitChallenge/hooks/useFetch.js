import React, { useState, useEffect } from 'react'

export default function useFetch() {
        const [users, setUsers] = useState([]);
        const [hasError, setHasError] = useState(false);
        const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
                function fetchUsers() {
                        fetch("https://api.stackexchange.com/2.2/users?pagesize=20&order=desc&sort=reputation&site=stackoverflow")
                                .then((response) => response.json())
                                .then((data) => {
                                        const { items } = data
                                        setUsers(items)
                                }).catch(() => {
                                        setHasError(true)
                                        setUsers([])
                                })
                                .finally(() => {
                                        setIsLoading(false)
                                })
                };

                fetchUsers()
        }, [])

        return { users, hasError, isLoading };
}
