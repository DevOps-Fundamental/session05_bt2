function authenticateUser(username, password) {
    if (!username || !password) {
        return { success: false, message: "Missing credentials" };
    }
    if (username === "admin" && password === "ptit2026") {
        return { success: true, token: "jwt_token_sample_123456" };
    }
    return { success: false, message: "Invalid username or password" };
}

function validateToken(token) {
    return token === "jwt_token_sample_123456";
}

module.exports = {
    authenticateUser,
    validateToken
};
