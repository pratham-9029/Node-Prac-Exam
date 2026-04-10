import User from "../models/user.model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const userController = {
    async dashboard(req, res) {
        const data = await User.find({});
        return res.render('index',{data});
    },
    loginPage(req, res) {
        return res.render('pages/login');
    },
    async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email });
            if (user) {
                let isValid = await bcrypt.compare(password, user.password);
                if (isValid) {
                    const payload = {
                        id: user.id,
                        name: user.name,
                        role: user.role
                    }
                    const token = jwt.sign(payload, 'secret', { expiresIn: '1h' });
                    res.cookie('token', token);
                    return res.redirect('/dashboard');
                }
            }
        } catch (error) {
            console.log(error.message);
            return res.redirect(req.get('Referrer') || '/');
        }
    },
    registerPage(req, res) {
        return res.render('pages/register')
    },
    async register(req, res) {
        try {
            let salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
            await User.create(req.body);
            console.log("User Created");
            return res.redirect('/login');
        } catch (error) {
            console.log(error.message);
        }
    }
}

export default userController;