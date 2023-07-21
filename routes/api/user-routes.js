const router = require('express').Router();
const { User, Thought } = require('../../models');


// This route is for getting all users and creating a user
router.route('/')
    .get(async (req, res) => {
        try {
            const users = await User.find({}).populate('thoughts').populate('friends');
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    })

    // This route is for creating a user
    .post(async (req, res) => {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    });

    // This route is for getting a single user, updating a user, and deleting a user
router.route('/:id')
    .get(async (req, res) => {
        try {
            const user = await User.findById(req.params.id).populate('thoughts').populate('friends');
            if (!user) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    })
    //This route is for updating a user
    .put(async (req, res) => {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!user) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    })
    // This route is for deleting a user
    .delete(async (req, res) => {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            if (!user) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    });
    //This route is for adding a friend
router.route('/:userId/friends/:friendId')
    .post(async (req, res) => {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $push: { friends: req.params.friendId } },
                { new: true }
            );
            if (!user) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    })

        //This route is for deleting a friend
    .delete(async (req, res) => {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { friends: req.params.friendId } },
                { new: true }
            );
            if (!user) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    });

module.exports = router;