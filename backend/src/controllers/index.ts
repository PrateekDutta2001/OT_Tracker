class IndexController {
    public async getHello(req, res) {
        res.status(200).json({ message: "Hello from the Index Controller!" });
    }

    // Add more methods for handling other API endpoints as needed
}

export default new IndexController();