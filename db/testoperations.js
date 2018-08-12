const testmodel = require('./schema/testschema');

const testOperations = {
    savedata(obj,res){
        var obj = new testmodel(obj);
        obj.save((err)=>{
            if(err){
                res.send(err);
            }
            else{
                res.send('Successfully saved');
            }
        })
    },

    showdata(res){
        testmodel.find({},(err,docs)=>{
            if(err){
                res.send('error');
            }
            else{
                if(docs&&docs.length>0){
                    res.json(docs);
                }
            }
        })
    },

    updateit(id,obj,res){
       testmodel.findByIdAndUpdate(id, { name: obj.name, rollno: obj.rollno},(err)=>{
            if(err){
                res.send("err");
            }
            else{
                res.send('updated');
            }
        }
    )},

    deleteit(id,res){
        testmodel.findByIdAndRemove(id,(err)=>{
            if(err){
                res.send('error');
            }
            else{
                res.send("deleted");
            }
        });
    }
}
 module.exports = testOperations;