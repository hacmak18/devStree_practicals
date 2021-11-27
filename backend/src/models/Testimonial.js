
class Testimonial {
    static insertTestimonialData(testimonial, result) {
        global.dbConn.query(`INSERT INTO testimonial SET ?`, testimonial, (err, res) => {
            if (err) {
                console.log('error while Inserting testimonial');
                console.log(err);
                result(null, err);
            } else {
                console.log(res);
                result(null, res);
            }
        });
    }
    static getAllTestimonial(_, result) {
        global.dbConn.query(`SELECT * FROM testimonial WHERE active=1`, _, (err, res) => {
            if (err) {
                console.log('error while fetching data');
                console.log(err);
                result(null, err);
            } else {
                console.log(res);
                result(null, res);
            }
        });
    }

    static deleteTestimonial(id, result) {
        global.dbConn.query(`UPDATE testimonial set active=0 WHERE testimonialId = ?`, id, (err, res) => {
            if (err) {
                console.log('error while Delete testimonial');
                console.log(err);
                result(null, err);
            } else {
                console.log(res);
                result(null, res);
            }
        });
    }

    static updateTestimonialData(testimonial, result) {
        let id = testimonial.id;
        delete testimonial.id;
        global.dbConn.query(`UPDATE testimonial set ? WHERE testimonialId = ?`, [testimonial, id], (err, res) => {
            if (err) {
                console.log('error while Updating testimonials');
                console.log(err);
                result(null, err);
            } else {
                console.log(res);
                result(null, res);
            }
        });
    }
}


module.exports = Testimonial;
