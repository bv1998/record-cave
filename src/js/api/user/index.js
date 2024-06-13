import caller from "../caller";
const accessToken = localStorage.getItem("accessToken");

const authorizeUser = async () => {
    return caller.get("me", {});
};

export default authorizeUser;
