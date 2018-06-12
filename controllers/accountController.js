const router = require('express').Router();

const bodyValidator = require('./../middlewares/bodyValidator');
const transactionService = require('./../services/transactionService');
const accountRepo = require('./../repository/accountRepository');

// validation schema
const updateCASchema = require('./../validators/updateCASchema');
const contributionTrxSchema = require('./../validators/contributionTrxSchema');

router.post('/updateCA', bodyValidator(updateCASchema), async (req, res, next) => {
    const { id: userId } = req.user;
    const ca = req.body.ca;
    try {
        // await transactionService.fundTestAccount(ca);
        await accountRepo.updateCA(userId, ca);
    } catch (error) {
        next(error);
        return;
    }
    res.sendStatus(204);
});

router.post('/contribute', /*bodyValidator(contributionTrxSchema),*/ async (req, res, next) => {
    const { id: userId } = req.user;
    // const { XDR1, XDR2, XDR3 } = req.body;
    const { XDR1 } = req.body;
    try {
        await transactionService.contribute(XDR1);
        // var { signedXDR2, signedXDR3 } = await transactionService.contribute(XDR1, XDR2, XDR3);
        // await accountRepo.storeContributionTrx(userId, signedXDR2, signedXDR3);
    } catch (error) {
        next(error);
        return;
    }
    res.sendStatus(204);
    // res.send({
    //     contribution: {
    //         signedXDR2,
    //         signedXDR3,
    //     }
    // });
});

router.get('/profile', async (req, res, next) => {
    const { id: userId } = req.user;
    try {
        var userDetails = await accountRepo.getUserProfile(userId);
    } catch (error) {
        next(error);
        return;
    }
    res.send({ user: userDetails })
});

module.exports = router;