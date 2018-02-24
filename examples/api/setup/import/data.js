import User from "./../../entities/User";
import { Permission } from "webiny-api-security";

export default [
    {
        entity: Permission,
        data: [
            {
                name: "perm1",
                slug: "perm1",
                rules: [
                    {
                        classId: "class1",
                        methods: [
                            {
                                method: "method1"
                            },
                            {
                                method: "method2"
                            }
                        ]
                    }
                ]
            },
            {
                name: "perm2",
                slug: "perm2",
                rules: [
                    {
                        classId: "class2",
                        methods: [
                            {
                                method: "method1"
                            },
                            {
                                method: "method3"
                            }
                        ]
                    }
                ]
            },
            {
                name: "perm3",
                slug: "perm3",
                rules: [
                    {
                        classId: "class3",
                        methods: [
                            {
                                method: "method4"
                            },
                            {
                                method: "method5"
                            }
                        ]
                    }
                ]
            },
            {
                name: "perm4",
                slug: "perm4",
                rules: [
                    {
                        classId: "class1",
                        methods: [
                            {
                                method: "method2"
                            }
                        ]
                    },
                    {
                        classId: "class3",
                        methods: [
                            {
                                method: "method2"
                            },
                            {
                                method: "method3"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        entity: User,
        data: [
            {
                email: "user1@webiny.com",
                password: "pass1"
            },
            {
                email: "user2@webiny.com",
                password: "pass2"
            }
        ]
    }
];