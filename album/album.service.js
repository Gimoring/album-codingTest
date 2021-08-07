//* READ 앨범 전체 데이터 조회
module.exports = {
    readAllAlbum : async (req, res) => {
        try {
            res.send('Hello World');
        } catch (err) {
            res.status(400).send({
                success: false,
                error: err.message,
            });
        }
    },
    readAlbum : async (req, res) => {
        try {
            console.log(req.params);
            res.send(`Album id: ${req.params}`);
        } catch (err) {
            res.status(400).send({
                success: false,
                error: err.message
            })
        }
    }
}
