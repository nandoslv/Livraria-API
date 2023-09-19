import express from "express";

function getRole(username) {
    if (username == 'admin') {
        return 'admin'
    } else {
        return 'cliente'
    }
}

function authorize(...allowed) {

    const isAllowed = role => allowed.indexOf(role) > -1;

    return async (req, res, next) => {

        if (req.auth.user) {
            const role = getRole(req.auth.user);

            if (isAllowed(role)) {
                await next()
            } else {
                await res.status(401).send('Role not allowed');
            }
        } else {
            await res.status(403).send('User not found');
        }
    }
}

export default {
    getRole,
    authorize
}