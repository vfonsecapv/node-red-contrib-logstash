module.exports = function(RED) {

    function LogstashOutputCirconusNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        this.on('input', function(msg) {
        });

        this.on("close", function() {
        });
    }
    RED.nodes.registerType("ls-out-circonus", LogstashOutputCirconusNode);
};
