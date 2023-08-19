// BookAuthors
class BookAuthors{
    fetchBookAuthors(req, res) {
        const query = `
        SELECT id, authorName, authorSurname, bookID
        FROM BookAuthors
        JOIN books ON bookAuthors.bookID = book.id
        WHERE bookAuthors.bookID = ?;`
        db.query(query, (req, res) => {
            if (err) throw err
            res.json({
                status: res.statusCode,
                results
          })
        })
    }
    fetchBookAuthor(req, res) {
        const query = `
        SELECT id, authorName, authorSurname, bookID
        FROM bookAuthors
        JOIN books ON bookAuthors.bookID = book.id
        WHERE bookAutthors.bookID = ${req.params.id};`
        db.query(query, (req, result) => {
            if (err) throw err
            res.json({
                status: res.statusCode,
                result
            })
        })
    }
    // === UPDATE === \\
    updateBookAuthors(req, res) {
        const query = `
        UPDATE FROM BookAuthors
        SET ?
        WHERE id = ?;
        `
        db.query(query, [req.body, req.params.id], (err) => {
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg: "Author record was updated."
            })
        })
    }
    // == DELETE == \\
    deleterBookAuthor(req, res) {
        const query = `
        DELETE FROM BookAuthors
        WHERE id = ${req.params.id};`
        db.query(query, (err) => {
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg: "An author record was deleted."
            })
        })
    }
}
module.exports = BookAuthors