import jwt from 'jsonwebtoken'

const generateJWT = () =>{
    return jwt.sign({name: 'John'}, process.JWT_SECRET,{
        expiresIn: '30d',
    })
}

export default generateJWT;