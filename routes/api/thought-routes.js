const router = require('express').Router();
const { Thought, User } = require('../../models');


// This route is for getting all thoughts and creating a thought
router.route('/')
    .get(async (req, res) => {
        try {
            const thoughts = await Thought.find({});
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    })
    // This route is for creating a thought
    .post(async (req, res) => {
        try {
            const thought = await Thought.create(req.body);
            await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $push: { thoughts: thought._id } },
                { new: true }
            );
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    });

router.route('/:id')
    // This route is for getting a single thought, updating a thought, and deleting a thought
    .get(async (req, res) => {
        try {
            const thought = await Thought.findById(req.params.id);
            if (!thought) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    })
    // This route is for updating a thought
    .put(async (req, res) => {
        try {
            const thought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!thought) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    })
    // This route is for deleting a thought
    .delete(async (req, res) => {
        try {
            const thought = await Thought.findByIdAndDelete(req.params.id);
            if (!thought) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    });

router.route('/:thoughtId/reactions')
    // This route is for creating a reaction
    .post(async (req, res) => {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $push: { reactions: req.body } },
                { new: true }
            );
            if (!thought) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    })
    // This route is for deleting a reaction
    .delete(async (req, res) => {
        try {
            // This deletes the reaction from the thought
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { reactionId: req.body.reactionId } } },
                { new: true }
            );
            if (!thought) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    });

module.exports = router;