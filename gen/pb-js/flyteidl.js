/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots.flyteidl || ($protobuf.roots.flyteidl = {});

export const flyteidl = $root.flyteidl = (() => {

    /**
     * Namespace flyteidl.
     * @exports flyteidl
     * @namespace
     */
    const flyteidl = {};

    flyteidl.core = (function() {

        /**
         * Namespace core.
         * @memberof flyteidl
         * @namespace
         */
        const core = {};

        core.ConnectionSet = (function() {

            /**
             * Properties of a ConnectionSet.
             * @memberof flyteidl.core
             * @interface IConnectionSet
             * @property {Object.<string,flyteidl.core.ConnectionSet.IIdList>|null} [downstream] ConnectionSet downstream
             * @property {Object.<string,flyteidl.core.ConnectionSet.IIdList>|null} [upstream] ConnectionSet upstream
             */

            /**
             * Constructs a new ConnectionSet.
             * @memberof flyteidl.core
             * @classdesc Represents a ConnectionSet.
             * @implements IConnectionSet
             * @constructor
             * @param {flyteidl.core.IConnectionSet=} [properties] Properties to set
             */
            function ConnectionSet(properties) {
                this.downstream = {};
                this.upstream = {};
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ConnectionSet downstream.
             * @member {Object.<string,flyteidl.core.ConnectionSet.IIdList>} downstream
             * @memberof flyteidl.core.ConnectionSet
             * @instance
             */
            ConnectionSet.prototype.downstream = $util.emptyObject;

            /**
             * ConnectionSet upstream.
             * @member {Object.<string,flyteidl.core.ConnectionSet.IIdList>} upstream
             * @memberof flyteidl.core.ConnectionSet
             * @instance
             */
            ConnectionSet.prototype.upstream = $util.emptyObject;

            /**
             * Creates a new ConnectionSet instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.ConnectionSet
             * @static
             * @param {flyteidl.core.IConnectionSet=} [properties] Properties to set
             * @returns {flyteidl.core.ConnectionSet} ConnectionSet instance
             */
            ConnectionSet.create = function create(properties) {
                return new ConnectionSet(properties);
            };

            /**
             * Encodes the specified ConnectionSet message. Does not implicitly {@link flyteidl.core.ConnectionSet.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.ConnectionSet
             * @static
             * @param {flyteidl.core.IConnectionSet} message ConnectionSet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConnectionSet.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.downstream != null && message.hasOwnProperty("downstream"))
                    for (let keys = Object.keys(message.downstream), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 7, wireType 2 =*/58).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                        $root.flyteidl.core.ConnectionSet.IdList.encode(message.downstream[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                if (message.upstream != null && message.hasOwnProperty("upstream"))
                    for (let keys = Object.keys(message.upstream), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 8, wireType 2 =*/66).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                        $root.flyteidl.core.ConnectionSet.IdList.encode(message.upstream[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                return writer;
            };

            /**
             * Decodes a ConnectionSet message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.ConnectionSet
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.ConnectionSet} ConnectionSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConnectionSet.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.ConnectionSet(), key;
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 7:
                        reader.skip().pos++;
                        if (message.downstream === $util.emptyObject)
                            message.downstream = {};
                        key = reader.string();
                        reader.pos++;
                        message.downstream[key] = $root.flyteidl.core.ConnectionSet.IdList.decode(reader, reader.uint32());
                        break;
                    case 8:
                        reader.skip().pos++;
                        if (message.upstream === $util.emptyObject)
                            message.upstream = {};
                        key = reader.string();
                        reader.pos++;
                        message.upstream[key] = $root.flyteidl.core.ConnectionSet.IdList.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a ConnectionSet message.
             * @function verify
             * @memberof flyteidl.core.ConnectionSet
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ConnectionSet.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.downstream != null && message.hasOwnProperty("downstream")) {
                    if (!$util.isObject(message.downstream))
                        return "downstream: object expected";
                    let key = Object.keys(message.downstream);
                    for (let i = 0; i < key.length; ++i) {
                        let error = $root.flyteidl.core.ConnectionSet.IdList.verify(message.downstream[key[i]]);
                        if (error)
                            return "downstream." + error;
                    }
                }
                if (message.upstream != null && message.hasOwnProperty("upstream")) {
                    if (!$util.isObject(message.upstream))
                        return "upstream: object expected";
                    let key = Object.keys(message.upstream);
                    for (let i = 0; i < key.length; ++i) {
                        let error = $root.flyteidl.core.ConnectionSet.IdList.verify(message.upstream[key[i]]);
                        if (error)
                            return "upstream." + error;
                    }
                }
                return null;
            };

            ConnectionSet.IdList = (function() {

                /**
                 * Properties of an IdList.
                 * @memberof flyteidl.core.ConnectionSet
                 * @interface IIdList
                 * @property {Array.<string>|null} [ids] IdList ids
                 */

                /**
                 * Constructs a new IdList.
                 * @memberof flyteidl.core.ConnectionSet
                 * @classdesc Represents an IdList.
                 * @implements IIdList
                 * @constructor
                 * @param {flyteidl.core.ConnectionSet.IIdList=} [properties] Properties to set
                 */
                function IdList(properties) {
                    this.ids = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * IdList ids.
                 * @member {Array.<string>} ids
                 * @memberof flyteidl.core.ConnectionSet.IdList
                 * @instance
                 */
                IdList.prototype.ids = $util.emptyArray;

                /**
                 * Creates a new IdList instance using the specified properties.
                 * @function create
                 * @memberof flyteidl.core.ConnectionSet.IdList
                 * @static
                 * @param {flyteidl.core.ConnectionSet.IIdList=} [properties] Properties to set
                 * @returns {flyteidl.core.ConnectionSet.IdList} IdList instance
                 */
                IdList.create = function create(properties) {
                    return new IdList(properties);
                };

                /**
                 * Encodes the specified IdList message. Does not implicitly {@link flyteidl.core.ConnectionSet.IdList.verify|verify} messages.
                 * @function encode
                 * @memberof flyteidl.core.ConnectionSet.IdList
                 * @static
                 * @param {flyteidl.core.ConnectionSet.IIdList} message IdList message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                IdList.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.ids != null && message.ids.length)
                        for (let i = 0; i < message.ids.length; ++i)
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.ids[i]);
                    return writer;
                };

                /**
                 * Decodes an IdList message from the specified reader or buffer.
                 * @function decode
                 * @memberof flyteidl.core.ConnectionSet.IdList
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {flyteidl.core.ConnectionSet.IdList} IdList
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                IdList.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.ConnectionSet.IdList();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.ids && message.ids.length))
                                message.ids = [];
                            message.ids.push(reader.string());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Verifies an IdList message.
                 * @function verify
                 * @memberof flyteidl.core.ConnectionSet.IdList
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                IdList.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.ids != null && message.hasOwnProperty("ids")) {
                        if (!Array.isArray(message.ids))
                            return "ids: array expected";
                        for (let i = 0; i < message.ids.length; ++i)
                            if (!$util.isString(message.ids[i]))
                                return "ids: string[] expected";
                    }
                    return null;
                };

                return IdList;
            })();

            return ConnectionSet;
        })();

        core.CompiledWorkflow = (function() {

            /**
             * Properties of a CompiledWorkflow.
             * @memberof flyteidl.core
             * @interface ICompiledWorkflow
             * @property {flyteidl.core.IWorkflowTemplate|null} [template] CompiledWorkflow template
             * @property {flyteidl.core.IConnectionSet|null} [connections] CompiledWorkflow connections
             */

            /**
             * Constructs a new CompiledWorkflow.
             * @memberof flyteidl.core
             * @classdesc Represents a CompiledWorkflow.
             * @implements ICompiledWorkflow
             * @constructor
             * @param {flyteidl.core.ICompiledWorkflow=} [properties] Properties to set
             */
            function CompiledWorkflow(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CompiledWorkflow template.
             * @member {flyteidl.core.IWorkflowTemplate|null|undefined} template
             * @memberof flyteidl.core.CompiledWorkflow
             * @instance
             */
            CompiledWorkflow.prototype.template = null;

            /**
             * CompiledWorkflow connections.
             * @member {flyteidl.core.IConnectionSet|null|undefined} connections
             * @memberof flyteidl.core.CompiledWorkflow
             * @instance
             */
            CompiledWorkflow.prototype.connections = null;

            /**
             * Creates a new CompiledWorkflow instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.CompiledWorkflow
             * @static
             * @param {flyteidl.core.ICompiledWorkflow=} [properties] Properties to set
             * @returns {flyteidl.core.CompiledWorkflow} CompiledWorkflow instance
             */
            CompiledWorkflow.create = function create(properties) {
                return new CompiledWorkflow(properties);
            };

            /**
             * Encodes the specified CompiledWorkflow message. Does not implicitly {@link flyteidl.core.CompiledWorkflow.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.CompiledWorkflow
             * @static
             * @param {flyteidl.core.ICompiledWorkflow} message CompiledWorkflow message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CompiledWorkflow.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.template != null && message.hasOwnProperty("template"))
                    $root.flyteidl.core.WorkflowTemplate.encode(message.template, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.connections != null && message.hasOwnProperty("connections"))
                    $root.flyteidl.core.ConnectionSet.encode(message.connections, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a CompiledWorkflow message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.CompiledWorkflow
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.CompiledWorkflow} CompiledWorkflow
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CompiledWorkflow.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.CompiledWorkflow();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.template = $root.flyteidl.core.WorkflowTemplate.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.connections = $root.flyteidl.core.ConnectionSet.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a CompiledWorkflow message.
             * @function verify
             * @memberof flyteidl.core.CompiledWorkflow
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CompiledWorkflow.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.template != null && message.hasOwnProperty("template")) {
                    let error = $root.flyteidl.core.WorkflowTemplate.verify(message.template);
                    if (error)
                        return "template." + error;
                }
                if (message.connections != null && message.hasOwnProperty("connections")) {
                    let error = $root.flyteidl.core.ConnectionSet.verify(message.connections);
                    if (error)
                        return "connections." + error;
                }
                return null;
            };

            return CompiledWorkflow;
        })();

        core.CompiledTask = (function() {

            /**
             * Properties of a CompiledTask.
             * @memberof flyteidl.core
             * @interface ICompiledTask
             * @property {flyteidl.core.ITaskTemplate|null} [template] CompiledTask template
             */

            /**
             * Constructs a new CompiledTask.
             * @memberof flyteidl.core
             * @classdesc Represents a CompiledTask.
             * @implements ICompiledTask
             * @constructor
             * @param {flyteidl.core.ICompiledTask=} [properties] Properties to set
             */
            function CompiledTask(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CompiledTask template.
             * @member {flyteidl.core.ITaskTemplate|null|undefined} template
             * @memberof flyteidl.core.CompiledTask
             * @instance
             */
            CompiledTask.prototype.template = null;

            /**
             * Creates a new CompiledTask instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.CompiledTask
             * @static
             * @param {flyteidl.core.ICompiledTask=} [properties] Properties to set
             * @returns {flyteidl.core.CompiledTask} CompiledTask instance
             */
            CompiledTask.create = function create(properties) {
                return new CompiledTask(properties);
            };

            /**
             * Encodes the specified CompiledTask message. Does not implicitly {@link flyteidl.core.CompiledTask.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.CompiledTask
             * @static
             * @param {flyteidl.core.ICompiledTask} message CompiledTask message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CompiledTask.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.template != null && message.hasOwnProperty("template"))
                    $root.flyteidl.core.TaskTemplate.encode(message.template, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a CompiledTask message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.CompiledTask
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.CompiledTask} CompiledTask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CompiledTask.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.CompiledTask();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.template = $root.flyteidl.core.TaskTemplate.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a CompiledTask message.
             * @function verify
             * @memberof flyteidl.core.CompiledTask
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CompiledTask.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.template != null && message.hasOwnProperty("template")) {
                    let error = $root.flyteidl.core.TaskTemplate.verify(message.template);
                    if (error)
                        return "template." + error;
                }
                return null;
            };

            return CompiledTask;
        })();

        core.CompiledWorkflowClosure = (function() {

            /**
             * Properties of a CompiledWorkflowClosure.
             * @memberof flyteidl.core
             * @interface ICompiledWorkflowClosure
             * @property {flyteidl.core.ICompiledWorkflow|null} [primary] CompiledWorkflowClosure primary
             * @property {Array.<flyteidl.core.ICompiledWorkflow>|null} [subWorkflows] CompiledWorkflowClosure subWorkflows
             * @property {Array.<flyteidl.core.ICompiledTask>|null} [tasks] CompiledWorkflowClosure tasks
             */

            /**
             * Constructs a new CompiledWorkflowClosure.
             * @memberof flyteidl.core
             * @classdesc Represents a CompiledWorkflowClosure.
             * @implements ICompiledWorkflowClosure
             * @constructor
             * @param {flyteidl.core.ICompiledWorkflowClosure=} [properties] Properties to set
             */
            function CompiledWorkflowClosure(properties) {
                this.subWorkflows = [];
                this.tasks = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CompiledWorkflowClosure primary.
             * @member {flyteidl.core.ICompiledWorkflow|null|undefined} primary
             * @memberof flyteidl.core.CompiledWorkflowClosure
             * @instance
             */
            CompiledWorkflowClosure.prototype.primary = null;

            /**
             * CompiledWorkflowClosure subWorkflows.
             * @member {Array.<flyteidl.core.ICompiledWorkflow>} subWorkflows
             * @memberof flyteidl.core.CompiledWorkflowClosure
             * @instance
             */
            CompiledWorkflowClosure.prototype.subWorkflows = $util.emptyArray;

            /**
             * CompiledWorkflowClosure tasks.
             * @member {Array.<flyteidl.core.ICompiledTask>} tasks
             * @memberof flyteidl.core.CompiledWorkflowClosure
             * @instance
             */
            CompiledWorkflowClosure.prototype.tasks = $util.emptyArray;

            /**
             * Creates a new CompiledWorkflowClosure instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.CompiledWorkflowClosure
             * @static
             * @param {flyteidl.core.ICompiledWorkflowClosure=} [properties] Properties to set
             * @returns {flyteidl.core.CompiledWorkflowClosure} CompiledWorkflowClosure instance
             */
            CompiledWorkflowClosure.create = function create(properties) {
                return new CompiledWorkflowClosure(properties);
            };

            /**
             * Encodes the specified CompiledWorkflowClosure message. Does not implicitly {@link flyteidl.core.CompiledWorkflowClosure.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.CompiledWorkflowClosure
             * @static
             * @param {flyteidl.core.ICompiledWorkflowClosure} message CompiledWorkflowClosure message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CompiledWorkflowClosure.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.primary != null && message.hasOwnProperty("primary"))
                    $root.flyteidl.core.CompiledWorkflow.encode(message.primary, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.subWorkflows != null && message.subWorkflows.length)
                    for (let i = 0; i < message.subWorkflows.length; ++i)
                        $root.flyteidl.core.CompiledWorkflow.encode(message.subWorkflows[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.tasks != null && message.tasks.length)
                    for (let i = 0; i < message.tasks.length; ++i)
                        $root.flyteidl.core.CompiledTask.encode(message.tasks[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a CompiledWorkflowClosure message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.CompiledWorkflowClosure
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.CompiledWorkflowClosure} CompiledWorkflowClosure
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CompiledWorkflowClosure.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.CompiledWorkflowClosure();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.primary = $root.flyteidl.core.CompiledWorkflow.decode(reader, reader.uint32());
                        break;
                    case 2:
                        if (!(message.subWorkflows && message.subWorkflows.length))
                            message.subWorkflows = [];
                        message.subWorkflows.push($root.flyteidl.core.CompiledWorkflow.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        if (!(message.tasks && message.tasks.length))
                            message.tasks = [];
                        message.tasks.push($root.flyteidl.core.CompiledTask.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a CompiledWorkflowClosure message.
             * @function verify
             * @memberof flyteidl.core.CompiledWorkflowClosure
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CompiledWorkflowClosure.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.primary != null && message.hasOwnProperty("primary")) {
                    let error = $root.flyteidl.core.CompiledWorkflow.verify(message.primary);
                    if (error)
                        return "primary." + error;
                }
                if (message.subWorkflows != null && message.hasOwnProperty("subWorkflows")) {
                    if (!Array.isArray(message.subWorkflows))
                        return "subWorkflows: array expected";
                    for (let i = 0; i < message.subWorkflows.length; ++i) {
                        let error = $root.flyteidl.core.CompiledWorkflow.verify(message.subWorkflows[i]);
                        if (error)
                            return "subWorkflows." + error;
                    }
                }
                if (message.tasks != null && message.hasOwnProperty("tasks")) {
                    if (!Array.isArray(message.tasks))
                        return "tasks: array expected";
                    for (let i = 0; i < message.tasks.length; ++i) {
                        let error = $root.flyteidl.core.CompiledTask.verify(message.tasks[i]);
                        if (error)
                            return "tasks." + error;
                    }
                }
                return null;
            };

            return CompiledWorkflowClosure;
        })();

        core.IfBlock = (function() {

            /**
             * Properties of an IfBlock.
             * @memberof flyteidl.core
             * @interface IIfBlock
             * @property {flyteidl.core.IBooleanExpression|null} [condition] IfBlock condition
             * @property {flyteidl.core.INode|null} [thenNode] IfBlock thenNode
             */

            /**
             * Constructs a new IfBlock.
             * @memberof flyteidl.core
             * @classdesc Represents an IfBlock.
             * @implements IIfBlock
             * @constructor
             * @param {flyteidl.core.IIfBlock=} [properties] Properties to set
             */
            function IfBlock(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * IfBlock condition.
             * @member {flyteidl.core.IBooleanExpression|null|undefined} condition
             * @memberof flyteidl.core.IfBlock
             * @instance
             */
            IfBlock.prototype.condition = null;

            /**
             * IfBlock thenNode.
             * @member {flyteidl.core.INode|null|undefined} thenNode
             * @memberof flyteidl.core.IfBlock
             * @instance
             */
            IfBlock.prototype.thenNode = null;

            /**
             * Creates a new IfBlock instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.IfBlock
             * @static
             * @param {flyteidl.core.IIfBlock=} [properties] Properties to set
             * @returns {flyteidl.core.IfBlock} IfBlock instance
             */
            IfBlock.create = function create(properties) {
                return new IfBlock(properties);
            };

            /**
             * Encodes the specified IfBlock message. Does not implicitly {@link flyteidl.core.IfBlock.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.IfBlock
             * @static
             * @param {flyteidl.core.IIfBlock} message IfBlock message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IfBlock.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.condition != null && message.hasOwnProperty("condition"))
                    $root.flyteidl.core.BooleanExpression.encode(message.condition, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.thenNode != null && message.hasOwnProperty("thenNode"))
                    $root.flyteidl.core.Node.encode(message.thenNode, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes an IfBlock message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.IfBlock
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.IfBlock} IfBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IfBlock.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.IfBlock();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.condition = $root.flyteidl.core.BooleanExpression.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.thenNode = $root.flyteidl.core.Node.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies an IfBlock message.
             * @function verify
             * @memberof flyteidl.core.IfBlock
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            IfBlock.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.condition != null && message.hasOwnProperty("condition")) {
                    let error = $root.flyteidl.core.BooleanExpression.verify(message.condition);
                    if (error)
                        return "condition." + error;
                }
                if (message.thenNode != null && message.hasOwnProperty("thenNode")) {
                    let error = $root.flyteidl.core.Node.verify(message.thenNode);
                    if (error)
                        return "thenNode." + error;
                }
                return null;
            };

            return IfBlock;
        })();

        core.IfElseBlock = (function() {

            /**
             * Properties of an IfElseBlock.
             * @memberof flyteidl.core
             * @interface IIfElseBlock
             * @property {flyteidl.core.IIfBlock|null} ["case"] IfElseBlock case
             * @property {Array.<flyteidl.core.IIfBlock>|null} [other] IfElseBlock other
             * @property {flyteidl.core.INode|null} [elseNode] IfElseBlock elseNode
             * @property {flyteidl.core.IError|null} [error] IfElseBlock error
             */

            /**
             * Constructs a new IfElseBlock.
             * @memberof flyteidl.core
             * @classdesc Represents an IfElseBlock.
             * @implements IIfElseBlock
             * @constructor
             * @param {flyteidl.core.IIfElseBlock=} [properties] Properties to set
             */
            function IfElseBlock(properties) {
                this.other = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * IfElseBlock case.
             * @member {flyteidl.core.IIfBlock|null|undefined} case
             * @memberof flyteidl.core.IfElseBlock
             * @instance
             */
            IfElseBlock.prototype["case"] = null;

            /**
             * IfElseBlock other.
             * @member {Array.<flyteidl.core.IIfBlock>} other
             * @memberof flyteidl.core.IfElseBlock
             * @instance
             */
            IfElseBlock.prototype.other = $util.emptyArray;

            /**
             * IfElseBlock elseNode.
             * @member {flyteidl.core.INode|null|undefined} elseNode
             * @memberof flyteidl.core.IfElseBlock
             * @instance
             */
            IfElseBlock.prototype.elseNode = null;

            /**
             * IfElseBlock error.
             * @member {flyteidl.core.IError|null|undefined} error
             * @memberof flyteidl.core.IfElseBlock
             * @instance
             */
            IfElseBlock.prototype.error = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * IfElseBlock default.
             * @member {"elseNode"|"error"|undefined} default_
             * @memberof flyteidl.core.IfElseBlock
             * @instance
             */
            Object.defineProperty(IfElseBlock.prototype, "default", {
                get: $util.oneOfGetter($oneOfFields = ["elseNode", "error"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new IfElseBlock instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.IfElseBlock
             * @static
             * @param {flyteidl.core.IIfElseBlock=} [properties] Properties to set
             * @returns {flyteidl.core.IfElseBlock} IfElseBlock instance
             */
            IfElseBlock.create = function create(properties) {
                return new IfElseBlock(properties);
            };

            /**
             * Encodes the specified IfElseBlock message. Does not implicitly {@link flyteidl.core.IfElseBlock.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.IfElseBlock
             * @static
             * @param {flyteidl.core.IIfElseBlock} message IfElseBlock message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IfElseBlock.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message["case"] != null && message.hasOwnProperty("case"))
                    $root.flyteidl.core.IfBlock.encode(message["case"], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.other != null && message.other.length)
                    for (let i = 0; i < message.other.length; ++i)
                        $root.flyteidl.core.IfBlock.encode(message.other[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.elseNode != null && message.hasOwnProperty("elseNode"))
                    $root.flyteidl.core.Node.encode(message.elseNode, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.error != null && message.hasOwnProperty("error"))
                    $root.flyteidl.core.Error.encode(message.error, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes an IfElseBlock message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.IfElseBlock
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.IfElseBlock} IfElseBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IfElseBlock.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.IfElseBlock();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message["case"] = $root.flyteidl.core.IfBlock.decode(reader, reader.uint32());
                        break;
                    case 2:
                        if (!(message.other && message.other.length))
                            message.other = [];
                        message.other.push($root.flyteidl.core.IfBlock.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        message.elseNode = $root.flyteidl.core.Node.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.error = $root.flyteidl.core.Error.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies an IfElseBlock message.
             * @function verify
             * @memberof flyteidl.core.IfElseBlock
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            IfElseBlock.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message["case"] != null && message.hasOwnProperty("case")) {
                    let error = $root.flyteidl.core.IfBlock.verify(message["case"]);
                    if (error)
                        return "case." + error;
                }
                if (message.other != null && message.hasOwnProperty("other")) {
                    if (!Array.isArray(message.other))
                        return "other: array expected";
                    for (let i = 0; i < message.other.length; ++i) {
                        let error = $root.flyteidl.core.IfBlock.verify(message.other[i]);
                        if (error)
                            return "other." + error;
                    }
                }
                if (message.elseNode != null && message.hasOwnProperty("elseNode")) {
                    properties["default"] = 1;
                    {
                        let error = $root.flyteidl.core.Node.verify(message.elseNode);
                        if (error)
                            return "elseNode." + error;
                    }
                }
                if (message.error != null && message.hasOwnProperty("error")) {
                    if (properties["default"] === 1)
                        return "default: multiple values";
                    properties["default"] = 1;
                    {
                        let error = $root.flyteidl.core.Error.verify(message.error);
                        if (error)
                            return "error." + error;
                    }
                }
                return null;
            };

            return IfElseBlock;
        })();

        core.BranchNode = (function() {

            /**
             * Properties of a BranchNode.
             * @memberof flyteidl.core
             * @interface IBranchNode
             * @property {flyteidl.core.IIfElseBlock|null} [ifElse] BranchNode ifElse
             */

            /**
             * Constructs a new BranchNode.
             * @memberof flyteidl.core
             * @classdesc Represents a BranchNode.
             * @implements IBranchNode
             * @constructor
             * @param {flyteidl.core.IBranchNode=} [properties] Properties to set
             */
            function BranchNode(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BranchNode ifElse.
             * @member {flyteidl.core.IIfElseBlock|null|undefined} ifElse
             * @memberof flyteidl.core.BranchNode
             * @instance
             */
            BranchNode.prototype.ifElse = null;

            /**
             * Creates a new BranchNode instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.BranchNode
             * @static
             * @param {flyteidl.core.IBranchNode=} [properties] Properties to set
             * @returns {flyteidl.core.BranchNode} BranchNode instance
             */
            BranchNode.create = function create(properties) {
                return new BranchNode(properties);
            };

            /**
             * Encodes the specified BranchNode message. Does not implicitly {@link flyteidl.core.BranchNode.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.BranchNode
             * @static
             * @param {flyteidl.core.IBranchNode} message BranchNode message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BranchNode.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ifElse != null && message.hasOwnProperty("ifElse"))
                    $root.flyteidl.core.IfElseBlock.encode(message.ifElse, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a BranchNode message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.BranchNode
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.BranchNode} BranchNode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BranchNode.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.BranchNode();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2:
                        message.ifElse = $root.flyteidl.core.IfElseBlock.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a BranchNode message.
             * @function verify
             * @memberof flyteidl.core.BranchNode
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BranchNode.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.ifElse != null && message.hasOwnProperty("ifElse")) {
                    let error = $root.flyteidl.core.IfElseBlock.verify(message.ifElse);
                    if (error)
                        return "ifElse." + error;
                }
                return null;
            };

            return BranchNode;
        })();

        core.TaskNode = (function() {

            /**
             * Properties of a TaskNode.
             * @memberof flyteidl.core
             * @interface ITaskNode
             * @property {string|null} [referenceId] TaskNode referenceId
             */

            /**
             * Constructs a new TaskNode.
             * @memberof flyteidl.core
             * @classdesc Represents a TaskNode.
             * @implements ITaskNode
             * @constructor
             * @param {flyteidl.core.ITaskNode=} [properties] Properties to set
             */
            function TaskNode(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TaskNode referenceId.
             * @member {string} referenceId
             * @memberof flyteidl.core.TaskNode
             * @instance
             */
            TaskNode.prototype.referenceId = "";

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * TaskNode reference.
             * @member {"referenceId"|undefined} reference
             * @memberof flyteidl.core.TaskNode
             * @instance
             */
            Object.defineProperty(TaskNode.prototype, "reference", {
                get: $util.oneOfGetter($oneOfFields = ["referenceId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new TaskNode instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.TaskNode
             * @static
             * @param {flyteidl.core.ITaskNode=} [properties] Properties to set
             * @returns {flyteidl.core.TaskNode} TaskNode instance
             */
            TaskNode.create = function create(properties) {
                return new TaskNode(properties);
            };

            /**
             * Encodes the specified TaskNode message. Does not implicitly {@link flyteidl.core.TaskNode.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.TaskNode
             * @static
             * @param {flyteidl.core.ITaskNode} message TaskNode message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TaskNode.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.referenceId != null && message.hasOwnProperty("referenceId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.referenceId);
                return writer;
            };

            /**
             * Decodes a TaskNode message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.TaskNode
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.TaskNode} TaskNode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TaskNode.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.TaskNode();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.referenceId = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a TaskNode message.
             * @function verify
             * @memberof flyteidl.core.TaskNode
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TaskNode.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.referenceId != null && message.hasOwnProperty("referenceId")) {
                    properties.reference = 1;
                    if (!$util.isString(message.referenceId))
                        return "referenceId: string expected";
                }
                return null;
            };

            return TaskNode;
        })();

        core.WorkflowNode = (function() {

            /**
             * Properties of a WorkflowNode.
             * @memberof flyteidl.core
             * @interface IWorkflowNode
             * @property {string|null} [launchplanRef] WorkflowNode launchplanRef
             * @property {string|null} [subWorkflowRef] WorkflowNode subWorkflowRef
             */

            /**
             * Constructs a new WorkflowNode.
             * @memberof flyteidl.core
             * @classdesc Represents a WorkflowNode.
             * @implements IWorkflowNode
             * @constructor
             * @param {flyteidl.core.IWorkflowNode=} [properties] Properties to set
             */
            function WorkflowNode(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * WorkflowNode launchplanRef.
             * @member {string} launchplanRef
             * @memberof flyteidl.core.WorkflowNode
             * @instance
             */
            WorkflowNode.prototype.launchplanRef = "";

            /**
             * WorkflowNode subWorkflowRef.
             * @member {string} subWorkflowRef
             * @memberof flyteidl.core.WorkflowNode
             * @instance
             */
            WorkflowNode.prototype.subWorkflowRef = "";

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * WorkflowNode reference.
             * @member {"launchplanRef"|"subWorkflowRef"|undefined} reference
             * @memberof flyteidl.core.WorkflowNode
             * @instance
             */
            Object.defineProperty(WorkflowNode.prototype, "reference", {
                get: $util.oneOfGetter($oneOfFields = ["launchplanRef", "subWorkflowRef"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new WorkflowNode instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.WorkflowNode
             * @static
             * @param {flyteidl.core.IWorkflowNode=} [properties] Properties to set
             * @returns {flyteidl.core.WorkflowNode} WorkflowNode instance
             */
            WorkflowNode.create = function create(properties) {
                return new WorkflowNode(properties);
            };

            /**
             * Encodes the specified WorkflowNode message. Does not implicitly {@link flyteidl.core.WorkflowNode.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.WorkflowNode
             * @static
             * @param {flyteidl.core.IWorkflowNode} message WorkflowNode message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WorkflowNode.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.launchplanRef != null && message.hasOwnProperty("launchplanRef"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.launchplanRef);
                if (message.subWorkflowRef != null && message.hasOwnProperty("subWorkflowRef"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.subWorkflowRef);
                return writer;
            };

            /**
             * Decodes a WorkflowNode message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.WorkflowNode
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.WorkflowNode} WorkflowNode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WorkflowNode.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.WorkflowNode();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.launchplanRef = reader.string();
                        break;
                    case 2:
                        message.subWorkflowRef = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a WorkflowNode message.
             * @function verify
             * @memberof flyteidl.core.WorkflowNode
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            WorkflowNode.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.launchplanRef != null && message.hasOwnProperty("launchplanRef")) {
                    properties.reference = 1;
                    if (!$util.isString(message.launchplanRef))
                        return "launchplanRef: string expected";
                }
                if (message.subWorkflowRef != null && message.hasOwnProperty("subWorkflowRef")) {
                    if (properties.reference === 1)
                        return "reference: multiple values";
                    properties.reference = 1;
                    if (!$util.isString(message.subWorkflowRef))
                        return "subWorkflowRef: string expected";
                }
                return null;
            };

            return WorkflowNode;
        })();

        core.NodeMetadata = (function() {

            /**
             * Properties of a NodeMetadata.
             * @memberof flyteidl.core
             * @interface INodeMetadata
             * @property {string|null} [name] NodeMetadata name
             * @property {google.protobuf.IDuration|null} [timeout] NodeMetadata timeout
             * @property {flyteidl.core.IRetryStrategy|null} [retries] NodeMetadata retries
             */

            /**
             * Constructs a new NodeMetadata.
             * @memberof flyteidl.core
             * @classdesc Represents a NodeMetadata.
             * @implements INodeMetadata
             * @constructor
             * @param {flyteidl.core.INodeMetadata=} [properties] Properties to set
             */
            function NodeMetadata(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * NodeMetadata name.
             * @member {string} name
             * @memberof flyteidl.core.NodeMetadata
             * @instance
             */
            NodeMetadata.prototype.name = "";

            /**
             * NodeMetadata timeout.
             * @member {google.protobuf.IDuration|null|undefined} timeout
             * @memberof flyteidl.core.NodeMetadata
             * @instance
             */
            NodeMetadata.prototype.timeout = null;

            /**
             * NodeMetadata retries.
             * @member {flyteidl.core.IRetryStrategy|null|undefined} retries
             * @memberof flyteidl.core.NodeMetadata
             * @instance
             */
            NodeMetadata.prototype.retries = null;

            /**
             * Creates a new NodeMetadata instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.NodeMetadata
             * @static
             * @param {flyteidl.core.INodeMetadata=} [properties] Properties to set
             * @returns {flyteidl.core.NodeMetadata} NodeMetadata instance
             */
            NodeMetadata.create = function create(properties) {
                return new NodeMetadata(properties);
            };

            /**
             * Encodes the specified NodeMetadata message. Does not implicitly {@link flyteidl.core.NodeMetadata.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.NodeMetadata
             * @static
             * @param {flyteidl.core.INodeMetadata} message NodeMetadata message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NodeMetadata.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.timeout != null && message.hasOwnProperty("timeout"))
                    $root.google.protobuf.Duration.encode(message.timeout, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.retries != null && message.hasOwnProperty("retries"))
                    $root.flyteidl.core.RetryStrategy.encode(message.retries, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a NodeMetadata message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.NodeMetadata
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.NodeMetadata} NodeMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NodeMetadata.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.NodeMetadata();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 4:
                        message.timeout = $root.google.protobuf.Duration.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.retries = $root.flyteidl.core.RetryStrategy.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a NodeMetadata message.
             * @function verify
             * @memberof flyteidl.core.NodeMetadata
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            NodeMetadata.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.timeout != null && message.hasOwnProperty("timeout")) {
                    let error = $root.google.protobuf.Duration.verify(message.timeout);
                    if (error)
                        return "timeout." + error;
                }
                if (message.retries != null && message.hasOwnProperty("retries")) {
                    let error = $root.flyteidl.core.RetryStrategy.verify(message.retries);
                    if (error)
                        return "retries." + error;
                }
                return null;
            };

            return NodeMetadata;
        })();

        core.Alias = (function() {

            /**
             * Properties of an Alias.
             * @memberof flyteidl.core
             * @interface IAlias
             * @property {string|null} ["var"] Alias var
             * @property {string|null} [alias] Alias alias
             */

            /**
             * Constructs a new Alias.
             * @memberof flyteidl.core
             * @classdesc Represents an Alias.
             * @implements IAlias
             * @constructor
             * @param {flyteidl.core.IAlias=} [properties] Properties to set
             */
            function Alias(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Alias var.
             * @member {string} var
             * @memberof flyteidl.core.Alias
             * @instance
             */
            Alias.prototype["var"] = "";

            /**
             * Alias alias.
             * @member {string} alias
             * @memberof flyteidl.core.Alias
             * @instance
             */
            Alias.prototype.alias = "";

            /**
             * Creates a new Alias instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.Alias
             * @static
             * @param {flyteidl.core.IAlias=} [properties] Properties to set
             * @returns {flyteidl.core.Alias} Alias instance
             */
            Alias.create = function create(properties) {
                return new Alias(properties);
            };

            /**
             * Encodes the specified Alias message. Does not implicitly {@link flyteidl.core.Alias.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.Alias
             * @static
             * @param {flyteidl.core.IAlias} message Alias message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Alias.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message["var"] != null && message.hasOwnProperty("var"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message["var"]);
                if (message.alias != null && message.hasOwnProperty("alias"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.alias);
                return writer;
            };

            /**
             * Decodes an Alias message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.Alias
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.Alias} Alias
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Alias.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.Alias();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message["var"] = reader.string();
                        break;
                    case 2:
                        message.alias = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies an Alias message.
             * @function verify
             * @memberof flyteidl.core.Alias
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Alias.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message["var"] != null && message.hasOwnProperty("var"))
                    if (!$util.isString(message["var"]))
                        return "var: string expected";
                if (message.alias != null && message.hasOwnProperty("alias"))
                    if (!$util.isString(message.alias))
                        return "alias: string expected";
                return null;
            };

            return Alias;
        })();

        core.Node = (function() {

            /**
             * Properties of a Node.
             * @memberof flyteidl.core
             * @interface INode
             * @property {string|null} [id] Node id
             * @property {flyteidl.core.INodeMetadata|null} [metadata] Node metadata
             * @property {Array.<flyteidl.core.IBinding>|null} [inputs] Node inputs
             * @property {Array.<string>|null} [upstreamNodeIds] Node upstreamNodeIds
             * @property {Array.<flyteidl.core.IAlias>|null} [outputAliases] Node outputAliases
             * @property {flyteidl.core.ITaskNode|null} [taskNode] Node taskNode
             * @property {flyteidl.core.IWorkflowNode|null} [workflowNode] Node workflowNode
             * @property {flyteidl.core.IBranchNode|null} [branchNode] Node branchNode
             */

            /**
             * Constructs a new Node.
             * @memberof flyteidl.core
             * @classdesc Represents a Node.
             * @implements INode
             * @constructor
             * @param {flyteidl.core.INode=} [properties] Properties to set
             */
            function Node(properties) {
                this.inputs = [];
                this.upstreamNodeIds = [];
                this.outputAliases = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Node id.
             * @member {string} id
             * @memberof flyteidl.core.Node
             * @instance
             */
            Node.prototype.id = "";

            /**
             * Node metadata.
             * @member {flyteidl.core.INodeMetadata|null|undefined} metadata
             * @memberof flyteidl.core.Node
             * @instance
             */
            Node.prototype.metadata = null;

            /**
             * Node inputs.
             * @member {Array.<flyteidl.core.IBinding>} inputs
             * @memberof flyteidl.core.Node
             * @instance
             */
            Node.prototype.inputs = $util.emptyArray;

            /**
             * Node upstreamNodeIds.
             * @member {Array.<string>} upstreamNodeIds
             * @memberof flyteidl.core.Node
             * @instance
             */
            Node.prototype.upstreamNodeIds = $util.emptyArray;

            /**
             * Node outputAliases.
             * @member {Array.<flyteidl.core.IAlias>} outputAliases
             * @memberof flyteidl.core.Node
             * @instance
             */
            Node.prototype.outputAliases = $util.emptyArray;

            /**
             * Node taskNode.
             * @member {flyteidl.core.ITaskNode|null|undefined} taskNode
             * @memberof flyteidl.core.Node
             * @instance
             */
            Node.prototype.taskNode = null;

            /**
             * Node workflowNode.
             * @member {flyteidl.core.IWorkflowNode|null|undefined} workflowNode
             * @memberof flyteidl.core.Node
             * @instance
             */
            Node.prototype.workflowNode = null;

            /**
             * Node branchNode.
             * @member {flyteidl.core.IBranchNode|null|undefined} branchNode
             * @memberof flyteidl.core.Node
             * @instance
             */
            Node.prototype.branchNode = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * Node target.
             * @member {"taskNode"|"workflowNode"|"branchNode"|undefined} target
             * @memberof flyteidl.core.Node
             * @instance
             */
            Object.defineProperty(Node.prototype, "target", {
                get: $util.oneOfGetter($oneOfFields = ["taskNode", "workflowNode", "branchNode"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Node instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.Node
             * @static
             * @param {flyteidl.core.INode=} [properties] Properties to set
             * @returns {flyteidl.core.Node} Node instance
             */
            Node.create = function create(properties) {
                return new Node(properties);
            };

            /**
             * Encodes the specified Node message. Does not implicitly {@link flyteidl.core.Node.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.Node
             * @static
             * @param {flyteidl.core.INode} message Node message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Node.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.metadata != null && message.hasOwnProperty("metadata"))
                    $root.flyteidl.core.NodeMetadata.encode(message.metadata, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.inputs != null && message.inputs.length)
                    for (let i = 0; i < message.inputs.length; ++i)
                        $root.flyteidl.core.Binding.encode(message.inputs[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.upstreamNodeIds != null && message.upstreamNodeIds.length)
                    for (let i = 0; i < message.upstreamNodeIds.length; ++i)
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.upstreamNodeIds[i]);
                if (message.outputAliases != null && message.outputAliases.length)
                    for (let i = 0; i < message.outputAliases.length; ++i)
                        $root.flyteidl.core.Alias.encode(message.outputAliases[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.taskNode != null && message.hasOwnProperty("taskNode"))
                    $root.flyteidl.core.TaskNode.encode(message.taskNode, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.workflowNode != null && message.hasOwnProperty("workflowNode"))
                    $root.flyteidl.core.WorkflowNode.encode(message.workflowNode, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.branchNode != null && message.hasOwnProperty("branchNode"))
                    $root.flyteidl.core.BranchNode.encode(message.branchNode, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a Node message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.Node
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.Node} Node
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Node.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.Node();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.metadata = $root.flyteidl.core.NodeMetadata.decode(reader, reader.uint32());
                        break;
                    case 3:
                        if (!(message.inputs && message.inputs.length))
                            message.inputs = [];
                        message.inputs.push($root.flyteidl.core.Binding.decode(reader, reader.uint32()));
                        break;
                    case 4:
                        if (!(message.upstreamNodeIds && message.upstreamNodeIds.length))
                            message.upstreamNodeIds = [];
                        message.upstreamNodeIds.push(reader.string());
                        break;
                    case 5:
                        if (!(message.outputAliases && message.outputAliases.length))
                            message.outputAliases = [];
                        message.outputAliases.push($root.flyteidl.core.Alias.decode(reader, reader.uint32()));
                        break;
                    case 6:
                        message.taskNode = $root.flyteidl.core.TaskNode.decode(reader, reader.uint32());
                        break;
                    case 7:
                        message.workflowNode = $root.flyteidl.core.WorkflowNode.decode(reader, reader.uint32());
                        break;
                    case 8:
                        message.branchNode = $root.flyteidl.core.BranchNode.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a Node message.
             * @function verify
             * @memberof flyteidl.core.Node
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Node.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.metadata != null && message.hasOwnProperty("metadata")) {
                    let error = $root.flyteidl.core.NodeMetadata.verify(message.metadata);
                    if (error)
                        return "metadata." + error;
                }
                if (message.inputs != null && message.hasOwnProperty("inputs")) {
                    if (!Array.isArray(message.inputs))
                        return "inputs: array expected";
                    for (let i = 0; i < message.inputs.length; ++i) {
                        let error = $root.flyteidl.core.Binding.verify(message.inputs[i]);
                        if (error)
                            return "inputs." + error;
                    }
                }
                if (message.upstreamNodeIds != null && message.hasOwnProperty("upstreamNodeIds")) {
                    if (!Array.isArray(message.upstreamNodeIds))
                        return "upstreamNodeIds: array expected";
                    for (let i = 0; i < message.upstreamNodeIds.length; ++i)
                        if (!$util.isString(message.upstreamNodeIds[i]))
                            return "upstreamNodeIds: string[] expected";
                }
                if (message.outputAliases != null && message.hasOwnProperty("outputAliases")) {
                    if (!Array.isArray(message.outputAliases))
                        return "outputAliases: array expected";
                    for (let i = 0; i < message.outputAliases.length; ++i) {
                        let error = $root.flyteidl.core.Alias.verify(message.outputAliases[i]);
                        if (error)
                            return "outputAliases." + error;
                    }
                }
                if (message.taskNode != null && message.hasOwnProperty("taskNode")) {
                    properties.target = 1;
                    {
                        let error = $root.flyteidl.core.TaskNode.verify(message.taskNode);
                        if (error)
                            return "taskNode." + error;
                    }
                }
                if (message.workflowNode != null && message.hasOwnProperty("workflowNode")) {
                    if (properties.target === 1)
                        return "target: multiple values";
                    properties.target = 1;
                    {
                        let error = $root.flyteidl.core.WorkflowNode.verify(message.workflowNode);
                        if (error)
                            return "workflowNode." + error;
                    }
                }
                if (message.branchNode != null && message.hasOwnProperty("branchNode")) {
                    if (properties.target === 1)
                        return "target: multiple values";
                    properties.target = 1;
                    {
                        let error = $root.flyteidl.core.BranchNode.verify(message.branchNode);
                        if (error)
                            return "branchNode." + error;
                    }
                }
                return null;
            };

            return Node;
        })();

        core.WorkflowMetadata = (function() {

            /**
             * Properties of a WorkflowMetadata.
             * @memberof flyteidl.core
             * @interface IWorkflowMetadata
             * @property {string|null} [executionRole] WorkflowMetadata executionRole
             */

            /**
             * Constructs a new WorkflowMetadata.
             * @memberof flyteidl.core
             * @classdesc Represents a WorkflowMetadata.
             * @implements IWorkflowMetadata
             * @constructor
             * @param {flyteidl.core.IWorkflowMetadata=} [properties] Properties to set
             */
            function WorkflowMetadata(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * WorkflowMetadata executionRole.
             * @member {string} executionRole
             * @memberof flyteidl.core.WorkflowMetadata
             * @instance
             */
            WorkflowMetadata.prototype.executionRole = "";

            /**
             * Creates a new WorkflowMetadata instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.WorkflowMetadata
             * @static
             * @param {flyteidl.core.IWorkflowMetadata=} [properties] Properties to set
             * @returns {flyteidl.core.WorkflowMetadata} WorkflowMetadata instance
             */
            WorkflowMetadata.create = function create(properties) {
                return new WorkflowMetadata(properties);
            };

            /**
             * Encodes the specified WorkflowMetadata message. Does not implicitly {@link flyteidl.core.WorkflowMetadata.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.WorkflowMetadata
             * @static
             * @param {flyteidl.core.IWorkflowMetadata} message WorkflowMetadata message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WorkflowMetadata.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.executionRole != null && message.hasOwnProperty("executionRole"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.executionRole);
                return writer;
            };

            /**
             * Decodes a WorkflowMetadata message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.WorkflowMetadata
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.WorkflowMetadata} WorkflowMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WorkflowMetadata.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.WorkflowMetadata();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.executionRole = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a WorkflowMetadata message.
             * @function verify
             * @memberof flyteidl.core.WorkflowMetadata
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            WorkflowMetadata.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.executionRole != null && message.hasOwnProperty("executionRole"))
                    if (!$util.isString(message.executionRole))
                        return "executionRole: string expected";
                return null;
            };

            return WorkflowMetadata;
        })();

        core.WorkflowTemplate = (function() {

            /**
             * Properties of a WorkflowTemplate.
             * @memberof flyteidl.core
             * @interface IWorkflowTemplate
             * @property {string|null} [id] WorkflowTemplate id
             * @property {flyteidl.core.IWorkflowMetadata|null} [metadata] WorkflowTemplate metadata
             * @property {flyteidl.core.ITypedInterface|null} ["interface"] WorkflowTemplate interface
             * @property {Array.<flyteidl.core.INode>|null} [nodes] WorkflowTemplate nodes
             * @property {Array.<flyteidl.core.IBinding>|null} [outputs] WorkflowTemplate outputs
             * @property {flyteidl.core.INode|null} [failureNode] WorkflowTemplate failureNode
             */

            /**
             * Constructs a new WorkflowTemplate.
             * @memberof flyteidl.core
             * @classdesc Represents a WorkflowTemplate.
             * @implements IWorkflowTemplate
             * @constructor
             * @param {flyteidl.core.IWorkflowTemplate=} [properties] Properties to set
             */
            function WorkflowTemplate(properties) {
                this.nodes = [];
                this.outputs = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * WorkflowTemplate id.
             * @member {string} id
             * @memberof flyteidl.core.WorkflowTemplate
             * @instance
             */
            WorkflowTemplate.prototype.id = "";

            /**
             * WorkflowTemplate metadata.
             * @member {flyteidl.core.IWorkflowMetadata|null|undefined} metadata
             * @memberof flyteidl.core.WorkflowTemplate
             * @instance
             */
            WorkflowTemplate.prototype.metadata = null;

            /**
             * WorkflowTemplate interface.
             * @member {flyteidl.core.ITypedInterface|null|undefined} interface
             * @memberof flyteidl.core.WorkflowTemplate
             * @instance
             */
            WorkflowTemplate.prototype["interface"] = null;

            /**
             * WorkflowTemplate nodes.
             * @member {Array.<flyteidl.core.INode>} nodes
             * @memberof flyteidl.core.WorkflowTemplate
             * @instance
             */
            WorkflowTemplate.prototype.nodes = $util.emptyArray;

            /**
             * WorkflowTemplate outputs.
             * @member {Array.<flyteidl.core.IBinding>} outputs
             * @memberof flyteidl.core.WorkflowTemplate
             * @instance
             */
            WorkflowTemplate.prototype.outputs = $util.emptyArray;

            /**
             * WorkflowTemplate failureNode.
             * @member {flyteidl.core.INode|null|undefined} failureNode
             * @memberof flyteidl.core.WorkflowTemplate
             * @instance
             */
            WorkflowTemplate.prototype.failureNode = null;

            /**
             * Creates a new WorkflowTemplate instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.WorkflowTemplate
             * @static
             * @param {flyteidl.core.IWorkflowTemplate=} [properties] Properties to set
             * @returns {flyteidl.core.WorkflowTemplate} WorkflowTemplate instance
             */
            WorkflowTemplate.create = function create(properties) {
                return new WorkflowTemplate(properties);
            };

            /**
             * Encodes the specified WorkflowTemplate message. Does not implicitly {@link flyteidl.core.WorkflowTemplate.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.WorkflowTemplate
             * @static
             * @param {flyteidl.core.IWorkflowTemplate} message WorkflowTemplate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WorkflowTemplate.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.metadata != null && message.hasOwnProperty("metadata"))
                    $root.flyteidl.core.WorkflowMetadata.encode(message.metadata, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message["interface"] != null && message.hasOwnProperty("interface"))
                    $root.flyteidl.core.TypedInterface.encode(message["interface"], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.nodes != null && message.nodes.length)
                    for (let i = 0; i < message.nodes.length; ++i)
                        $root.flyteidl.core.Node.encode(message.nodes[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.outputs != null && message.outputs.length)
                    for (let i = 0; i < message.outputs.length; ++i)
                        $root.flyteidl.core.Binding.encode(message.outputs[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.failureNode != null && message.hasOwnProperty("failureNode"))
                    $root.flyteidl.core.Node.encode(message.failureNode, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a WorkflowTemplate message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.WorkflowTemplate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.WorkflowTemplate} WorkflowTemplate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WorkflowTemplate.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.WorkflowTemplate();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.metadata = $root.flyteidl.core.WorkflowMetadata.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message["interface"] = $root.flyteidl.core.TypedInterface.decode(reader, reader.uint32());
                        break;
                    case 4:
                        if (!(message.nodes && message.nodes.length))
                            message.nodes = [];
                        message.nodes.push($root.flyteidl.core.Node.decode(reader, reader.uint32()));
                        break;
                    case 5:
                        if (!(message.outputs && message.outputs.length))
                            message.outputs = [];
                        message.outputs.push($root.flyteidl.core.Binding.decode(reader, reader.uint32()));
                        break;
                    case 6:
                        message.failureNode = $root.flyteidl.core.Node.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a WorkflowTemplate message.
             * @function verify
             * @memberof flyteidl.core.WorkflowTemplate
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            WorkflowTemplate.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.metadata != null && message.hasOwnProperty("metadata")) {
                    let error = $root.flyteidl.core.WorkflowMetadata.verify(message.metadata);
                    if (error)
                        return "metadata." + error;
                }
                if (message["interface"] != null && message.hasOwnProperty("interface")) {
                    let error = $root.flyteidl.core.TypedInterface.verify(message["interface"]);
                    if (error)
                        return "interface." + error;
                }
                if (message.nodes != null && message.hasOwnProperty("nodes")) {
                    if (!Array.isArray(message.nodes))
                        return "nodes: array expected";
                    for (let i = 0; i < message.nodes.length; ++i) {
                        let error = $root.flyteidl.core.Node.verify(message.nodes[i]);
                        if (error)
                            return "nodes." + error;
                    }
                }
                if (message.outputs != null && message.hasOwnProperty("outputs")) {
                    if (!Array.isArray(message.outputs))
                        return "outputs: array expected";
                    for (let i = 0; i < message.outputs.length; ++i) {
                        let error = $root.flyteidl.core.Binding.verify(message.outputs[i]);
                        if (error)
                            return "outputs." + error;
                    }
                }
                if (message.failureNode != null && message.hasOwnProperty("failureNode")) {
                    let error = $root.flyteidl.core.Node.verify(message.failureNode);
                    if (error)
                        return "failureNode." + error;
                }
                return null;
            };

            return WorkflowTemplate;
        })();

        core.Variable = (function() {

            /**
             * Properties of a Variable.
             * @memberof flyteidl.core
             * @interface IVariable
             * @property {string|null} [name] Variable name
             * @property {flyteidl.core.ILiteralType|null} [type] Variable type
             * @property {string|null} [description] Variable description
             */

            /**
             * Constructs a new Variable.
             * @memberof flyteidl.core
             * @classdesc Represents a Variable.
             * @implements IVariable
             * @constructor
             * @param {flyteidl.core.IVariable=} [properties] Properties to set
             */
            function Variable(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Variable name.
             * @member {string} name
             * @memberof flyteidl.core.Variable
             * @instance
             */
            Variable.prototype.name = "";

            /**
             * Variable type.
             * @member {flyteidl.core.ILiteralType|null|undefined} type
             * @memberof flyteidl.core.Variable
             * @instance
             */
            Variable.prototype.type = null;

            /**
             * Variable description.
             * @member {string} description
             * @memberof flyteidl.core.Variable
             * @instance
             */
            Variable.prototype.description = "";

            /**
             * Creates a new Variable instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.Variable
             * @static
             * @param {flyteidl.core.IVariable=} [properties] Properties to set
             * @returns {flyteidl.core.Variable} Variable instance
             */
            Variable.create = function create(properties) {
                return new Variable(properties);
            };

            /**
             * Encodes the specified Variable message. Does not implicitly {@link flyteidl.core.Variable.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.Variable
             * @static
             * @param {flyteidl.core.IVariable} message Variable message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Variable.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.type != null && message.hasOwnProperty("type"))
                    $root.flyteidl.core.LiteralType.encode(message.type, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.description != null && message.hasOwnProperty("description"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
                return writer;
            };

            /**
             * Decodes a Variable message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.Variable
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.Variable} Variable
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Variable.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.Variable();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.type = $root.flyteidl.core.LiteralType.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.description = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a Variable message.
             * @function verify
             * @memberof flyteidl.core.Variable
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Variable.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.type != null && message.hasOwnProperty("type")) {
                    let error = $root.flyteidl.core.LiteralType.verify(message.type);
                    if (error)
                        return "type." + error;
                }
                if (message.description != null && message.hasOwnProperty("description"))
                    if (!$util.isString(message.description))
                        return "description: string expected";
                return null;
            };

            return Variable;
        })();

        core.VariableMap = (function() {

            /**
             * Properties of a VariableMap.
             * @memberof flyteidl.core
             * @interface IVariableMap
             * @property {Object.<string,flyteidl.core.IVariable>|null} [variables] VariableMap variables
             */

            /**
             * Constructs a new VariableMap.
             * @memberof flyteidl.core
             * @classdesc Represents a VariableMap.
             * @implements IVariableMap
             * @constructor
             * @param {flyteidl.core.IVariableMap=} [properties] Properties to set
             */
            function VariableMap(properties) {
                this.variables = {};
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * VariableMap variables.
             * @member {Object.<string,flyteidl.core.IVariable>} variables
             * @memberof flyteidl.core.VariableMap
             * @instance
             */
            VariableMap.prototype.variables = $util.emptyObject;

            /**
             * Creates a new VariableMap instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.VariableMap
             * @static
             * @param {flyteidl.core.IVariableMap=} [properties] Properties to set
             * @returns {flyteidl.core.VariableMap} VariableMap instance
             */
            VariableMap.create = function create(properties) {
                return new VariableMap(properties);
            };

            /**
             * Encodes the specified VariableMap message. Does not implicitly {@link flyteidl.core.VariableMap.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.VariableMap
             * @static
             * @param {flyteidl.core.IVariableMap} message VariableMap message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            VariableMap.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.variables != null && message.hasOwnProperty("variables"))
                    for (let keys = Object.keys(message.variables), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                        $root.flyteidl.core.Variable.encode(message.variables[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                return writer;
            };

            /**
             * Decodes a VariableMap message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.VariableMap
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.VariableMap} VariableMap
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            VariableMap.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.VariableMap(), key;
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        reader.skip().pos++;
                        if (message.variables === $util.emptyObject)
                            message.variables = {};
                        key = reader.string();
                        reader.pos++;
                        message.variables[key] = $root.flyteidl.core.Variable.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a VariableMap message.
             * @function verify
             * @memberof flyteidl.core.VariableMap
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            VariableMap.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.variables != null && message.hasOwnProperty("variables")) {
                    if (!$util.isObject(message.variables))
                        return "variables: object expected";
                    let key = Object.keys(message.variables);
                    for (let i = 0; i < key.length; ++i) {
                        let error = $root.flyteidl.core.Variable.verify(message.variables[key[i]]);
                        if (error)
                            return "variables." + error;
                    }
                }
                return null;
            };

            return VariableMap;
        })();

        core.Parameter = (function() {

            /**
             * Properties of a Parameter.
             * @memberof flyteidl.core
             * @interface IParameter
             * @property {flyteidl.core.IVariable|null} ["var"] Parameter var
             * @property {flyteidl.core.ILiteral|null} [value] Parameter value
             * @property {boolean|null} [required] Parameter required
             */

            /**
             * Constructs a new Parameter.
             * @memberof flyteidl.core
             * @classdesc Represents a Parameter.
             * @implements IParameter
             * @constructor
             * @param {flyteidl.core.IParameter=} [properties] Properties to set
             */
            function Parameter(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Parameter var.
             * @member {flyteidl.core.IVariable|null|undefined} var
             * @memberof flyteidl.core.Parameter
             * @instance
             */
            Parameter.prototype["var"] = null;

            /**
             * Parameter value.
             * @member {flyteidl.core.ILiteral|null|undefined} value
             * @memberof flyteidl.core.Parameter
             * @instance
             */
            Parameter.prototype.value = null;

            /**
             * Parameter required.
             * @member {boolean} required
             * @memberof flyteidl.core.Parameter
             * @instance
             */
            Parameter.prototype.required = false;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * Parameter default.
             * @member {"value"|"required"|undefined} default_
             * @memberof flyteidl.core.Parameter
             * @instance
             */
            Object.defineProperty(Parameter.prototype, "default", {
                get: $util.oneOfGetter($oneOfFields = ["value", "required"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Parameter instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.Parameter
             * @static
             * @param {flyteidl.core.IParameter=} [properties] Properties to set
             * @returns {flyteidl.core.Parameter} Parameter instance
             */
            Parameter.create = function create(properties) {
                return new Parameter(properties);
            };

            /**
             * Encodes the specified Parameter message. Does not implicitly {@link flyteidl.core.Parameter.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.Parameter
             * @static
             * @param {flyteidl.core.IParameter} message Parameter message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Parameter.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message["var"] != null && message.hasOwnProperty("var"))
                    $root.flyteidl.core.Variable.encode(message["var"], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.value != null && message.hasOwnProperty("value"))
                    $root.flyteidl.core.Literal.encode(message.value, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.required != null && message.hasOwnProperty("required"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.required);
                return writer;
            };

            /**
             * Decodes a Parameter message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.Parameter
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.Parameter} Parameter
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Parameter.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.Parameter();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message["var"] = $root.flyteidl.core.Variable.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.value = $root.flyteidl.core.Literal.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.required = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a Parameter message.
             * @function verify
             * @memberof flyteidl.core.Parameter
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Parameter.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message["var"] != null && message.hasOwnProperty("var")) {
                    let error = $root.flyteidl.core.Variable.verify(message["var"]);
                    if (error)
                        return "var." + error;
                }
                if (message.value != null && message.hasOwnProperty("value")) {
                    properties["default"] = 1;
                    {
                        let error = $root.flyteidl.core.Literal.verify(message.value);
                        if (error)
                            return "value." + error;
                    }
                }
                if (message.required != null && message.hasOwnProperty("required")) {
                    if (properties["default"] === 1)
                        return "default: multiple values";
                    properties["default"] = 1;
                    if (typeof message.required !== "boolean")
                        return "required: boolean expected";
                }
                return null;
            };

            return Parameter;
        })();

        core.ParameterMap = (function() {

            /**
             * Properties of a ParameterMap.
             * @memberof flyteidl.core
             * @interface IParameterMap
             * @property {Object.<string,flyteidl.core.IParameter>|null} [parameters] ParameterMap parameters
             */

            /**
             * Constructs a new ParameterMap.
             * @memberof flyteidl.core
             * @classdesc Represents a ParameterMap.
             * @implements IParameterMap
             * @constructor
             * @param {flyteidl.core.IParameterMap=} [properties] Properties to set
             */
            function ParameterMap(properties) {
                this.parameters = {};
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ParameterMap parameters.
             * @member {Object.<string,flyteidl.core.IParameter>} parameters
             * @memberof flyteidl.core.ParameterMap
             * @instance
             */
            ParameterMap.prototype.parameters = $util.emptyObject;

            /**
             * Creates a new ParameterMap instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.ParameterMap
             * @static
             * @param {flyteidl.core.IParameterMap=} [properties] Properties to set
             * @returns {flyteidl.core.ParameterMap} ParameterMap instance
             */
            ParameterMap.create = function create(properties) {
                return new ParameterMap(properties);
            };

            /**
             * Encodes the specified ParameterMap message. Does not implicitly {@link flyteidl.core.ParameterMap.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.ParameterMap
             * @static
             * @param {flyteidl.core.IParameterMap} message ParameterMap message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ParameterMap.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.parameters != null && message.hasOwnProperty("parameters"))
                    for (let keys = Object.keys(message.parameters), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                        $root.flyteidl.core.Parameter.encode(message.parameters[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                return writer;
            };

            /**
             * Decodes a ParameterMap message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.ParameterMap
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.ParameterMap} ParameterMap
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ParameterMap.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.ParameterMap(), key;
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        reader.skip().pos++;
                        if (message.parameters === $util.emptyObject)
                            message.parameters = {};
                        key = reader.string();
                        reader.pos++;
                        message.parameters[key] = $root.flyteidl.core.Parameter.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a ParameterMap message.
             * @function verify
             * @memberof flyteidl.core.ParameterMap
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ParameterMap.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.parameters != null && message.hasOwnProperty("parameters")) {
                    if (!$util.isObject(message.parameters))
                        return "parameters: object expected";
                    let key = Object.keys(message.parameters);
                    for (let i = 0; i < key.length; ++i) {
                        let error = $root.flyteidl.core.Parameter.verify(message.parameters[key[i]]);
                        if (error)
                            return "parameters." + error;
                    }
                }
                return null;
            };

            return ParameterMap;
        })();

        core.TypedInterface = (function() {

            /**
             * Properties of a TypedInterface.
             * @memberof flyteidl.core
             * @interface ITypedInterface
             * @property {flyteidl.core.IVariableMap|null} [inputs] TypedInterface inputs
             * @property {flyteidl.core.IVariableMap|null} [outputs] TypedInterface outputs
             */

            /**
             * Constructs a new TypedInterface.
             * @memberof flyteidl.core
             * @classdesc Represents a TypedInterface.
             * @implements ITypedInterface
             * @constructor
             * @param {flyteidl.core.ITypedInterface=} [properties] Properties to set
             */
            function TypedInterface(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TypedInterface inputs.
             * @member {flyteidl.core.IVariableMap|null|undefined} inputs
             * @memberof flyteidl.core.TypedInterface
             * @instance
             */
            TypedInterface.prototype.inputs = null;

            /**
             * TypedInterface outputs.
             * @member {flyteidl.core.IVariableMap|null|undefined} outputs
             * @memberof flyteidl.core.TypedInterface
             * @instance
             */
            TypedInterface.prototype.outputs = null;

            /**
             * Creates a new TypedInterface instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.TypedInterface
             * @static
             * @param {flyteidl.core.ITypedInterface=} [properties] Properties to set
             * @returns {flyteidl.core.TypedInterface} TypedInterface instance
             */
            TypedInterface.create = function create(properties) {
                return new TypedInterface(properties);
            };

            /**
             * Encodes the specified TypedInterface message. Does not implicitly {@link flyteidl.core.TypedInterface.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.TypedInterface
             * @static
             * @param {flyteidl.core.ITypedInterface} message TypedInterface message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TypedInterface.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.inputs != null && message.hasOwnProperty("inputs"))
                    $root.flyteidl.core.VariableMap.encode(message.inputs, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.outputs != null && message.hasOwnProperty("outputs"))
                    $root.flyteidl.core.VariableMap.encode(message.outputs, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a TypedInterface message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.TypedInterface
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.TypedInterface} TypedInterface
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TypedInterface.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.TypedInterface();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.inputs = $root.flyteidl.core.VariableMap.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.outputs = $root.flyteidl.core.VariableMap.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a TypedInterface message.
             * @function verify
             * @memberof flyteidl.core.TypedInterface
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TypedInterface.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.inputs != null && message.hasOwnProperty("inputs")) {
                    let error = $root.flyteidl.core.VariableMap.verify(message.inputs);
                    if (error)
                        return "inputs." + error;
                }
                if (message.outputs != null && message.hasOwnProperty("outputs")) {
                    let error = $root.flyteidl.core.VariableMap.verify(message.outputs);
                    if (error)
                        return "outputs." + error;
                }
                return null;
            };

            return TypedInterface;
        })();

        /**
         * SimpleType enum.
         * @name flyteidl.core.SimpleType
         * @enum {string}
         * @property {number} NONE=0 NONE value
         * @property {number} INTEGER=1 INTEGER value
         * @property {number} FLOAT=2 FLOAT value
         * @property {number} STRING=3 STRING value
         * @property {number} BOOLEAN=4 BOOLEAN value
         * @property {number} DATE_TIME=5 DATE_TIME value
         * @property {number} DURATION=6 DURATION value
         * @property {number} BLOB=7 BLOB value
         * @property {number} BINARY=8 BINARY value
         * @property {number} WAITABLE=9 WAITABLE value
         * @property {number} ERROR=10 ERROR value
         */
        core.SimpleType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NONE"] = 0;
            values[valuesById[1] = "INTEGER"] = 1;
            values[valuesById[2] = "FLOAT"] = 2;
            values[valuesById[3] = "STRING"] = 3;
            values[valuesById[4] = "BOOLEAN"] = 4;
            values[valuesById[5] = "DATE_TIME"] = 5;
            values[valuesById[6] = "DURATION"] = 6;
            values[valuesById[7] = "BLOB"] = 7;
            values[valuesById[8] = "BINARY"] = 8;
            values[valuesById[9] = "WAITABLE"] = 9;
            values[valuesById[10] = "ERROR"] = 10;
            return values;
        })();

        core.SchemaType = (function() {

            /**
             * Properties of a SchemaType.
             * @memberof flyteidl.core
             * @interface ISchemaType
             * @property {Array.<flyteidl.core.SchemaType.ISchemaColumn>|null} [columns] SchemaType columns
             */

            /**
             * Constructs a new SchemaType.
             * @memberof flyteidl.core
             * @classdesc Represents a SchemaType.
             * @implements ISchemaType
             * @constructor
             * @param {flyteidl.core.ISchemaType=} [properties] Properties to set
             */
            function SchemaType(properties) {
                this.columns = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SchemaType columns.
             * @member {Array.<flyteidl.core.SchemaType.ISchemaColumn>} columns
             * @memberof flyteidl.core.SchemaType
             * @instance
             */
            SchemaType.prototype.columns = $util.emptyArray;

            /**
             * Creates a new SchemaType instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.SchemaType
             * @static
             * @param {flyteidl.core.ISchemaType=} [properties] Properties to set
             * @returns {flyteidl.core.SchemaType} SchemaType instance
             */
            SchemaType.create = function create(properties) {
                return new SchemaType(properties);
            };

            /**
             * Encodes the specified SchemaType message. Does not implicitly {@link flyteidl.core.SchemaType.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.SchemaType
             * @static
             * @param {flyteidl.core.ISchemaType} message SchemaType message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SchemaType.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.columns != null && message.columns.length)
                    for (let i = 0; i < message.columns.length; ++i)
                        $root.flyteidl.core.SchemaType.SchemaColumn.encode(message.columns[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a SchemaType message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.SchemaType
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.SchemaType} SchemaType
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SchemaType.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.SchemaType();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 3:
                        if (!(message.columns && message.columns.length))
                            message.columns = [];
                        message.columns.push($root.flyteidl.core.SchemaType.SchemaColumn.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a SchemaType message.
             * @function verify
             * @memberof flyteidl.core.SchemaType
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SchemaType.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.columns != null && message.hasOwnProperty("columns")) {
                    if (!Array.isArray(message.columns))
                        return "columns: array expected";
                    for (let i = 0; i < message.columns.length; ++i) {
                        let error = $root.flyteidl.core.SchemaType.SchemaColumn.verify(message.columns[i]);
                        if (error)
                            return "columns." + error;
                    }
                }
                return null;
            };

            SchemaType.SchemaColumn = (function() {

                /**
                 * Properties of a SchemaColumn.
                 * @memberof flyteidl.core.SchemaType
                 * @interface ISchemaColumn
                 * @property {string|null} [name] SchemaColumn name
                 * @property {flyteidl.core.SchemaType.SchemaColumn.SchemaColumnType|null} [type] SchemaColumn type
                 */

                /**
                 * Constructs a new SchemaColumn.
                 * @memberof flyteidl.core.SchemaType
                 * @classdesc Represents a SchemaColumn.
                 * @implements ISchemaColumn
                 * @constructor
                 * @param {flyteidl.core.SchemaType.ISchemaColumn=} [properties] Properties to set
                 */
                function SchemaColumn(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SchemaColumn name.
                 * @member {string} name
                 * @memberof flyteidl.core.SchemaType.SchemaColumn
                 * @instance
                 */
                SchemaColumn.prototype.name = "";

                /**
                 * SchemaColumn type.
                 * @member {flyteidl.core.SchemaType.SchemaColumn.SchemaColumnType} type
                 * @memberof flyteidl.core.SchemaType.SchemaColumn
                 * @instance
                 */
                SchemaColumn.prototype.type = 0;

                /**
                 * Creates a new SchemaColumn instance using the specified properties.
                 * @function create
                 * @memberof flyteidl.core.SchemaType.SchemaColumn
                 * @static
                 * @param {flyteidl.core.SchemaType.ISchemaColumn=} [properties] Properties to set
                 * @returns {flyteidl.core.SchemaType.SchemaColumn} SchemaColumn instance
                 */
                SchemaColumn.create = function create(properties) {
                    return new SchemaColumn(properties);
                };

                /**
                 * Encodes the specified SchemaColumn message. Does not implicitly {@link flyteidl.core.SchemaType.SchemaColumn.verify|verify} messages.
                 * @function encode
                 * @memberof flyteidl.core.SchemaType.SchemaColumn
                 * @static
                 * @param {flyteidl.core.SchemaType.ISchemaColumn} message SchemaColumn message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SchemaColumn.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.type != null && message.hasOwnProperty("type"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
                    return writer;
                };

                /**
                 * Decodes a SchemaColumn message from the specified reader or buffer.
                 * @function decode
                 * @memberof flyteidl.core.SchemaType.SchemaColumn
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {flyteidl.core.SchemaType.SchemaColumn} SchemaColumn
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SchemaColumn.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.SchemaType.SchemaColumn();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message.type = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Verifies a SchemaColumn message.
                 * @function verify
                 * @memberof flyteidl.core.SchemaType.SchemaColumn
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SchemaColumn.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.type != null && message.hasOwnProperty("type"))
                        switch (message.type) {
                        default:
                            return "type: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        }
                    return null;
                };

                /**
                 * SchemaColumnType enum.
                 * @name flyteidl.core.SchemaType.SchemaColumn.SchemaColumnType
                 * @enum {string}
                 * @property {number} INTEGER=0 INTEGER value
                 * @property {number} FLOAT=1 FLOAT value
                 * @property {number} STRING=2 STRING value
                 * @property {number} DATETIME=3 DATETIME value
                 * @property {number} DURATION=4 DURATION value
                 * @property {number} BOOLEAN=5 BOOLEAN value
                 */
                SchemaColumn.SchemaColumnType = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "INTEGER"] = 0;
                    values[valuesById[1] = "FLOAT"] = 1;
                    values[valuesById[2] = "STRING"] = 2;
                    values[valuesById[3] = "DATETIME"] = 3;
                    values[valuesById[4] = "DURATION"] = 4;
                    values[valuesById[5] = "BOOLEAN"] = 5;
                    return values;
                })();

                return SchemaColumn;
            })();

            return SchemaType;
        })();

        core.LiteralType = (function() {

            /**
             * Properties of a LiteralType.
             * @memberof flyteidl.core
             * @interface ILiteralType
             * @property {flyteidl.core.SimpleType|null} [simple] LiteralType simple
             * @property {flyteidl.core.ISchemaType|null} [schema] LiteralType schema
             * @property {flyteidl.core.ILiteralType|null} [collectionType] LiteralType collectionType
             * @property {flyteidl.core.ILiteralType|null} [mapValueType] LiteralType mapValueType
             */

            /**
             * Constructs a new LiteralType.
             * @memberof flyteidl.core
             * @classdesc Represents a LiteralType.
             * @implements ILiteralType
             * @constructor
             * @param {flyteidl.core.ILiteralType=} [properties] Properties to set
             */
            function LiteralType(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LiteralType simple.
             * @member {flyteidl.core.SimpleType} simple
             * @memberof flyteidl.core.LiteralType
             * @instance
             */
            LiteralType.prototype.simple = 0;

            /**
             * LiteralType schema.
             * @member {flyteidl.core.ISchemaType|null|undefined} schema
             * @memberof flyteidl.core.LiteralType
             * @instance
             */
            LiteralType.prototype.schema = null;

            /**
             * LiteralType collectionType.
             * @member {flyteidl.core.ILiteralType|null|undefined} collectionType
             * @memberof flyteidl.core.LiteralType
             * @instance
             */
            LiteralType.prototype.collectionType = null;

            /**
             * LiteralType mapValueType.
             * @member {flyteidl.core.ILiteralType|null|undefined} mapValueType
             * @memberof flyteidl.core.LiteralType
             * @instance
             */
            LiteralType.prototype.mapValueType = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * LiteralType type.
             * @member {"simple"|"schema"|"collectionType"|"mapValueType"|undefined} type
             * @memberof flyteidl.core.LiteralType
             * @instance
             */
            Object.defineProperty(LiteralType.prototype, "type", {
                get: $util.oneOfGetter($oneOfFields = ["simple", "schema", "collectionType", "mapValueType"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new LiteralType instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.LiteralType
             * @static
             * @param {flyteidl.core.ILiteralType=} [properties] Properties to set
             * @returns {flyteidl.core.LiteralType} LiteralType instance
             */
            LiteralType.create = function create(properties) {
                return new LiteralType(properties);
            };

            /**
             * Encodes the specified LiteralType message. Does not implicitly {@link flyteidl.core.LiteralType.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.LiteralType
             * @static
             * @param {flyteidl.core.ILiteralType} message LiteralType message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LiteralType.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.simple != null && message.hasOwnProperty("simple"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.simple);
                if (message.schema != null && message.hasOwnProperty("schema"))
                    $root.flyteidl.core.SchemaType.encode(message.schema, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.collectionType != null && message.hasOwnProperty("collectionType"))
                    $root.flyteidl.core.LiteralType.encode(message.collectionType, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.mapValueType != null && message.hasOwnProperty("mapValueType"))
                    $root.flyteidl.core.LiteralType.encode(message.mapValueType, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a LiteralType message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.LiteralType
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.LiteralType} LiteralType
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LiteralType.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.LiteralType();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.simple = reader.int32();
                        break;
                    case 2:
                        message.schema = $root.flyteidl.core.SchemaType.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.collectionType = $root.flyteidl.core.LiteralType.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.mapValueType = $root.flyteidl.core.LiteralType.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a LiteralType message.
             * @function verify
             * @memberof flyteidl.core.LiteralType
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LiteralType.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.simple != null && message.hasOwnProperty("simple")) {
                    properties.type = 1;
                    switch (message.simple) {
                    default:
                        return "simple: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                        break;
                    }
                }
                if (message.schema != null && message.hasOwnProperty("schema")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        let error = $root.flyteidl.core.SchemaType.verify(message.schema);
                        if (error)
                            return "schema." + error;
                    }
                }
                if (message.collectionType != null && message.hasOwnProperty("collectionType")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        let error = $root.flyteidl.core.LiteralType.verify(message.collectionType);
                        if (error)
                            return "collectionType." + error;
                    }
                }
                if (message.mapValueType != null && message.hasOwnProperty("mapValueType")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        let error = $root.flyteidl.core.LiteralType.verify(message.mapValueType);
                        if (error)
                            return "mapValueType." + error;
                    }
                }
                return null;
            };

            return LiteralType;
        })();

        core.OutputReference = (function() {

            /**
             * Properties of an OutputReference.
             * @memberof flyteidl.core
             * @interface IOutputReference
             * @property {string|null} [nodeId] OutputReference nodeId
             * @property {string|null} ["var"] OutputReference var
             */

            /**
             * Constructs a new OutputReference.
             * @memberof flyteidl.core
             * @classdesc Represents an OutputReference.
             * @implements IOutputReference
             * @constructor
             * @param {flyteidl.core.IOutputReference=} [properties] Properties to set
             */
            function OutputReference(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OutputReference nodeId.
             * @member {string} nodeId
             * @memberof flyteidl.core.OutputReference
             * @instance
             */
            OutputReference.prototype.nodeId = "";

            /**
             * OutputReference var.
             * @member {string} var
             * @memberof flyteidl.core.OutputReference
             * @instance
             */
            OutputReference.prototype["var"] = "";

            /**
             * Creates a new OutputReference instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.OutputReference
             * @static
             * @param {flyteidl.core.IOutputReference=} [properties] Properties to set
             * @returns {flyteidl.core.OutputReference} OutputReference instance
             */
            OutputReference.create = function create(properties) {
                return new OutputReference(properties);
            };

            /**
             * Encodes the specified OutputReference message. Does not implicitly {@link flyteidl.core.OutputReference.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.OutputReference
             * @static
             * @param {flyteidl.core.IOutputReference} message OutputReference message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OutputReference.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.nodeId != null && message.hasOwnProperty("nodeId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.nodeId);
                if (message["var"] != null && message.hasOwnProperty("var"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message["var"]);
                return writer;
            };

            /**
             * Decodes an OutputReference message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.OutputReference
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.OutputReference} OutputReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OutputReference.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.OutputReference();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.nodeId = reader.string();
                        break;
                    case 2:
                        message["var"] = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies an OutputReference message.
             * @function verify
             * @memberof flyteidl.core.OutputReference
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OutputReference.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.nodeId != null && message.hasOwnProperty("nodeId"))
                    if (!$util.isString(message.nodeId))
                        return "nodeId: string expected";
                if (message["var"] != null && message.hasOwnProperty("var"))
                    if (!$util.isString(message["var"]))
                        return "var: string expected";
                return null;
            };

            return OutputReference;
        })();

        core.Error = (function() {

            /**
             * Properties of an Error.
             * @memberof flyteidl.core
             * @interface IError
             * @property {string|null} [failedNodeId] Error failedNodeId
             * @property {string|null} [message] Error message
             */

            /**
             * Constructs a new Error.
             * @memberof flyteidl.core
             * @classdesc Represents an Error.
             * @implements IError
             * @constructor
             * @param {flyteidl.core.IError=} [properties] Properties to set
             */
            function Error(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Error failedNodeId.
             * @member {string} failedNodeId
             * @memberof flyteidl.core.Error
             * @instance
             */
            Error.prototype.failedNodeId = "";

            /**
             * Error message.
             * @member {string} message
             * @memberof flyteidl.core.Error
             * @instance
             */
            Error.prototype.message = "";

            /**
             * Creates a new Error instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.Error
             * @static
             * @param {flyteidl.core.IError=} [properties] Properties to set
             * @returns {flyteidl.core.Error} Error instance
             */
            Error.create = function create(properties) {
                return new Error(properties);
            };

            /**
             * Encodes the specified Error message. Does not implicitly {@link flyteidl.core.Error.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.Error
             * @static
             * @param {flyteidl.core.IError} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.failedNodeId != null && message.hasOwnProperty("failedNodeId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.failedNodeId);
                if (message.message != null && message.hasOwnProperty("message"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                return writer;
            };

            /**
             * Decodes an Error message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.Error} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.Error();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.failedNodeId = reader.string();
                        break;
                    case 2:
                        message.message = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies an Error message.
             * @function verify
             * @memberof flyteidl.core.Error
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Error.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.failedNodeId != null && message.hasOwnProperty("failedNodeId"))
                    if (!$util.isString(message.failedNodeId))
                        return "failedNodeId: string expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            return Error;
        })();

        core.Primitive = (function() {

            /**
             * Properties of a Primitive.
             * @memberof flyteidl.core
             * @interface IPrimitive
             * @property {Long|null} [integer] Primitive integer
             * @property {number|null} [floatValue] Primitive floatValue
             * @property {string|null} [stringValue] Primitive stringValue
             * @property {boolean|null} [boolean] Primitive boolean
             * @property {google.protobuf.ITimestamp|null} [datetime] Primitive datetime
             * @property {google.protobuf.IDuration|null} [duration] Primitive duration
             */

            /**
             * Constructs a new Primitive.
             * @memberof flyteidl.core
             * @classdesc Represents a Primitive.
             * @implements IPrimitive
             * @constructor
             * @param {flyteidl.core.IPrimitive=} [properties] Properties to set
             */
            function Primitive(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Primitive integer.
             * @member {Long} integer
             * @memberof flyteidl.core.Primitive
             * @instance
             */
            Primitive.prototype.integer = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Primitive floatValue.
             * @member {number} floatValue
             * @memberof flyteidl.core.Primitive
             * @instance
             */
            Primitive.prototype.floatValue = 0;

            /**
             * Primitive stringValue.
             * @member {string} stringValue
             * @memberof flyteidl.core.Primitive
             * @instance
             */
            Primitive.prototype.stringValue = "";

            /**
             * Primitive boolean.
             * @member {boolean} boolean
             * @memberof flyteidl.core.Primitive
             * @instance
             */
            Primitive.prototype.boolean = false;

            /**
             * Primitive datetime.
             * @member {google.protobuf.ITimestamp|null|undefined} datetime
             * @memberof flyteidl.core.Primitive
             * @instance
             */
            Primitive.prototype.datetime = null;

            /**
             * Primitive duration.
             * @member {google.protobuf.IDuration|null|undefined} duration
             * @memberof flyteidl.core.Primitive
             * @instance
             */
            Primitive.prototype.duration = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * Primitive value.
             * @member {"integer"|"floatValue"|"stringValue"|"boolean"|"datetime"|"duration"|undefined} value
             * @memberof flyteidl.core.Primitive
             * @instance
             */
            Object.defineProperty(Primitive.prototype, "value", {
                get: $util.oneOfGetter($oneOfFields = ["integer", "floatValue", "stringValue", "boolean", "datetime", "duration"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Primitive instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.Primitive
             * @static
             * @param {flyteidl.core.IPrimitive=} [properties] Properties to set
             * @returns {flyteidl.core.Primitive} Primitive instance
             */
            Primitive.create = function create(properties) {
                return new Primitive(properties);
            };

            /**
             * Encodes the specified Primitive message. Does not implicitly {@link flyteidl.core.Primitive.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.Primitive
             * @static
             * @param {flyteidl.core.IPrimitive} message Primitive message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Primitive.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.integer != null && message.hasOwnProperty("integer"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.integer);
                if (message.floatValue != null && message.hasOwnProperty("floatValue"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.floatValue);
                if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.stringValue);
                if (message.boolean != null && message.hasOwnProperty("boolean"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.boolean);
                if (message.datetime != null && message.hasOwnProperty("datetime"))
                    $root.google.protobuf.Timestamp.encode(message.datetime, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.duration != null && message.hasOwnProperty("duration"))
                    $root.google.protobuf.Duration.encode(message.duration, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a Primitive message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.Primitive
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.Primitive} Primitive
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Primitive.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.Primitive();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.integer = reader.int64();
                        break;
                    case 2:
                        message.floatValue = reader.double();
                        break;
                    case 3:
                        message.stringValue = reader.string();
                        break;
                    case 4:
                        message.boolean = reader.bool();
                        break;
                    case 5:
                        message.datetime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    case 6:
                        message.duration = $root.google.protobuf.Duration.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a Primitive message.
             * @function verify
             * @memberof flyteidl.core.Primitive
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Primitive.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.integer != null && message.hasOwnProperty("integer")) {
                    properties.value = 1;
                    if (!$util.isInteger(message.integer) && !(message.integer && $util.isInteger(message.integer.low) && $util.isInteger(message.integer.high)))
                        return "integer: integer|Long expected";
                }
                if (message.floatValue != null && message.hasOwnProperty("floatValue")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    if (typeof message.floatValue !== "number")
                        return "floatValue: number expected";
                }
                if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    if (!$util.isString(message.stringValue))
                        return "stringValue: string expected";
                }
                if (message.boolean != null && message.hasOwnProperty("boolean")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    if (typeof message.boolean !== "boolean")
                        return "boolean: boolean expected";
                }
                if (message.datetime != null && message.hasOwnProperty("datetime")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        let error = $root.google.protobuf.Timestamp.verify(message.datetime);
                        if (error)
                            return "datetime." + error;
                    }
                }
                if (message.duration != null && message.hasOwnProperty("duration")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        let error = $root.google.protobuf.Duration.verify(message.duration);
                        if (error)
                            return "duration." + error;
                    }
                }
                return null;
            };

            return Primitive;
        })();

        core.Void = (function() {

            /**
             * Properties of a Void.
             * @memberof flyteidl.core
             * @interface IVoid
             */

            /**
             * Constructs a new Void.
             * @memberof flyteidl.core
             * @classdesc Represents a Void.
             * @implements IVoid
             * @constructor
             * @param {flyteidl.core.IVoid=} [properties] Properties to set
             */
            function Void(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new Void instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.Void
             * @static
             * @param {flyteidl.core.IVoid=} [properties] Properties to set
             * @returns {flyteidl.core.Void} Void instance
             */
            Void.create = function create(properties) {
                return new Void(properties);
            };

            /**
             * Encodes the specified Void message. Does not implicitly {@link flyteidl.core.Void.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.Void
             * @static
             * @param {flyteidl.core.IVoid} message Void message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Void.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a Void message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.Void
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.Void} Void
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Void.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.Void();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a Void message.
             * @function verify
             * @memberof flyteidl.core.Void
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Void.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            return Void;
        })();

        core.Blob = (function() {

            /**
             * Properties of a Blob.
             * @memberof flyteidl.core
             * @interface IBlob
             * @property {flyteidl.core.IBlobMetadata|null} [metadata] Blob metadata
             * @property {string|null} [uri] Blob uri
             */

            /**
             * Constructs a new Blob.
             * @memberof flyteidl.core
             * @classdesc Represents a Blob.
             * @implements IBlob
             * @constructor
             * @param {flyteidl.core.IBlob=} [properties] Properties to set
             */
            function Blob(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Blob metadata.
             * @member {flyteidl.core.IBlobMetadata|null|undefined} metadata
             * @memberof flyteidl.core.Blob
             * @instance
             */
            Blob.prototype.metadata = null;

            /**
             * Blob uri.
             * @member {string} uri
             * @memberof flyteidl.core.Blob
             * @instance
             */
            Blob.prototype.uri = "";

            /**
             * Creates a new Blob instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.Blob
             * @static
             * @param {flyteidl.core.IBlob=} [properties] Properties to set
             * @returns {flyteidl.core.Blob} Blob instance
             */
            Blob.create = function create(properties) {
                return new Blob(properties);
            };

            /**
             * Encodes the specified Blob message. Does not implicitly {@link flyteidl.core.Blob.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.Blob
             * @static
             * @param {flyteidl.core.IBlob} message Blob message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Blob.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.metadata != null && message.hasOwnProperty("metadata"))
                    $root.flyteidl.core.BlobMetadata.encode(message.metadata, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.uri != null && message.hasOwnProperty("uri"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.uri);
                return writer;
            };

            /**
             * Decodes a Blob message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.Blob
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.Blob} Blob
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Blob.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.Blob();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.metadata = $root.flyteidl.core.BlobMetadata.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.uri = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a Blob message.
             * @function verify
             * @memberof flyteidl.core.Blob
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Blob.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.metadata != null && message.hasOwnProperty("metadata")) {
                    let error = $root.flyteidl.core.BlobMetadata.verify(message.metadata);
                    if (error)
                        return "metadata." + error;
                }
                if (message.uri != null && message.hasOwnProperty("uri"))
                    if (!$util.isString(message.uri))
                        return "uri: string expected";
                return null;
            };

            return Blob;
        })();

        core.BlobMetadata = (function() {

            /**
             * Properties of a BlobMetadata.
             * @memberof flyteidl.core
             * @interface IBlobMetadata
             * @property {string|null} [format] BlobMetadata format
             * @property {flyteidl.core.BlobMetadata.BlobType|null} [type] BlobMetadata type
             */

            /**
             * Constructs a new BlobMetadata.
             * @memberof flyteidl.core
             * @classdesc Represents a BlobMetadata.
             * @implements IBlobMetadata
             * @constructor
             * @param {flyteidl.core.IBlobMetadata=} [properties] Properties to set
             */
            function BlobMetadata(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BlobMetadata format.
             * @member {string} format
             * @memberof flyteidl.core.BlobMetadata
             * @instance
             */
            BlobMetadata.prototype.format = "";

            /**
             * BlobMetadata type.
             * @member {flyteidl.core.BlobMetadata.BlobType} type
             * @memberof flyteidl.core.BlobMetadata
             * @instance
             */
            BlobMetadata.prototype.type = 0;

            /**
             * Creates a new BlobMetadata instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.BlobMetadata
             * @static
             * @param {flyteidl.core.IBlobMetadata=} [properties] Properties to set
             * @returns {flyteidl.core.BlobMetadata} BlobMetadata instance
             */
            BlobMetadata.create = function create(properties) {
                return new BlobMetadata(properties);
            };

            /**
             * Encodes the specified BlobMetadata message. Does not implicitly {@link flyteidl.core.BlobMetadata.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.BlobMetadata
             * @static
             * @param {flyteidl.core.IBlobMetadata} message BlobMetadata message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BlobMetadata.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.format != null && message.hasOwnProperty("format"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.format);
                if (message.type != null && message.hasOwnProperty("type"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
                return writer;
            };

            /**
             * Decodes a BlobMetadata message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.BlobMetadata
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.BlobMetadata} BlobMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BlobMetadata.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.BlobMetadata();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.format = reader.string();
                        break;
                    case 2:
                        message.type = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a BlobMetadata message.
             * @function verify
             * @memberof flyteidl.core.BlobMetadata
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BlobMetadata.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.format != null && message.hasOwnProperty("format"))
                    if (!$util.isString(message.format))
                        return "format: string expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                return null;
            };

            /**
             * BlobType enum.
             * @name flyteidl.core.BlobMetadata.BlobType
             * @enum {string}
             * @property {number} Single=0 Single value
             * @property {number} Multipart=1 Multipart value
             */
            BlobMetadata.BlobType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "Single"] = 0;
                values[valuesById[1] = "Multipart"] = 1;
                return values;
            })();

            return BlobMetadata;
        })();

        core.Waitable = (function() {

            /**
             * Properties of a Waitable.
             * @memberof flyteidl.core
             * @interface IWaitable
             * @property {string|null} [surrogateKey] Waitable surrogateKey
             * @property {string|null} [executionUri] Waitable executionUri
             */

            /**
             * Constructs a new Waitable.
             * @memberof flyteidl.core
             * @classdesc Represents a Waitable.
             * @implements IWaitable
             * @constructor
             * @param {flyteidl.core.IWaitable=} [properties] Properties to set
             */
            function Waitable(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Waitable surrogateKey.
             * @member {string} surrogateKey
             * @memberof flyteidl.core.Waitable
             * @instance
             */
            Waitable.prototype.surrogateKey = "";

            /**
             * Waitable executionUri.
             * @member {string} executionUri
             * @memberof flyteidl.core.Waitable
             * @instance
             */
            Waitable.prototype.executionUri = "";

            /**
             * Creates a new Waitable instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.Waitable
             * @static
             * @param {flyteidl.core.IWaitable=} [properties] Properties to set
             * @returns {flyteidl.core.Waitable} Waitable instance
             */
            Waitable.create = function create(properties) {
                return new Waitable(properties);
            };

            /**
             * Encodes the specified Waitable message. Does not implicitly {@link flyteidl.core.Waitable.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.Waitable
             * @static
             * @param {flyteidl.core.IWaitable} message Waitable message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Waitable.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.surrogateKey != null && message.hasOwnProperty("surrogateKey"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.surrogateKey);
                if (message.executionUri != null && message.hasOwnProperty("executionUri"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.executionUri);
                return writer;
            };

            /**
             * Decodes a Waitable message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.Waitable
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.Waitable} Waitable
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Waitable.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.Waitable();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.surrogateKey = reader.string();
                        break;
                    case 2:
                        message.executionUri = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a Waitable message.
             * @function verify
             * @memberof flyteidl.core.Waitable
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Waitable.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.surrogateKey != null && message.hasOwnProperty("surrogateKey"))
                    if (!$util.isString(message.surrogateKey))
                        return "surrogateKey: string expected";
                if (message.executionUri != null && message.hasOwnProperty("executionUri"))
                    if (!$util.isString(message.executionUri))
                        return "executionUri: string expected";
                return null;
            };

            return Waitable;
        })();

        core.Binary = (function() {

            /**
             * Properties of a Binary.
             * @memberof flyteidl.core
             * @interface IBinary
             * @property {Uint8Array|null} [value] Binary value
             * @property {string|null} [tag] Binary tag
             */

            /**
             * Constructs a new Binary.
             * @memberof flyteidl.core
             * @classdesc Represents a Binary.
             * @implements IBinary
             * @constructor
             * @param {flyteidl.core.IBinary=} [properties] Properties to set
             */
            function Binary(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Binary value.
             * @member {Uint8Array} value
             * @memberof flyteidl.core.Binary
             * @instance
             */
            Binary.prototype.value = $util.newBuffer([]);

            /**
             * Binary tag.
             * @member {string} tag
             * @memberof flyteidl.core.Binary
             * @instance
             */
            Binary.prototype.tag = "";

            /**
             * Creates a new Binary instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.Binary
             * @static
             * @param {flyteidl.core.IBinary=} [properties] Properties to set
             * @returns {flyteidl.core.Binary} Binary instance
             */
            Binary.create = function create(properties) {
                return new Binary(properties);
            };

            /**
             * Encodes the specified Binary message. Does not implicitly {@link flyteidl.core.Binary.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.Binary
             * @static
             * @param {flyteidl.core.IBinary} message Binary message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Binary.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.value);
                if (message.tag != null && message.hasOwnProperty("tag"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.tag);
                return writer;
            };

            /**
             * Decodes a Binary message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.Binary
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.Binary} Binary
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Binary.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.Binary();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.bytes();
                        break;
                    case 2:
                        message.tag = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a Binary message.
             * @function verify
             * @memberof flyteidl.core.Binary
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Binary.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                        return "value: buffer expected";
                if (message.tag != null && message.hasOwnProperty("tag"))
                    if (!$util.isString(message.tag))
                        return "tag: string expected";
                return null;
            };

            return Binary;
        })();

        core.Schema = (function() {

            /**
             * Properties of a Schema.
             * @memberof flyteidl.core
             * @interface ISchema
             * @property {string|null} [uri] Schema uri
             * @property {flyteidl.core.ISchemaType|null} [type] Schema type
             */

            /**
             * Constructs a new Schema.
             * @memberof flyteidl.core
             * @classdesc Represents a Schema.
             * @implements ISchema
             * @constructor
             * @param {flyteidl.core.ISchema=} [properties] Properties to set
             */
            function Schema(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Schema uri.
             * @member {string} uri
             * @memberof flyteidl.core.Schema
             * @instance
             */
            Schema.prototype.uri = "";

            /**
             * Schema type.
             * @member {flyteidl.core.ISchemaType|null|undefined} type
             * @memberof flyteidl.core.Schema
             * @instance
             */
            Schema.prototype.type = null;

            /**
             * Creates a new Schema instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.Schema
             * @static
             * @param {flyteidl.core.ISchema=} [properties] Properties to set
             * @returns {flyteidl.core.Schema} Schema instance
             */
            Schema.create = function create(properties) {
                return new Schema(properties);
            };

            /**
             * Encodes the specified Schema message. Does not implicitly {@link flyteidl.core.Schema.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.Schema
             * @static
             * @param {flyteidl.core.ISchema} message Schema message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Schema.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uri != null && message.hasOwnProperty("uri"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
                if (message.type != null && message.hasOwnProperty("type"))
                    $root.flyteidl.core.SchemaType.encode(message.type, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a Schema message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.Schema
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.Schema} Schema
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Schema.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.Schema();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.uri = reader.string();
                        break;
                    case 3:
                        message.type = $root.flyteidl.core.SchemaType.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a Schema message.
             * @function verify
             * @memberof flyteidl.core.Schema
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Schema.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uri != null && message.hasOwnProperty("uri"))
                    if (!$util.isString(message.uri))
                        return "uri: string expected";
                if (message.type != null && message.hasOwnProperty("type")) {
                    let error = $root.flyteidl.core.SchemaType.verify(message.type);
                    if (error)
                        return "type." + error;
                }
                return null;
            };

            return Schema;
        })();

        core.Scalar = (function() {

            /**
             * Properties of a Scalar.
             * @memberof flyteidl.core
             * @interface IScalar
             * @property {flyteidl.core.IPrimitive|null} [primitive] Scalar primitive
             * @property {flyteidl.core.IBlob|null} [blob] Scalar blob
             * @property {flyteidl.core.IBinary|null} [binary] Scalar binary
             * @property {flyteidl.core.ISchema|null} [schema] Scalar schema
             * @property {flyteidl.core.IVoid|null} [noneType] Scalar noneType
             * @property {flyteidl.core.IWaitable|null} [waitable] Scalar waitable
             * @property {flyteidl.core.IError|null} [error] Scalar error
             */

            /**
             * Constructs a new Scalar.
             * @memberof flyteidl.core
             * @classdesc Represents a Scalar.
             * @implements IScalar
             * @constructor
             * @param {flyteidl.core.IScalar=} [properties] Properties to set
             */
            function Scalar(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Scalar primitive.
             * @member {flyteidl.core.IPrimitive|null|undefined} primitive
             * @memberof flyteidl.core.Scalar
             * @instance
             */
            Scalar.prototype.primitive = null;

            /**
             * Scalar blob.
             * @member {flyteidl.core.IBlob|null|undefined} blob
             * @memberof flyteidl.core.Scalar
             * @instance
             */
            Scalar.prototype.blob = null;

            /**
             * Scalar binary.
             * @member {flyteidl.core.IBinary|null|undefined} binary
             * @memberof flyteidl.core.Scalar
             * @instance
             */
            Scalar.prototype.binary = null;

            /**
             * Scalar schema.
             * @member {flyteidl.core.ISchema|null|undefined} schema
             * @memberof flyteidl.core.Scalar
             * @instance
             */
            Scalar.prototype.schema = null;

            /**
             * Scalar noneType.
             * @member {flyteidl.core.IVoid|null|undefined} noneType
             * @memberof flyteidl.core.Scalar
             * @instance
             */
            Scalar.prototype.noneType = null;

            /**
             * Scalar waitable.
             * @member {flyteidl.core.IWaitable|null|undefined} waitable
             * @memberof flyteidl.core.Scalar
             * @instance
             */
            Scalar.prototype.waitable = null;

            /**
             * Scalar error.
             * @member {flyteidl.core.IError|null|undefined} error
             * @memberof flyteidl.core.Scalar
             * @instance
             */
            Scalar.prototype.error = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * Scalar value.
             * @member {"primitive"|"blob"|"binary"|"schema"|"noneType"|"waitable"|"error"|undefined} value
             * @memberof flyteidl.core.Scalar
             * @instance
             */
            Object.defineProperty(Scalar.prototype, "value", {
                get: $util.oneOfGetter($oneOfFields = ["primitive", "blob", "binary", "schema", "noneType", "waitable", "error"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Scalar instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.Scalar
             * @static
             * @param {flyteidl.core.IScalar=} [properties] Properties to set
             * @returns {flyteidl.core.Scalar} Scalar instance
             */
            Scalar.create = function create(properties) {
                return new Scalar(properties);
            };

            /**
             * Encodes the specified Scalar message. Does not implicitly {@link flyteidl.core.Scalar.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.Scalar
             * @static
             * @param {flyteidl.core.IScalar} message Scalar message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Scalar.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.primitive != null && message.hasOwnProperty("primitive"))
                    $root.flyteidl.core.Primitive.encode(message.primitive, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.blob != null && message.hasOwnProperty("blob"))
                    $root.flyteidl.core.Blob.encode(message.blob, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.binary != null && message.hasOwnProperty("binary"))
                    $root.flyteidl.core.Binary.encode(message.binary, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.schema != null && message.hasOwnProperty("schema"))
                    $root.flyteidl.core.Schema.encode(message.schema, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.noneType != null && message.hasOwnProperty("noneType"))
                    $root.flyteidl.core.Void.encode(message.noneType, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.waitable != null && message.hasOwnProperty("waitable"))
                    $root.flyteidl.core.Waitable.encode(message.waitable, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.error != null && message.hasOwnProperty("error"))
                    $root.flyteidl.core.Error.encode(message.error, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a Scalar message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.Scalar
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.Scalar} Scalar
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Scalar.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.Scalar();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.primitive = $root.flyteidl.core.Primitive.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.blob = $root.flyteidl.core.Blob.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.binary = $root.flyteidl.core.Binary.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.schema = $root.flyteidl.core.Schema.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.noneType = $root.flyteidl.core.Void.decode(reader, reader.uint32());
                        break;
                    case 6:
                        message.waitable = $root.flyteidl.core.Waitable.decode(reader, reader.uint32());
                        break;
                    case 7:
                        message.error = $root.flyteidl.core.Error.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a Scalar message.
             * @function verify
             * @memberof flyteidl.core.Scalar
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Scalar.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.primitive != null && message.hasOwnProperty("primitive")) {
                    properties.value = 1;
                    {
                        let error = $root.flyteidl.core.Primitive.verify(message.primitive);
                        if (error)
                            return "primitive." + error;
                    }
                }
                if (message.blob != null && message.hasOwnProperty("blob")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        let error = $root.flyteidl.core.Blob.verify(message.blob);
                        if (error)
                            return "blob." + error;
                    }
                }
                if (message.binary != null && message.hasOwnProperty("binary")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        let error = $root.flyteidl.core.Binary.verify(message.binary);
                        if (error)
                            return "binary." + error;
                    }
                }
                if (message.schema != null && message.hasOwnProperty("schema")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        let error = $root.flyteidl.core.Schema.verify(message.schema);
                        if (error)
                            return "schema." + error;
                    }
                }
                if (message.noneType != null && message.hasOwnProperty("noneType")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        let error = $root.flyteidl.core.Void.verify(message.noneType);
                        if (error)
                            return "noneType." + error;
                    }
                }
                if (message.waitable != null && message.hasOwnProperty("waitable")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        let error = $root.flyteidl.core.Waitable.verify(message.waitable);
                        if (error)
                            return "waitable." + error;
                    }
                }
                if (message.error != null && message.hasOwnProperty("error")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        let error = $root.flyteidl.core.Error.verify(message.error);
                        if (error)
                            return "error." + error;
                    }
                }
                return null;
            };

            return Scalar;
        })();

        core.Literal = (function() {

            /**
             * Properties of a Literal.
             * @memberof flyteidl.core
             * @interface ILiteral
             * @property {flyteidl.core.IScalar|null} [scalar] Literal scalar
             * @property {flyteidl.core.ILiteralCollection|null} [collection] Literal collection
             * @property {flyteidl.core.ILiteralMap|null} [map] Literal map
             */

            /**
             * Constructs a new Literal.
             * @memberof flyteidl.core
             * @classdesc Represents a Literal.
             * @implements ILiteral
             * @constructor
             * @param {flyteidl.core.ILiteral=} [properties] Properties to set
             */
            function Literal(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Literal scalar.
             * @member {flyteidl.core.IScalar|null|undefined} scalar
             * @memberof flyteidl.core.Literal
             * @instance
             */
            Literal.prototype.scalar = null;

            /**
             * Literal collection.
             * @member {flyteidl.core.ILiteralCollection|null|undefined} collection
             * @memberof flyteidl.core.Literal
             * @instance
             */
            Literal.prototype.collection = null;

            /**
             * Literal map.
             * @member {flyteidl.core.ILiteralMap|null|undefined} map
             * @memberof flyteidl.core.Literal
             * @instance
             */
            Literal.prototype.map = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * Literal value.
             * @member {"scalar"|"collection"|"map"|undefined} value
             * @memberof flyteidl.core.Literal
             * @instance
             */
            Object.defineProperty(Literal.prototype, "value", {
                get: $util.oneOfGetter($oneOfFields = ["scalar", "collection", "map"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Literal instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.Literal
             * @static
             * @param {flyteidl.core.ILiteral=} [properties] Properties to set
             * @returns {flyteidl.core.Literal} Literal instance
             */
            Literal.create = function create(properties) {
                return new Literal(properties);
            };

            /**
             * Encodes the specified Literal message. Does not implicitly {@link flyteidl.core.Literal.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.Literal
             * @static
             * @param {flyteidl.core.ILiteral} message Literal message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Literal.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.scalar != null && message.hasOwnProperty("scalar"))
                    $root.flyteidl.core.Scalar.encode(message.scalar, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.collection != null && message.hasOwnProperty("collection"))
                    $root.flyteidl.core.LiteralCollection.encode(message.collection, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.map != null && message.hasOwnProperty("map"))
                    $root.flyteidl.core.LiteralMap.encode(message.map, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a Literal message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.Literal
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.Literal} Literal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Literal.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.Literal();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.scalar = $root.flyteidl.core.Scalar.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.collection = $root.flyteidl.core.LiteralCollection.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.map = $root.flyteidl.core.LiteralMap.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a Literal message.
             * @function verify
             * @memberof flyteidl.core.Literal
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Literal.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.scalar != null && message.hasOwnProperty("scalar")) {
                    properties.value = 1;
                    {
                        let error = $root.flyteidl.core.Scalar.verify(message.scalar);
                        if (error)
                            return "scalar." + error;
                    }
                }
                if (message.collection != null && message.hasOwnProperty("collection")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        let error = $root.flyteidl.core.LiteralCollection.verify(message.collection);
                        if (error)
                            return "collection." + error;
                    }
                }
                if (message.map != null && message.hasOwnProperty("map")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        let error = $root.flyteidl.core.LiteralMap.verify(message.map);
                        if (error)
                            return "map." + error;
                    }
                }
                return null;
            };

            return Literal;
        })();

        core.LiteralCollection = (function() {

            /**
             * Properties of a LiteralCollection.
             * @memberof flyteidl.core
             * @interface ILiteralCollection
             * @property {Array.<flyteidl.core.ILiteral>|null} [literals] LiteralCollection literals
             */

            /**
             * Constructs a new LiteralCollection.
             * @memberof flyteidl.core
             * @classdesc Represents a LiteralCollection.
             * @implements ILiteralCollection
             * @constructor
             * @param {flyteidl.core.ILiteralCollection=} [properties] Properties to set
             */
            function LiteralCollection(properties) {
                this.literals = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LiteralCollection literals.
             * @member {Array.<flyteidl.core.ILiteral>} literals
             * @memberof flyteidl.core.LiteralCollection
             * @instance
             */
            LiteralCollection.prototype.literals = $util.emptyArray;

            /**
             * Creates a new LiteralCollection instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.LiteralCollection
             * @static
             * @param {flyteidl.core.ILiteralCollection=} [properties] Properties to set
             * @returns {flyteidl.core.LiteralCollection} LiteralCollection instance
             */
            LiteralCollection.create = function create(properties) {
                return new LiteralCollection(properties);
            };

            /**
             * Encodes the specified LiteralCollection message. Does not implicitly {@link flyteidl.core.LiteralCollection.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.LiteralCollection
             * @static
             * @param {flyteidl.core.ILiteralCollection} message LiteralCollection message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LiteralCollection.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.literals != null && message.literals.length)
                    for (let i = 0; i < message.literals.length; ++i)
                        $root.flyteidl.core.Literal.encode(message.literals[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a LiteralCollection message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.LiteralCollection
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.LiteralCollection} LiteralCollection
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LiteralCollection.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.LiteralCollection();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.literals && message.literals.length))
                            message.literals = [];
                        message.literals.push($root.flyteidl.core.Literal.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a LiteralCollection message.
             * @function verify
             * @memberof flyteidl.core.LiteralCollection
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LiteralCollection.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.literals != null && message.hasOwnProperty("literals")) {
                    if (!Array.isArray(message.literals))
                        return "literals: array expected";
                    for (let i = 0; i < message.literals.length; ++i) {
                        let error = $root.flyteidl.core.Literal.verify(message.literals[i]);
                        if (error)
                            return "literals." + error;
                    }
                }
                return null;
            };

            return LiteralCollection;
        })();

        core.LiteralMap = (function() {

            /**
             * Properties of a LiteralMap.
             * @memberof flyteidl.core
             * @interface ILiteralMap
             * @property {Object.<string,flyteidl.core.ILiteral>|null} [literals] LiteralMap literals
             */

            /**
             * Constructs a new LiteralMap.
             * @memberof flyteidl.core
             * @classdesc Represents a LiteralMap.
             * @implements ILiteralMap
             * @constructor
             * @param {flyteidl.core.ILiteralMap=} [properties] Properties to set
             */
            function LiteralMap(properties) {
                this.literals = {};
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LiteralMap literals.
             * @member {Object.<string,flyteidl.core.ILiteral>} literals
             * @memberof flyteidl.core.LiteralMap
             * @instance
             */
            LiteralMap.prototype.literals = $util.emptyObject;

            /**
             * Creates a new LiteralMap instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.LiteralMap
             * @static
             * @param {flyteidl.core.ILiteralMap=} [properties] Properties to set
             * @returns {flyteidl.core.LiteralMap} LiteralMap instance
             */
            LiteralMap.create = function create(properties) {
                return new LiteralMap(properties);
            };

            /**
             * Encodes the specified LiteralMap message. Does not implicitly {@link flyteidl.core.LiteralMap.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.LiteralMap
             * @static
             * @param {flyteidl.core.ILiteralMap} message LiteralMap message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LiteralMap.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.literals != null && message.hasOwnProperty("literals"))
                    for (let keys = Object.keys(message.literals), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                        $root.flyteidl.core.Literal.encode(message.literals[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                return writer;
            };

            /**
             * Decodes a LiteralMap message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.LiteralMap
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.LiteralMap} LiteralMap
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LiteralMap.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.LiteralMap(), key;
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        reader.skip().pos++;
                        if (message.literals === $util.emptyObject)
                            message.literals = {};
                        key = reader.string();
                        reader.pos++;
                        message.literals[key] = $root.flyteidl.core.Literal.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a LiteralMap message.
             * @function verify
             * @memberof flyteidl.core.LiteralMap
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LiteralMap.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.literals != null && message.hasOwnProperty("literals")) {
                    if (!$util.isObject(message.literals))
                        return "literals: object expected";
                    let key = Object.keys(message.literals);
                    for (let i = 0; i < key.length; ++i) {
                        let error = $root.flyteidl.core.Literal.verify(message.literals[key[i]]);
                        if (error)
                            return "literals." + error;
                    }
                }
                return null;
            };

            return LiteralMap;
        })();

        core.BindingDataCollection = (function() {

            /**
             * Properties of a BindingDataCollection.
             * @memberof flyteidl.core
             * @interface IBindingDataCollection
             * @property {Array.<flyteidl.core.IBindingData>|null} [bindings] BindingDataCollection bindings
             */

            /**
             * Constructs a new BindingDataCollection.
             * @memberof flyteidl.core
             * @classdesc Represents a BindingDataCollection.
             * @implements IBindingDataCollection
             * @constructor
             * @param {flyteidl.core.IBindingDataCollection=} [properties] Properties to set
             */
            function BindingDataCollection(properties) {
                this.bindings = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BindingDataCollection bindings.
             * @member {Array.<flyteidl.core.IBindingData>} bindings
             * @memberof flyteidl.core.BindingDataCollection
             * @instance
             */
            BindingDataCollection.prototype.bindings = $util.emptyArray;

            /**
             * Creates a new BindingDataCollection instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.BindingDataCollection
             * @static
             * @param {flyteidl.core.IBindingDataCollection=} [properties] Properties to set
             * @returns {flyteidl.core.BindingDataCollection} BindingDataCollection instance
             */
            BindingDataCollection.create = function create(properties) {
                return new BindingDataCollection(properties);
            };

            /**
             * Encodes the specified BindingDataCollection message. Does not implicitly {@link flyteidl.core.BindingDataCollection.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.BindingDataCollection
             * @static
             * @param {flyteidl.core.IBindingDataCollection} message BindingDataCollection message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BindingDataCollection.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.bindings != null && message.bindings.length)
                    for (let i = 0; i < message.bindings.length; ++i)
                        $root.flyteidl.core.BindingData.encode(message.bindings[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a BindingDataCollection message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.BindingDataCollection
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.BindingDataCollection} BindingDataCollection
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BindingDataCollection.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.BindingDataCollection();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.bindings && message.bindings.length))
                            message.bindings = [];
                        message.bindings.push($root.flyteidl.core.BindingData.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a BindingDataCollection message.
             * @function verify
             * @memberof flyteidl.core.BindingDataCollection
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BindingDataCollection.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.bindings != null && message.hasOwnProperty("bindings")) {
                    if (!Array.isArray(message.bindings))
                        return "bindings: array expected";
                    for (let i = 0; i < message.bindings.length; ++i) {
                        let error = $root.flyteidl.core.BindingData.verify(message.bindings[i]);
                        if (error)
                            return "bindings." + error;
                    }
                }
                return null;
            };

            return BindingDataCollection;
        })();

        core.BindingDataMap = (function() {

            /**
             * Properties of a BindingDataMap.
             * @memberof flyteidl.core
             * @interface IBindingDataMap
             * @property {Object.<string,flyteidl.core.IBindingData>|null} [bindings] BindingDataMap bindings
             */

            /**
             * Constructs a new BindingDataMap.
             * @memberof flyteidl.core
             * @classdesc Represents a BindingDataMap.
             * @implements IBindingDataMap
             * @constructor
             * @param {flyteidl.core.IBindingDataMap=} [properties] Properties to set
             */
            function BindingDataMap(properties) {
                this.bindings = {};
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BindingDataMap bindings.
             * @member {Object.<string,flyteidl.core.IBindingData>} bindings
             * @memberof flyteidl.core.BindingDataMap
             * @instance
             */
            BindingDataMap.prototype.bindings = $util.emptyObject;

            /**
             * Creates a new BindingDataMap instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.BindingDataMap
             * @static
             * @param {flyteidl.core.IBindingDataMap=} [properties] Properties to set
             * @returns {flyteidl.core.BindingDataMap} BindingDataMap instance
             */
            BindingDataMap.create = function create(properties) {
                return new BindingDataMap(properties);
            };

            /**
             * Encodes the specified BindingDataMap message. Does not implicitly {@link flyteidl.core.BindingDataMap.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.BindingDataMap
             * @static
             * @param {flyteidl.core.IBindingDataMap} message BindingDataMap message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BindingDataMap.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.bindings != null && message.hasOwnProperty("bindings"))
                    for (let keys = Object.keys(message.bindings), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                        $root.flyteidl.core.BindingData.encode(message.bindings[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                return writer;
            };

            /**
             * Decodes a BindingDataMap message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.BindingDataMap
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.BindingDataMap} BindingDataMap
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BindingDataMap.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.BindingDataMap(), key;
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        reader.skip().pos++;
                        if (message.bindings === $util.emptyObject)
                            message.bindings = {};
                        key = reader.string();
                        reader.pos++;
                        message.bindings[key] = $root.flyteidl.core.BindingData.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a BindingDataMap message.
             * @function verify
             * @memberof flyteidl.core.BindingDataMap
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BindingDataMap.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.bindings != null && message.hasOwnProperty("bindings")) {
                    if (!$util.isObject(message.bindings))
                        return "bindings: object expected";
                    let key = Object.keys(message.bindings);
                    for (let i = 0; i < key.length; ++i) {
                        let error = $root.flyteidl.core.BindingData.verify(message.bindings[key[i]]);
                        if (error)
                            return "bindings." + error;
                    }
                }
                return null;
            };

            return BindingDataMap;
        })();

        core.BindingData = (function() {

            /**
             * Properties of a BindingData.
             * @memberof flyteidl.core
             * @interface IBindingData
             * @property {flyteidl.core.IScalar|null} [scalar] BindingData scalar
             * @property {flyteidl.core.IBindingDataCollection|null} [collection] BindingData collection
             * @property {flyteidl.core.IOutputReference|null} [promise] BindingData promise
             * @property {flyteidl.core.IBindingDataMap|null} [map] BindingData map
             */

            /**
             * Constructs a new BindingData.
             * @memberof flyteidl.core
             * @classdesc Represents a BindingData.
             * @implements IBindingData
             * @constructor
             * @param {flyteidl.core.IBindingData=} [properties] Properties to set
             */
            function BindingData(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BindingData scalar.
             * @member {flyteidl.core.IScalar|null|undefined} scalar
             * @memberof flyteidl.core.BindingData
             * @instance
             */
            BindingData.prototype.scalar = null;

            /**
             * BindingData collection.
             * @member {flyteidl.core.IBindingDataCollection|null|undefined} collection
             * @memberof flyteidl.core.BindingData
             * @instance
             */
            BindingData.prototype.collection = null;

            /**
             * BindingData promise.
             * @member {flyteidl.core.IOutputReference|null|undefined} promise
             * @memberof flyteidl.core.BindingData
             * @instance
             */
            BindingData.prototype.promise = null;

            /**
             * BindingData map.
             * @member {flyteidl.core.IBindingDataMap|null|undefined} map
             * @memberof flyteidl.core.BindingData
             * @instance
             */
            BindingData.prototype.map = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * BindingData value.
             * @member {"scalar"|"collection"|"promise"|"map"|undefined} value
             * @memberof flyteidl.core.BindingData
             * @instance
             */
            Object.defineProperty(BindingData.prototype, "value", {
                get: $util.oneOfGetter($oneOfFields = ["scalar", "collection", "promise", "map"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new BindingData instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.BindingData
             * @static
             * @param {flyteidl.core.IBindingData=} [properties] Properties to set
             * @returns {flyteidl.core.BindingData} BindingData instance
             */
            BindingData.create = function create(properties) {
                return new BindingData(properties);
            };

            /**
             * Encodes the specified BindingData message. Does not implicitly {@link flyteidl.core.BindingData.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.BindingData
             * @static
             * @param {flyteidl.core.IBindingData} message BindingData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BindingData.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.scalar != null && message.hasOwnProperty("scalar"))
                    $root.flyteidl.core.Scalar.encode(message.scalar, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.collection != null && message.hasOwnProperty("collection"))
                    $root.flyteidl.core.BindingDataCollection.encode(message.collection, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.promise != null && message.hasOwnProperty("promise"))
                    $root.flyteidl.core.OutputReference.encode(message.promise, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.map != null && message.hasOwnProperty("map"))
                    $root.flyteidl.core.BindingDataMap.encode(message.map, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a BindingData message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.BindingData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.BindingData} BindingData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BindingData.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.BindingData();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.scalar = $root.flyteidl.core.Scalar.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.collection = $root.flyteidl.core.BindingDataCollection.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.promise = $root.flyteidl.core.OutputReference.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.map = $root.flyteidl.core.BindingDataMap.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a BindingData message.
             * @function verify
             * @memberof flyteidl.core.BindingData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BindingData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.scalar != null && message.hasOwnProperty("scalar")) {
                    properties.value = 1;
                    {
                        let error = $root.flyteidl.core.Scalar.verify(message.scalar);
                        if (error)
                            return "scalar." + error;
                    }
                }
                if (message.collection != null && message.hasOwnProperty("collection")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        let error = $root.flyteidl.core.BindingDataCollection.verify(message.collection);
                        if (error)
                            return "collection." + error;
                    }
                }
                if (message.promise != null && message.hasOwnProperty("promise")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        let error = $root.flyteidl.core.OutputReference.verify(message.promise);
                        if (error)
                            return "promise." + error;
                    }
                }
                if (message.map != null && message.hasOwnProperty("map")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        let error = $root.flyteidl.core.BindingDataMap.verify(message.map);
                        if (error)
                            return "map." + error;
                    }
                }
                return null;
            };

            return BindingData;
        })();

        core.Binding = (function() {

            /**
             * Properties of a Binding.
             * @memberof flyteidl.core
             * @interface IBinding
             * @property {string|null} ["var"] Binding var
             * @property {flyteidl.core.IBindingData|null} [binding] Binding binding
             */

            /**
             * Constructs a new Binding.
             * @memberof flyteidl.core
             * @classdesc Represents a Binding.
             * @implements IBinding
             * @constructor
             * @param {flyteidl.core.IBinding=} [properties] Properties to set
             */
            function Binding(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Binding var.
             * @member {string} var
             * @memberof flyteidl.core.Binding
             * @instance
             */
            Binding.prototype["var"] = "";

            /**
             * Binding binding.
             * @member {flyteidl.core.IBindingData|null|undefined} binding
             * @memberof flyteidl.core.Binding
             * @instance
             */
            Binding.prototype.binding = null;

            /**
             * Creates a new Binding instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.Binding
             * @static
             * @param {flyteidl.core.IBinding=} [properties] Properties to set
             * @returns {flyteidl.core.Binding} Binding instance
             */
            Binding.create = function create(properties) {
                return new Binding(properties);
            };

            /**
             * Encodes the specified Binding message. Does not implicitly {@link flyteidl.core.Binding.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.Binding
             * @static
             * @param {flyteidl.core.IBinding} message Binding message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Binding.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message["var"] != null && message.hasOwnProperty("var"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message["var"]);
                if (message.binding != null && message.hasOwnProperty("binding"))
                    $root.flyteidl.core.BindingData.encode(message.binding, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a Binding message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.Binding
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.Binding} Binding
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Binding.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.Binding();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message["var"] = reader.string();
                        break;
                    case 2:
                        message.binding = $root.flyteidl.core.BindingData.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a Binding message.
             * @function verify
             * @memberof flyteidl.core.Binding
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Binding.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message["var"] != null && message.hasOwnProperty("var"))
                    if (!$util.isString(message["var"]))
                        return "var: string expected";
                if (message.binding != null && message.hasOwnProperty("binding")) {
                    let error = $root.flyteidl.core.BindingData.verify(message.binding);
                    if (error)
                        return "binding." + error;
                }
                return null;
            };

            return Binding;
        })();

        core.KeyValuePair = (function() {

            /**
             * Properties of a KeyValuePair.
             * @memberof flyteidl.core
             * @interface IKeyValuePair
             * @property {string|null} [key] KeyValuePair key
             * @property {string|null} [value] KeyValuePair value
             */

            /**
             * Constructs a new KeyValuePair.
             * @memberof flyteidl.core
             * @classdesc Represents a KeyValuePair.
             * @implements IKeyValuePair
             * @constructor
             * @param {flyteidl.core.IKeyValuePair=} [properties] Properties to set
             */
            function KeyValuePair(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * KeyValuePair key.
             * @member {string} key
             * @memberof flyteidl.core.KeyValuePair
             * @instance
             */
            KeyValuePair.prototype.key = "";

            /**
             * KeyValuePair value.
             * @member {string} value
             * @memberof flyteidl.core.KeyValuePair
             * @instance
             */
            KeyValuePair.prototype.value = "";

            /**
             * Creates a new KeyValuePair instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.KeyValuePair
             * @static
             * @param {flyteidl.core.IKeyValuePair=} [properties] Properties to set
             * @returns {flyteidl.core.KeyValuePair} KeyValuePair instance
             */
            KeyValuePair.create = function create(properties) {
                return new KeyValuePair(properties);
            };

            /**
             * Encodes the specified KeyValuePair message. Does not implicitly {@link flyteidl.core.KeyValuePair.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.KeyValuePair
             * @static
             * @param {flyteidl.core.IKeyValuePair} message KeyValuePair message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            KeyValuePair.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.key != null && message.hasOwnProperty("key"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
                return writer;
            };

            /**
             * Decodes a KeyValuePair message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.KeyValuePair
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.KeyValuePair} KeyValuePair
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            KeyValuePair.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.KeyValuePair();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.key = reader.string();
                        break;
                    case 2:
                        message.value = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a KeyValuePair message.
             * @function verify
             * @memberof flyteidl.core.KeyValuePair
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            KeyValuePair.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.key != null && message.hasOwnProperty("key"))
                    if (!$util.isString(message.key))
                        return "key: string expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isString(message.value))
                        return "value: string expected";
                return null;
            };

            return KeyValuePair;
        })();

        core.RetryStrategy = (function() {

            /**
             * Properties of a RetryStrategy.
             * @memberof flyteidl.core
             * @interface IRetryStrategy
             * @property {number|null} [retries] RetryStrategy retries
             */

            /**
             * Constructs a new RetryStrategy.
             * @memberof flyteidl.core
             * @classdesc Represents a RetryStrategy.
             * @implements IRetryStrategy
             * @constructor
             * @param {flyteidl.core.IRetryStrategy=} [properties] Properties to set
             */
            function RetryStrategy(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RetryStrategy retries.
             * @member {number} retries
             * @memberof flyteidl.core.RetryStrategy
             * @instance
             */
            RetryStrategy.prototype.retries = 0;

            /**
             * Creates a new RetryStrategy instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.RetryStrategy
             * @static
             * @param {flyteidl.core.IRetryStrategy=} [properties] Properties to set
             * @returns {flyteidl.core.RetryStrategy} RetryStrategy instance
             */
            RetryStrategy.create = function create(properties) {
                return new RetryStrategy(properties);
            };

            /**
             * Encodes the specified RetryStrategy message. Does not implicitly {@link flyteidl.core.RetryStrategy.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.RetryStrategy
             * @static
             * @param {flyteidl.core.IRetryStrategy} message RetryStrategy message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RetryStrategy.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.retries != null && message.hasOwnProperty("retries"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.retries);
                return writer;
            };

            /**
             * Decodes a RetryStrategy message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.RetryStrategy
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.RetryStrategy} RetryStrategy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RetryStrategy.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.RetryStrategy();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 5:
                        message.retries = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a RetryStrategy message.
             * @function verify
             * @memberof flyteidl.core.RetryStrategy
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RetryStrategy.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.retries != null && message.hasOwnProperty("retries"))
                    if (!$util.isInteger(message.retries))
                        return "retries: integer expected";
                return null;
            };

            return RetryStrategy;
        })();

        core.ComparisonExpression = (function() {

            /**
             * Properties of a ComparisonExpression.
             * @memberof flyteidl.core
             * @interface IComparisonExpression
             * @property {flyteidl.core.ComparisonExpression.Operator|null} [operator] ComparisonExpression operator
             * @property {flyteidl.core.IOperand|null} [leftValue] ComparisonExpression leftValue
             * @property {flyteidl.core.IOperand|null} [rightValue] ComparisonExpression rightValue
             */

            /**
             * Constructs a new ComparisonExpression.
             * @memberof flyteidl.core
             * @classdesc Represents a ComparisonExpression.
             * @implements IComparisonExpression
             * @constructor
             * @param {flyteidl.core.IComparisonExpression=} [properties] Properties to set
             */
            function ComparisonExpression(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ComparisonExpression operator.
             * @member {flyteidl.core.ComparisonExpression.Operator} operator
             * @memberof flyteidl.core.ComparisonExpression
             * @instance
             */
            ComparisonExpression.prototype.operator = 0;

            /**
             * ComparisonExpression leftValue.
             * @member {flyteidl.core.IOperand|null|undefined} leftValue
             * @memberof flyteidl.core.ComparisonExpression
             * @instance
             */
            ComparisonExpression.prototype.leftValue = null;

            /**
             * ComparisonExpression rightValue.
             * @member {flyteidl.core.IOperand|null|undefined} rightValue
             * @memberof flyteidl.core.ComparisonExpression
             * @instance
             */
            ComparisonExpression.prototype.rightValue = null;

            /**
             * Creates a new ComparisonExpression instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.ComparisonExpression
             * @static
             * @param {flyteidl.core.IComparisonExpression=} [properties] Properties to set
             * @returns {flyteidl.core.ComparisonExpression} ComparisonExpression instance
             */
            ComparisonExpression.create = function create(properties) {
                return new ComparisonExpression(properties);
            };

            /**
             * Encodes the specified ComparisonExpression message. Does not implicitly {@link flyteidl.core.ComparisonExpression.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.ComparisonExpression
             * @static
             * @param {flyteidl.core.IComparisonExpression} message ComparisonExpression message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ComparisonExpression.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.operator != null && message.hasOwnProperty("operator"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.operator);
                if (message.leftValue != null && message.hasOwnProperty("leftValue"))
                    $root.flyteidl.core.Operand.encode(message.leftValue, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.rightValue != null && message.hasOwnProperty("rightValue"))
                    $root.flyteidl.core.Operand.encode(message.rightValue, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a ComparisonExpression message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.ComparisonExpression
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.ComparisonExpression} ComparisonExpression
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ComparisonExpression.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.ComparisonExpression();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.operator = reader.int32();
                        break;
                    case 2:
                        message.leftValue = $root.flyteidl.core.Operand.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.rightValue = $root.flyteidl.core.Operand.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a ComparisonExpression message.
             * @function verify
             * @memberof flyteidl.core.ComparisonExpression
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ComparisonExpression.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.operator != null && message.hasOwnProperty("operator"))
                    switch (message.operator) {
                    default:
                        return "operator: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    }
                if (message.leftValue != null && message.hasOwnProperty("leftValue")) {
                    let error = $root.flyteidl.core.Operand.verify(message.leftValue);
                    if (error)
                        return "leftValue." + error;
                }
                if (message.rightValue != null && message.hasOwnProperty("rightValue")) {
                    let error = $root.flyteidl.core.Operand.verify(message.rightValue);
                    if (error)
                        return "rightValue." + error;
                }
                return null;
            };

            /**
             * Operator enum.
             * @name flyteidl.core.ComparisonExpression.Operator
             * @enum {string}
             * @property {number} EQ=0 EQ value
             * @property {number} NEQ=1 NEQ value
             * @property {number} GT=2 GT value
             * @property {number} GTE=3 GTE value
             * @property {number} LT=4 LT value
             * @property {number} LTE=5 LTE value
             */
            ComparisonExpression.Operator = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "EQ"] = 0;
                values[valuesById[1] = "NEQ"] = 1;
                values[valuesById[2] = "GT"] = 2;
                values[valuesById[3] = "GTE"] = 3;
                values[valuesById[4] = "LT"] = 4;
                values[valuesById[5] = "LTE"] = 5;
                return values;
            })();

            return ComparisonExpression;
        })();

        core.Operand = (function() {

            /**
             * Properties of an Operand.
             * @memberof flyteidl.core
             * @interface IOperand
             * @property {flyteidl.core.IPrimitive|null} [primitive] Operand primitive
             * @property {string|null} ["var"] Operand var
             */

            /**
             * Constructs a new Operand.
             * @memberof flyteidl.core
             * @classdesc Represents an Operand.
             * @implements IOperand
             * @constructor
             * @param {flyteidl.core.IOperand=} [properties] Properties to set
             */
            function Operand(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Operand primitive.
             * @member {flyteidl.core.IPrimitive|null|undefined} primitive
             * @memberof flyteidl.core.Operand
             * @instance
             */
            Operand.prototype.primitive = null;

            /**
             * Operand var.
             * @member {string} var
             * @memberof flyteidl.core.Operand
             * @instance
             */
            Operand.prototype["var"] = "";

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * Operand val.
             * @member {"primitive"|"var"|undefined} val
             * @memberof flyteidl.core.Operand
             * @instance
             */
            Object.defineProperty(Operand.prototype, "val", {
                get: $util.oneOfGetter($oneOfFields = ["primitive", "var"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Operand instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.Operand
             * @static
             * @param {flyteidl.core.IOperand=} [properties] Properties to set
             * @returns {flyteidl.core.Operand} Operand instance
             */
            Operand.create = function create(properties) {
                return new Operand(properties);
            };

            /**
             * Encodes the specified Operand message. Does not implicitly {@link flyteidl.core.Operand.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.Operand
             * @static
             * @param {flyteidl.core.IOperand} message Operand message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Operand.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.primitive != null && message.hasOwnProperty("primitive"))
                    $root.flyteidl.core.Primitive.encode(message.primitive, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message["var"] != null && message.hasOwnProperty("var"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message["var"]);
                return writer;
            };

            /**
             * Decodes an Operand message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.Operand
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.Operand} Operand
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Operand.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.Operand();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.primitive = $root.flyteidl.core.Primitive.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message["var"] = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies an Operand message.
             * @function verify
             * @memberof flyteidl.core.Operand
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Operand.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.primitive != null && message.hasOwnProperty("primitive")) {
                    properties.val = 1;
                    {
                        let error = $root.flyteidl.core.Primitive.verify(message.primitive);
                        if (error)
                            return "primitive." + error;
                    }
                }
                if (message["var"] != null && message.hasOwnProperty("var")) {
                    if (properties.val === 1)
                        return "val: multiple values";
                    properties.val = 1;
                    if (!$util.isString(message["var"]))
                        return "var: string expected";
                }
                return null;
            };

            return Operand;
        })();

        core.BooleanExpression = (function() {

            /**
             * Properties of a BooleanExpression.
             * @memberof flyteidl.core
             * @interface IBooleanExpression
             * @property {flyteidl.core.IConjunctionExpression|null} [conjunction] BooleanExpression conjunction
             * @property {flyteidl.core.IComparisonExpression|null} [comparison] BooleanExpression comparison
             */

            /**
             * Constructs a new BooleanExpression.
             * @memberof flyteidl.core
             * @classdesc Represents a BooleanExpression.
             * @implements IBooleanExpression
             * @constructor
             * @param {flyteidl.core.IBooleanExpression=} [properties] Properties to set
             */
            function BooleanExpression(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BooleanExpression conjunction.
             * @member {flyteidl.core.IConjunctionExpression|null|undefined} conjunction
             * @memberof flyteidl.core.BooleanExpression
             * @instance
             */
            BooleanExpression.prototype.conjunction = null;

            /**
             * BooleanExpression comparison.
             * @member {flyteidl.core.IComparisonExpression|null|undefined} comparison
             * @memberof flyteidl.core.BooleanExpression
             * @instance
             */
            BooleanExpression.prototype.comparison = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * BooleanExpression expr.
             * @member {"conjunction"|"comparison"|undefined} expr
             * @memberof flyteidl.core.BooleanExpression
             * @instance
             */
            Object.defineProperty(BooleanExpression.prototype, "expr", {
                get: $util.oneOfGetter($oneOfFields = ["conjunction", "comparison"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new BooleanExpression instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.BooleanExpression
             * @static
             * @param {flyteidl.core.IBooleanExpression=} [properties] Properties to set
             * @returns {flyteidl.core.BooleanExpression} BooleanExpression instance
             */
            BooleanExpression.create = function create(properties) {
                return new BooleanExpression(properties);
            };

            /**
             * Encodes the specified BooleanExpression message. Does not implicitly {@link flyteidl.core.BooleanExpression.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.BooleanExpression
             * @static
             * @param {flyteidl.core.IBooleanExpression} message BooleanExpression message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BooleanExpression.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.conjunction != null && message.hasOwnProperty("conjunction"))
                    $root.flyteidl.core.ConjunctionExpression.encode(message.conjunction, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.comparison != null && message.hasOwnProperty("comparison"))
                    $root.flyteidl.core.ComparisonExpression.encode(message.comparison, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a BooleanExpression message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.BooleanExpression
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.BooleanExpression} BooleanExpression
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BooleanExpression.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.BooleanExpression();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.conjunction = $root.flyteidl.core.ConjunctionExpression.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.comparison = $root.flyteidl.core.ComparisonExpression.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a BooleanExpression message.
             * @function verify
             * @memberof flyteidl.core.BooleanExpression
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BooleanExpression.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.conjunction != null && message.hasOwnProperty("conjunction")) {
                    properties.expr = 1;
                    {
                        let error = $root.flyteidl.core.ConjunctionExpression.verify(message.conjunction);
                        if (error)
                            return "conjunction." + error;
                    }
                }
                if (message.comparison != null && message.hasOwnProperty("comparison")) {
                    if (properties.expr === 1)
                        return "expr: multiple values";
                    properties.expr = 1;
                    {
                        let error = $root.flyteidl.core.ComparisonExpression.verify(message.comparison);
                        if (error)
                            return "comparison." + error;
                    }
                }
                return null;
            };

            return BooleanExpression;
        })();

        core.ConjunctionExpression = (function() {

            /**
             * Properties of a ConjunctionExpression.
             * @memberof flyteidl.core
             * @interface IConjunctionExpression
             * @property {flyteidl.core.ConjunctionExpression.LogicalOperator|null} [operator] ConjunctionExpression operator
             * @property {flyteidl.core.IBooleanExpression|null} [leftExpression] ConjunctionExpression leftExpression
             * @property {flyteidl.core.IBooleanExpression|null} [rightExpression] ConjunctionExpression rightExpression
             */

            /**
             * Constructs a new ConjunctionExpression.
             * @memberof flyteidl.core
             * @classdesc Represents a ConjunctionExpression.
             * @implements IConjunctionExpression
             * @constructor
             * @param {flyteidl.core.IConjunctionExpression=} [properties] Properties to set
             */
            function ConjunctionExpression(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ConjunctionExpression operator.
             * @member {flyteidl.core.ConjunctionExpression.LogicalOperator} operator
             * @memberof flyteidl.core.ConjunctionExpression
             * @instance
             */
            ConjunctionExpression.prototype.operator = 0;

            /**
             * ConjunctionExpression leftExpression.
             * @member {flyteidl.core.IBooleanExpression|null|undefined} leftExpression
             * @memberof flyteidl.core.ConjunctionExpression
             * @instance
             */
            ConjunctionExpression.prototype.leftExpression = null;

            /**
             * ConjunctionExpression rightExpression.
             * @member {flyteidl.core.IBooleanExpression|null|undefined} rightExpression
             * @memberof flyteidl.core.ConjunctionExpression
             * @instance
             */
            ConjunctionExpression.prototype.rightExpression = null;

            /**
             * Creates a new ConjunctionExpression instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.ConjunctionExpression
             * @static
             * @param {flyteidl.core.IConjunctionExpression=} [properties] Properties to set
             * @returns {flyteidl.core.ConjunctionExpression} ConjunctionExpression instance
             */
            ConjunctionExpression.create = function create(properties) {
                return new ConjunctionExpression(properties);
            };

            /**
             * Encodes the specified ConjunctionExpression message. Does not implicitly {@link flyteidl.core.ConjunctionExpression.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.ConjunctionExpression
             * @static
             * @param {flyteidl.core.IConjunctionExpression} message ConjunctionExpression message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConjunctionExpression.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.operator != null && message.hasOwnProperty("operator"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.operator);
                if (message.leftExpression != null && message.hasOwnProperty("leftExpression"))
                    $root.flyteidl.core.BooleanExpression.encode(message.leftExpression, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.rightExpression != null && message.hasOwnProperty("rightExpression"))
                    $root.flyteidl.core.BooleanExpression.encode(message.rightExpression, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a ConjunctionExpression message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.ConjunctionExpression
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.ConjunctionExpression} ConjunctionExpression
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConjunctionExpression.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.ConjunctionExpression();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.operator = reader.int32();
                        break;
                    case 2:
                        message.leftExpression = $root.flyteidl.core.BooleanExpression.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.rightExpression = $root.flyteidl.core.BooleanExpression.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a ConjunctionExpression message.
             * @function verify
             * @memberof flyteidl.core.ConjunctionExpression
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ConjunctionExpression.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.operator != null && message.hasOwnProperty("operator"))
                    switch (message.operator) {
                    default:
                        return "operator: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                if (message.leftExpression != null && message.hasOwnProperty("leftExpression")) {
                    let error = $root.flyteidl.core.BooleanExpression.verify(message.leftExpression);
                    if (error)
                        return "leftExpression." + error;
                }
                if (message.rightExpression != null && message.hasOwnProperty("rightExpression")) {
                    let error = $root.flyteidl.core.BooleanExpression.verify(message.rightExpression);
                    if (error)
                        return "rightExpression." + error;
                }
                return null;
            };

            /**
             * LogicalOperator enum.
             * @name flyteidl.core.ConjunctionExpression.LogicalOperator
             * @enum {string}
             * @property {number} AND=0 AND value
             * @property {number} OR=1 OR value
             */
            ConjunctionExpression.LogicalOperator = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "AND"] = 0;
                values[valuesById[1] = "OR"] = 1;
                return values;
            })();

            return ConjunctionExpression;
        })();

        /**
         * TaskCategory enum.
         * @name flyteidl.core.TaskCategory
         * @enum {string}
         * @property {number} SingleStepTask=0 SingleStepTask value
         * @property {number} MultiStepTask=1 MultiStepTask value
         */
        core.TaskCategory = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SingleStepTask"] = 0;
            values[valuesById[1] = "MultiStepTask"] = 1;
            return values;
        })();

        core.Resources = (function() {

            /**
             * Properties of a Resources.
             * @memberof flyteidl.core
             * @interface IResources
             * @property {Array.<flyteidl.core.Resources.IResourceEntry>|null} [requests] Resources requests
             * @property {Array.<flyteidl.core.Resources.IResourceEntry>|null} [limits] Resources limits
             */

            /**
             * Constructs a new Resources.
             * @memberof flyteidl.core
             * @classdesc Represents a Resources.
             * @implements IResources
             * @constructor
             * @param {flyteidl.core.IResources=} [properties] Properties to set
             */
            function Resources(properties) {
                this.requests = [];
                this.limits = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Resources requests.
             * @member {Array.<flyteidl.core.Resources.IResourceEntry>} requests
             * @memberof flyteidl.core.Resources
             * @instance
             */
            Resources.prototype.requests = $util.emptyArray;

            /**
             * Resources limits.
             * @member {Array.<flyteidl.core.Resources.IResourceEntry>} limits
             * @memberof flyteidl.core.Resources
             * @instance
             */
            Resources.prototype.limits = $util.emptyArray;

            /**
             * Creates a new Resources instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.Resources
             * @static
             * @param {flyteidl.core.IResources=} [properties] Properties to set
             * @returns {flyteidl.core.Resources} Resources instance
             */
            Resources.create = function create(properties) {
                return new Resources(properties);
            };

            /**
             * Encodes the specified Resources message. Does not implicitly {@link flyteidl.core.Resources.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.Resources
             * @static
             * @param {flyteidl.core.IResources} message Resources message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Resources.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.requests != null && message.requests.length)
                    for (let i = 0; i < message.requests.length; ++i)
                        $root.flyteidl.core.Resources.ResourceEntry.encode(message.requests[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.limits != null && message.limits.length)
                    for (let i = 0; i < message.limits.length; ++i)
                        $root.flyteidl.core.Resources.ResourceEntry.encode(message.limits[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a Resources message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.Resources
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.Resources} Resources
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Resources.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.Resources();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.requests && message.requests.length))
                            message.requests = [];
                        message.requests.push($root.flyteidl.core.Resources.ResourceEntry.decode(reader, reader.uint32()));
                        break;
                    case 2:
                        if (!(message.limits && message.limits.length))
                            message.limits = [];
                        message.limits.push($root.flyteidl.core.Resources.ResourceEntry.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a Resources message.
             * @function verify
             * @memberof flyteidl.core.Resources
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Resources.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.requests != null && message.hasOwnProperty("requests")) {
                    if (!Array.isArray(message.requests))
                        return "requests: array expected";
                    for (let i = 0; i < message.requests.length; ++i) {
                        let error = $root.flyteidl.core.Resources.ResourceEntry.verify(message.requests[i]);
                        if (error)
                            return "requests." + error;
                    }
                }
                if (message.limits != null && message.hasOwnProperty("limits")) {
                    if (!Array.isArray(message.limits))
                        return "limits: array expected";
                    for (let i = 0; i < message.limits.length; ++i) {
                        let error = $root.flyteidl.core.Resources.ResourceEntry.verify(message.limits[i]);
                        if (error)
                            return "limits." + error;
                    }
                }
                return null;
            };

            /**
             * ResourceName enum.
             * @name flyteidl.core.Resources.ResourceName
             * @enum {string}
             * @property {number} Unknown=0 Unknown value
             * @property {number} Cpu=1 Cpu value
             * @property {number} Gpu=2 Gpu value
             * @property {number} Memory=3 Memory value
             * @property {number} Storage=4 Storage value
             */
            Resources.ResourceName = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "Unknown"] = 0;
                values[valuesById[1] = "Cpu"] = 1;
                values[valuesById[2] = "Gpu"] = 2;
                values[valuesById[3] = "Memory"] = 3;
                values[valuesById[4] = "Storage"] = 4;
                return values;
            })();

            Resources.ResourceEntry = (function() {

                /**
                 * Properties of a ResourceEntry.
                 * @memberof flyteidl.core.Resources
                 * @interface IResourceEntry
                 * @property {flyteidl.core.Resources.ResourceName|null} [name] ResourceEntry name
                 * @property {string|null} [value] ResourceEntry value
                 */

                /**
                 * Constructs a new ResourceEntry.
                 * @memberof flyteidl.core.Resources
                 * @classdesc Represents a ResourceEntry.
                 * @implements IResourceEntry
                 * @constructor
                 * @param {flyteidl.core.Resources.IResourceEntry=} [properties] Properties to set
                 */
                function ResourceEntry(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ResourceEntry name.
                 * @member {flyteidl.core.Resources.ResourceName} name
                 * @memberof flyteidl.core.Resources.ResourceEntry
                 * @instance
                 */
                ResourceEntry.prototype.name = 0;

                /**
                 * ResourceEntry value.
                 * @member {string} value
                 * @memberof flyteidl.core.Resources.ResourceEntry
                 * @instance
                 */
                ResourceEntry.prototype.value = "";

                /**
                 * Creates a new ResourceEntry instance using the specified properties.
                 * @function create
                 * @memberof flyteidl.core.Resources.ResourceEntry
                 * @static
                 * @param {flyteidl.core.Resources.IResourceEntry=} [properties] Properties to set
                 * @returns {flyteidl.core.Resources.ResourceEntry} ResourceEntry instance
                 */
                ResourceEntry.create = function create(properties) {
                    return new ResourceEntry(properties);
                };

                /**
                 * Encodes the specified ResourceEntry message. Does not implicitly {@link flyteidl.core.Resources.ResourceEntry.verify|verify} messages.
                 * @function encode
                 * @memberof flyteidl.core.Resources.ResourceEntry
                 * @static
                 * @param {flyteidl.core.Resources.IResourceEntry} message ResourceEntry message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResourceEntry.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.name);
                    if (message.value != null && message.hasOwnProperty("value"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
                    return writer;
                };

                /**
                 * Decodes a ResourceEntry message from the specified reader or buffer.
                 * @function decode
                 * @memberof flyteidl.core.Resources.ResourceEntry
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {flyteidl.core.Resources.ResourceEntry} ResourceEntry
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResourceEntry.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.Resources.ResourceEntry();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.int32();
                            break;
                        case 2:
                            message.value = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Verifies a ResourceEntry message.
                 * @function verify
                 * @memberof flyteidl.core.Resources.ResourceEntry
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ResourceEntry.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        switch (message.name) {
                        default:
                            return "name: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                            break;
                        }
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (!$util.isString(message.value))
                            return "value: string expected";
                    return null;
                };

                return ResourceEntry;
            })();

            return Resources;
        })();

        core.RuntimeMetadata = (function() {

            /**
             * Properties of a RuntimeMetadata.
             * @memberof flyteidl.core
             * @interface IRuntimeMetadata
             * @property {flyteidl.core.RuntimeMetadata.RuntimeType|null} [type] RuntimeMetadata type
             * @property {string|null} [version] RuntimeMetadata version
             * @property {string|null} [flavor] RuntimeMetadata flavor
             */

            /**
             * Constructs a new RuntimeMetadata.
             * @memberof flyteidl.core
             * @classdesc Represents a RuntimeMetadata.
             * @implements IRuntimeMetadata
             * @constructor
             * @param {flyteidl.core.IRuntimeMetadata=} [properties] Properties to set
             */
            function RuntimeMetadata(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RuntimeMetadata type.
             * @member {flyteidl.core.RuntimeMetadata.RuntimeType} type
             * @memberof flyteidl.core.RuntimeMetadata
             * @instance
             */
            RuntimeMetadata.prototype.type = 0;

            /**
             * RuntimeMetadata version.
             * @member {string} version
             * @memberof flyteidl.core.RuntimeMetadata
             * @instance
             */
            RuntimeMetadata.prototype.version = "";

            /**
             * RuntimeMetadata flavor.
             * @member {string} flavor
             * @memberof flyteidl.core.RuntimeMetadata
             * @instance
             */
            RuntimeMetadata.prototype.flavor = "";

            /**
             * Creates a new RuntimeMetadata instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.RuntimeMetadata
             * @static
             * @param {flyteidl.core.IRuntimeMetadata=} [properties] Properties to set
             * @returns {flyteidl.core.RuntimeMetadata} RuntimeMetadata instance
             */
            RuntimeMetadata.create = function create(properties) {
                return new RuntimeMetadata(properties);
            };

            /**
             * Encodes the specified RuntimeMetadata message. Does not implicitly {@link flyteidl.core.RuntimeMetadata.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.RuntimeMetadata
             * @static
             * @param {flyteidl.core.IRuntimeMetadata} message RuntimeMetadata message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RuntimeMetadata.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type != null && message.hasOwnProperty("type"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                if (message.version != null && message.hasOwnProperty("version"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.version);
                if (message.flavor != null && message.hasOwnProperty("flavor"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.flavor);
                return writer;
            };

            /**
             * Decodes a RuntimeMetadata message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.RuntimeMetadata
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.RuntimeMetadata} RuntimeMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RuntimeMetadata.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.RuntimeMetadata();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type = reader.int32();
                        break;
                    case 2:
                        message.version = reader.string();
                        break;
                    case 3:
                        message.flavor = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a RuntimeMetadata message.
             * @function verify
             * @memberof flyteidl.core.RuntimeMetadata
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RuntimeMetadata.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                if (message.version != null && message.hasOwnProperty("version"))
                    if (!$util.isString(message.version))
                        return "version: string expected";
                if (message.flavor != null && message.hasOwnProperty("flavor"))
                    if (!$util.isString(message.flavor))
                        return "flavor: string expected";
                return null;
            };

            /**
             * RuntimeType enum.
             * @name flyteidl.core.RuntimeMetadata.RuntimeType
             * @enum {string}
             * @property {number} Other=0 Other value
             * @property {number} FlyteSDK=1 FlyteSDK value
             */
            RuntimeMetadata.RuntimeType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "Other"] = 0;
                values[valuesById[1] = "FlyteSDK"] = 1;
                return values;
            })();

            return RuntimeMetadata;
        })();

        core.TaskMetadata = (function() {

            /**
             * Properties of a TaskMetadata.
             * @memberof flyteidl.core
             * @interface ITaskMetadata
             * @property {boolean|null} [discoverable] TaskMetadata discoverable
             * @property {flyteidl.core.IRuntimeMetadata|null} [runtime] TaskMetadata runtime
             * @property {google.protobuf.IDuration|null} [timeout] TaskMetadata timeout
             * @property {flyteidl.core.IRetryStrategy|null} [retries] TaskMetadata retries
             */

            /**
             * Constructs a new TaskMetadata.
             * @memberof flyteidl.core
             * @classdesc Represents a TaskMetadata.
             * @implements ITaskMetadata
             * @constructor
             * @param {flyteidl.core.ITaskMetadata=} [properties] Properties to set
             */
            function TaskMetadata(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TaskMetadata discoverable.
             * @member {boolean} discoverable
             * @memberof flyteidl.core.TaskMetadata
             * @instance
             */
            TaskMetadata.prototype.discoverable = false;

            /**
             * TaskMetadata runtime.
             * @member {flyteidl.core.IRuntimeMetadata|null|undefined} runtime
             * @memberof flyteidl.core.TaskMetadata
             * @instance
             */
            TaskMetadata.prototype.runtime = null;

            /**
             * TaskMetadata timeout.
             * @member {google.protobuf.IDuration|null|undefined} timeout
             * @memberof flyteidl.core.TaskMetadata
             * @instance
             */
            TaskMetadata.prototype.timeout = null;

            /**
             * TaskMetadata retries.
             * @member {flyteidl.core.IRetryStrategy|null|undefined} retries
             * @memberof flyteidl.core.TaskMetadata
             * @instance
             */
            TaskMetadata.prototype.retries = null;

            /**
             * Creates a new TaskMetadata instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.TaskMetadata
             * @static
             * @param {flyteidl.core.ITaskMetadata=} [properties] Properties to set
             * @returns {flyteidl.core.TaskMetadata} TaskMetadata instance
             */
            TaskMetadata.create = function create(properties) {
                return new TaskMetadata(properties);
            };

            /**
             * Encodes the specified TaskMetadata message. Does not implicitly {@link flyteidl.core.TaskMetadata.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.TaskMetadata
             * @static
             * @param {flyteidl.core.ITaskMetadata} message TaskMetadata message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TaskMetadata.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.discoverable != null && message.hasOwnProperty("discoverable"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.discoverable);
                if (message.runtime != null && message.hasOwnProperty("runtime"))
                    $root.flyteidl.core.RuntimeMetadata.encode(message.runtime, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.timeout != null && message.hasOwnProperty("timeout"))
                    $root.google.protobuf.Duration.encode(message.timeout, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.retries != null && message.hasOwnProperty("retries"))
                    $root.flyteidl.core.RetryStrategy.encode(message.retries, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a TaskMetadata message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.TaskMetadata
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.TaskMetadata} TaskMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TaskMetadata.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.TaskMetadata();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.discoverable = reader.bool();
                        break;
                    case 2:
                        message.runtime = $root.flyteidl.core.RuntimeMetadata.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.timeout = $root.google.protobuf.Duration.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.retries = $root.flyteidl.core.RetryStrategy.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a TaskMetadata message.
             * @function verify
             * @memberof flyteidl.core.TaskMetadata
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TaskMetadata.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.discoverable != null && message.hasOwnProperty("discoverable"))
                    if (typeof message.discoverable !== "boolean")
                        return "discoverable: boolean expected";
                if (message.runtime != null && message.hasOwnProperty("runtime")) {
                    let error = $root.flyteidl.core.RuntimeMetadata.verify(message.runtime);
                    if (error)
                        return "runtime." + error;
                }
                if (message.timeout != null && message.hasOwnProperty("timeout")) {
                    let error = $root.google.protobuf.Duration.verify(message.timeout);
                    if (error)
                        return "timeout." + error;
                }
                if (message.retries != null && message.hasOwnProperty("retries")) {
                    let error = $root.flyteidl.core.RetryStrategy.verify(message.retries);
                    if (error)
                        return "retries." + error;
                }
                return null;
            };

            return TaskMetadata;
        })();

        core.TaskTemplate = (function() {

            /**
             * Properties of a TaskTemplate.
             * @memberof flyteidl.core
             * @interface ITaskTemplate
             * @property {string|null} [id] TaskTemplate id
             * @property {flyteidl.core.TaskCategory|null} [category] TaskTemplate category
             * @property {string|null} [type] TaskTemplate type
             * @property {flyteidl.core.ITaskMetadata|null} [metadata] TaskTemplate metadata
             * @property {flyteidl.core.ITypedInterface|null} ["interface"] TaskTemplate interface
             * @property {Uint8Array|null} [custom] TaskTemplate custom
             * @property {flyteidl.core.IContainer|null} [container] TaskTemplate container
             */

            /**
             * Constructs a new TaskTemplate.
             * @memberof flyteidl.core
             * @classdesc Represents a TaskTemplate.
             * @implements ITaskTemplate
             * @constructor
             * @param {flyteidl.core.ITaskTemplate=} [properties] Properties to set
             */
            function TaskTemplate(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TaskTemplate id.
             * @member {string} id
             * @memberof flyteidl.core.TaskTemplate
             * @instance
             */
            TaskTemplate.prototype.id = "";

            /**
             * TaskTemplate category.
             * @member {flyteidl.core.TaskCategory} category
             * @memberof flyteidl.core.TaskTemplate
             * @instance
             */
            TaskTemplate.prototype.category = 0;

            /**
             * TaskTemplate type.
             * @member {string} type
             * @memberof flyteidl.core.TaskTemplate
             * @instance
             */
            TaskTemplate.prototype.type = "";

            /**
             * TaskTemplate metadata.
             * @member {flyteidl.core.ITaskMetadata|null|undefined} metadata
             * @memberof flyteidl.core.TaskTemplate
             * @instance
             */
            TaskTemplate.prototype.metadata = null;

            /**
             * TaskTemplate interface.
             * @member {flyteidl.core.ITypedInterface|null|undefined} interface
             * @memberof flyteidl.core.TaskTemplate
             * @instance
             */
            TaskTemplate.prototype["interface"] = null;

            /**
             * TaskTemplate custom.
             * @member {Uint8Array} custom
             * @memberof flyteidl.core.TaskTemplate
             * @instance
             */
            TaskTemplate.prototype.custom = $util.newBuffer([]);

            /**
             * TaskTemplate container.
             * @member {flyteidl.core.IContainer|null|undefined} container
             * @memberof flyteidl.core.TaskTemplate
             * @instance
             */
            TaskTemplate.prototype.container = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * TaskTemplate target.
             * @member {"container"|undefined} target
             * @memberof flyteidl.core.TaskTemplate
             * @instance
             */
            Object.defineProperty(TaskTemplate.prototype, "target", {
                get: $util.oneOfGetter($oneOfFields = ["container"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new TaskTemplate instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.TaskTemplate
             * @static
             * @param {flyteidl.core.ITaskTemplate=} [properties] Properties to set
             * @returns {flyteidl.core.TaskTemplate} TaskTemplate instance
             */
            TaskTemplate.create = function create(properties) {
                return new TaskTemplate(properties);
            };

            /**
             * Encodes the specified TaskTemplate message. Does not implicitly {@link flyteidl.core.TaskTemplate.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.TaskTemplate
             * @static
             * @param {flyteidl.core.ITaskTemplate} message TaskTemplate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TaskTemplate.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.category != null && message.hasOwnProperty("category"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.category);
                if (message.type != null && message.hasOwnProperty("type"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.type);
                if (message.metadata != null && message.hasOwnProperty("metadata"))
                    $root.flyteidl.core.TaskMetadata.encode(message.metadata, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message["interface"] != null && message.hasOwnProperty("interface"))
                    $root.flyteidl.core.TypedInterface.encode(message["interface"], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.custom != null && message.hasOwnProperty("custom"))
                    writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.custom);
                if (message.container != null && message.hasOwnProperty("container"))
                    $root.flyteidl.core.Container.encode(message.container, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a TaskTemplate message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.TaskTemplate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.TaskTemplate} TaskTemplate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TaskTemplate.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.TaskTemplate();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.category = reader.int32();
                        break;
                    case 3:
                        message.type = reader.string();
                        break;
                    case 4:
                        message.metadata = $root.flyteidl.core.TaskMetadata.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message["interface"] = $root.flyteidl.core.TypedInterface.decode(reader, reader.uint32());
                        break;
                    case 6:
                        message.custom = reader.bytes();
                        break;
                    case 7:
                        message.container = $root.flyteidl.core.Container.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a TaskTemplate message.
             * @function verify
             * @memberof flyteidl.core.TaskTemplate
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TaskTemplate.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.category != null && message.hasOwnProperty("category"))
                    switch (message.category) {
                    default:
                        return "category: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                if (message.type != null && message.hasOwnProperty("type"))
                    if (!$util.isString(message.type))
                        return "type: string expected";
                if (message.metadata != null && message.hasOwnProperty("metadata")) {
                    let error = $root.flyteidl.core.TaskMetadata.verify(message.metadata);
                    if (error)
                        return "metadata." + error;
                }
                if (message["interface"] != null && message.hasOwnProperty("interface")) {
                    let error = $root.flyteidl.core.TypedInterface.verify(message["interface"]);
                    if (error)
                        return "interface." + error;
                }
                if (message.custom != null && message.hasOwnProperty("custom"))
                    if (!(message.custom && typeof message.custom.length === "number" || $util.isString(message.custom)))
                        return "custom: buffer expected";
                if (message.container != null && message.hasOwnProperty("container")) {
                    properties.target = 1;
                    {
                        let error = $root.flyteidl.core.Container.verify(message.container);
                        if (error)
                            return "container." + error;
                    }
                }
                return null;
            };

            return TaskTemplate;
        })();

        core.Container = (function() {

            /**
             * Properties of a Container.
             * @memberof flyteidl.core
             * @interface IContainer
             * @property {string|null} [image] Container image
             * @property {Array.<string>|null} [command] Container command
             * @property {Array.<string>|null} [args] Container args
             * @property {flyteidl.core.IResources|null} [resources] Container resources
             * @property {Array.<flyteidl.core.IKeyValuePair>|null} [env] Container env
             * @property {Array.<flyteidl.core.IKeyValuePair>|null} [config] Container config
             */

            /**
             * Constructs a new Container.
             * @memberof flyteidl.core
             * @classdesc Represents a Container.
             * @implements IContainer
             * @constructor
             * @param {flyteidl.core.IContainer=} [properties] Properties to set
             */
            function Container(properties) {
                this.command = [];
                this.args = [];
                this.env = [];
                this.config = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Container image.
             * @member {string} image
             * @memberof flyteidl.core.Container
             * @instance
             */
            Container.prototype.image = "";

            /**
             * Container command.
             * @member {Array.<string>} command
             * @memberof flyteidl.core.Container
             * @instance
             */
            Container.prototype.command = $util.emptyArray;

            /**
             * Container args.
             * @member {Array.<string>} args
             * @memberof flyteidl.core.Container
             * @instance
             */
            Container.prototype.args = $util.emptyArray;

            /**
             * Container resources.
             * @member {flyteidl.core.IResources|null|undefined} resources
             * @memberof flyteidl.core.Container
             * @instance
             */
            Container.prototype.resources = null;

            /**
             * Container env.
             * @member {Array.<flyteidl.core.IKeyValuePair>} env
             * @memberof flyteidl.core.Container
             * @instance
             */
            Container.prototype.env = $util.emptyArray;

            /**
             * Container config.
             * @member {Array.<flyteidl.core.IKeyValuePair>} config
             * @memberof flyteidl.core.Container
             * @instance
             */
            Container.prototype.config = $util.emptyArray;

            /**
             * Creates a new Container instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.Container
             * @static
             * @param {flyteidl.core.IContainer=} [properties] Properties to set
             * @returns {flyteidl.core.Container} Container instance
             */
            Container.create = function create(properties) {
                return new Container(properties);
            };

            /**
             * Encodes the specified Container message. Does not implicitly {@link flyteidl.core.Container.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.Container
             * @static
             * @param {flyteidl.core.IContainer} message Container message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Container.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.image != null && message.hasOwnProperty("image"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.image);
                if (message.command != null && message.command.length)
                    for (let i = 0; i < message.command.length; ++i)
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.command[i]);
                if (message.args != null && message.args.length)
                    for (let i = 0; i < message.args.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.args[i]);
                if (message.resources != null && message.hasOwnProperty("resources"))
                    $root.flyteidl.core.Resources.encode(message.resources, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.env != null && message.env.length)
                    for (let i = 0; i < message.env.length; ++i)
                        $root.flyteidl.core.KeyValuePair.encode(message.env[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.config != null && message.config.length)
                    for (let i = 0; i < message.config.length; ++i)
                        $root.flyteidl.core.KeyValuePair.encode(message.config[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a Container message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.Container
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.Container} Container
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Container.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.Container();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.image = reader.string();
                        break;
                    case 2:
                        if (!(message.command && message.command.length))
                            message.command = [];
                        message.command.push(reader.string());
                        break;
                    case 3:
                        if (!(message.args && message.args.length))
                            message.args = [];
                        message.args.push(reader.string());
                        break;
                    case 4:
                        message.resources = $root.flyteidl.core.Resources.decode(reader, reader.uint32());
                        break;
                    case 5:
                        if (!(message.env && message.env.length))
                            message.env = [];
                        message.env.push($root.flyteidl.core.KeyValuePair.decode(reader, reader.uint32()));
                        break;
                    case 6:
                        if (!(message.config && message.config.length))
                            message.config = [];
                        message.config.push($root.flyteidl.core.KeyValuePair.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a Container message.
             * @function verify
             * @memberof flyteidl.core.Container
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Container.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.image != null && message.hasOwnProperty("image"))
                    if (!$util.isString(message.image))
                        return "image: string expected";
                if (message.command != null && message.hasOwnProperty("command")) {
                    if (!Array.isArray(message.command))
                        return "command: array expected";
                    for (let i = 0; i < message.command.length; ++i)
                        if (!$util.isString(message.command[i]))
                            return "command: string[] expected";
                }
                if (message.args != null && message.hasOwnProperty("args")) {
                    if (!Array.isArray(message.args))
                        return "args: array expected";
                    for (let i = 0; i < message.args.length; ++i)
                        if (!$util.isString(message.args[i]))
                            return "args: string[] expected";
                }
                if (message.resources != null && message.hasOwnProperty("resources")) {
                    let error = $root.flyteidl.core.Resources.verify(message.resources);
                    if (error)
                        return "resources." + error;
                }
                if (message.env != null && message.hasOwnProperty("env")) {
                    if (!Array.isArray(message.env))
                        return "env: array expected";
                    for (let i = 0; i < message.env.length; ++i) {
                        let error = $root.flyteidl.core.KeyValuePair.verify(message.env[i]);
                        if (error)
                            return "env." + error;
                    }
                }
                if (message.config != null && message.hasOwnProperty("config")) {
                    if (!Array.isArray(message.config))
                        return "config: array expected";
                    for (let i = 0; i < message.config.length; ++i) {
                        let error = $root.flyteidl.core.KeyValuePair.verify(message.config[i]);
                        if (error)
                            return "config." + error;
                    }
                }
                return null;
            };

            return Container;
        })();

        core.FutureTaskDocument = (function() {

            /**
             * Properties of a FutureTaskDocument.
             * @memberof flyteidl.core
             * @interface IFutureTaskDocument
             * @property {Array.<flyteidl.core.IFutureTaskNode>|null} [tasks] FutureTaskDocument tasks
             * @property {Long|null} [minSuccesses] FutureTaskDocument minSuccesses
             * @property {Array.<flyteidl.core.IBinding>|null} [outputs] FutureTaskDocument outputs
             */

            /**
             * Constructs a new FutureTaskDocument.
             * @memberof flyteidl.core
             * @classdesc Represents a FutureTaskDocument.
             * @implements IFutureTaskDocument
             * @constructor
             * @param {flyteidl.core.IFutureTaskDocument=} [properties] Properties to set
             */
            function FutureTaskDocument(properties) {
                this.tasks = [];
                this.outputs = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FutureTaskDocument tasks.
             * @member {Array.<flyteidl.core.IFutureTaskNode>} tasks
             * @memberof flyteidl.core.FutureTaskDocument
             * @instance
             */
            FutureTaskDocument.prototype.tasks = $util.emptyArray;

            /**
             * FutureTaskDocument minSuccesses.
             * @member {Long} minSuccesses
             * @memberof flyteidl.core.FutureTaskDocument
             * @instance
             */
            FutureTaskDocument.prototype.minSuccesses = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * FutureTaskDocument outputs.
             * @member {Array.<flyteidl.core.IBinding>} outputs
             * @memberof flyteidl.core.FutureTaskDocument
             * @instance
             */
            FutureTaskDocument.prototype.outputs = $util.emptyArray;

            /**
             * Creates a new FutureTaskDocument instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.FutureTaskDocument
             * @static
             * @param {flyteidl.core.IFutureTaskDocument=} [properties] Properties to set
             * @returns {flyteidl.core.FutureTaskDocument} FutureTaskDocument instance
             */
            FutureTaskDocument.create = function create(properties) {
                return new FutureTaskDocument(properties);
            };

            /**
             * Encodes the specified FutureTaskDocument message. Does not implicitly {@link flyteidl.core.FutureTaskDocument.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.FutureTaskDocument
             * @static
             * @param {flyteidl.core.IFutureTaskDocument} message FutureTaskDocument message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FutureTaskDocument.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.tasks != null && message.tasks.length)
                    for (let i = 0; i < message.tasks.length; ++i)
                        $root.flyteidl.core.FutureTaskNode.encode(message.tasks[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.minSuccesses != null && message.hasOwnProperty("minSuccesses"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.minSuccesses);
                if (message.outputs != null && message.outputs.length)
                    for (let i = 0; i < message.outputs.length; ++i)
                        $root.flyteidl.core.Binding.encode(message.outputs[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a FutureTaskDocument message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.FutureTaskDocument
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.FutureTaskDocument} FutureTaskDocument
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FutureTaskDocument.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.FutureTaskDocument();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.tasks && message.tasks.length))
                            message.tasks = [];
                        message.tasks.push($root.flyteidl.core.FutureTaskNode.decode(reader, reader.uint32()));
                        break;
                    case 2:
                        message.minSuccesses = reader.int64();
                        break;
                    case 3:
                        if (!(message.outputs && message.outputs.length))
                            message.outputs = [];
                        message.outputs.push($root.flyteidl.core.Binding.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a FutureTaskDocument message.
             * @function verify
             * @memberof flyteidl.core.FutureTaskDocument
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FutureTaskDocument.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.tasks != null && message.hasOwnProperty("tasks")) {
                    if (!Array.isArray(message.tasks))
                        return "tasks: array expected";
                    for (let i = 0; i < message.tasks.length; ++i) {
                        let error = $root.flyteidl.core.FutureTaskNode.verify(message.tasks[i]);
                        if (error)
                            return "tasks." + error;
                    }
                }
                if (message.minSuccesses != null && message.hasOwnProperty("minSuccesses"))
                    if (!$util.isInteger(message.minSuccesses) && !(message.minSuccesses && $util.isInteger(message.minSuccesses.low) && $util.isInteger(message.minSuccesses.high)))
                        return "minSuccesses: integer|Long expected";
                if (message.outputs != null && message.hasOwnProperty("outputs")) {
                    if (!Array.isArray(message.outputs))
                        return "outputs: array expected";
                    for (let i = 0; i < message.outputs.length; ++i) {
                        let error = $root.flyteidl.core.Binding.verify(message.outputs[i]);
                        if (error)
                            return "outputs." + error;
                    }
                }
                return null;
            };

            return FutureTaskDocument;
        })();

        core.FutureTaskNode = (function() {

            /**
             * Properties of a FutureTaskNode.
             * @memberof flyteidl.core
             * @interface IFutureTaskNode
             * @property {string|null} [generateId] FutureTaskNode generateId
             * @property {flyteidl.core.IArrayJob|null} [array] FutureTaskNode array
             * @property {flyteidl.core.IHiveQueryCollection|null} [hiveQueries] FutureTaskNode hiveQueries
             */

            /**
             * Constructs a new FutureTaskNode.
             * @memberof flyteidl.core
             * @classdesc Represents a FutureTaskNode.
             * @implements IFutureTaskNode
             * @constructor
             * @param {flyteidl.core.IFutureTaskNode=} [properties] Properties to set
             */
            function FutureTaskNode(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FutureTaskNode generateId.
             * @member {string} generateId
             * @memberof flyteidl.core.FutureTaskNode
             * @instance
             */
            FutureTaskNode.prototype.generateId = "";

            /**
             * FutureTaskNode array.
             * @member {flyteidl.core.IArrayJob|null|undefined} array
             * @memberof flyteidl.core.FutureTaskNode
             * @instance
             */
            FutureTaskNode.prototype.array = null;

            /**
             * FutureTaskNode hiveQueries.
             * @member {flyteidl.core.IHiveQueryCollection|null|undefined} hiveQueries
             * @memberof flyteidl.core.FutureTaskNode
             * @instance
             */
            FutureTaskNode.prototype.hiveQueries = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * FutureTaskNode target.
             * @member {"array"|"hiveQueries"|undefined} target
             * @memberof flyteidl.core.FutureTaskNode
             * @instance
             */
            Object.defineProperty(FutureTaskNode.prototype, "target", {
                get: $util.oneOfGetter($oneOfFields = ["array", "hiveQueries"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new FutureTaskNode instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.FutureTaskNode
             * @static
             * @param {flyteidl.core.IFutureTaskNode=} [properties] Properties to set
             * @returns {flyteidl.core.FutureTaskNode} FutureTaskNode instance
             */
            FutureTaskNode.create = function create(properties) {
                return new FutureTaskNode(properties);
            };

            /**
             * Encodes the specified FutureTaskNode message. Does not implicitly {@link flyteidl.core.FutureTaskNode.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.FutureTaskNode
             * @static
             * @param {flyteidl.core.IFutureTaskNode} message FutureTaskNode message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FutureTaskNode.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.generateId != null && message.hasOwnProperty("generateId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.generateId);
                if (message.array != null && message.hasOwnProperty("array"))
                    $root.flyteidl.core.ArrayJob.encode(message.array, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.hiveQueries != null && message.hasOwnProperty("hiveQueries"))
                    $root.flyteidl.core.HiveQueryCollection.encode(message.hiveQueries, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a FutureTaskNode message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.FutureTaskNode
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.FutureTaskNode} FutureTaskNode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FutureTaskNode.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.FutureTaskNode();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.generateId = reader.string();
                        break;
                    case 2:
                        message.array = $root.flyteidl.core.ArrayJob.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.hiveQueries = $root.flyteidl.core.HiveQueryCollection.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a FutureTaskNode message.
             * @function verify
             * @memberof flyteidl.core.FutureTaskNode
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FutureTaskNode.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.generateId != null && message.hasOwnProperty("generateId"))
                    if (!$util.isString(message.generateId))
                        return "generateId: string expected";
                if (message.array != null && message.hasOwnProperty("array")) {
                    properties.target = 1;
                    {
                        let error = $root.flyteidl.core.ArrayJob.verify(message.array);
                        if (error)
                            return "array." + error;
                    }
                }
                if (message.hiveQueries != null && message.hasOwnProperty("hiveQueries")) {
                    if (properties.target === 1)
                        return "target: multiple values";
                    properties.target = 1;
                    {
                        let error = $root.flyteidl.core.HiveQueryCollection.verify(message.hiveQueries);
                        if (error)
                            return "hiveQueries." + error;
                    }
                }
                return null;
            };

            return FutureTaskNode;
        })();

        core.HiveQuery = (function() {

            /**
             * Properties of a HiveQuery.
             * @memberof flyteidl.core
             * @interface IHiveQuery
             * @property {string|null} [query] HiveQuery query
             * @property {flyteidl.core.ITaskMetadata|null} [metadata] HiveQuery metadata
             */

            /**
             * Constructs a new HiveQuery.
             * @memberof flyteidl.core
             * @classdesc Represents a HiveQuery.
             * @implements IHiveQuery
             * @constructor
             * @param {flyteidl.core.IHiveQuery=} [properties] Properties to set
             */
            function HiveQuery(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * HiveQuery query.
             * @member {string} query
             * @memberof flyteidl.core.HiveQuery
             * @instance
             */
            HiveQuery.prototype.query = "";

            /**
             * HiveQuery metadata.
             * @member {flyteidl.core.ITaskMetadata|null|undefined} metadata
             * @memberof flyteidl.core.HiveQuery
             * @instance
             */
            HiveQuery.prototype.metadata = null;

            /**
             * Creates a new HiveQuery instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.HiveQuery
             * @static
             * @param {flyteidl.core.IHiveQuery=} [properties] Properties to set
             * @returns {flyteidl.core.HiveQuery} HiveQuery instance
             */
            HiveQuery.create = function create(properties) {
                return new HiveQuery(properties);
            };

            /**
             * Encodes the specified HiveQuery message. Does not implicitly {@link flyteidl.core.HiveQuery.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.HiveQuery
             * @static
             * @param {flyteidl.core.IHiveQuery} message HiveQuery message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HiveQuery.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.query != null && message.hasOwnProperty("query"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.query);
                if (message.metadata != null && message.hasOwnProperty("metadata"))
                    $root.flyteidl.core.TaskMetadata.encode(message.metadata, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a HiveQuery message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.HiveQuery
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.HiveQuery} HiveQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HiveQuery.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.HiveQuery();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.query = reader.string();
                        break;
                    case 2:
                        message.metadata = $root.flyteidl.core.TaskMetadata.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a HiveQuery message.
             * @function verify
             * @memberof flyteidl.core.HiveQuery
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            HiveQuery.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.query != null && message.hasOwnProperty("query"))
                    if (!$util.isString(message.query))
                        return "query: string expected";
                if (message.metadata != null && message.hasOwnProperty("metadata")) {
                    let error = $root.flyteidl.core.TaskMetadata.verify(message.metadata);
                    if (error)
                        return "metadata." + error;
                }
                return null;
            };

            return HiveQuery;
        })();

        core.HiveQueryCollection = (function() {

            /**
             * Properties of a HiveQueryCollection.
             * @memberof flyteidl.core
             * @interface IHiveQueryCollection
             * @property {Array.<flyteidl.core.IHiveQuery>|null} [queries] HiveQueryCollection queries
             */

            /**
             * Constructs a new HiveQueryCollection.
             * @memberof flyteidl.core
             * @classdesc Represents a HiveQueryCollection.
             * @implements IHiveQueryCollection
             * @constructor
             * @param {flyteidl.core.IHiveQueryCollection=} [properties] Properties to set
             */
            function HiveQueryCollection(properties) {
                this.queries = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * HiveQueryCollection queries.
             * @member {Array.<flyteidl.core.IHiveQuery>} queries
             * @memberof flyteidl.core.HiveQueryCollection
             * @instance
             */
            HiveQueryCollection.prototype.queries = $util.emptyArray;

            /**
             * Creates a new HiveQueryCollection instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.HiveQueryCollection
             * @static
             * @param {flyteidl.core.IHiveQueryCollection=} [properties] Properties to set
             * @returns {flyteidl.core.HiveQueryCollection} HiveQueryCollection instance
             */
            HiveQueryCollection.create = function create(properties) {
                return new HiveQueryCollection(properties);
            };

            /**
             * Encodes the specified HiveQueryCollection message. Does not implicitly {@link flyteidl.core.HiveQueryCollection.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.HiveQueryCollection
             * @static
             * @param {flyteidl.core.IHiveQueryCollection} message HiveQueryCollection message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HiveQueryCollection.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.queries != null && message.queries.length)
                    for (let i = 0; i < message.queries.length; ++i)
                        $root.flyteidl.core.HiveQuery.encode(message.queries[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a HiveQueryCollection message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.HiveQueryCollection
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.HiveQueryCollection} HiveQueryCollection
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HiveQueryCollection.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.HiveQueryCollection();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2:
                        if (!(message.queries && message.queries.length))
                            message.queries = [];
                        message.queries.push($root.flyteidl.core.HiveQuery.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a HiveQueryCollection message.
             * @function verify
             * @memberof flyteidl.core.HiveQueryCollection
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            HiveQueryCollection.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.queries != null && message.hasOwnProperty("queries")) {
                    if (!Array.isArray(message.queries))
                        return "queries: array expected";
                    for (let i = 0; i < message.queries.length; ++i) {
                        let error = $root.flyteidl.core.HiveQuery.verify(message.queries[i]);
                        if (error)
                            return "queries." + error;
                    }
                }
                return null;
            };

            return HiveQueryCollection;
        })();

        core.SwarmDefinition = (function() {

            /**
             * Properties of a SwarmDefinition.
             * @memberof flyteidl.core
             * @interface ISwarmDefinition
             * @property {flyteidl.core.IContainer|null} [primaryContainer] SwarmDefinition primaryContainer
             * @property {Array.<flyteidl.core.IContainer>|null} [initContainers] SwarmDefinition initContainers
             * @property {Array.<flyteidl.core.IContainer>|null} [sidecarContainers] SwarmDefinition sidecarContainers
             */

            /**
             * Constructs a new SwarmDefinition.
             * @memberof flyteidl.core
             * @classdesc Represents a SwarmDefinition.
             * @implements ISwarmDefinition
             * @constructor
             * @param {flyteidl.core.ISwarmDefinition=} [properties] Properties to set
             */
            function SwarmDefinition(properties) {
                this.initContainers = [];
                this.sidecarContainers = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SwarmDefinition primaryContainer.
             * @member {flyteidl.core.IContainer|null|undefined} primaryContainer
             * @memberof flyteidl.core.SwarmDefinition
             * @instance
             */
            SwarmDefinition.prototype.primaryContainer = null;

            /**
             * SwarmDefinition initContainers.
             * @member {Array.<flyteidl.core.IContainer>} initContainers
             * @memberof flyteidl.core.SwarmDefinition
             * @instance
             */
            SwarmDefinition.prototype.initContainers = $util.emptyArray;

            /**
             * SwarmDefinition sidecarContainers.
             * @member {Array.<flyteidl.core.IContainer>} sidecarContainers
             * @memberof flyteidl.core.SwarmDefinition
             * @instance
             */
            SwarmDefinition.prototype.sidecarContainers = $util.emptyArray;

            /**
             * Creates a new SwarmDefinition instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.SwarmDefinition
             * @static
             * @param {flyteidl.core.ISwarmDefinition=} [properties] Properties to set
             * @returns {flyteidl.core.SwarmDefinition} SwarmDefinition instance
             */
            SwarmDefinition.create = function create(properties) {
                return new SwarmDefinition(properties);
            };

            /**
             * Encodes the specified SwarmDefinition message. Does not implicitly {@link flyteidl.core.SwarmDefinition.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.SwarmDefinition
             * @static
             * @param {flyteidl.core.ISwarmDefinition} message SwarmDefinition message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SwarmDefinition.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.primaryContainer != null && message.hasOwnProperty("primaryContainer"))
                    $root.flyteidl.core.Container.encode(message.primaryContainer, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.initContainers != null && message.initContainers.length)
                    for (let i = 0; i < message.initContainers.length; ++i)
                        $root.flyteidl.core.Container.encode(message.initContainers[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.sidecarContainers != null && message.sidecarContainers.length)
                    for (let i = 0; i < message.sidecarContainers.length; ++i)
                        $root.flyteidl.core.Container.encode(message.sidecarContainers[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a SwarmDefinition message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.SwarmDefinition
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.SwarmDefinition} SwarmDefinition
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SwarmDefinition.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.SwarmDefinition();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.primaryContainer = $root.flyteidl.core.Container.decode(reader, reader.uint32());
                        break;
                    case 2:
                        if (!(message.initContainers && message.initContainers.length))
                            message.initContainers = [];
                        message.initContainers.push($root.flyteidl.core.Container.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        if (!(message.sidecarContainers && message.sidecarContainers.length))
                            message.sidecarContainers = [];
                        message.sidecarContainers.push($root.flyteidl.core.Container.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a SwarmDefinition message.
             * @function verify
             * @memberof flyteidl.core.SwarmDefinition
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SwarmDefinition.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.primaryContainer != null && message.hasOwnProperty("primaryContainer")) {
                    let error = $root.flyteidl.core.Container.verify(message.primaryContainer);
                    if (error)
                        return "primaryContainer." + error;
                }
                if (message.initContainers != null && message.hasOwnProperty("initContainers")) {
                    if (!Array.isArray(message.initContainers))
                        return "initContainers: array expected";
                    for (let i = 0; i < message.initContainers.length; ++i) {
                        let error = $root.flyteidl.core.Container.verify(message.initContainers[i]);
                        if (error)
                            return "initContainers." + error;
                    }
                }
                if (message.sidecarContainers != null && message.hasOwnProperty("sidecarContainers")) {
                    if (!Array.isArray(message.sidecarContainers))
                        return "sidecarContainers: array expected";
                    for (let i = 0; i < message.sidecarContainers.length; ++i) {
                        let error = $root.flyteidl.core.Container.verify(message.sidecarContainers[i]);
                        if (error)
                            return "sidecarContainers." + error;
                    }
                }
                return null;
            };

            return SwarmDefinition;
        })();

        core.ArrayJob = (function() {

            /**
             * Properties of an ArrayJob.
             * @memberof flyteidl.core
             * @interface IArrayJob
             * @property {flyteidl.core.ITaskMetadata|null} [metadata] ArrayJob metadata
             * @property {Long|null} [slots] ArrayJob slots
             * @property {Long|null} [completions] ArrayJob completions
             * @property {flyteidl.core.IContainer|null} [container] ArrayJob container
             * @property {flyteidl.core.ISwarmDefinition|null} [swarm] ArrayJob swarm
             * @property {string|null} [path] ArrayJob path
             */

            /**
             * Constructs a new ArrayJob.
             * @memberof flyteidl.core
             * @classdesc Represents an ArrayJob.
             * @implements IArrayJob
             * @constructor
             * @param {flyteidl.core.IArrayJob=} [properties] Properties to set
             */
            function ArrayJob(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ArrayJob metadata.
             * @member {flyteidl.core.ITaskMetadata|null|undefined} metadata
             * @memberof flyteidl.core.ArrayJob
             * @instance
             */
            ArrayJob.prototype.metadata = null;

            /**
             * ArrayJob slots.
             * @member {Long} slots
             * @memberof flyteidl.core.ArrayJob
             * @instance
             */
            ArrayJob.prototype.slots = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * ArrayJob completions.
             * @member {Long} completions
             * @memberof flyteidl.core.ArrayJob
             * @instance
             */
            ArrayJob.prototype.completions = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * ArrayJob container.
             * @member {flyteidl.core.IContainer|null|undefined} container
             * @memberof flyteidl.core.ArrayJob
             * @instance
             */
            ArrayJob.prototype.container = null;

            /**
             * ArrayJob swarm.
             * @member {flyteidl.core.ISwarmDefinition|null|undefined} swarm
             * @memberof flyteidl.core.ArrayJob
             * @instance
             */
            ArrayJob.prototype.swarm = null;

            /**
             * ArrayJob path.
             * @member {string} path
             * @memberof flyteidl.core.ArrayJob
             * @instance
             */
            ArrayJob.prototype.path = "";

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * ArrayJob runnable.
             * @member {"container"|"swarm"|undefined} runnable
             * @memberof flyteidl.core.ArrayJob
             * @instance
             */
            Object.defineProperty(ArrayJob.prototype, "runnable", {
                get: $util.oneOfGetter($oneOfFields = ["container", "swarm"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new ArrayJob instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.ArrayJob
             * @static
             * @param {flyteidl.core.IArrayJob=} [properties] Properties to set
             * @returns {flyteidl.core.ArrayJob} ArrayJob instance
             */
            ArrayJob.create = function create(properties) {
                return new ArrayJob(properties);
            };

            /**
             * Encodes the specified ArrayJob message. Does not implicitly {@link flyteidl.core.ArrayJob.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.ArrayJob
             * @static
             * @param {flyteidl.core.IArrayJob} message ArrayJob message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ArrayJob.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.metadata != null && message.hasOwnProperty("metadata"))
                    $root.flyteidl.core.TaskMetadata.encode(message.metadata, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.slots != null && message.hasOwnProperty("slots"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.slots);
                if (message.completions != null && message.hasOwnProperty("completions"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.completions);
                if (message.container != null && message.hasOwnProperty("container"))
                    $root.flyteidl.core.Container.encode(message.container, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.swarm != null && message.hasOwnProperty("swarm"))
                    $root.flyteidl.core.SwarmDefinition.encode(message.swarm, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.path != null && message.hasOwnProperty("path"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.path);
                return writer;
            };

            /**
             * Decodes an ArrayJob message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.ArrayJob
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.ArrayJob} ArrayJob
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ArrayJob.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.ArrayJob();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.metadata = $root.flyteidl.core.TaskMetadata.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.slots = reader.int64();
                        break;
                    case 3:
                        message.completions = reader.int64();
                        break;
                    case 4:
                        message.container = $root.flyteidl.core.Container.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.swarm = $root.flyteidl.core.SwarmDefinition.decode(reader, reader.uint32());
                        break;
                    case 6:
                        message.path = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies an ArrayJob message.
             * @function verify
             * @memberof flyteidl.core.ArrayJob
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ArrayJob.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.metadata != null && message.hasOwnProperty("metadata")) {
                    let error = $root.flyteidl.core.TaskMetadata.verify(message.metadata);
                    if (error)
                        return "metadata." + error;
                }
                if (message.slots != null && message.hasOwnProperty("slots"))
                    if (!$util.isInteger(message.slots) && !(message.slots && $util.isInteger(message.slots.low) && $util.isInteger(message.slots.high)))
                        return "slots: integer|Long expected";
                if (message.completions != null && message.hasOwnProperty("completions"))
                    if (!$util.isInteger(message.completions) && !(message.completions && $util.isInteger(message.completions.low) && $util.isInteger(message.completions.high)))
                        return "completions: integer|Long expected";
                if (message.container != null && message.hasOwnProperty("container")) {
                    properties.runnable = 1;
                    {
                        let error = $root.flyteidl.core.Container.verify(message.container);
                        if (error)
                            return "container." + error;
                    }
                }
                if (message.swarm != null && message.hasOwnProperty("swarm")) {
                    if (properties.runnable === 1)
                        return "runnable: multiple values";
                    properties.runnable = 1;
                    {
                        let error = $root.flyteidl.core.SwarmDefinition.verify(message.swarm);
                        if (error)
                            return "swarm." + error;
                    }
                }
                if (message.path != null && message.hasOwnProperty("path"))
                    if (!$util.isString(message.path))
                        return "path: string expected";
                return null;
            };

            return ArrayJob;
        })();

        core.WorkflowClosure = (function() {

            /**
             * Properties of a WorkflowClosure.
             * @memberof flyteidl.core
             * @interface IWorkflowClosure
             * @property {flyteidl.core.IWorkflowTemplate|null} [workflow] WorkflowClosure workflow
             * @property {Array.<flyteidl.core.ITaskTemplate>|null} [tasks] WorkflowClosure tasks
             */

            /**
             * Constructs a new WorkflowClosure.
             * @memberof flyteidl.core
             * @classdesc Represents a WorkflowClosure.
             * @implements IWorkflowClosure
             * @constructor
             * @param {flyteidl.core.IWorkflowClosure=} [properties] Properties to set
             */
            function WorkflowClosure(properties) {
                this.tasks = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * WorkflowClosure workflow.
             * @member {flyteidl.core.IWorkflowTemplate|null|undefined} workflow
             * @memberof flyteidl.core.WorkflowClosure
             * @instance
             */
            WorkflowClosure.prototype.workflow = null;

            /**
             * WorkflowClosure tasks.
             * @member {Array.<flyteidl.core.ITaskTemplate>} tasks
             * @memberof flyteidl.core.WorkflowClosure
             * @instance
             */
            WorkflowClosure.prototype.tasks = $util.emptyArray;

            /**
             * Creates a new WorkflowClosure instance using the specified properties.
             * @function create
             * @memberof flyteidl.core.WorkflowClosure
             * @static
             * @param {flyteidl.core.IWorkflowClosure=} [properties] Properties to set
             * @returns {flyteidl.core.WorkflowClosure} WorkflowClosure instance
             */
            WorkflowClosure.create = function create(properties) {
                return new WorkflowClosure(properties);
            };

            /**
             * Encodes the specified WorkflowClosure message. Does not implicitly {@link flyteidl.core.WorkflowClosure.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.core.WorkflowClosure
             * @static
             * @param {flyteidl.core.IWorkflowClosure} message WorkflowClosure message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WorkflowClosure.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.workflow != null && message.hasOwnProperty("workflow"))
                    $root.flyteidl.core.WorkflowTemplate.encode(message.workflow, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.tasks != null && message.tasks.length)
                    for (let i = 0; i < message.tasks.length; ++i)
                        $root.flyteidl.core.TaskTemplate.encode(message.tasks[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a WorkflowClosure message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.core.WorkflowClosure
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.core.WorkflowClosure} WorkflowClosure
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WorkflowClosure.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.core.WorkflowClosure();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.workflow = $root.flyteidl.core.WorkflowTemplate.decode(reader, reader.uint32());
                        break;
                    case 2:
                        if (!(message.tasks && message.tasks.length))
                            message.tasks = [];
                        message.tasks.push($root.flyteidl.core.TaskTemplate.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a WorkflowClosure message.
             * @function verify
             * @memberof flyteidl.core.WorkflowClosure
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            WorkflowClosure.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.workflow != null && message.hasOwnProperty("workflow")) {
                    let error = $root.flyteidl.core.WorkflowTemplate.verify(message.workflow);
                    if (error)
                        return "workflow." + error;
                }
                if (message.tasks != null && message.hasOwnProperty("tasks")) {
                    if (!Array.isArray(message.tasks))
                        return "tasks: array expected";
                    for (let i = 0; i < message.tasks.length; ++i) {
                        let error = $root.flyteidl.core.TaskTemplate.verify(message.tasks[i]);
                        if (error)
                            return "tasks." + error;
                    }
                }
                return null;
            };

            return WorkflowClosure;
        })();

        return core;
    })();

    flyteidl.admin = (function() {

        /**
         * Namespace admin.
         * @memberof flyteidl
         * @namespace
         */
        const admin = {};

        admin.Identifier = (function() {

            /**
             * Properties of an Identifier.
             * @memberof flyteidl.admin
             * @interface IIdentifier
             * @property {string|null} [project] Identifier project
             * @property {string|null} [domain] Identifier domain
             * @property {string|null} [name] Identifier name
             */

            /**
             * Constructs a new Identifier.
             * @memberof flyteidl.admin
             * @classdesc Represents an Identifier.
             * @implements IIdentifier
             * @constructor
             * @param {flyteidl.admin.IIdentifier=} [properties] Properties to set
             */
            function Identifier(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Identifier project.
             * @member {string} project
             * @memberof flyteidl.admin.Identifier
             * @instance
             */
            Identifier.prototype.project = "";

            /**
             * Identifier domain.
             * @member {string} domain
             * @memberof flyteidl.admin.Identifier
             * @instance
             */
            Identifier.prototype.domain = "";

            /**
             * Identifier name.
             * @member {string} name
             * @memberof flyteidl.admin.Identifier
             * @instance
             */
            Identifier.prototype.name = "";

            /**
             * Creates a new Identifier instance using the specified properties.
             * @function create
             * @memberof flyteidl.admin.Identifier
             * @static
             * @param {flyteidl.admin.IIdentifier=} [properties] Properties to set
             * @returns {flyteidl.admin.Identifier} Identifier instance
             */
            Identifier.create = function create(properties) {
                return new Identifier(properties);
            };

            /**
             * Encodes the specified Identifier message. Does not implicitly {@link flyteidl.admin.Identifier.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.admin.Identifier
             * @static
             * @param {flyteidl.admin.IIdentifier} message Identifier message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Identifier.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.project != null && message.hasOwnProperty("project"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.project);
                if (message.domain != null && message.hasOwnProperty("domain"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.domain);
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
                return writer;
            };

            /**
             * Decodes an Identifier message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.admin.Identifier
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.admin.Identifier} Identifier
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Identifier.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.admin.Identifier();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.project = reader.string();
                        break;
                    case 2:
                        message.domain = reader.string();
                        break;
                    case 3:
                        message.name = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies an Identifier message.
             * @function verify
             * @memberof flyteidl.admin.Identifier
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Identifier.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.project != null && message.hasOwnProperty("project"))
                    if (!$util.isString(message.project))
                        return "project: string expected";
                if (message.domain != null && message.hasOwnProperty("domain"))
                    if (!$util.isString(message.domain))
                        return "domain: string expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                return null;
            };

            return Identifier;
        })();

        admin.IdentifierList = (function() {

            /**
             * Properties of an IdentifierList.
             * @memberof flyteidl.admin
             * @interface IIdentifierList
             * @property {Array.<flyteidl.admin.IIdentifier>|null} [entities] IdentifierList entities
             */

            /**
             * Constructs a new IdentifierList.
             * @memberof flyteidl.admin
             * @classdesc Represents an IdentifierList.
             * @implements IIdentifierList
             * @constructor
             * @param {flyteidl.admin.IIdentifierList=} [properties] Properties to set
             */
            function IdentifierList(properties) {
                this.entities = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * IdentifierList entities.
             * @member {Array.<flyteidl.admin.IIdentifier>} entities
             * @memberof flyteidl.admin.IdentifierList
             * @instance
             */
            IdentifierList.prototype.entities = $util.emptyArray;

            /**
             * Creates a new IdentifierList instance using the specified properties.
             * @function create
             * @memberof flyteidl.admin.IdentifierList
             * @static
             * @param {flyteidl.admin.IIdentifierList=} [properties] Properties to set
             * @returns {flyteidl.admin.IdentifierList} IdentifierList instance
             */
            IdentifierList.create = function create(properties) {
                return new IdentifierList(properties);
            };

            /**
             * Encodes the specified IdentifierList message. Does not implicitly {@link flyteidl.admin.IdentifierList.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.admin.IdentifierList
             * @static
             * @param {flyteidl.admin.IIdentifierList} message IdentifierList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IdentifierList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.entities != null && message.entities.length)
                    for (let i = 0; i < message.entities.length; ++i)
                        $root.flyteidl.admin.Identifier.encode(message.entities[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes an IdentifierList message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.admin.IdentifierList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.admin.IdentifierList} IdentifierList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IdentifierList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.admin.IdentifierList();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.entities && message.entities.length))
                            message.entities = [];
                        message.entities.push($root.flyteidl.admin.Identifier.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies an IdentifierList message.
             * @function verify
             * @memberof flyteidl.admin.IdentifierList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            IdentifierList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.entities != null && message.hasOwnProperty("entities")) {
                    if (!Array.isArray(message.entities))
                        return "entities: array expected";
                    for (let i = 0; i < message.entities.length; ++i) {
                        let error = $root.flyteidl.admin.Identifier.verify(message.entities[i]);
                        if (error)
                            return "entities." + error;
                    }
                }
                return null;
            };

            return IdentifierList;
        })();

        /**
         * ExecutionPhase enum.
         * @name flyteidl.admin.ExecutionPhase
         * @enum {string}
         * @property {number} UNDEFINED=0 UNDEFINED value
         * @property {number} RUNNING=1 RUNNING value
         * @property {number} SUCCEEDED=2 SUCCEEDED value
         * @property {number} FAILED=3 FAILED value
         * @property {number} TIMED_OUT=4 TIMED_OUT value
         * @property {number} ABORTED=5 ABORTED value
         * @property {number} QUEUED=6 QUEUED value
         */
        admin.ExecutionPhase = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNDEFINED"] = 0;
            values[valuesById[1] = "RUNNING"] = 1;
            values[valuesById[2] = "SUCCEEDED"] = 2;
            values[valuesById[3] = "FAILED"] = 3;
            values[valuesById[4] = "TIMED_OUT"] = 4;
            values[valuesById[5] = "ABORTED"] = 5;
            values[valuesById[6] = "QUEUED"] = 6;
            return values;
        })();

        admin.Notification = (function() {

            /**
             * Properties of a Notification.
             * @memberof flyteidl.admin
             * @interface INotification
             * @property {flyteidl.admin.Notification.Type|null} [type] Notification type
             * @property {Array.<flyteidl.admin.ExecutionPhase>|null} [phases] Notification phases
             */

            /**
             * Constructs a new Notification.
             * @memberof flyteidl.admin
             * @classdesc Represents a Notification.
             * @implements INotification
             * @constructor
             * @param {flyteidl.admin.INotification=} [properties] Properties to set
             */
            function Notification(properties) {
                this.phases = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Notification type.
             * @member {flyteidl.admin.Notification.Type} type
             * @memberof flyteidl.admin.Notification
             * @instance
             */
            Notification.prototype.type = 0;

            /**
             * Notification phases.
             * @member {Array.<flyteidl.admin.ExecutionPhase>} phases
             * @memberof flyteidl.admin.Notification
             * @instance
             */
            Notification.prototype.phases = $util.emptyArray;

            /**
             * Creates a new Notification instance using the specified properties.
             * @function create
             * @memberof flyteidl.admin.Notification
             * @static
             * @param {flyteidl.admin.INotification=} [properties] Properties to set
             * @returns {flyteidl.admin.Notification} Notification instance
             */
            Notification.create = function create(properties) {
                return new Notification(properties);
            };

            /**
             * Encodes the specified Notification message. Does not implicitly {@link flyteidl.admin.Notification.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.admin.Notification
             * @static
             * @param {flyteidl.admin.INotification} message Notification message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Notification.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type != null && message.hasOwnProperty("type"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                if (message.phases != null && message.phases.length) {
                    writer.uint32(/* id 2, wireType 2 =*/18).fork();
                    for (let i = 0; i < message.phases.length; ++i)
                        writer.int32(message.phases[i]);
                    writer.ldelim();
                }
                return writer;
            };

            /**
             * Decodes a Notification message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.admin.Notification
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.admin.Notification} Notification
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Notification.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.admin.Notification();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type = reader.int32();
                        break;
                    case 2:
                        if (!(message.phases && message.phases.length))
                            message.phases = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.phases.push(reader.int32());
                        } else
                            message.phases.push(reader.int32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a Notification message.
             * @function verify
             * @memberof flyteidl.admin.Notification
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Notification.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.phases != null && message.hasOwnProperty("phases")) {
                    if (!Array.isArray(message.phases))
                        return "phases: array expected";
                    for (let i = 0; i < message.phases.length; ++i)
                        switch (message.phases[i]) {
                        default:
                            return "phases: enum value[] expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                            break;
                        }
                }
                return null;
            };

            /**
             * Type enum.
             * @name flyteidl.admin.Notification.Type
             * @enum {string}
             * @property {number} UNDEFINED=0 UNDEFINED value
             * @property {number} EMAIL=1 EMAIL value
             * @property {number} PAGER_DUTY=2 PAGER_DUTY value
             * @property {number} SLACK=3 SLACK value
             */
            Notification.Type = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNDEFINED"] = 0;
                values[valuesById[1] = "EMAIL"] = 1;
                values[valuesById[2] = "PAGER_DUTY"] = 2;
                values[valuesById[3] = "SLACK"] = 3;
                return values;
            })();

            return Notification;
        })();

        admin.GetObjectRequest = (function() {

            /**
             * Properties of a GetObjectRequest.
             * @memberof flyteidl.admin
             * @interface IGetObjectRequest
             * @property {string|null} [urn] GetObjectRequest urn
             */

            /**
             * Constructs a new GetObjectRequest.
             * @memberof flyteidl.admin
             * @classdesc Represents a GetObjectRequest.
             * @implements IGetObjectRequest
             * @constructor
             * @param {flyteidl.admin.IGetObjectRequest=} [properties] Properties to set
             */
            function GetObjectRequest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetObjectRequest urn.
             * @member {string} urn
             * @memberof flyteidl.admin.GetObjectRequest
             * @instance
             */
            GetObjectRequest.prototype.urn = "";

            /**
             * Creates a new GetObjectRequest instance using the specified properties.
             * @function create
             * @memberof flyteidl.admin.GetObjectRequest
             * @static
             * @param {flyteidl.admin.IGetObjectRequest=} [properties] Properties to set
             * @returns {flyteidl.admin.GetObjectRequest} GetObjectRequest instance
             */
            GetObjectRequest.create = function create(properties) {
                return new GetObjectRequest(properties);
            };

            /**
             * Encodes the specified GetObjectRequest message. Does not implicitly {@link flyteidl.admin.GetObjectRequest.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.admin.GetObjectRequest
             * @static
             * @param {flyteidl.admin.IGetObjectRequest} message GetObjectRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetObjectRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.urn != null && message.hasOwnProperty("urn"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.urn);
                return writer;
            };

            /**
             * Decodes a GetObjectRequest message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.admin.GetObjectRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.admin.GetObjectRequest} GetObjectRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetObjectRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.admin.GetObjectRequest();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.urn = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a GetObjectRequest message.
             * @function verify
             * @memberof flyteidl.admin.GetObjectRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetObjectRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.urn != null && message.hasOwnProperty("urn"))
                    if (!$util.isString(message.urn))
                        return "urn: string expected";
                return null;
            };

            return GetObjectRequest;
        })();

        /**
         * ErrorCode enum.
         * @name flyteidl.admin.ErrorCode
         * @enum {string}
         * @property {number} INTERNAL_ERROR=0 INTERNAL_ERROR value
         * @property {number} USER_ERROR=1 USER_ERROR value
         * @property {number} MISSING_PARAMETERS=2 MISSING_PARAMETERS value
         * @property {number} INVALID_PARAMETERS=3 INVALID_PARAMETERS value
         */
        admin.ErrorCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "INTERNAL_ERROR"] = 0;
            values[valuesById[1] = "USER_ERROR"] = 1;
            values[valuesById[2] = "MISSING_PARAMETERS"] = 2;
            values[valuesById[3] = "INVALID_PARAMETERS"] = 3;
            return values;
        })();

        admin.Error = (function() {

            /**
             * Properties of an Error.
             * @memberof flyteidl.admin
             * @interface IError
             * @property {string|null} [message] Error message
             * @property {flyteidl.admin.ErrorCode|null} [code] Error code
             */

            /**
             * Constructs a new Error.
             * @memberof flyteidl.admin
             * @classdesc Represents an Error.
             * @implements IError
             * @constructor
             * @param {flyteidl.admin.IError=} [properties] Properties to set
             */
            function Error(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Error message.
             * @member {string} message
             * @memberof flyteidl.admin.Error
             * @instance
             */
            Error.prototype.message = "";

            /**
             * Error code.
             * @member {flyteidl.admin.ErrorCode} code
             * @memberof flyteidl.admin.Error
             * @instance
             */
            Error.prototype.code = 0;

            /**
             * Creates a new Error instance using the specified properties.
             * @function create
             * @memberof flyteidl.admin.Error
             * @static
             * @param {flyteidl.admin.IError=} [properties] Properties to set
             * @returns {flyteidl.admin.Error} Error instance
             */
            Error.create = function create(properties) {
                return new Error(properties);
            };

            /**
             * Encodes the specified Error message. Does not implicitly {@link flyteidl.admin.Error.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.admin.Error
             * @static
             * @param {flyteidl.admin.IError} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && message.hasOwnProperty("message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                if (message.code != null && message.hasOwnProperty("code"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.code);
                return writer;
            };

            /**
             * Decodes an Error message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.admin.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.admin.Error} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.admin.Error();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.message = reader.string();
                        break;
                    case 2:
                        message.code = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies an Error message.
             * @function verify
             * @memberof flyteidl.admin.Error
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Error.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                if (message.code != null && message.hasOwnProperty("code"))
                    switch (message.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                return null;
            };

            return Error;
        })();

        admin.ExecutionCreateRequest = (function() {

            /**
             * Properties of an ExecutionCreateRequest.
             * @memberof flyteidl.admin
             * @interface IExecutionCreateRequest
             * @property {flyteidl.admin.IIdentifier|null} [id] ExecutionCreateRequest id
             * @property {flyteidl.admin.IExecutionSpec|null} [spec] ExecutionCreateRequest spec
             */

            /**
             * Constructs a new ExecutionCreateRequest.
             * @memberof flyteidl.admin
             * @classdesc Represents an ExecutionCreateRequest.
             * @implements IExecutionCreateRequest
             * @constructor
             * @param {flyteidl.admin.IExecutionCreateRequest=} [properties] Properties to set
             */
            function ExecutionCreateRequest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ExecutionCreateRequest id.
             * @member {flyteidl.admin.IIdentifier|null|undefined} id
             * @memberof flyteidl.admin.ExecutionCreateRequest
             * @instance
             */
            ExecutionCreateRequest.prototype.id = null;

            /**
             * ExecutionCreateRequest spec.
             * @member {flyteidl.admin.IExecutionSpec|null|undefined} spec
             * @memberof flyteidl.admin.ExecutionCreateRequest
             * @instance
             */
            ExecutionCreateRequest.prototype.spec = null;

            /**
             * Creates a new ExecutionCreateRequest instance using the specified properties.
             * @function create
             * @memberof flyteidl.admin.ExecutionCreateRequest
             * @static
             * @param {flyteidl.admin.IExecutionCreateRequest=} [properties] Properties to set
             * @returns {flyteidl.admin.ExecutionCreateRequest} ExecutionCreateRequest instance
             */
            ExecutionCreateRequest.create = function create(properties) {
                return new ExecutionCreateRequest(properties);
            };

            /**
             * Encodes the specified ExecutionCreateRequest message. Does not implicitly {@link flyteidl.admin.ExecutionCreateRequest.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.admin.ExecutionCreateRequest
             * @static
             * @param {flyteidl.admin.IExecutionCreateRequest} message ExecutionCreateRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExecutionCreateRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    $root.flyteidl.admin.Identifier.encode(message.id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.spec != null && message.hasOwnProperty("spec"))
                    $root.flyteidl.admin.ExecutionSpec.encode(message.spec, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes an ExecutionCreateRequest message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.admin.ExecutionCreateRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.admin.ExecutionCreateRequest} ExecutionCreateRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExecutionCreateRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.admin.ExecutionCreateRequest();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = $root.flyteidl.admin.Identifier.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.spec = $root.flyteidl.admin.ExecutionSpec.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies an ExecutionCreateRequest message.
             * @function verify
             * @memberof flyteidl.admin.ExecutionCreateRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ExecutionCreateRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id")) {
                    let error = $root.flyteidl.admin.Identifier.verify(message.id);
                    if (error)
                        return "id." + error;
                }
                if (message.spec != null && message.hasOwnProperty("spec")) {
                    let error = $root.flyteidl.admin.ExecutionSpec.verify(message.spec);
                    if (error)
                        return "spec." + error;
                }
                return null;
            };

            return ExecutionCreateRequest;
        })();

        admin.ExecutionCreateResult = (function() {

            /**
             * Properties of an ExecutionCreateResult.
             * @memberof flyteidl.admin
             * @interface IExecutionCreateResult
             * @property {string|null} [urn] ExecutionCreateResult urn
             */

            /**
             * Constructs a new ExecutionCreateResult.
             * @memberof flyteidl.admin
             * @classdesc Represents an ExecutionCreateResult.
             * @implements IExecutionCreateResult
             * @constructor
             * @param {flyteidl.admin.IExecutionCreateResult=} [properties] Properties to set
             */
            function ExecutionCreateResult(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ExecutionCreateResult urn.
             * @member {string} urn
             * @memberof flyteidl.admin.ExecutionCreateResult
             * @instance
             */
            ExecutionCreateResult.prototype.urn = "";

            /**
             * Creates a new ExecutionCreateResult instance using the specified properties.
             * @function create
             * @memberof flyteidl.admin.ExecutionCreateResult
             * @static
             * @param {flyteidl.admin.IExecutionCreateResult=} [properties] Properties to set
             * @returns {flyteidl.admin.ExecutionCreateResult} ExecutionCreateResult instance
             */
            ExecutionCreateResult.create = function create(properties) {
                return new ExecutionCreateResult(properties);
            };

            /**
             * Encodes the specified ExecutionCreateResult message. Does not implicitly {@link flyteidl.admin.ExecutionCreateResult.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.admin.ExecutionCreateResult
             * @static
             * @param {flyteidl.admin.IExecutionCreateResult} message ExecutionCreateResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExecutionCreateResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.urn != null && message.hasOwnProperty("urn"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.urn);
                return writer;
            };

            /**
             * Decodes an ExecutionCreateResult message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.admin.ExecutionCreateResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.admin.ExecutionCreateResult} ExecutionCreateResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExecutionCreateResult.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.admin.ExecutionCreateResult();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.urn = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies an ExecutionCreateResult message.
             * @function verify
             * @memberof flyteidl.admin.ExecutionCreateResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ExecutionCreateResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.urn != null && message.hasOwnProperty("urn"))
                    if (!$util.isString(message.urn))
                        return "urn: string expected";
                return null;
            };

            return ExecutionCreateResult;
        })();

        admin.Execution = (function() {

            /**
             * Properties of an Execution.
             * @memberof flyteidl.admin
             * @interface IExecution
             * @property {flyteidl.admin.IIdentifier|null} [id] Execution id
             * @property {string|null} [urn] Execution urn
             * @property {flyteidl.admin.IExecutionStatus|null} [status] Execution status
             * @property {flyteidl.admin.IExecutionSpec|null} [spec] Execution spec
             * @property {flyteidl.admin.IExecutionResult|null} [result] Execution result
             */

            /**
             * Constructs a new Execution.
             * @memberof flyteidl.admin
             * @classdesc Represents an Execution.
             * @implements IExecution
             * @constructor
             * @param {flyteidl.admin.IExecution=} [properties] Properties to set
             */
            function Execution(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Execution id.
             * @member {flyteidl.admin.IIdentifier|null|undefined} id
             * @memberof flyteidl.admin.Execution
             * @instance
             */
            Execution.prototype.id = null;

            /**
             * Execution urn.
             * @member {string} urn
             * @memberof flyteidl.admin.Execution
             * @instance
             */
            Execution.prototype.urn = "";

            /**
             * Execution status.
             * @member {flyteidl.admin.IExecutionStatus|null|undefined} status
             * @memberof flyteidl.admin.Execution
             * @instance
             */
            Execution.prototype.status = null;

            /**
             * Execution spec.
             * @member {flyteidl.admin.IExecutionSpec|null|undefined} spec
             * @memberof flyteidl.admin.Execution
             * @instance
             */
            Execution.prototype.spec = null;

            /**
             * Execution result.
             * @member {flyteidl.admin.IExecutionResult|null|undefined} result
             * @memberof flyteidl.admin.Execution
             * @instance
             */
            Execution.prototype.result = null;

            /**
             * Creates a new Execution instance using the specified properties.
             * @function create
             * @memberof flyteidl.admin.Execution
             * @static
             * @param {flyteidl.admin.IExecution=} [properties] Properties to set
             * @returns {flyteidl.admin.Execution} Execution instance
             */
            Execution.create = function create(properties) {
                return new Execution(properties);
            };

            /**
             * Encodes the specified Execution message. Does not implicitly {@link flyteidl.admin.Execution.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.admin.Execution
             * @static
             * @param {flyteidl.admin.IExecution} message Execution message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Execution.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    $root.flyteidl.admin.Identifier.encode(message.id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.urn != null && message.hasOwnProperty("urn"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.urn);
                if (message.status != null && message.hasOwnProperty("status"))
                    $root.flyteidl.admin.ExecutionStatus.encode(message.status, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.spec != null && message.hasOwnProperty("spec"))
                    $root.flyteidl.admin.ExecutionSpec.encode(message.spec, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.result != null && message.hasOwnProperty("result"))
                    $root.flyteidl.admin.ExecutionResult.encode(message.result, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes an Execution message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.admin.Execution
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.admin.Execution} Execution
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Execution.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.admin.Execution();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = $root.flyteidl.admin.Identifier.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.urn = reader.string();
                        break;
                    case 3:
                        message.status = $root.flyteidl.admin.ExecutionStatus.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.spec = $root.flyteidl.admin.ExecutionSpec.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.result = $root.flyteidl.admin.ExecutionResult.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies an Execution message.
             * @function verify
             * @memberof flyteidl.admin.Execution
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Execution.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id")) {
                    let error = $root.flyteidl.admin.Identifier.verify(message.id);
                    if (error)
                        return "id." + error;
                }
                if (message.urn != null && message.hasOwnProperty("urn"))
                    if (!$util.isString(message.urn))
                        return "urn: string expected";
                if (message.status != null && message.hasOwnProperty("status")) {
                    let error = $root.flyteidl.admin.ExecutionStatus.verify(message.status);
                    if (error)
                        return "status." + error;
                }
                if (message.spec != null && message.hasOwnProperty("spec")) {
                    let error = $root.flyteidl.admin.ExecutionSpec.verify(message.spec);
                    if (error)
                        return "spec." + error;
                }
                if (message.result != null && message.hasOwnProperty("result")) {
                    let error = $root.flyteidl.admin.ExecutionResult.verify(message.result);
                    if (error)
                        return "result." + error;
                }
                return null;
            };

            return Execution;
        })();

        admin.ExecutionList = (function() {

            /**
             * Properties of an ExecutionList.
             * @memberof flyteidl.admin
             * @interface IExecutionList
             * @property {Array.<flyteidl.admin.IExecution>|null} [executions] ExecutionList executions
             */

            /**
             * Constructs a new ExecutionList.
             * @memberof flyteidl.admin
             * @classdesc Represents an ExecutionList.
             * @implements IExecutionList
             * @constructor
             * @param {flyteidl.admin.IExecutionList=} [properties] Properties to set
             */
            function ExecutionList(properties) {
                this.executions = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ExecutionList executions.
             * @member {Array.<flyteidl.admin.IExecution>} executions
             * @memberof flyteidl.admin.ExecutionList
             * @instance
             */
            ExecutionList.prototype.executions = $util.emptyArray;

            /**
             * Creates a new ExecutionList instance using the specified properties.
             * @function create
             * @memberof flyteidl.admin.ExecutionList
             * @static
             * @param {flyteidl.admin.IExecutionList=} [properties] Properties to set
             * @returns {flyteidl.admin.ExecutionList} ExecutionList instance
             */
            ExecutionList.create = function create(properties) {
                return new ExecutionList(properties);
            };

            /**
             * Encodes the specified ExecutionList message. Does not implicitly {@link flyteidl.admin.ExecutionList.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.admin.ExecutionList
             * @static
             * @param {flyteidl.admin.IExecutionList} message ExecutionList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExecutionList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.executions != null && message.executions.length)
                    for (let i = 0; i < message.executions.length; ++i)
                        $root.flyteidl.admin.Execution.encode(message.executions[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes an ExecutionList message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.admin.ExecutionList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.admin.ExecutionList} ExecutionList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExecutionList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.admin.ExecutionList();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.executions && message.executions.length))
                            message.executions = [];
                        message.executions.push($root.flyteidl.admin.Execution.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies an ExecutionList message.
             * @function verify
             * @memberof flyteidl.admin.ExecutionList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ExecutionList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.executions != null && message.hasOwnProperty("executions")) {
                    if (!Array.isArray(message.executions))
                        return "executions: array expected";
                    for (let i = 0; i < message.executions.length; ++i) {
                        let error = $root.flyteidl.admin.Execution.verify(message.executions[i]);
                        if (error)
                            return "executions." + error;
                    }
                }
                return null;
            };

            return ExecutionList;
        })();

        admin.ExecutionStatus = (function() {

            /**
             * Properties of an ExecutionStatus.
             * @memberof flyteidl.admin
             * @interface IExecutionStatus
             * @property {flyteidl.admin.ExecutionPhase|null} [phase] ExecutionStatus phase
             * @property {string|null} [workflowUrn] ExecutionStatus workflowUrn
             */

            /**
             * Constructs a new ExecutionStatus.
             * @memberof flyteidl.admin
             * @classdesc Represents an ExecutionStatus.
             * @implements IExecutionStatus
             * @constructor
             * @param {flyteidl.admin.IExecutionStatus=} [properties] Properties to set
             */
            function ExecutionStatus(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ExecutionStatus phase.
             * @member {flyteidl.admin.ExecutionPhase} phase
             * @memberof flyteidl.admin.ExecutionStatus
             * @instance
             */
            ExecutionStatus.prototype.phase = 0;

            /**
             * ExecutionStatus workflowUrn.
             * @member {string} workflowUrn
             * @memberof flyteidl.admin.ExecutionStatus
             * @instance
             */
            ExecutionStatus.prototype.workflowUrn = "";

            /**
             * Creates a new ExecutionStatus instance using the specified properties.
             * @function create
             * @memberof flyteidl.admin.ExecutionStatus
             * @static
             * @param {flyteidl.admin.IExecutionStatus=} [properties] Properties to set
             * @returns {flyteidl.admin.ExecutionStatus} ExecutionStatus instance
             */
            ExecutionStatus.create = function create(properties) {
                return new ExecutionStatus(properties);
            };

            /**
             * Encodes the specified ExecutionStatus message. Does not implicitly {@link flyteidl.admin.ExecutionStatus.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.admin.ExecutionStatus
             * @static
             * @param {flyteidl.admin.IExecutionStatus} message ExecutionStatus message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExecutionStatus.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.phase != null && message.hasOwnProperty("phase"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.phase);
                if (message.workflowUrn != null && message.hasOwnProperty("workflowUrn"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.workflowUrn);
                return writer;
            };

            /**
             * Decodes an ExecutionStatus message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.admin.ExecutionStatus
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.admin.ExecutionStatus} ExecutionStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExecutionStatus.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.admin.ExecutionStatus();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.phase = reader.int32();
                        break;
                    case 2:
                        message.workflowUrn = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies an ExecutionStatus message.
             * @function verify
             * @memberof flyteidl.admin.ExecutionStatus
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ExecutionStatus.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.phase != null && message.hasOwnProperty("phase"))
                    switch (message.phase) {
                    default:
                        return "phase: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                        break;
                    }
                if (message.workflowUrn != null && message.hasOwnProperty("workflowUrn"))
                    if (!$util.isString(message.workflowUrn))
                        return "workflowUrn: string expected";
                return null;
            };

            return ExecutionStatus;
        })();

        admin.LiteralMapBlob = (function() {

            /**
             * Properties of a LiteralMapBlob.
             * @memberof flyteidl.admin
             * @interface ILiteralMapBlob
             * @property {flyteidl.core.ILiteralMap|null} [values] LiteralMapBlob values
             * @property {string|null} [uri] LiteralMapBlob uri
             */

            /**
             * Constructs a new LiteralMapBlob.
             * @memberof flyteidl.admin
             * @classdesc Represents a LiteralMapBlob.
             * @implements ILiteralMapBlob
             * @constructor
             * @param {flyteidl.admin.ILiteralMapBlob=} [properties] Properties to set
             */
            function LiteralMapBlob(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LiteralMapBlob values.
             * @member {flyteidl.core.ILiteralMap|null|undefined} values
             * @memberof flyteidl.admin.LiteralMapBlob
             * @instance
             */
            LiteralMapBlob.prototype.values = null;

            /**
             * LiteralMapBlob uri.
             * @member {string} uri
             * @memberof flyteidl.admin.LiteralMapBlob
             * @instance
             */
            LiteralMapBlob.prototype.uri = "";

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * LiteralMapBlob data.
             * @member {"values"|"uri"|undefined} data
             * @memberof flyteidl.admin.LiteralMapBlob
             * @instance
             */
            Object.defineProperty(LiteralMapBlob.prototype, "data", {
                get: $util.oneOfGetter($oneOfFields = ["values", "uri"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new LiteralMapBlob instance using the specified properties.
             * @function create
             * @memberof flyteidl.admin.LiteralMapBlob
             * @static
             * @param {flyteidl.admin.ILiteralMapBlob=} [properties] Properties to set
             * @returns {flyteidl.admin.LiteralMapBlob} LiteralMapBlob instance
             */
            LiteralMapBlob.create = function create(properties) {
                return new LiteralMapBlob(properties);
            };

            /**
             * Encodes the specified LiteralMapBlob message. Does not implicitly {@link flyteidl.admin.LiteralMapBlob.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.admin.LiteralMapBlob
             * @static
             * @param {flyteidl.admin.ILiteralMapBlob} message LiteralMapBlob message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LiteralMapBlob.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.values != null && message.hasOwnProperty("values"))
                    $root.flyteidl.core.LiteralMap.encode(message.values, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.uri != null && message.hasOwnProperty("uri"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.uri);
                return writer;
            };

            /**
             * Decodes a LiteralMapBlob message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.admin.LiteralMapBlob
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.admin.LiteralMapBlob} LiteralMapBlob
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LiteralMapBlob.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.admin.LiteralMapBlob();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.values = $root.flyteidl.core.LiteralMap.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.uri = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a LiteralMapBlob message.
             * @function verify
             * @memberof flyteidl.admin.LiteralMapBlob
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LiteralMapBlob.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.values != null && message.hasOwnProperty("values")) {
                    properties.data = 1;
                    {
                        let error = $root.flyteidl.core.LiteralMap.verify(message.values);
                        if (error)
                            return "values." + error;
                    }
                }
                if (message.uri != null && message.hasOwnProperty("uri")) {
                    if (properties.data === 1)
                        return "data: multiple values";
                    properties.data = 1;
                    if (!$util.isString(message.uri))
                        return "uri: string expected";
                }
                return null;
            };

            return LiteralMapBlob;
        })();

        admin.ExecutionResult = (function() {

            /**
             * Properties of an ExecutionResult.
             * @memberof flyteidl.admin
             * @interface IExecutionResult
             * @property {flyteidl.admin.ILiteralMapBlob|null} [outputs] ExecutionResult outputs
             * @property {flyteidl.admin.IError|null} [error] ExecutionResult error
             */

            /**
             * Constructs a new ExecutionResult.
             * @memberof flyteidl.admin
             * @classdesc Represents an ExecutionResult.
             * @implements IExecutionResult
             * @constructor
             * @param {flyteidl.admin.IExecutionResult=} [properties] Properties to set
             */
            function ExecutionResult(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ExecutionResult outputs.
             * @member {flyteidl.admin.ILiteralMapBlob|null|undefined} outputs
             * @memberof flyteidl.admin.ExecutionResult
             * @instance
             */
            ExecutionResult.prototype.outputs = null;

            /**
             * ExecutionResult error.
             * @member {flyteidl.admin.IError|null|undefined} error
             * @memberof flyteidl.admin.ExecutionResult
             * @instance
             */
            ExecutionResult.prototype.error = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * ExecutionResult outputResult.
             * @member {"outputs"|"error"|undefined} outputResult
             * @memberof flyteidl.admin.ExecutionResult
             * @instance
             */
            Object.defineProperty(ExecutionResult.prototype, "outputResult", {
                get: $util.oneOfGetter($oneOfFields = ["outputs", "error"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new ExecutionResult instance using the specified properties.
             * @function create
             * @memberof flyteidl.admin.ExecutionResult
             * @static
             * @param {flyteidl.admin.IExecutionResult=} [properties] Properties to set
             * @returns {flyteidl.admin.ExecutionResult} ExecutionResult instance
             */
            ExecutionResult.create = function create(properties) {
                return new ExecutionResult(properties);
            };

            /**
             * Encodes the specified ExecutionResult message. Does not implicitly {@link flyteidl.admin.ExecutionResult.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.admin.ExecutionResult
             * @static
             * @param {flyteidl.admin.IExecutionResult} message ExecutionResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExecutionResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.outputs != null && message.hasOwnProperty("outputs"))
                    $root.flyteidl.admin.LiteralMapBlob.encode(message.outputs, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.error != null && message.hasOwnProperty("error"))
                    $root.flyteidl.admin.Error.encode(message.error, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes an ExecutionResult message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.admin.ExecutionResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.admin.ExecutionResult} ExecutionResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExecutionResult.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.admin.ExecutionResult();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.outputs = $root.flyteidl.admin.LiteralMapBlob.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.error = $root.flyteidl.admin.Error.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies an ExecutionResult message.
             * @function verify
             * @memberof flyteidl.admin.ExecutionResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ExecutionResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.outputs != null && message.hasOwnProperty("outputs")) {
                    properties.outputResult = 1;
                    {
                        let error = $root.flyteidl.admin.LiteralMapBlob.verify(message.outputs);
                        if (error)
                            return "outputs." + error;
                    }
                }
                if (message.error != null && message.hasOwnProperty("error")) {
                    if (properties.outputResult === 1)
                        return "outputResult: multiple values";
                    properties.outputResult = 1;
                    {
                        let error = $root.flyteidl.admin.Error.verify(message.error);
                        if (error)
                            return "error." + error;
                    }
                }
                return null;
            };

            return ExecutionResult;
        })();

        admin.ExecutionMetadata = (function() {

            /**
             * Properties of an ExecutionMetadata.
             * @memberof flyteidl.admin
             * @interface IExecutionMetadata
             * @property {flyteidl.admin.ExecutionMetadata.ExecutionMode|null} [mode] ExecutionMetadata mode
             * @property {string|null} [principal] ExecutionMetadata principal
             * @property {number|null} [nesting] ExecutionMetadata nesting
             */

            /**
             * Constructs a new ExecutionMetadata.
             * @memberof flyteidl.admin
             * @classdesc Represents an ExecutionMetadata.
             * @implements IExecutionMetadata
             * @constructor
             * @param {flyteidl.admin.IExecutionMetadata=} [properties] Properties to set
             */
            function ExecutionMetadata(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ExecutionMetadata mode.
             * @member {flyteidl.admin.ExecutionMetadata.ExecutionMode} mode
             * @memberof flyteidl.admin.ExecutionMetadata
             * @instance
             */
            ExecutionMetadata.prototype.mode = 0;

            /**
             * ExecutionMetadata principal.
             * @member {string} principal
             * @memberof flyteidl.admin.ExecutionMetadata
             * @instance
             */
            ExecutionMetadata.prototype.principal = "";

            /**
             * ExecutionMetadata nesting.
             * @member {number} nesting
             * @memberof flyteidl.admin.ExecutionMetadata
             * @instance
             */
            ExecutionMetadata.prototype.nesting = 0;

            /**
             * Creates a new ExecutionMetadata instance using the specified properties.
             * @function create
             * @memberof flyteidl.admin.ExecutionMetadata
             * @static
             * @param {flyteidl.admin.IExecutionMetadata=} [properties] Properties to set
             * @returns {flyteidl.admin.ExecutionMetadata} ExecutionMetadata instance
             */
            ExecutionMetadata.create = function create(properties) {
                return new ExecutionMetadata(properties);
            };

            /**
             * Encodes the specified ExecutionMetadata message. Does not implicitly {@link flyteidl.admin.ExecutionMetadata.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.admin.ExecutionMetadata
             * @static
             * @param {flyteidl.admin.IExecutionMetadata} message ExecutionMetadata message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExecutionMetadata.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.mode != null && message.hasOwnProperty("mode"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mode);
                if (message.principal != null && message.hasOwnProperty("principal"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.principal);
                if (message.nesting != null && message.hasOwnProperty("nesting"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.nesting);
                return writer;
            };

            /**
             * Decodes an ExecutionMetadata message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.admin.ExecutionMetadata
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.admin.ExecutionMetadata} ExecutionMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExecutionMetadata.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.admin.ExecutionMetadata();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.mode = reader.int32();
                        break;
                    case 2:
                        message.principal = reader.string();
                        break;
                    case 3:
                        message.nesting = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies an ExecutionMetadata message.
             * @function verify
             * @memberof flyteidl.admin.ExecutionMetadata
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ExecutionMetadata.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.mode != null && message.hasOwnProperty("mode"))
                    switch (message.mode) {
                    default:
                        return "mode: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.principal != null && message.hasOwnProperty("principal"))
                    if (!$util.isString(message.principal))
                        return "principal: string expected";
                if (message.nesting != null && message.hasOwnProperty("nesting"))
                    if (!$util.isInteger(message.nesting))
                        return "nesting: integer expected";
                return null;
            };

            /**
             * ExecutionMode enum.
             * @name flyteidl.admin.ExecutionMetadata.ExecutionMode
             * @enum {string}
             * @property {number} MANUAL=0 MANUAL value
             * @property {number} SCHEDULED=1 SCHEDULED value
             * @property {number} SYSTEM=2 SYSTEM value
             */
            ExecutionMetadata.ExecutionMode = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "MANUAL"] = 0;
                values[valuesById[1] = "SCHEDULED"] = 1;
                values[valuesById[2] = "SYSTEM"] = 2;
                return values;
            })();

            return ExecutionMetadata;
        })();

        admin.ExecutionSpec = (function() {

            /**
             * Properties of an ExecutionSpec.
             * @memberof flyteidl.admin
             * @interface IExecutionSpec
             * @property {string|null} [launchPlanUrn] ExecutionSpec launchPlanUrn
             * @property {flyteidl.admin.ILiteralMapBlob|null} [inputs] ExecutionSpec inputs
             * @property {flyteidl.admin.IExecutionMetadata|null} [metadata] ExecutionSpec metadata
             * @property {Array.<flyteidl.admin.INotification>|null} [notifications] ExecutionSpec notifications
             */

            /**
             * Constructs a new ExecutionSpec.
             * @memberof flyteidl.admin
             * @classdesc Represents an ExecutionSpec.
             * @implements IExecutionSpec
             * @constructor
             * @param {flyteidl.admin.IExecutionSpec=} [properties] Properties to set
             */
            function ExecutionSpec(properties) {
                this.notifications = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ExecutionSpec launchPlanUrn.
             * @member {string} launchPlanUrn
             * @memberof flyteidl.admin.ExecutionSpec
             * @instance
             */
            ExecutionSpec.prototype.launchPlanUrn = "";

            /**
             * ExecutionSpec inputs.
             * @member {flyteidl.admin.ILiteralMapBlob|null|undefined} inputs
             * @memberof flyteidl.admin.ExecutionSpec
             * @instance
             */
            ExecutionSpec.prototype.inputs = null;

            /**
             * ExecutionSpec metadata.
             * @member {flyteidl.admin.IExecutionMetadata|null|undefined} metadata
             * @memberof flyteidl.admin.ExecutionSpec
             * @instance
             */
            ExecutionSpec.prototype.metadata = null;

            /**
             * ExecutionSpec notifications.
             * @member {Array.<flyteidl.admin.INotification>} notifications
             * @memberof flyteidl.admin.ExecutionSpec
             * @instance
             */
            ExecutionSpec.prototype.notifications = $util.emptyArray;

            /**
             * Creates a new ExecutionSpec instance using the specified properties.
             * @function create
             * @memberof flyteidl.admin.ExecutionSpec
             * @static
             * @param {flyteidl.admin.IExecutionSpec=} [properties] Properties to set
             * @returns {flyteidl.admin.ExecutionSpec} ExecutionSpec instance
             */
            ExecutionSpec.create = function create(properties) {
                return new ExecutionSpec(properties);
            };

            /**
             * Encodes the specified ExecutionSpec message. Does not implicitly {@link flyteidl.admin.ExecutionSpec.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.admin.ExecutionSpec
             * @static
             * @param {flyteidl.admin.IExecutionSpec} message ExecutionSpec message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExecutionSpec.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.launchPlanUrn != null && message.hasOwnProperty("launchPlanUrn"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.launchPlanUrn);
                if (message.inputs != null && message.hasOwnProperty("inputs"))
                    $root.flyteidl.admin.LiteralMapBlob.encode(message.inputs, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.metadata != null && message.hasOwnProperty("metadata"))
                    $root.flyteidl.admin.ExecutionMetadata.encode(message.metadata, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.notifications != null && message.notifications.length)
                    for (let i = 0; i < message.notifications.length; ++i)
                        $root.flyteidl.admin.Notification.encode(message.notifications[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes an ExecutionSpec message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.admin.ExecutionSpec
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.admin.ExecutionSpec} ExecutionSpec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExecutionSpec.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.admin.ExecutionSpec();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.launchPlanUrn = reader.string();
                        break;
                    case 2:
                        message.inputs = $root.flyteidl.admin.LiteralMapBlob.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.metadata = $root.flyteidl.admin.ExecutionMetadata.decode(reader, reader.uint32());
                        break;
                    case 4:
                        if (!(message.notifications && message.notifications.length))
                            message.notifications = [];
                        message.notifications.push($root.flyteidl.admin.Notification.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies an ExecutionSpec message.
             * @function verify
             * @memberof flyteidl.admin.ExecutionSpec
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ExecutionSpec.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.launchPlanUrn != null && message.hasOwnProperty("launchPlanUrn"))
                    if (!$util.isString(message.launchPlanUrn))
                        return "launchPlanUrn: string expected";
                if (message.inputs != null && message.hasOwnProperty("inputs")) {
                    let error = $root.flyteidl.admin.LiteralMapBlob.verify(message.inputs);
                    if (error)
                        return "inputs." + error;
                }
                if (message.metadata != null && message.hasOwnProperty("metadata")) {
                    let error = $root.flyteidl.admin.ExecutionMetadata.verify(message.metadata);
                    if (error)
                        return "metadata." + error;
                }
                if (message.notifications != null && message.hasOwnProperty("notifications")) {
                    if (!Array.isArray(message.notifications))
                        return "notifications: array expected";
                    for (let i = 0; i < message.notifications.length; ++i) {
                        let error = $root.flyteidl.admin.Notification.verify(message.notifications[i]);
                        if (error)
                            return "notifications." + error;
                    }
                }
                return null;
            };

            return ExecutionSpec;
        })();

        admin.LaunchPlanCreateRequest = (function() {

            /**
             * Properties of a LaunchPlanCreateRequest.
             * @memberof flyteidl.admin
             * @interface ILaunchPlanCreateRequest
             * @property {flyteidl.admin.IIdentifier|null} [id] LaunchPlanCreateRequest id
             * @property {string|null} [version] LaunchPlanCreateRequest version
             * @property {flyteidl.admin.ILaunchPlanSpec|null} [spec] LaunchPlanCreateRequest spec
             */

            /**
             * Constructs a new LaunchPlanCreateRequest.
             * @memberof flyteidl.admin
             * @classdesc Represents a LaunchPlanCreateRequest.
             * @implements ILaunchPlanCreateRequest
             * @constructor
             * @param {flyteidl.admin.ILaunchPlanCreateRequest=} [properties] Properties to set
             */
            function LaunchPlanCreateRequest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LaunchPlanCreateRequest id.
             * @member {flyteidl.admin.IIdentifier|null|undefined} id
             * @memberof flyteidl.admin.LaunchPlanCreateRequest
             * @instance
             */
            LaunchPlanCreateRequest.prototype.id = null;

            /**
             * LaunchPlanCreateRequest version.
             * @member {string} version
             * @memberof flyteidl.admin.LaunchPlanCreateRequest
             * @instance
             */
            LaunchPlanCreateRequest.prototype.version = "";

            /**
             * LaunchPlanCreateRequest spec.
             * @member {flyteidl.admin.ILaunchPlanSpec|null|undefined} spec
             * @memberof flyteidl.admin.LaunchPlanCreateRequest
             * @instance
             */
            LaunchPlanCreateRequest.prototype.spec = null;

            /**
             * Creates a new LaunchPlanCreateRequest instance using the specified properties.
             * @function create
             * @memberof flyteidl.admin.LaunchPlanCreateRequest
             * @static
             * @param {flyteidl.admin.ILaunchPlanCreateRequest=} [properties] Properties to set
             * @returns {flyteidl.admin.LaunchPlanCreateRequest} LaunchPlanCreateRequest instance
             */
            LaunchPlanCreateRequest.create = function create(properties) {
                return new LaunchPlanCreateRequest(properties);
            };

            /**
             * Encodes the specified LaunchPlanCreateRequest message. Does not implicitly {@link flyteidl.admin.LaunchPlanCreateRequest.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.admin.LaunchPlanCreateRequest
             * @static
             * @param {flyteidl.admin.ILaunchPlanCreateRequest} message LaunchPlanCreateRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LaunchPlanCreateRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    $root.flyteidl.admin.Identifier.encode(message.id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.version != null && message.hasOwnProperty("version"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.version);
                if (message.spec != null && message.hasOwnProperty("spec"))
                    $root.flyteidl.admin.LaunchPlanSpec.encode(message.spec, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a LaunchPlanCreateRequest message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.admin.LaunchPlanCreateRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.admin.LaunchPlanCreateRequest} LaunchPlanCreateRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LaunchPlanCreateRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.admin.LaunchPlanCreateRequest();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = $root.flyteidl.admin.Identifier.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.version = reader.string();
                        break;
                    case 3:
                        message.spec = $root.flyteidl.admin.LaunchPlanSpec.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a LaunchPlanCreateRequest message.
             * @function verify
             * @memberof flyteidl.admin.LaunchPlanCreateRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LaunchPlanCreateRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id")) {
                    let error = $root.flyteidl.admin.Identifier.verify(message.id);
                    if (error)
                        return "id." + error;
                }
                if (message.version != null && message.hasOwnProperty("version"))
                    if (!$util.isString(message.version))
                        return "version: string expected";
                if (message.spec != null && message.hasOwnProperty("spec")) {
                    let error = $root.flyteidl.admin.LaunchPlanSpec.verify(message.spec);
                    if (error)
                        return "spec." + error;
                }
                return null;
            };

            return LaunchPlanCreateRequest;
        })();

        admin.LaunchPlanCreateResponse = (function() {

            /**
             * Properties of a LaunchPlanCreateResponse.
             * @memberof flyteidl.admin
             * @interface ILaunchPlanCreateResponse
             * @property {string|null} [urn] LaunchPlanCreateResponse urn
             */

            /**
             * Constructs a new LaunchPlanCreateResponse.
             * @memberof flyteidl.admin
             * @classdesc Represents a LaunchPlanCreateResponse.
             * @implements ILaunchPlanCreateResponse
             * @constructor
             * @param {flyteidl.admin.ILaunchPlanCreateResponse=} [properties] Properties to set
             */
            function LaunchPlanCreateResponse(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LaunchPlanCreateResponse urn.
             * @member {string} urn
             * @memberof flyteidl.admin.LaunchPlanCreateResponse
             * @instance
             */
            LaunchPlanCreateResponse.prototype.urn = "";

            /**
             * Creates a new LaunchPlanCreateResponse instance using the specified properties.
             * @function create
             * @memberof flyteidl.admin.LaunchPlanCreateResponse
             * @static
             * @param {flyteidl.admin.ILaunchPlanCreateResponse=} [properties] Properties to set
             * @returns {flyteidl.admin.LaunchPlanCreateResponse} LaunchPlanCreateResponse instance
             */
            LaunchPlanCreateResponse.create = function create(properties) {
                return new LaunchPlanCreateResponse(properties);
            };

            /**
             * Encodes the specified LaunchPlanCreateResponse message. Does not implicitly {@link flyteidl.admin.LaunchPlanCreateResponse.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.admin.LaunchPlanCreateResponse
             * @static
             * @param {flyteidl.admin.ILaunchPlanCreateResponse} message LaunchPlanCreateResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LaunchPlanCreateResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.urn != null && message.hasOwnProperty("urn"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.urn);
                return writer;
            };

            /**
             * Decodes a LaunchPlanCreateResponse message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.admin.LaunchPlanCreateResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.admin.LaunchPlanCreateResponse} LaunchPlanCreateResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LaunchPlanCreateResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.admin.LaunchPlanCreateResponse();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.urn = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a LaunchPlanCreateResponse message.
             * @function verify
             * @memberof flyteidl.admin.LaunchPlanCreateResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LaunchPlanCreateResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.urn != null && message.hasOwnProperty("urn"))
                    if (!$util.isString(message.urn))
                        return "urn: string expected";
                return null;
            };

            return LaunchPlanCreateResponse;
        })();

        /**
         * LaunchPlanPhase enum.
         * @name flyteidl.admin.LaunchPlanPhase
         * @enum {string}
         * @property {number} INACTIVE=0 INACTIVE value
         * @property {number} ACTIVE=1 ACTIVE value
         */
        admin.LaunchPlanPhase = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "INACTIVE"] = 0;
            values[valuesById[1] = "ACTIVE"] = 1;
            return values;
        })();

        admin.LaunchPlan = (function() {

            /**
             * Properties of a LaunchPlan.
             * @memberof flyteidl.admin
             * @interface ILaunchPlan
             * @property {flyteidl.admin.IIdentifier|null} [id] LaunchPlan id
             * @property {string|null} [version] LaunchPlan version
             * @property {string|null} [urn] LaunchPlan urn
             * @property {flyteidl.admin.ILaunchPlanSpec|null} [spec] LaunchPlan spec
             * @property {flyteidl.admin.ILaunchPlanStatus|null} [status] LaunchPlan status
             */

            /**
             * Constructs a new LaunchPlan.
             * @memberof flyteidl.admin
             * @classdesc Represents a LaunchPlan.
             * @implements ILaunchPlan
             * @constructor
             * @param {flyteidl.admin.ILaunchPlan=} [properties] Properties to set
             */
            function LaunchPlan(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LaunchPlan id.
             * @member {flyteidl.admin.IIdentifier|null|undefined} id
             * @memberof flyteidl.admin.LaunchPlan
             * @instance
             */
            LaunchPlan.prototype.id = null;

            /**
             * LaunchPlan version.
             * @member {string} version
             * @memberof flyteidl.admin.LaunchPlan
             * @instance
             */
            LaunchPlan.prototype.version = "";

            /**
             * LaunchPlan urn.
             * @member {string} urn
             * @memberof flyteidl.admin.LaunchPlan
             * @instance
             */
            LaunchPlan.prototype.urn = "";

            /**
             * LaunchPlan spec.
             * @member {flyteidl.admin.ILaunchPlanSpec|null|undefined} spec
             * @memberof flyteidl.admin.LaunchPlan
             * @instance
             */
            LaunchPlan.prototype.spec = null;

            /**
             * LaunchPlan status.
             * @member {flyteidl.admin.ILaunchPlanStatus|null|undefined} status
             * @memberof flyteidl.admin.LaunchPlan
             * @instance
             */
            LaunchPlan.prototype.status = null;

            /**
             * Creates a new LaunchPlan instance using the specified properties.
             * @function create
             * @memberof flyteidl.admin.LaunchPlan
             * @static
             * @param {flyteidl.admin.ILaunchPlan=} [properties] Properties to set
             * @returns {flyteidl.admin.LaunchPlan} LaunchPlan instance
             */
            LaunchPlan.create = function create(properties) {
                return new LaunchPlan(properties);
            };

            /**
             * Encodes the specified LaunchPlan message. Does not implicitly {@link flyteidl.admin.LaunchPlan.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.admin.LaunchPlan
             * @static
             * @param {flyteidl.admin.ILaunchPlan} message LaunchPlan message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LaunchPlan.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    $root.flyteidl.admin.Identifier.encode(message.id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.version != null && message.hasOwnProperty("version"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.version);
                if (message.urn != null && message.hasOwnProperty("urn"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.urn);
                if (message.spec != null && message.hasOwnProperty("spec"))
                    $root.flyteidl.admin.LaunchPlanSpec.encode(message.spec, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.status != null && message.hasOwnProperty("status"))
                    $root.flyteidl.admin.LaunchPlanStatus.encode(message.status, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a LaunchPlan message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.admin.LaunchPlan
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.admin.LaunchPlan} LaunchPlan
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LaunchPlan.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.admin.LaunchPlan();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = $root.flyteidl.admin.Identifier.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.version = reader.string();
                        break;
                    case 3:
                        message.urn = reader.string();
                        break;
                    case 4:
                        message.spec = $root.flyteidl.admin.LaunchPlanSpec.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.status = $root.flyteidl.admin.LaunchPlanStatus.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a LaunchPlan message.
             * @function verify
             * @memberof flyteidl.admin.LaunchPlan
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LaunchPlan.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id")) {
                    let error = $root.flyteidl.admin.Identifier.verify(message.id);
                    if (error)
                        return "id." + error;
                }
                if (message.version != null && message.hasOwnProperty("version"))
                    if (!$util.isString(message.version))
                        return "version: string expected";
                if (message.urn != null && message.hasOwnProperty("urn"))
                    if (!$util.isString(message.urn))
                        return "urn: string expected";
                if (message.spec != null && message.hasOwnProperty("spec")) {
                    let error = $root.flyteidl.admin.LaunchPlanSpec.verify(message.spec);
                    if (error)
                        return "spec." + error;
                }
                if (message.status != null && message.hasOwnProperty("status")) {
                    let error = $root.flyteidl.admin.LaunchPlanStatus.verify(message.status);
                    if (error)
                        return "status." + error;
                }
                return null;
            };

            return LaunchPlan;
        })();

        admin.LaunchPlanList = (function() {

            /**
             * Properties of a LaunchPlanList.
             * @memberof flyteidl.admin
             * @interface ILaunchPlanList
             * @property {Array.<flyteidl.admin.ILaunchPlan>|null} [launchPlans] LaunchPlanList launchPlans
             */

            /**
             * Constructs a new LaunchPlanList.
             * @memberof flyteidl.admin
             * @classdesc Represents a LaunchPlanList.
             * @implements ILaunchPlanList
             * @constructor
             * @param {flyteidl.admin.ILaunchPlanList=} [properties] Properties to set
             */
            function LaunchPlanList(properties) {
                this.launchPlans = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LaunchPlanList launchPlans.
             * @member {Array.<flyteidl.admin.ILaunchPlan>} launchPlans
             * @memberof flyteidl.admin.LaunchPlanList
             * @instance
             */
            LaunchPlanList.prototype.launchPlans = $util.emptyArray;

            /**
             * Creates a new LaunchPlanList instance using the specified properties.
             * @function create
             * @memberof flyteidl.admin.LaunchPlanList
             * @static
             * @param {flyteidl.admin.ILaunchPlanList=} [properties] Properties to set
             * @returns {flyteidl.admin.LaunchPlanList} LaunchPlanList instance
             */
            LaunchPlanList.create = function create(properties) {
                return new LaunchPlanList(properties);
            };

            /**
             * Encodes the specified LaunchPlanList message. Does not implicitly {@link flyteidl.admin.LaunchPlanList.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.admin.LaunchPlanList
             * @static
             * @param {flyteidl.admin.ILaunchPlanList} message LaunchPlanList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LaunchPlanList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.launchPlans != null && message.launchPlans.length)
                    for (let i = 0; i < message.launchPlans.length; ++i)
                        $root.flyteidl.admin.LaunchPlan.encode(message.launchPlans[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a LaunchPlanList message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.admin.LaunchPlanList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.admin.LaunchPlanList} LaunchPlanList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LaunchPlanList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.admin.LaunchPlanList();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.launchPlans && message.launchPlans.length))
                            message.launchPlans = [];
                        message.launchPlans.push($root.flyteidl.admin.LaunchPlan.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a LaunchPlanList message.
             * @function verify
             * @memberof flyteidl.admin.LaunchPlanList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LaunchPlanList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.launchPlans != null && message.hasOwnProperty("launchPlans")) {
                    if (!Array.isArray(message.launchPlans))
                        return "launchPlans: array expected";
                    for (let i = 0; i < message.launchPlans.length; ++i) {
                        let error = $root.flyteidl.admin.LaunchPlan.verify(message.launchPlans[i]);
                        if (error)
                            return "launchPlans." + error;
                    }
                }
                return null;
            };

            return LaunchPlanList;
        })();

        admin.LaunchPlanSpec = (function() {

            /**
             * Properties of a LaunchPlanSpec.
             * @memberof flyteidl.admin
             * @interface ILaunchPlanSpec
             * @property {string|null} [workflowUrn] LaunchPlanSpec workflowUrn
             * @property {flyteidl.admin.ILaunchPlanMetadata|null} [entityMetadata] LaunchPlanSpec entityMetadata
             * @property {flyteidl.core.IParameterMap|null} [defaultInputs] LaunchPlanSpec defaultInputs
             * @property {flyteidl.core.ILiteralMap|null} [fixedInputs] LaunchPlanSpec fixedInputs
             */

            /**
             * Constructs a new LaunchPlanSpec.
             * @memberof flyteidl.admin
             * @classdesc Represents a LaunchPlanSpec.
             * @implements ILaunchPlanSpec
             * @constructor
             * @param {flyteidl.admin.ILaunchPlanSpec=} [properties] Properties to set
             */
            function LaunchPlanSpec(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LaunchPlanSpec workflowUrn.
             * @member {string} workflowUrn
             * @memberof flyteidl.admin.LaunchPlanSpec
             * @instance
             */
            LaunchPlanSpec.prototype.workflowUrn = "";

            /**
             * LaunchPlanSpec entityMetadata.
             * @member {flyteidl.admin.ILaunchPlanMetadata|null|undefined} entityMetadata
             * @memberof flyteidl.admin.LaunchPlanSpec
             * @instance
             */
            LaunchPlanSpec.prototype.entityMetadata = null;

            /**
             * LaunchPlanSpec defaultInputs.
             * @member {flyteidl.core.IParameterMap|null|undefined} defaultInputs
             * @memberof flyteidl.admin.LaunchPlanSpec
             * @instance
             */
            LaunchPlanSpec.prototype.defaultInputs = null;

            /**
             * LaunchPlanSpec fixedInputs.
             * @member {flyteidl.core.ILiteralMap|null|undefined} fixedInputs
             * @memberof flyteidl.admin.LaunchPlanSpec
             * @instance
             */
            LaunchPlanSpec.prototype.fixedInputs = null;

            /**
             * Creates a new LaunchPlanSpec instance using the specified properties.
             * @function create
             * @memberof flyteidl.admin.LaunchPlanSpec
             * @static
             * @param {flyteidl.admin.ILaunchPlanSpec=} [properties] Properties to set
             * @returns {flyteidl.admin.LaunchPlanSpec} LaunchPlanSpec instance
             */
            LaunchPlanSpec.create = function create(properties) {
                return new LaunchPlanSpec(properties);
            };

            /**
             * Encodes the specified LaunchPlanSpec message. Does not implicitly {@link flyteidl.admin.LaunchPlanSpec.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.admin.LaunchPlanSpec
             * @static
             * @param {flyteidl.admin.ILaunchPlanSpec} message LaunchPlanSpec message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LaunchPlanSpec.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.workflowUrn != null && message.hasOwnProperty("workflowUrn"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.workflowUrn);
                if (message.entityMetadata != null && message.hasOwnProperty("entityMetadata"))
                    $root.flyteidl.admin.LaunchPlanMetadata.encode(message.entityMetadata, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.defaultInputs != null && message.hasOwnProperty("defaultInputs"))
                    $root.flyteidl.core.ParameterMap.encode(message.defaultInputs, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.fixedInputs != null && message.hasOwnProperty("fixedInputs"))
                    $root.flyteidl.core.LiteralMap.encode(message.fixedInputs, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a LaunchPlanSpec message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.admin.LaunchPlanSpec
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.admin.LaunchPlanSpec} LaunchPlanSpec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LaunchPlanSpec.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.admin.LaunchPlanSpec();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.workflowUrn = reader.string();
                        break;
                    case 2:
                        message.entityMetadata = $root.flyteidl.admin.LaunchPlanMetadata.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.defaultInputs = $root.flyteidl.core.ParameterMap.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.fixedInputs = $root.flyteidl.core.LiteralMap.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a LaunchPlanSpec message.
             * @function verify
             * @memberof flyteidl.admin.LaunchPlanSpec
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LaunchPlanSpec.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.workflowUrn != null && message.hasOwnProperty("workflowUrn"))
                    if (!$util.isString(message.workflowUrn))
                        return "workflowUrn: string expected";
                if (message.entityMetadata != null && message.hasOwnProperty("entityMetadata")) {
                    let error = $root.flyteidl.admin.LaunchPlanMetadata.verify(message.entityMetadata);
                    if (error)
                        return "entityMetadata." + error;
                }
                if (message.defaultInputs != null && message.hasOwnProperty("defaultInputs")) {
                    let error = $root.flyteidl.core.ParameterMap.verify(message.defaultInputs);
                    if (error)
                        return "defaultInputs." + error;
                }
                if (message.fixedInputs != null && message.hasOwnProperty("fixedInputs")) {
                    let error = $root.flyteidl.core.LiteralMap.verify(message.fixedInputs);
                    if (error)
                        return "fixedInputs." + error;
                }
                return null;
            };

            return LaunchPlanSpec;
        })();

        admin.LaunchPlanStatus = (function() {

            /**
             * Properties of a LaunchPlanStatus.
             * @memberof flyteidl.admin
             * @interface ILaunchPlanStatus
             * @property {flyteidl.admin.LaunchPlanPhase|null} [phase] LaunchPlanStatus phase
             * @property {flyteidl.core.IParameterMap|null} [expectedInputs] LaunchPlanStatus expectedInputs
             * @property {flyteidl.core.IVariableMap|null} [expectedOutputs] LaunchPlanStatus expectedOutputs
             */

            /**
             * Constructs a new LaunchPlanStatus.
             * @memberof flyteidl.admin
             * @classdesc Represents a LaunchPlanStatus.
             * @implements ILaunchPlanStatus
             * @constructor
             * @param {flyteidl.admin.ILaunchPlanStatus=} [properties] Properties to set
             */
            function LaunchPlanStatus(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LaunchPlanStatus phase.
             * @member {flyteidl.admin.LaunchPlanPhase} phase
             * @memberof flyteidl.admin.LaunchPlanStatus
             * @instance
             */
            LaunchPlanStatus.prototype.phase = 0;

            /**
             * LaunchPlanStatus expectedInputs.
             * @member {flyteidl.core.IParameterMap|null|undefined} expectedInputs
             * @memberof flyteidl.admin.LaunchPlanStatus
             * @instance
             */
            LaunchPlanStatus.prototype.expectedInputs = null;

            /**
             * LaunchPlanStatus expectedOutputs.
             * @member {flyteidl.core.IVariableMap|null|undefined} expectedOutputs
             * @memberof flyteidl.admin.LaunchPlanStatus
             * @instance
             */
            LaunchPlanStatus.prototype.expectedOutputs = null;

            /**
             * Creates a new LaunchPlanStatus instance using the specified properties.
             * @function create
             * @memberof flyteidl.admin.LaunchPlanStatus
             * @static
             * @param {flyteidl.admin.ILaunchPlanStatus=} [properties] Properties to set
             * @returns {flyteidl.admin.LaunchPlanStatus} LaunchPlanStatus instance
             */
            LaunchPlanStatus.create = function create(properties) {
                return new LaunchPlanStatus(properties);
            };

            /**
             * Encodes the specified LaunchPlanStatus message. Does not implicitly {@link flyteidl.admin.LaunchPlanStatus.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.admin.LaunchPlanStatus
             * @static
             * @param {flyteidl.admin.ILaunchPlanStatus} message LaunchPlanStatus message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LaunchPlanStatus.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.phase != null && message.hasOwnProperty("phase"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.phase);
                if (message.expectedInputs != null && message.hasOwnProperty("expectedInputs"))
                    $root.flyteidl.core.ParameterMap.encode(message.expectedInputs, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.expectedOutputs != null && message.hasOwnProperty("expectedOutputs"))
                    $root.flyteidl.core.VariableMap.encode(message.expectedOutputs, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a LaunchPlanStatus message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.admin.LaunchPlanStatus
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.admin.LaunchPlanStatus} LaunchPlanStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LaunchPlanStatus.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.admin.LaunchPlanStatus();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.phase = reader.int32();
                        break;
                    case 2:
                        message.expectedInputs = $root.flyteidl.core.ParameterMap.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.expectedOutputs = $root.flyteidl.core.VariableMap.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a LaunchPlanStatus message.
             * @function verify
             * @memberof flyteidl.admin.LaunchPlanStatus
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LaunchPlanStatus.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.phase != null && message.hasOwnProperty("phase"))
                    switch (message.phase) {
                    default:
                        return "phase: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                if (message.expectedInputs != null && message.hasOwnProperty("expectedInputs")) {
                    let error = $root.flyteidl.core.ParameterMap.verify(message.expectedInputs);
                    if (error)
                        return "expectedInputs." + error;
                }
                if (message.expectedOutputs != null && message.hasOwnProperty("expectedOutputs")) {
                    let error = $root.flyteidl.core.VariableMap.verify(message.expectedOutputs);
                    if (error)
                        return "expectedOutputs." + error;
                }
                return null;
            };

            return LaunchPlanStatus;
        })();

        admin.LaunchPlanMetadata = (function() {

            /**
             * Properties of a LaunchPlanMetadata.
             * @memberof flyteidl.admin
             * @interface ILaunchPlanMetadata
             * @property {flyteidl.admin.ISchedule|null} [schedule] LaunchPlanMetadata schedule
             * @property {Array.<flyteidl.admin.INotification>|null} [notifications] LaunchPlanMetadata notifications
             */

            /**
             * Constructs a new LaunchPlanMetadata.
             * @memberof flyteidl.admin
             * @classdesc Represents a LaunchPlanMetadata.
             * @implements ILaunchPlanMetadata
             * @constructor
             * @param {flyteidl.admin.ILaunchPlanMetadata=} [properties] Properties to set
             */
            function LaunchPlanMetadata(properties) {
                this.notifications = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LaunchPlanMetadata schedule.
             * @member {flyteidl.admin.ISchedule|null|undefined} schedule
             * @memberof flyteidl.admin.LaunchPlanMetadata
             * @instance
             */
            LaunchPlanMetadata.prototype.schedule = null;

            /**
             * LaunchPlanMetadata notifications.
             * @member {Array.<flyteidl.admin.INotification>} notifications
             * @memberof flyteidl.admin.LaunchPlanMetadata
             * @instance
             */
            LaunchPlanMetadata.prototype.notifications = $util.emptyArray;

            /**
             * Creates a new LaunchPlanMetadata instance using the specified properties.
             * @function create
             * @memberof flyteidl.admin.LaunchPlanMetadata
             * @static
             * @param {flyteidl.admin.ILaunchPlanMetadata=} [properties] Properties to set
             * @returns {flyteidl.admin.LaunchPlanMetadata} LaunchPlanMetadata instance
             */
            LaunchPlanMetadata.create = function create(properties) {
                return new LaunchPlanMetadata(properties);
            };

            /**
             * Encodes the specified LaunchPlanMetadata message. Does not implicitly {@link flyteidl.admin.LaunchPlanMetadata.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.admin.LaunchPlanMetadata
             * @static
             * @param {flyteidl.admin.ILaunchPlanMetadata} message LaunchPlanMetadata message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LaunchPlanMetadata.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.schedule != null && message.hasOwnProperty("schedule"))
                    $root.flyteidl.admin.Schedule.encode(message.schedule, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.notifications != null && message.notifications.length)
                    for (let i = 0; i < message.notifications.length; ++i)
                        $root.flyteidl.admin.Notification.encode(message.notifications[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a LaunchPlanMetadata message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.admin.LaunchPlanMetadata
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.admin.LaunchPlanMetadata} LaunchPlanMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LaunchPlanMetadata.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.admin.LaunchPlanMetadata();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.schedule = $root.flyteidl.admin.Schedule.decode(reader, reader.uint32());
                        break;
                    case 2:
                        if (!(message.notifications && message.notifications.length))
                            message.notifications = [];
                        message.notifications.push($root.flyteidl.admin.Notification.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a LaunchPlanMetadata message.
             * @function verify
             * @memberof flyteidl.admin.LaunchPlanMetadata
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LaunchPlanMetadata.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.schedule != null && message.hasOwnProperty("schedule")) {
                    let error = $root.flyteidl.admin.Schedule.verify(message.schedule);
                    if (error)
                        return "schedule." + error;
                }
                if (message.notifications != null && message.hasOwnProperty("notifications")) {
                    if (!Array.isArray(message.notifications))
                        return "notifications: array expected";
                    for (let i = 0; i < message.notifications.length; ++i) {
                        let error = $root.flyteidl.admin.Notification.verify(message.notifications[i]);
                        if (error)
                            return "notifications." + error;
                    }
                }
                return null;
            };

            return LaunchPlanMetadata;
        })();

        admin.Schedule = (function() {

            /**
             * Properties of a Schedule.
             * @memberof flyteidl.admin
             * @interface ISchedule
             * @property {string|null} [cronExpression] Schedule cronExpression
             * @property {flyteidl.admin.Schedule.IFixedRate|null} [fixedRate] Schedule fixedRate
             * @property {string|null} [kickoffTimeInputArg] Schedule kickoffTimeInputArg
             */

            /**
             * Constructs a new Schedule.
             * @memberof flyteidl.admin
             * @classdesc Represents a Schedule.
             * @implements ISchedule
             * @constructor
             * @param {flyteidl.admin.ISchedule=} [properties] Properties to set
             */
            function Schedule(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Schedule cronExpression.
             * @member {string} cronExpression
             * @memberof flyteidl.admin.Schedule
             * @instance
             */
            Schedule.prototype.cronExpression = "";

            /**
             * Schedule fixedRate.
             * @member {flyteidl.admin.Schedule.IFixedRate|null|undefined} fixedRate
             * @memberof flyteidl.admin.Schedule
             * @instance
             */
            Schedule.prototype.fixedRate = null;

            /**
             * Schedule kickoffTimeInputArg.
             * @member {string} kickoffTimeInputArg
             * @memberof flyteidl.admin.Schedule
             * @instance
             */
            Schedule.prototype.kickoffTimeInputArg = "";

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * Schedule ScheduleExpression.
             * @member {"cronExpression"|"fixedRate"|undefined} ScheduleExpression
             * @memberof flyteidl.admin.Schedule
             * @instance
             */
            Object.defineProperty(Schedule.prototype, "ScheduleExpression", {
                get: $util.oneOfGetter($oneOfFields = ["cronExpression", "fixedRate"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Schedule instance using the specified properties.
             * @function create
             * @memberof flyteidl.admin.Schedule
             * @static
             * @param {flyteidl.admin.ISchedule=} [properties] Properties to set
             * @returns {flyteidl.admin.Schedule} Schedule instance
             */
            Schedule.create = function create(properties) {
                return new Schedule(properties);
            };

            /**
             * Encodes the specified Schedule message. Does not implicitly {@link flyteidl.admin.Schedule.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.admin.Schedule
             * @static
             * @param {flyteidl.admin.ISchedule} message Schedule message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Schedule.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.cronExpression != null && message.hasOwnProperty("cronExpression"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.cronExpression);
                if (message.fixedRate != null && message.hasOwnProperty("fixedRate"))
                    $root.flyteidl.admin.Schedule.FixedRate.encode(message.fixedRate, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.kickoffTimeInputArg != null && message.hasOwnProperty("kickoffTimeInputArg"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.kickoffTimeInputArg);
                return writer;
            };

            /**
             * Decodes a Schedule message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.admin.Schedule
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.admin.Schedule} Schedule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Schedule.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.admin.Schedule();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.cronExpression = reader.string();
                        break;
                    case 2:
                        message.fixedRate = $root.flyteidl.admin.Schedule.FixedRate.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.kickoffTimeInputArg = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a Schedule message.
             * @function verify
             * @memberof flyteidl.admin.Schedule
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Schedule.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.cronExpression != null && message.hasOwnProperty("cronExpression")) {
                    properties.ScheduleExpression = 1;
                    if (!$util.isString(message.cronExpression))
                        return "cronExpression: string expected";
                }
                if (message.fixedRate != null && message.hasOwnProperty("fixedRate")) {
                    if (properties.ScheduleExpression === 1)
                        return "ScheduleExpression: multiple values";
                    properties.ScheduleExpression = 1;
                    {
                        let error = $root.flyteidl.admin.Schedule.FixedRate.verify(message.fixedRate);
                        if (error)
                            return "fixedRate." + error;
                    }
                }
                if (message.kickoffTimeInputArg != null && message.hasOwnProperty("kickoffTimeInputArg"))
                    if (!$util.isString(message.kickoffTimeInputArg))
                        return "kickoffTimeInputArg: string expected";
                return null;
            };

            /**
             * FixedRateUnit enum.
             * @name flyteidl.admin.Schedule.FixedRateUnit
             * @enum {string}
             * @property {number} MINUTE=0 MINUTE value
             * @property {number} HOUR=1 HOUR value
             * @property {number} DAY=2 DAY value
             */
            Schedule.FixedRateUnit = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "MINUTE"] = 0;
                values[valuesById[1] = "HOUR"] = 1;
                values[valuesById[2] = "DAY"] = 2;
                return values;
            })();

            Schedule.FixedRate = (function() {

                /**
                 * Properties of a FixedRate.
                 * @memberof flyteidl.admin.Schedule
                 * @interface IFixedRate
                 * @property {number|null} [value] FixedRate value
                 * @property {flyteidl.admin.Schedule.FixedRateUnit|null} [unit] FixedRate unit
                 */

                /**
                 * Constructs a new FixedRate.
                 * @memberof flyteidl.admin.Schedule
                 * @classdesc Represents a FixedRate.
                 * @implements IFixedRate
                 * @constructor
                 * @param {flyteidl.admin.Schedule.IFixedRate=} [properties] Properties to set
                 */
                function FixedRate(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * FixedRate value.
                 * @member {number} value
                 * @memberof flyteidl.admin.Schedule.FixedRate
                 * @instance
                 */
                FixedRate.prototype.value = 0;

                /**
                 * FixedRate unit.
                 * @member {flyteidl.admin.Schedule.FixedRateUnit} unit
                 * @memberof flyteidl.admin.Schedule.FixedRate
                 * @instance
                 */
                FixedRate.prototype.unit = 0;

                /**
                 * Creates a new FixedRate instance using the specified properties.
                 * @function create
                 * @memberof flyteidl.admin.Schedule.FixedRate
                 * @static
                 * @param {flyteidl.admin.Schedule.IFixedRate=} [properties] Properties to set
                 * @returns {flyteidl.admin.Schedule.FixedRate} FixedRate instance
                 */
                FixedRate.create = function create(properties) {
                    return new FixedRate(properties);
                };

                /**
                 * Encodes the specified FixedRate message. Does not implicitly {@link flyteidl.admin.Schedule.FixedRate.verify|verify} messages.
                 * @function encode
                 * @memberof flyteidl.admin.Schedule.FixedRate
                 * @static
                 * @param {flyteidl.admin.Schedule.IFixedRate} message FixedRate message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FixedRate.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.value != null && message.hasOwnProperty("value"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.value);
                    if (message.unit != null && message.hasOwnProperty("unit"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.unit);
                    return writer;
                };

                /**
                 * Decodes a FixedRate message from the specified reader or buffer.
                 * @function decode
                 * @memberof flyteidl.admin.Schedule.FixedRate
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {flyteidl.admin.Schedule.FixedRate} FixedRate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FixedRate.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.admin.Schedule.FixedRate();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.value = reader.uint32();
                            break;
                        case 2:
                            message.unit = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Verifies a FixedRate message.
                 * @function verify
                 * @memberof flyteidl.admin.Schedule.FixedRate
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FixedRate.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (!$util.isInteger(message.value))
                            return "value: integer expected";
                    if (message.unit != null && message.hasOwnProperty("unit"))
                        switch (message.unit) {
                        default:
                            return "unit: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    return null;
                };

                return FixedRate;
            })();

            return Schedule;
        })();

        admin.NodeExecutionEventRequest = (function() {

            /**
             * Properties of a NodeExecutionEventRequest.
             * @memberof flyteidl.admin
             * @interface INodeExecutionEventRequest
             * @property {string|null} [executionId] NodeExecutionEventRequest executionId
             * @property {string|null} [eventId] NodeExecutionEventRequest eventId
             * @property {flyteidl.admin.INodeExecutionStatus|null} [result] NodeExecutionEventRequest result
             * @property {flyteidl.admin.INodeExecutionSpec|null} [spec] NodeExecutionEventRequest spec
             */

            /**
             * Constructs a new NodeExecutionEventRequest.
             * @memberof flyteidl.admin
             * @classdesc Represents a NodeExecutionEventRequest.
             * @implements INodeExecutionEventRequest
             * @constructor
             * @param {flyteidl.admin.INodeExecutionEventRequest=} [properties] Properties to set
             */
            function NodeExecutionEventRequest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * NodeExecutionEventRequest executionId.
             * @member {string} executionId
             * @memberof flyteidl.admin.NodeExecutionEventRequest
             * @instance
             */
            NodeExecutionEventRequest.prototype.executionId = "";

            /**
             * NodeExecutionEventRequest eventId.
             * @member {string} eventId
             * @memberof flyteidl.admin.NodeExecutionEventRequest
             * @instance
             */
            NodeExecutionEventRequest.prototype.eventId = "";

            /**
             * NodeExecutionEventRequest result.
             * @member {flyteidl.admin.INodeExecutionStatus|null|undefined} result
             * @memberof flyteidl.admin.NodeExecutionEventRequest
             * @instance
             */
            NodeExecutionEventRequest.prototype.result = null;

            /**
             * NodeExecutionEventRequest spec.
             * @member {flyteidl.admin.INodeExecutionSpec|null|undefined} spec
             * @memberof flyteidl.admin.NodeExecutionEventRequest
             * @instance
             */
            NodeExecutionEventRequest.prototype.spec = null;

            /**
             * Creates a new NodeExecutionEventRequest instance using the specified properties.
             * @function create
             * @memberof flyteidl.admin.NodeExecutionEventRequest
             * @static
             * @param {flyteidl.admin.INodeExecutionEventRequest=} [properties] Properties to set
             * @returns {flyteidl.admin.NodeExecutionEventRequest} NodeExecutionEventRequest instance
             */
            NodeExecutionEventRequest.create = function create(properties) {
                return new NodeExecutionEventRequest(properties);
            };

            /**
             * Encodes the specified NodeExecutionEventRequest message. Does not implicitly {@link flyteidl.admin.NodeExecutionEventRequest.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.admin.NodeExecutionEventRequest
             * @static
             * @param {flyteidl.admin.INodeExecutionEventRequest} message NodeExecutionEventRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NodeExecutionEventRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.executionId != null && message.hasOwnProperty("executionId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.executionId);
                if (message.eventId != null && message.hasOwnProperty("eventId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.eventId);
                if (message.result != null && message.hasOwnProperty("result"))
                    $root.flyteidl.admin.NodeExecutionStatus.encode(message.result, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.spec != null && message.hasOwnProperty("spec"))
                    $root.flyteidl.admin.NodeExecutionSpec.encode(message.spec, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a NodeExecutionEventRequest message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.admin.NodeExecutionEventRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.admin.NodeExecutionEventRequest} NodeExecutionEventRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NodeExecutionEventRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.admin.NodeExecutionEventRequest();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.executionId = reader.string();
                        break;
                    case 2:
                        message.eventId = reader.string();
                        break;
                    case 3:
                        message.result = $root.flyteidl.admin.NodeExecutionStatus.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.spec = $root.flyteidl.admin.NodeExecutionSpec.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a NodeExecutionEventRequest message.
             * @function verify
             * @memberof flyteidl.admin.NodeExecutionEventRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            NodeExecutionEventRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.executionId != null && message.hasOwnProperty("executionId"))
                    if (!$util.isString(message.executionId))
                        return "executionId: string expected";
                if (message.eventId != null && message.hasOwnProperty("eventId"))
                    if (!$util.isString(message.eventId))
                        return "eventId: string expected";
                if (message.result != null && message.hasOwnProperty("result")) {
                    let error = $root.flyteidl.admin.NodeExecutionStatus.verify(message.result);
                    if (error)
                        return "result." + error;
                }
                if (message.spec != null && message.hasOwnProperty("spec")) {
                    let error = $root.flyteidl.admin.NodeExecutionSpec.verify(message.spec);
                    if (error)
                        return "spec." + error;
                }
                return null;
            };

            return NodeExecutionEventRequest;
        })();

        admin.NodeExecutionEventResponse = (function() {

            /**
             * Properties of a NodeExecutionEventResponse.
             * @memberof flyteidl.admin
             * @interface INodeExecutionEventResponse
             */

            /**
             * Constructs a new NodeExecutionEventResponse.
             * @memberof flyteidl.admin
             * @classdesc Represents a NodeExecutionEventResponse.
             * @implements INodeExecutionEventResponse
             * @constructor
             * @param {flyteidl.admin.INodeExecutionEventResponse=} [properties] Properties to set
             */
            function NodeExecutionEventResponse(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new NodeExecutionEventResponse instance using the specified properties.
             * @function create
             * @memberof flyteidl.admin.NodeExecutionEventResponse
             * @static
             * @param {flyteidl.admin.INodeExecutionEventResponse=} [properties] Properties to set
             * @returns {flyteidl.admin.NodeExecutionEventResponse} NodeExecutionEventResponse instance
             */
            NodeExecutionEventResponse.create = function create(properties) {
                return new NodeExecutionEventResponse(properties);
            };

            /**
             * Encodes the specified NodeExecutionEventResponse message. Does not implicitly {@link flyteidl.admin.NodeExecutionEventResponse.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.admin.NodeExecutionEventResponse
             * @static
             * @param {flyteidl.admin.INodeExecutionEventResponse} message NodeExecutionEventResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NodeExecutionEventResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a NodeExecutionEventResponse message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.admin.NodeExecutionEventResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.admin.NodeExecutionEventResponse} NodeExecutionEventResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NodeExecutionEventResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.admin.NodeExecutionEventResponse();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a NodeExecutionEventResponse message.
             * @function verify
             * @memberof flyteidl.admin.NodeExecutionEventResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            NodeExecutionEventResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            return NodeExecutionEventResponse;
        })();

        admin.NodeExecution = (function() {

            /**
             * Properties of a NodeExecution.
             * @memberof flyteidl.admin
             * @interface INodeExecution
             * @property {string|null} [executionId] NodeExecution executionId
             * @property {Array.<flyteidl.admin.INodeExecutionStatus>|null} [results] NodeExecution results
             * @property {flyteidl.admin.INodeExecutionSpec|null} [spec] NodeExecution spec
             */

            /**
             * Constructs a new NodeExecution.
             * @memberof flyteidl.admin
             * @classdesc Represents a NodeExecution.
             * @implements INodeExecution
             * @constructor
             * @param {flyteidl.admin.INodeExecution=} [properties] Properties to set
             */
            function NodeExecution(properties) {
                this.results = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * NodeExecution executionId.
             * @member {string} executionId
             * @memberof flyteidl.admin.NodeExecution
             * @instance
             */
            NodeExecution.prototype.executionId = "";

            /**
             * NodeExecution results.
             * @member {Array.<flyteidl.admin.INodeExecutionStatus>} results
             * @memberof flyteidl.admin.NodeExecution
             * @instance
             */
            NodeExecution.prototype.results = $util.emptyArray;

            /**
             * NodeExecution spec.
             * @member {flyteidl.admin.INodeExecutionSpec|null|undefined} spec
             * @memberof flyteidl.admin.NodeExecution
             * @instance
             */
            NodeExecution.prototype.spec = null;

            /**
             * Creates a new NodeExecution instance using the specified properties.
             * @function create
             * @memberof flyteidl.admin.NodeExecution
             * @static
             * @param {flyteidl.admin.INodeExecution=} [properties] Properties to set
             * @returns {flyteidl.admin.NodeExecution} NodeExecution instance
             */
            NodeExecution.create = function create(properties) {
                return new NodeExecution(properties);
            };

            /**
             * Encodes the specified NodeExecution message. Does not implicitly {@link flyteidl.admin.NodeExecution.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.admin.NodeExecution
             * @static
             * @param {flyteidl.admin.INodeExecution} message NodeExecution message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NodeExecution.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.executionId != null && message.hasOwnProperty("executionId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.executionId);
                if (message.results != null && message.results.length)
                    for (let i = 0; i < message.results.length; ++i)
                        $root.flyteidl.admin.NodeExecutionStatus.encode(message.results[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.spec != null && message.hasOwnProperty("spec"))
                    $root.flyteidl.admin.NodeExecutionSpec.encode(message.spec, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a NodeExecution message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.admin.NodeExecution
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.admin.NodeExecution} NodeExecution
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NodeExecution.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.admin.NodeExecution();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.executionId = reader.string();
                        break;
                    case 2:
                        if (!(message.results && message.results.length))
                            message.results = [];
                        message.results.push($root.flyteidl.admin.NodeExecutionStatus.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        message.spec = $root.flyteidl.admin.NodeExecutionSpec.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a NodeExecution message.
             * @function verify
             * @memberof flyteidl.admin.NodeExecution
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            NodeExecution.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.executionId != null && message.hasOwnProperty("executionId"))
                    if (!$util.isString(message.executionId))
                        return "executionId: string expected";
                if (message.results != null && message.hasOwnProperty("results")) {
                    if (!Array.isArray(message.results))
                        return "results: array expected";
                    for (let i = 0; i < message.results.length; ++i) {
                        let error = $root.flyteidl.admin.NodeExecutionStatus.verify(message.results[i]);
                        if (error)
                            return "results." + error;
                    }
                }
                if (message.spec != null && message.hasOwnProperty("spec")) {
                    let error = $root.flyteidl.admin.NodeExecutionSpec.verify(message.spec);
                    if (error)
                        return "spec." + error;
                }
                return null;
            };

            return NodeExecution;
        })();

        admin.NodeExecutionList = (function() {

            /**
             * Properties of a NodeExecutionList.
             * @memberof flyteidl.admin
             * @interface INodeExecutionList
             * @property {Array.<flyteidl.admin.INodeExecution>|null} [executions] NodeExecutionList executions
             */

            /**
             * Constructs a new NodeExecutionList.
             * @memberof flyteidl.admin
             * @classdesc Represents a NodeExecutionList.
             * @implements INodeExecutionList
             * @constructor
             * @param {flyteidl.admin.INodeExecutionList=} [properties] Properties to set
             */
            function NodeExecutionList(properties) {
                this.executions = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * NodeExecutionList executions.
             * @member {Array.<flyteidl.admin.INodeExecution>} executions
             * @memberof flyteidl.admin.NodeExecutionList
             * @instance
             */
            NodeExecutionList.prototype.executions = $util.emptyArray;

            /**
             * Creates a new NodeExecutionList instance using the specified properties.
             * @function create
             * @memberof flyteidl.admin.NodeExecutionList
             * @static
             * @param {flyteidl.admin.INodeExecutionList=} [properties] Properties to set
             * @returns {flyteidl.admin.NodeExecutionList} NodeExecutionList instance
             */
            NodeExecutionList.create = function create(properties) {
                return new NodeExecutionList(properties);
            };

            /**
             * Encodes the specified NodeExecutionList message. Does not implicitly {@link flyteidl.admin.NodeExecutionList.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.admin.NodeExecutionList
             * @static
             * @param {flyteidl.admin.INodeExecutionList} message NodeExecutionList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NodeExecutionList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.executions != null && message.executions.length)
                    for (let i = 0; i < message.executions.length; ++i)
                        $root.flyteidl.admin.NodeExecution.encode(message.executions[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a NodeExecutionList message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.admin.NodeExecutionList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.admin.NodeExecutionList} NodeExecutionList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NodeExecutionList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.admin.NodeExecutionList();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.executions && message.executions.length))
                            message.executions = [];
                        message.executions.push($root.flyteidl.admin.NodeExecution.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a NodeExecutionList message.
             * @function verify
             * @memberof flyteidl.admin.NodeExecutionList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            NodeExecutionList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.executions != null && message.hasOwnProperty("executions")) {
                    if (!Array.isArray(message.executions))
                        return "executions: array expected";
                    for (let i = 0; i < message.executions.length; ++i) {
                        let error = $root.flyteidl.admin.NodeExecution.verify(message.executions[i]);
                        if (error)
                            return "executions." + error;
                    }
                }
                return null;
            };

            return NodeExecutionList;
        })();

        admin.NodeExecutionStatus = (function() {

            /**
             * Properties of a NodeExecutionStatus.
             * @memberof flyteidl.admin
             * @interface INodeExecutionStatus
             * @property {flyteidl.admin.ExecutionPhase|null} [phase] NodeExecutionStatus phase
             * @property {google.protobuf.IDuration|null} [duration] NodeExecutionStatus duration
             * @property {boolean|null} [discoveryHit] NodeExecutionStatus discoveryHit
             * @property {number|null} [retryAttempt] NodeExecutionStatus retryAttempt
             * @property {boolean|null} [isSubTaskAvailable] NodeExecutionStatus isSubTaskAvailable
             * @property {Uint8Array|null} [customTaskInfo] NodeExecutionStatus customTaskInfo
             * @property {string|null} [outputUrl] NodeExecutionStatus outputUrl
             * @property {flyteidl.admin.IError|null} [error] NodeExecutionStatus error
             */

            /**
             * Constructs a new NodeExecutionStatus.
             * @memberof flyteidl.admin
             * @classdesc Represents a NodeExecutionStatus.
             * @implements INodeExecutionStatus
             * @constructor
             * @param {flyteidl.admin.INodeExecutionStatus=} [properties] Properties to set
             */
            function NodeExecutionStatus(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * NodeExecutionStatus phase.
             * @member {flyteidl.admin.ExecutionPhase} phase
             * @memberof flyteidl.admin.NodeExecutionStatus
             * @instance
             */
            NodeExecutionStatus.prototype.phase = 0;

            /**
             * NodeExecutionStatus duration.
             * @member {google.protobuf.IDuration|null|undefined} duration
             * @memberof flyteidl.admin.NodeExecutionStatus
             * @instance
             */
            NodeExecutionStatus.prototype.duration = null;

            /**
             * NodeExecutionStatus discoveryHit.
             * @member {boolean} discoveryHit
             * @memberof flyteidl.admin.NodeExecutionStatus
             * @instance
             */
            NodeExecutionStatus.prototype.discoveryHit = false;

            /**
             * NodeExecutionStatus retryAttempt.
             * @member {number} retryAttempt
             * @memberof flyteidl.admin.NodeExecutionStatus
             * @instance
             */
            NodeExecutionStatus.prototype.retryAttempt = 0;

            /**
             * NodeExecutionStatus isSubTaskAvailable.
             * @member {boolean} isSubTaskAvailable
             * @memberof flyteidl.admin.NodeExecutionStatus
             * @instance
             */
            NodeExecutionStatus.prototype.isSubTaskAvailable = false;

            /**
             * NodeExecutionStatus customTaskInfo.
             * @member {Uint8Array} customTaskInfo
             * @memberof flyteidl.admin.NodeExecutionStatus
             * @instance
             */
            NodeExecutionStatus.prototype.customTaskInfo = $util.newBuffer([]);

            /**
             * NodeExecutionStatus outputUrl.
             * @member {string} outputUrl
             * @memberof flyteidl.admin.NodeExecutionStatus
             * @instance
             */
            NodeExecutionStatus.prototype.outputUrl = "";

            /**
             * NodeExecutionStatus error.
             * @member {flyteidl.admin.IError|null|undefined} error
             * @memberof flyteidl.admin.NodeExecutionStatus
             * @instance
             */
            NodeExecutionStatus.prototype.error = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * NodeExecutionStatus outputResult.
             * @member {"outputUrl"|"error"|undefined} outputResult
             * @memberof flyteidl.admin.NodeExecutionStatus
             * @instance
             */
            Object.defineProperty(NodeExecutionStatus.prototype, "outputResult", {
                get: $util.oneOfGetter($oneOfFields = ["outputUrl", "error"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new NodeExecutionStatus instance using the specified properties.
             * @function create
             * @memberof flyteidl.admin.NodeExecutionStatus
             * @static
             * @param {flyteidl.admin.INodeExecutionStatus=} [properties] Properties to set
             * @returns {flyteidl.admin.NodeExecutionStatus} NodeExecutionStatus instance
             */
            NodeExecutionStatus.create = function create(properties) {
                return new NodeExecutionStatus(properties);
            };

            /**
             * Encodes the specified NodeExecutionStatus message. Does not implicitly {@link flyteidl.admin.NodeExecutionStatus.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.admin.NodeExecutionStatus
             * @static
             * @param {flyteidl.admin.INodeExecutionStatus} message NodeExecutionStatus message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NodeExecutionStatus.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.phase != null && message.hasOwnProperty("phase"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.phase);
                if (message.duration != null && message.hasOwnProperty("duration"))
                    $root.google.protobuf.Duration.encode(message.duration, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.discoveryHit != null && message.hasOwnProperty("discoveryHit"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.discoveryHit);
                if (message.retryAttempt != null && message.hasOwnProperty("retryAttempt"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.retryAttempt);
                if (message.isSubTaskAvailable != null && message.hasOwnProperty("isSubTaskAvailable"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.isSubTaskAvailable);
                if (message.customTaskInfo != null && message.hasOwnProperty("customTaskInfo"))
                    writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.customTaskInfo);
                if (message.outputUrl != null && message.hasOwnProperty("outputUrl"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.outputUrl);
                if (message.error != null && message.hasOwnProperty("error"))
                    $root.flyteidl.admin.Error.encode(message.error, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a NodeExecutionStatus message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.admin.NodeExecutionStatus
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.admin.NodeExecutionStatus} NodeExecutionStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NodeExecutionStatus.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.admin.NodeExecutionStatus();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.phase = reader.int32();
                        break;
                    case 2:
                        message.duration = $root.google.protobuf.Duration.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.discoveryHit = reader.bool();
                        break;
                    case 4:
                        message.retryAttempt = reader.uint32();
                        break;
                    case 5:
                        message.isSubTaskAvailable = reader.bool();
                        break;
                    case 6:
                        message.customTaskInfo = reader.bytes();
                        break;
                    case 7:
                        message.outputUrl = reader.string();
                        break;
                    case 8:
                        message.error = $root.flyteidl.admin.Error.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a NodeExecutionStatus message.
             * @function verify
             * @memberof flyteidl.admin.NodeExecutionStatus
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            NodeExecutionStatus.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.phase != null && message.hasOwnProperty("phase"))
                    switch (message.phase) {
                    default:
                        return "phase: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                        break;
                    }
                if (message.duration != null && message.hasOwnProperty("duration")) {
                    let error = $root.google.protobuf.Duration.verify(message.duration);
                    if (error)
                        return "duration." + error;
                }
                if (message.discoveryHit != null && message.hasOwnProperty("discoveryHit"))
                    if (typeof message.discoveryHit !== "boolean")
                        return "discoveryHit: boolean expected";
                if (message.retryAttempt != null && message.hasOwnProperty("retryAttempt"))
                    if (!$util.isInteger(message.retryAttempt))
                        return "retryAttempt: integer expected";
                if (message.isSubTaskAvailable != null && message.hasOwnProperty("isSubTaskAvailable"))
                    if (typeof message.isSubTaskAvailable !== "boolean")
                        return "isSubTaskAvailable: boolean expected";
                if (message.customTaskInfo != null && message.hasOwnProperty("customTaskInfo"))
                    if (!(message.customTaskInfo && typeof message.customTaskInfo.length === "number" || $util.isString(message.customTaskInfo)))
                        return "customTaskInfo: buffer expected";
                if (message.outputUrl != null && message.hasOwnProperty("outputUrl")) {
                    properties.outputResult = 1;
                    if (!$util.isString(message.outputUrl))
                        return "outputUrl: string expected";
                }
                if (message.error != null && message.hasOwnProperty("error")) {
                    if (properties.outputResult === 1)
                        return "outputResult: multiple values";
                    properties.outputResult = 1;
                    {
                        let error = $root.flyteidl.admin.Error.verify(message.error);
                        if (error)
                            return "error." + error;
                    }
                }
                return null;
            };

            return NodeExecutionStatus;
        })();

        admin.NodeExecutionSpec = (function() {

            /**
             * Properties of a NodeExecutionSpec.
             * @memberof flyteidl.admin
             * @interface INodeExecutionSpec
             * @property {string|null} [nodeId] NodeExecutionSpec nodeId
             * @property {flyteidl.core.ILiteralMap|null} [inputs] NodeExecutionSpec inputs
             */

            /**
             * Constructs a new NodeExecutionSpec.
             * @memberof flyteidl.admin
             * @classdesc Represents a NodeExecutionSpec.
             * @implements INodeExecutionSpec
             * @constructor
             * @param {flyteidl.admin.INodeExecutionSpec=} [properties] Properties to set
             */
            function NodeExecutionSpec(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * NodeExecutionSpec nodeId.
             * @member {string} nodeId
             * @memberof flyteidl.admin.NodeExecutionSpec
             * @instance
             */
            NodeExecutionSpec.prototype.nodeId = "";

            /**
             * NodeExecutionSpec inputs.
             * @member {flyteidl.core.ILiteralMap|null|undefined} inputs
             * @memberof flyteidl.admin.NodeExecutionSpec
             * @instance
             */
            NodeExecutionSpec.prototype.inputs = null;

            /**
             * Creates a new NodeExecutionSpec instance using the specified properties.
             * @function create
             * @memberof flyteidl.admin.NodeExecutionSpec
             * @static
             * @param {flyteidl.admin.INodeExecutionSpec=} [properties] Properties to set
             * @returns {flyteidl.admin.NodeExecutionSpec} NodeExecutionSpec instance
             */
            NodeExecutionSpec.create = function create(properties) {
                return new NodeExecutionSpec(properties);
            };

            /**
             * Encodes the specified NodeExecutionSpec message. Does not implicitly {@link flyteidl.admin.NodeExecutionSpec.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.admin.NodeExecutionSpec
             * @static
             * @param {flyteidl.admin.INodeExecutionSpec} message NodeExecutionSpec message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NodeExecutionSpec.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.nodeId != null && message.hasOwnProperty("nodeId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.nodeId);
                if (message.inputs != null && message.hasOwnProperty("inputs"))
                    $root.flyteidl.core.LiteralMap.encode(message.inputs, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a NodeExecutionSpec message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.admin.NodeExecutionSpec
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.admin.NodeExecutionSpec} NodeExecutionSpec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NodeExecutionSpec.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.admin.NodeExecutionSpec();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.nodeId = reader.string();
                        break;
                    case 2:
                        message.inputs = $root.flyteidl.core.LiteralMap.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a NodeExecutionSpec message.
             * @function verify
             * @memberof flyteidl.admin.NodeExecutionSpec
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            NodeExecutionSpec.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.nodeId != null && message.hasOwnProperty("nodeId"))
                    if (!$util.isString(message.nodeId))
                        return "nodeId: string expected";
                if (message.inputs != null && message.hasOwnProperty("inputs")) {
                    let error = $root.flyteidl.core.LiteralMap.verify(message.inputs);
                    if (error)
                        return "inputs." + error;
                }
                return null;
            };

            return NodeExecutionSpec;
        })();

        admin.TaskCreateRequest = (function() {

            /**
             * Properties of a TaskCreateRequest.
             * @memberof flyteidl.admin
             * @interface ITaskCreateRequest
             * @property {flyteidl.admin.IIdentifier|null} [id] TaskCreateRequest id
             * @property {string|null} [version] TaskCreateRequest version
             * @property {flyteidl.admin.ITaskSpec|null} [spec] TaskCreateRequest spec
             */

            /**
             * Constructs a new TaskCreateRequest.
             * @memberof flyteidl.admin
             * @classdesc Represents a TaskCreateRequest.
             * @implements ITaskCreateRequest
             * @constructor
             * @param {flyteidl.admin.ITaskCreateRequest=} [properties] Properties to set
             */
            function TaskCreateRequest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TaskCreateRequest id.
             * @member {flyteidl.admin.IIdentifier|null|undefined} id
             * @memberof flyteidl.admin.TaskCreateRequest
             * @instance
             */
            TaskCreateRequest.prototype.id = null;

            /**
             * TaskCreateRequest version.
             * @member {string} version
             * @memberof flyteidl.admin.TaskCreateRequest
             * @instance
             */
            TaskCreateRequest.prototype.version = "";

            /**
             * TaskCreateRequest spec.
             * @member {flyteidl.admin.ITaskSpec|null|undefined} spec
             * @memberof flyteidl.admin.TaskCreateRequest
             * @instance
             */
            TaskCreateRequest.prototype.spec = null;

            /**
             * Creates a new TaskCreateRequest instance using the specified properties.
             * @function create
             * @memberof flyteidl.admin.TaskCreateRequest
             * @static
             * @param {flyteidl.admin.ITaskCreateRequest=} [properties] Properties to set
             * @returns {flyteidl.admin.TaskCreateRequest} TaskCreateRequest instance
             */
            TaskCreateRequest.create = function create(properties) {
                return new TaskCreateRequest(properties);
            };

            /**
             * Encodes the specified TaskCreateRequest message. Does not implicitly {@link flyteidl.admin.TaskCreateRequest.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.admin.TaskCreateRequest
             * @static
             * @param {flyteidl.admin.ITaskCreateRequest} message TaskCreateRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TaskCreateRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    $root.flyteidl.admin.Identifier.encode(message.id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.version != null && message.hasOwnProperty("version"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.version);
                if (message.spec != null && message.hasOwnProperty("spec"))
                    $root.flyteidl.admin.TaskSpec.encode(message.spec, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a TaskCreateRequest message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.admin.TaskCreateRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.admin.TaskCreateRequest} TaskCreateRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TaskCreateRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.admin.TaskCreateRequest();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = $root.flyteidl.admin.Identifier.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.version = reader.string();
                        break;
                    case 3:
                        message.spec = $root.flyteidl.admin.TaskSpec.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a TaskCreateRequest message.
             * @function verify
             * @memberof flyteidl.admin.TaskCreateRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TaskCreateRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id")) {
                    let error = $root.flyteidl.admin.Identifier.verify(message.id);
                    if (error)
                        return "id." + error;
                }
                if (message.version != null && message.hasOwnProperty("version"))
                    if (!$util.isString(message.version))
                        return "version: string expected";
                if (message.spec != null && message.hasOwnProperty("spec")) {
                    let error = $root.flyteidl.admin.TaskSpec.verify(message.spec);
                    if (error)
                        return "spec." + error;
                }
                return null;
            };

            return TaskCreateRequest;
        })();

        admin.TaskListRequest = (function() {

            /**
             * Properties of a TaskListRequest.
             * @memberof flyteidl.admin
             * @interface ITaskListRequest
             * @property {string|null} [project] TaskListRequest project
             * @property {string|null} [domain] TaskListRequest domain
             * @property {string|null} [name] TaskListRequest name
             * @property {number|null} [limit] TaskListRequest limit
             * @property {number|null} [offset] TaskListRequest offset
             * @property {string|null} [filters] TaskListRequest filters
             */

            /**
             * Constructs a new TaskListRequest.
             * @memberof flyteidl.admin
             * @classdesc Represents a TaskListRequest.
             * @implements ITaskListRequest
             * @constructor
             * @param {flyteidl.admin.ITaskListRequest=} [properties] Properties to set
             */
            function TaskListRequest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TaskListRequest project.
             * @member {string} project
             * @memberof flyteidl.admin.TaskListRequest
             * @instance
             */
            TaskListRequest.prototype.project = "";

            /**
             * TaskListRequest domain.
             * @member {string} domain
             * @memberof flyteidl.admin.TaskListRequest
             * @instance
             */
            TaskListRequest.prototype.domain = "";

            /**
             * TaskListRequest name.
             * @member {string} name
             * @memberof flyteidl.admin.TaskListRequest
             * @instance
             */
            TaskListRequest.prototype.name = "";

            /**
             * TaskListRequest limit.
             * @member {number} limit
             * @memberof flyteidl.admin.TaskListRequest
             * @instance
             */
            TaskListRequest.prototype.limit = 0;

            /**
             * TaskListRequest offset.
             * @member {number} offset
             * @memberof flyteidl.admin.TaskListRequest
             * @instance
             */
            TaskListRequest.prototype.offset = 0;

            /**
             * TaskListRequest filters.
             * @member {string} filters
             * @memberof flyteidl.admin.TaskListRequest
             * @instance
             */
            TaskListRequest.prototype.filters = "";

            /**
             * Creates a new TaskListRequest instance using the specified properties.
             * @function create
             * @memberof flyteidl.admin.TaskListRequest
             * @static
             * @param {flyteidl.admin.ITaskListRequest=} [properties] Properties to set
             * @returns {flyteidl.admin.TaskListRequest} TaskListRequest instance
             */
            TaskListRequest.create = function create(properties) {
                return new TaskListRequest(properties);
            };

            /**
             * Encodes the specified TaskListRequest message. Does not implicitly {@link flyteidl.admin.TaskListRequest.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.admin.TaskListRequest
             * @static
             * @param {flyteidl.admin.ITaskListRequest} message TaskListRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TaskListRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.project != null && message.hasOwnProperty("project"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.project);
                if (message.domain != null && message.hasOwnProperty("domain"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.domain);
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
                if (message.limit != null && message.hasOwnProperty("limit"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.limit);
                if (message.offset != null && message.hasOwnProperty("offset"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.offset);
                if (message.filters != null && message.hasOwnProperty("filters"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.filters);
                return writer;
            };

            /**
             * Decodes a TaskListRequest message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.admin.TaskListRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.admin.TaskListRequest} TaskListRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TaskListRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.admin.TaskListRequest();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.project = reader.string();
                        break;
                    case 2:
                        message.domain = reader.string();
                        break;
                    case 3:
                        message.name = reader.string();
                        break;
                    case 4:
                        message.limit = reader.uint32();
                        break;
                    case 5:
                        message.offset = reader.uint32();
                        break;
                    case 6:
                        message.filters = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a TaskListRequest message.
             * @function verify
             * @memberof flyteidl.admin.TaskListRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TaskListRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.project != null && message.hasOwnProperty("project"))
                    if (!$util.isString(message.project))
                        return "project: string expected";
                if (message.domain != null && message.hasOwnProperty("domain"))
                    if (!$util.isString(message.domain))
                        return "domain: string expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.limit != null && message.hasOwnProperty("limit"))
                    if (!$util.isInteger(message.limit))
                        return "limit: integer expected";
                if (message.offset != null && message.hasOwnProperty("offset"))
                    if (!$util.isInteger(message.offset))
                        return "offset: integer expected";
                if (message.filters != null && message.hasOwnProperty("filters"))
                    if (!$util.isString(message.filters))
                        return "filters: string expected";
                return null;
            };

            return TaskListRequest;
        })();

        admin.TaskCreateResponse = (function() {

            /**
             * Properties of a TaskCreateResponse.
             * @memberof flyteidl.admin
             * @interface ITaskCreateResponse
             * @property {string|null} [urn] TaskCreateResponse urn
             */

            /**
             * Constructs a new TaskCreateResponse.
             * @memberof flyteidl.admin
             * @classdesc Represents a TaskCreateResponse.
             * @implements ITaskCreateResponse
             * @constructor
             * @param {flyteidl.admin.ITaskCreateResponse=} [properties] Properties to set
             */
            function TaskCreateResponse(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TaskCreateResponse urn.
             * @member {string} urn
             * @memberof flyteidl.admin.TaskCreateResponse
             * @instance
             */
            TaskCreateResponse.prototype.urn = "";

            /**
             * Creates a new TaskCreateResponse instance using the specified properties.
             * @function create
             * @memberof flyteidl.admin.TaskCreateResponse
             * @static
             * @param {flyteidl.admin.ITaskCreateResponse=} [properties] Properties to set
             * @returns {flyteidl.admin.TaskCreateResponse} TaskCreateResponse instance
             */
            TaskCreateResponse.create = function create(properties) {
                return new TaskCreateResponse(properties);
            };

            /**
             * Encodes the specified TaskCreateResponse message. Does not implicitly {@link flyteidl.admin.TaskCreateResponse.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.admin.TaskCreateResponse
             * @static
             * @param {flyteidl.admin.ITaskCreateResponse} message TaskCreateResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TaskCreateResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.urn != null && message.hasOwnProperty("urn"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.urn);
                return writer;
            };

            /**
             * Decodes a TaskCreateResponse message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.admin.TaskCreateResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.admin.TaskCreateResponse} TaskCreateResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TaskCreateResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.admin.TaskCreateResponse();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.urn = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a TaskCreateResponse message.
             * @function verify
             * @memberof flyteidl.admin.TaskCreateResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TaskCreateResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.urn != null && message.hasOwnProperty("urn"))
                    if (!$util.isString(message.urn))
                        return "urn: string expected";
                return null;
            };

            return TaskCreateResponse;
        })();

        admin.Task = (function() {

            /**
             * Properties of a Task.
             * @memberof flyteidl.admin
             * @interface ITask
             * @property {flyteidl.admin.IIdentifier|null} [id] Task id
             * @property {string|null} [version] Task version
             * @property {string|null} [urn] Task urn
             * @property {flyteidl.admin.ITaskSpec|null} [spec] Task spec
             */

            /**
             * Constructs a new Task.
             * @memberof flyteidl.admin
             * @classdesc Represents a Task.
             * @implements ITask
             * @constructor
             * @param {flyteidl.admin.ITask=} [properties] Properties to set
             */
            function Task(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Task id.
             * @member {flyteidl.admin.IIdentifier|null|undefined} id
             * @memberof flyteidl.admin.Task
             * @instance
             */
            Task.prototype.id = null;

            /**
             * Task version.
             * @member {string} version
             * @memberof flyteidl.admin.Task
             * @instance
             */
            Task.prototype.version = "";

            /**
             * Task urn.
             * @member {string} urn
             * @memberof flyteidl.admin.Task
             * @instance
             */
            Task.prototype.urn = "";

            /**
             * Task spec.
             * @member {flyteidl.admin.ITaskSpec|null|undefined} spec
             * @memberof flyteidl.admin.Task
             * @instance
             */
            Task.prototype.spec = null;

            /**
             * Creates a new Task instance using the specified properties.
             * @function create
             * @memberof flyteidl.admin.Task
             * @static
             * @param {flyteidl.admin.ITask=} [properties] Properties to set
             * @returns {flyteidl.admin.Task} Task instance
             */
            Task.create = function create(properties) {
                return new Task(properties);
            };

            /**
             * Encodes the specified Task message. Does not implicitly {@link flyteidl.admin.Task.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.admin.Task
             * @static
             * @param {flyteidl.admin.ITask} message Task message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Task.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    $root.flyteidl.admin.Identifier.encode(message.id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.version != null && message.hasOwnProperty("version"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.version);
                if (message.urn != null && message.hasOwnProperty("urn"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.urn);
                if (message.spec != null && message.hasOwnProperty("spec"))
                    $root.flyteidl.admin.TaskSpec.encode(message.spec, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a Task message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.admin.Task
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.admin.Task} Task
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Task.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.admin.Task();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = $root.flyteidl.admin.Identifier.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.version = reader.string();
                        break;
                    case 3:
                        message.urn = reader.string();
                        break;
                    case 6:
                        message.spec = $root.flyteidl.admin.TaskSpec.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a Task message.
             * @function verify
             * @memberof flyteidl.admin.Task
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Task.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id")) {
                    let error = $root.flyteidl.admin.Identifier.verify(message.id);
                    if (error)
                        return "id." + error;
                }
                if (message.version != null && message.hasOwnProperty("version"))
                    if (!$util.isString(message.version))
                        return "version: string expected";
                if (message.urn != null && message.hasOwnProperty("urn"))
                    if (!$util.isString(message.urn))
                        return "urn: string expected";
                if (message.spec != null && message.hasOwnProperty("spec")) {
                    let error = $root.flyteidl.admin.TaskSpec.verify(message.spec);
                    if (error)
                        return "spec." + error;
                }
                return null;
            };

            return Task;
        })();

        admin.TaskList = (function() {

            /**
             * Properties of a TaskList.
             * @memberof flyteidl.admin
             * @interface ITaskList
             * @property {Array.<flyteidl.admin.ITask>|null} [tasks] TaskList tasks
             * @property {number|null} [offset] TaskList offset
             */

            /**
             * Constructs a new TaskList.
             * @memberof flyteidl.admin
             * @classdesc Represents a TaskList.
             * @implements ITaskList
             * @constructor
             * @param {flyteidl.admin.ITaskList=} [properties] Properties to set
             */
            function TaskList(properties) {
                this.tasks = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TaskList tasks.
             * @member {Array.<flyteidl.admin.ITask>} tasks
             * @memberof flyteidl.admin.TaskList
             * @instance
             */
            TaskList.prototype.tasks = $util.emptyArray;

            /**
             * TaskList offset.
             * @member {number} offset
             * @memberof flyteidl.admin.TaskList
             * @instance
             */
            TaskList.prototype.offset = 0;

            /**
             * Creates a new TaskList instance using the specified properties.
             * @function create
             * @memberof flyteidl.admin.TaskList
             * @static
             * @param {flyteidl.admin.ITaskList=} [properties] Properties to set
             * @returns {flyteidl.admin.TaskList} TaskList instance
             */
            TaskList.create = function create(properties) {
                return new TaskList(properties);
            };

            /**
             * Encodes the specified TaskList message. Does not implicitly {@link flyteidl.admin.TaskList.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.admin.TaskList
             * @static
             * @param {flyteidl.admin.ITaskList} message TaskList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TaskList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.tasks != null && message.tasks.length)
                    for (let i = 0; i < message.tasks.length; ++i)
                        $root.flyteidl.admin.Task.encode(message.tasks[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.offset != null && message.hasOwnProperty("offset"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.offset);
                return writer;
            };

            /**
             * Decodes a TaskList message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.admin.TaskList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.admin.TaskList} TaskList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TaskList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.admin.TaskList();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.tasks && message.tasks.length))
                            message.tasks = [];
                        message.tasks.push($root.flyteidl.admin.Task.decode(reader, reader.uint32()));
                        break;
                    case 2:
                        message.offset = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a TaskList message.
             * @function verify
             * @memberof flyteidl.admin.TaskList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TaskList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.tasks != null && message.hasOwnProperty("tasks")) {
                    if (!Array.isArray(message.tasks))
                        return "tasks: array expected";
                    for (let i = 0; i < message.tasks.length; ++i) {
                        let error = $root.flyteidl.admin.Task.verify(message.tasks[i]);
                        if (error)
                            return "tasks." + error;
                    }
                }
                if (message.offset != null && message.hasOwnProperty("offset"))
                    if (!$util.isInteger(message.offset))
                        return "offset: integer expected";
                return null;
            };

            return TaskList;
        })();

        admin.TaskSpec = (function() {

            /**
             * Properties of a TaskSpec.
             * @memberof flyteidl.admin
             * @interface ITaskSpec
             * @property {flyteidl.core.ITaskTemplate|null} [template] TaskSpec template
             */

            /**
             * Constructs a new TaskSpec.
             * @memberof flyteidl.admin
             * @classdesc Represents a TaskSpec.
             * @implements ITaskSpec
             * @constructor
             * @param {flyteidl.admin.ITaskSpec=} [properties] Properties to set
             */
            function TaskSpec(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TaskSpec template.
             * @member {flyteidl.core.ITaskTemplate|null|undefined} template
             * @memberof flyteidl.admin.TaskSpec
             * @instance
             */
            TaskSpec.prototype.template = null;

            /**
             * Creates a new TaskSpec instance using the specified properties.
             * @function create
             * @memberof flyteidl.admin.TaskSpec
             * @static
             * @param {flyteidl.admin.ITaskSpec=} [properties] Properties to set
             * @returns {flyteidl.admin.TaskSpec} TaskSpec instance
             */
            TaskSpec.create = function create(properties) {
                return new TaskSpec(properties);
            };

            /**
             * Encodes the specified TaskSpec message. Does not implicitly {@link flyteidl.admin.TaskSpec.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.admin.TaskSpec
             * @static
             * @param {flyteidl.admin.ITaskSpec} message TaskSpec message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TaskSpec.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.template != null && message.hasOwnProperty("template"))
                    $root.flyteidl.core.TaskTemplate.encode(message.template, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a TaskSpec message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.admin.TaskSpec
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.admin.TaskSpec} TaskSpec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TaskSpec.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.admin.TaskSpec();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.template = $root.flyteidl.core.TaskTemplate.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a TaskSpec message.
             * @function verify
             * @memberof flyteidl.admin.TaskSpec
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TaskSpec.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.template != null && message.hasOwnProperty("template")) {
                    let error = $root.flyteidl.core.TaskTemplate.verify(message.template);
                    if (error)
                        return "template." + error;
                }
                return null;
            };

            return TaskSpec;
        })();

        admin.WorkflowCreateRequest = (function() {

            /**
             * Properties of a WorkflowCreateRequest.
             * @memberof flyteidl.admin
             * @interface IWorkflowCreateRequest
             * @property {flyteidl.admin.IIdentifier|null} [id] WorkflowCreateRequest id
             * @property {string|null} [version] WorkflowCreateRequest version
             * @property {flyteidl.admin.IWorkflowSpec|null} [spec] WorkflowCreateRequest spec
             */

            /**
             * Constructs a new WorkflowCreateRequest.
             * @memberof flyteidl.admin
             * @classdesc Represents a WorkflowCreateRequest.
             * @implements IWorkflowCreateRequest
             * @constructor
             * @param {flyteidl.admin.IWorkflowCreateRequest=} [properties] Properties to set
             */
            function WorkflowCreateRequest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * WorkflowCreateRequest id.
             * @member {flyteidl.admin.IIdentifier|null|undefined} id
             * @memberof flyteidl.admin.WorkflowCreateRequest
             * @instance
             */
            WorkflowCreateRequest.prototype.id = null;

            /**
             * WorkflowCreateRequest version.
             * @member {string} version
             * @memberof flyteidl.admin.WorkflowCreateRequest
             * @instance
             */
            WorkflowCreateRequest.prototype.version = "";

            /**
             * WorkflowCreateRequest spec.
             * @member {flyteidl.admin.IWorkflowSpec|null|undefined} spec
             * @memberof flyteidl.admin.WorkflowCreateRequest
             * @instance
             */
            WorkflowCreateRequest.prototype.spec = null;

            /**
             * Creates a new WorkflowCreateRequest instance using the specified properties.
             * @function create
             * @memberof flyteidl.admin.WorkflowCreateRequest
             * @static
             * @param {flyteidl.admin.IWorkflowCreateRequest=} [properties] Properties to set
             * @returns {flyteidl.admin.WorkflowCreateRequest} WorkflowCreateRequest instance
             */
            WorkflowCreateRequest.create = function create(properties) {
                return new WorkflowCreateRequest(properties);
            };

            /**
             * Encodes the specified WorkflowCreateRequest message. Does not implicitly {@link flyteidl.admin.WorkflowCreateRequest.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.admin.WorkflowCreateRequest
             * @static
             * @param {flyteidl.admin.IWorkflowCreateRequest} message WorkflowCreateRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WorkflowCreateRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    $root.flyteidl.admin.Identifier.encode(message.id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.version != null && message.hasOwnProperty("version"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.version);
                if (message.spec != null && message.hasOwnProperty("spec"))
                    $root.flyteidl.admin.WorkflowSpec.encode(message.spec, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a WorkflowCreateRequest message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.admin.WorkflowCreateRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.admin.WorkflowCreateRequest} WorkflowCreateRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WorkflowCreateRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.admin.WorkflowCreateRequest();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = $root.flyteidl.admin.Identifier.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.version = reader.string();
                        break;
                    case 3:
                        message.spec = $root.flyteidl.admin.WorkflowSpec.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a WorkflowCreateRequest message.
             * @function verify
             * @memberof flyteidl.admin.WorkflowCreateRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            WorkflowCreateRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id")) {
                    let error = $root.flyteidl.admin.Identifier.verify(message.id);
                    if (error)
                        return "id." + error;
                }
                if (message.version != null && message.hasOwnProperty("version"))
                    if (!$util.isString(message.version))
                        return "version: string expected";
                if (message.spec != null && message.hasOwnProperty("spec")) {
                    let error = $root.flyteidl.admin.WorkflowSpec.verify(message.spec);
                    if (error)
                        return "spec." + error;
                }
                return null;
            };

            return WorkflowCreateRequest;
        })();

        admin.WorkflowListRequest = (function() {

            /**
             * Properties of a WorkflowListRequest.
             * @memberof flyteidl.admin
             * @interface IWorkflowListRequest
             * @property {string|null} [project] WorkflowListRequest project
             * @property {string|null} [domain] WorkflowListRequest domain
             * @property {string|null} [name] WorkflowListRequest name
             * @property {number|null} [limit] WorkflowListRequest limit
             * @property {number|null} [offset] WorkflowListRequest offset
             * @property {string|null} [filters] WorkflowListRequest filters
             */

            /**
             * Constructs a new WorkflowListRequest.
             * @memberof flyteidl.admin
             * @classdesc Represents a WorkflowListRequest.
             * @implements IWorkflowListRequest
             * @constructor
             * @param {flyteidl.admin.IWorkflowListRequest=} [properties] Properties to set
             */
            function WorkflowListRequest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * WorkflowListRequest project.
             * @member {string} project
             * @memberof flyteidl.admin.WorkflowListRequest
             * @instance
             */
            WorkflowListRequest.prototype.project = "";

            /**
             * WorkflowListRequest domain.
             * @member {string} domain
             * @memberof flyteidl.admin.WorkflowListRequest
             * @instance
             */
            WorkflowListRequest.prototype.domain = "";

            /**
             * WorkflowListRequest name.
             * @member {string} name
             * @memberof flyteidl.admin.WorkflowListRequest
             * @instance
             */
            WorkflowListRequest.prototype.name = "";

            /**
             * WorkflowListRequest limit.
             * @member {number} limit
             * @memberof flyteidl.admin.WorkflowListRequest
             * @instance
             */
            WorkflowListRequest.prototype.limit = 0;

            /**
             * WorkflowListRequest offset.
             * @member {number} offset
             * @memberof flyteidl.admin.WorkflowListRequest
             * @instance
             */
            WorkflowListRequest.prototype.offset = 0;

            /**
             * WorkflowListRequest filters.
             * @member {string} filters
             * @memberof flyteidl.admin.WorkflowListRequest
             * @instance
             */
            WorkflowListRequest.prototype.filters = "";

            /**
             * Creates a new WorkflowListRequest instance using the specified properties.
             * @function create
             * @memberof flyteidl.admin.WorkflowListRequest
             * @static
             * @param {flyteidl.admin.IWorkflowListRequest=} [properties] Properties to set
             * @returns {flyteidl.admin.WorkflowListRequest} WorkflowListRequest instance
             */
            WorkflowListRequest.create = function create(properties) {
                return new WorkflowListRequest(properties);
            };

            /**
             * Encodes the specified WorkflowListRequest message. Does not implicitly {@link flyteidl.admin.WorkflowListRequest.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.admin.WorkflowListRequest
             * @static
             * @param {flyteidl.admin.IWorkflowListRequest} message WorkflowListRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WorkflowListRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.project != null && message.hasOwnProperty("project"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.project);
                if (message.domain != null && message.hasOwnProperty("domain"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.domain);
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
                if (message.limit != null && message.hasOwnProperty("limit"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.limit);
                if (message.offset != null && message.hasOwnProperty("offset"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.offset);
                if (message.filters != null && message.hasOwnProperty("filters"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.filters);
                return writer;
            };

            /**
             * Decodes a WorkflowListRequest message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.admin.WorkflowListRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.admin.WorkflowListRequest} WorkflowListRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WorkflowListRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.admin.WorkflowListRequest();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.project = reader.string();
                        break;
                    case 2:
                        message.domain = reader.string();
                        break;
                    case 3:
                        message.name = reader.string();
                        break;
                    case 4:
                        message.limit = reader.uint32();
                        break;
                    case 5:
                        message.offset = reader.uint32();
                        break;
                    case 6:
                        message.filters = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a WorkflowListRequest message.
             * @function verify
             * @memberof flyteidl.admin.WorkflowListRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            WorkflowListRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.project != null && message.hasOwnProperty("project"))
                    if (!$util.isString(message.project))
                        return "project: string expected";
                if (message.domain != null && message.hasOwnProperty("domain"))
                    if (!$util.isString(message.domain))
                        return "domain: string expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.limit != null && message.hasOwnProperty("limit"))
                    if (!$util.isInteger(message.limit))
                        return "limit: integer expected";
                if (message.offset != null && message.hasOwnProperty("offset"))
                    if (!$util.isInteger(message.offset))
                        return "offset: integer expected";
                if (message.filters != null && message.hasOwnProperty("filters"))
                    if (!$util.isString(message.filters))
                        return "filters: string expected";
                return null;
            };

            return WorkflowListRequest;
        })();

        admin.WorkflowCreateResponse = (function() {

            /**
             * Properties of a WorkflowCreateResponse.
             * @memberof flyteidl.admin
             * @interface IWorkflowCreateResponse
             * @property {string|null} [urn] WorkflowCreateResponse urn
             */

            /**
             * Constructs a new WorkflowCreateResponse.
             * @memberof flyteidl.admin
             * @classdesc Represents a WorkflowCreateResponse.
             * @implements IWorkflowCreateResponse
             * @constructor
             * @param {flyteidl.admin.IWorkflowCreateResponse=} [properties] Properties to set
             */
            function WorkflowCreateResponse(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * WorkflowCreateResponse urn.
             * @member {string} urn
             * @memberof flyteidl.admin.WorkflowCreateResponse
             * @instance
             */
            WorkflowCreateResponse.prototype.urn = "";

            /**
             * Creates a new WorkflowCreateResponse instance using the specified properties.
             * @function create
             * @memberof flyteidl.admin.WorkflowCreateResponse
             * @static
             * @param {flyteidl.admin.IWorkflowCreateResponse=} [properties] Properties to set
             * @returns {flyteidl.admin.WorkflowCreateResponse} WorkflowCreateResponse instance
             */
            WorkflowCreateResponse.create = function create(properties) {
                return new WorkflowCreateResponse(properties);
            };

            /**
             * Encodes the specified WorkflowCreateResponse message. Does not implicitly {@link flyteidl.admin.WorkflowCreateResponse.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.admin.WorkflowCreateResponse
             * @static
             * @param {flyteidl.admin.IWorkflowCreateResponse} message WorkflowCreateResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WorkflowCreateResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.urn != null && message.hasOwnProperty("urn"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.urn);
                return writer;
            };

            /**
             * Decodes a WorkflowCreateResponse message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.admin.WorkflowCreateResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.admin.WorkflowCreateResponse} WorkflowCreateResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WorkflowCreateResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.admin.WorkflowCreateResponse();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.urn = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a WorkflowCreateResponse message.
             * @function verify
             * @memberof flyteidl.admin.WorkflowCreateResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            WorkflowCreateResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.urn != null && message.hasOwnProperty("urn"))
                    if (!$util.isString(message.urn))
                        return "urn: string expected";
                return null;
            };

            return WorkflowCreateResponse;
        })();

        admin.Workflow = (function() {

            /**
             * Properties of a Workflow.
             * @memberof flyteidl.admin
             * @interface IWorkflow
             * @property {flyteidl.admin.IIdentifier|null} [id] Workflow id
             * @property {string|null} [version] Workflow version
             * @property {string|null} [urn] Workflow urn
             * @property {flyteidl.admin.IWorkflowSpec|null} [spec] Workflow spec
             */

            /**
             * Constructs a new Workflow.
             * @memberof flyteidl.admin
             * @classdesc Represents a Workflow.
             * @implements IWorkflow
             * @constructor
             * @param {flyteidl.admin.IWorkflow=} [properties] Properties to set
             */
            function Workflow(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Workflow id.
             * @member {flyteidl.admin.IIdentifier|null|undefined} id
             * @memberof flyteidl.admin.Workflow
             * @instance
             */
            Workflow.prototype.id = null;

            /**
             * Workflow version.
             * @member {string} version
             * @memberof flyteidl.admin.Workflow
             * @instance
             */
            Workflow.prototype.version = "";

            /**
             * Workflow urn.
             * @member {string} urn
             * @memberof flyteidl.admin.Workflow
             * @instance
             */
            Workflow.prototype.urn = "";

            /**
             * Workflow spec.
             * @member {flyteidl.admin.IWorkflowSpec|null|undefined} spec
             * @memberof flyteidl.admin.Workflow
             * @instance
             */
            Workflow.prototype.spec = null;

            /**
             * Creates a new Workflow instance using the specified properties.
             * @function create
             * @memberof flyteidl.admin.Workflow
             * @static
             * @param {flyteidl.admin.IWorkflow=} [properties] Properties to set
             * @returns {flyteidl.admin.Workflow} Workflow instance
             */
            Workflow.create = function create(properties) {
                return new Workflow(properties);
            };

            /**
             * Encodes the specified Workflow message. Does not implicitly {@link flyteidl.admin.Workflow.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.admin.Workflow
             * @static
             * @param {flyteidl.admin.IWorkflow} message Workflow message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Workflow.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    $root.flyteidl.admin.Identifier.encode(message.id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.version != null && message.hasOwnProperty("version"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.version);
                if (message.urn != null && message.hasOwnProperty("urn"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.urn);
                if (message.spec != null && message.hasOwnProperty("spec"))
                    $root.flyteidl.admin.WorkflowSpec.encode(message.spec, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a Workflow message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.admin.Workflow
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.admin.Workflow} Workflow
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Workflow.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.admin.Workflow();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = $root.flyteidl.admin.Identifier.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.version = reader.string();
                        break;
                    case 3:
                        message.urn = reader.string();
                        break;
                    case 4:
                        message.spec = $root.flyteidl.admin.WorkflowSpec.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a Workflow message.
             * @function verify
             * @memberof flyteidl.admin.Workflow
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Workflow.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id")) {
                    let error = $root.flyteidl.admin.Identifier.verify(message.id);
                    if (error)
                        return "id." + error;
                }
                if (message.version != null && message.hasOwnProperty("version"))
                    if (!$util.isString(message.version))
                        return "version: string expected";
                if (message.urn != null && message.hasOwnProperty("urn"))
                    if (!$util.isString(message.urn))
                        return "urn: string expected";
                if (message.spec != null && message.hasOwnProperty("spec")) {
                    let error = $root.flyteidl.admin.WorkflowSpec.verify(message.spec);
                    if (error)
                        return "spec." + error;
                }
                return null;
            };

            return Workflow;
        })();

        admin.WorkflowList = (function() {

            /**
             * Properties of a WorkflowList.
             * @memberof flyteidl.admin
             * @interface IWorkflowList
             * @property {Array.<flyteidl.admin.IWorkflow>|null} [workflows] WorkflowList workflows
             * @property {number|null} [offset] WorkflowList offset
             */

            /**
             * Constructs a new WorkflowList.
             * @memberof flyteidl.admin
             * @classdesc Represents a WorkflowList.
             * @implements IWorkflowList
             * @constructor
             * @param {flyteidl.admin.IWorkflowList=} [properties] Properties to set
             */
            function WorkflowList(properties) {
                this.workflows = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * WorkflowList workflows.
             * @member {Array.<flyteidl.admin.IWorkflow>} workflows
             * @memberof flyteidl.admin.WorkflowList
             * @instance
             */
            WorkflowList.prototype.workflows = $util.emptyArray;

            /**
             * WorkflowList offset.
             * @member {number} offset
             * @memberof flyteidl.admin.WorkflowList
             * @instance
             */
            WorkflowList.prototype.offset = 0;

            /**
             * Creates a new WorkflowList instance using the specified properties.
             * @function create
             * @memberof flyteidl.admin.WorkflowList
             * @static
             * @param {flyteidl.admin.IWorkflowList=} [properties] Properties to set
             * @returns {flyteidl.admin.WorkflowList} WorkflowList instance
             */
            WorkflowList.create = function create(properties) {
                return new WorkflowList(properties);
            };

            /**
             * Encodes the specified WorkflowList message. Does not implicitly {@link flyteidl.admin.WorkflowList.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.admin.WorkflowList
             * @static
             * @param {flyteidl.admin.IWorkflowList} message WorkflowList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WorkflowList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.workflows != null && message.workflows.length)
                    for (let i = 0; i < message.workflows.length; ++i)
                        $root.flyteidl.admin.Workflow.encode(message.workflows[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.offset != null && message.hasOwnProperty("offset"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.offset);
                return writer;
            };

            /**
             * Decodes a WorkflowList message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.admin.WorkflowList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.admin.WorkflowList} WorkflowList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WorkflowList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.admin.WorkflowList();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.workflows && message.workflows.length))
                            message.workflows = [];
                        message.workflows.push($root.flyteidl.admin.Workflow.decode(reader, reader.uint32()));
                        break;
                    case 2:
                        message.offset = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a WorkflowList message.
             * @function verify
             * @memberof flyteidl.admin.WorkflowList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            WorkflowList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.workflows != null && message.hasOwnProperty("workflows")) {
                    if (!Array.isArray(message.workflows))
                        return "workflows: array expected";
                    for (let i = 0; i < message.workflows.length; ++i) {
                        let error = $root.flyteidl.admin.Workflow.verify(message.workflows[i]);
                        if (error)
                            return "workflows." + error;
                    }
                }
                if (message.offset != null && message.hasOwnProperty("offset"))
                    if (!$util.isInteger(message.offset))
                        return "offset: integer expected";
                return null;
            };

            return WorkflowList;
        })();

        admin.WorkflowSpec = (function() {

            /**
             * Properties of a WorkflowSpec.
             * @memberof flyteidl.admin
             * @interface IWorkflowSpec
             * @property {flyteidl.core.IWorkflowTemplate|null} [workflowTemplate] WorkflowSpec workflowTemplate
             */

            /**
             * Constructs a new WorkflowSpec.
             * @memberof flyteidl.admin
             * @classdesc Represents a WorkflowSpec.
             * @implements IWorkflowSpec
             * @constructor
             * @param {flyteidl.admin.IWorkflowSpec=} [properties] Properties to set
             */
            function WorkflowSpec(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * WorkflowSpec workflowTemplate.
             * @member {flyteidl.core.IWorkflowTemplate|null|undefined} workflowTemplate
             * @memberof flyteidl.admin.WorkflowSpec
             * @instance
             */
            WorkflowSpec.prototype.workflowTemplate = null;

            /**
             * Creates a new WorkflowSpec instance using the specified properties.
             * @function create
             * @memberof flyteidl.admin.WorkflowSpec
             * @static
             * @param {flyteidl.admin.IWorkflowSpec=} [properties] Properties to set
             * @returns {flyteidl.admin.WorkflowSpec} WorkflowSpec instance
             */
            WorkflowSpec.create = function create(properties) {
                return new WorkflowSpec(properties);
            };

            /**
             * Encodes the specified WorkflowSpec message. Does not implicitly {@link flyteidl.admin.WorkflowSpec.verify|verify} messages.
             * @function encode
             * @memberof flyteidl.admin.WorkflowSpec
             * @static
             * @param {flyteidl.admin.IWorkflowSpec} message WorkflowSpec message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WorkflowSpec.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.workflowTemplate != null && message.hasOwnProperty("workflowTemplate"))
                    $root.flyteidl.core.WorkflowTemplate.encode(message.workflowTemplate, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a WorkflowSpec message from the specified reader or buffer.
             * @function decode
             * @memberof flyteidl.admin.WorkflowSpec
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flyteidl.admin.WorkflowSpec} WorkflowSpec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WorkflowSpec.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.flyteidl.admin.WorkflowSpec();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.workflowTemplate = $root.flyteidl.core.WorkflowTemplate.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a WorkflowSpec message.
             * @function verify
             * @memberof flyteidl.admin.WorkflowSpec
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            WorkflowSpec.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.workflowTemplate != null && message.hasOwnProperty("workflowTemplate")) {
                    let error = $root.flyteidl.core.WorkflowTemplate.verify(message.workflowTemplate);
                    if (error)
                        return "workflowTemplate." + error;
                }
                return null;
            };

            return WorkflowSpec;
        })();

        return admin;
    })();

    flyteidl.service = (function() {

        /**
         * Namespace service.
         * @memberof flyteidl
         * @namespace
         */
        const service = {};

        service.AdminService = (function() {

            /**
             * Constructs a new AdminService service.
             * @memberof flyteidl.service
             * @classdesc Represents an AdminService
             * @extends $protobuf.rpc.Service
             * @constructor
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             */
            function AdminService(rpcImpl, requestDelimited, responseDelimited) {
                $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
            }

            (AdminService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = AdminService;

            /**
             * Creates new AdminService service using the specified rpc implementation.
             * @function create
             * @memberof flyteidl.service.AdminService
             * @static
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             * @returns {AdminService} RPC service. Useful where requests and/or responses are streamed.
             */
            AdminService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                return new this(rpcImpl, requestDelimited, responseDelimited);
            };

            /**
             * Callback as used by {@link flyteidl.service.AdminService#createTask}.
             * @memberof flyteidl.service.AdminService
             * @typedef CreateTaskCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {flyteidl.admin.TaskCreateResponse} [response] TaskCreateResponse
             */

            /**
             * Calls CreateTask.
             * @function createTask
             * @memberof flyteidl.service.AdminService
             * @instance
             * @param {flyteidl.admin.ITaskCreateRequest} request TaskCreateRequest message or plain object
             * @param {flyteidl.service.AdminService.CreateTaskCallback} callback Node-style callback called with the error, if any, and TaskCreateResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(AdminService.prototype.createTask = function createTask(request, callback) {
                return this.rpcCall(createTask, $root.flyteidl.admin.TaskCreateRequest, $root.flyteidl.admin.TaskCreateResponse, request, callback);
            }, "name", { value: "CreateTask" });

            /**
             * Calls CreateTask.
             * @function createTask
             * @memberof flyteidl.service.AdminService
             * @instance
             * @param {flyteidl.admin.ITaskCreateRequest} request TaskCreateRequest message or plain object
             * @returns {Promise<flyteidl.admin.TaskCreateResponse>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link flyteidl.service.AdminService#getTask}.
             * @memberof flyteidl.service.AdminService
             * @typedef GetTaskCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {flyteidl.admin.Task} [response] Task
             */

            /**
             * Calls GetTask.
             * @function getTask
             * @memberof flyteidl.service.AdminService
             * @instance
             * @param {flyteidl.admin.IGetObjectRequest} request GetObjectRequest message or plain object
             * @param {flyteidl.service.AdminService.GetTaskCallback} callback Node-style callback called with the error, if any, and Task
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(AdminService.prototype.getTask = function getTask(request, callback) {
                return this.rpcCall(getTask, $root.flyteidl.admin.GetObjectRequest, $root.flyteidl.admin.Task, request, callback);
            }, "name", { value: "GetTask" });

            /**
             * Calls GetTask.
             * @function getTask
             * @memberof flyteidl.service.AdminService
             * @instance
             * @param {flyteidl.admin.IGetObjectRequest} request GetObjectRequest message or plain object
             * @returns {Promise<flyteidl.admin.Task>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link flyteidl.service.AdminService#listTaskIds}.
             * @memberof flyteidl.service.AdminService
             * @typedef ListTaskIdsCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {flyteidl.admin.IdentifierList} [response] IdentifierList
             */

            /**
             * Calls ListTaskIds.
             * @function listTaskIds
             * @memberof flyteidl.service.AdminService
             * @instance
             * @param {flyteidl.admin.ITaskListRequest} request TaskListRequest message or plain object
             * @param {flyteidl.service.AdminService.ListTaskIdsCallback} callback Node-style callback called with the error, if any, and IdentifierList
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(AdminService.prototype.listTaskIds = function listTaskIds(request, callback) {
                return this.rpcCall(listTaskIds, $root.flyteidl.admin.TaskListRequest, $root.flyteidl.admin.IdentifierList, request, callback);
            }, "name", { value: "ListTaskIds" });

            /**
             * Calls ListTaskIds.
             * @function listTaskIds
             * @memberof flyteidl.service.AdminService
             * @instance
             * @param {flyteidl.admin.ITaskListRequest} request TaskListRequest message or plain object
             * @returns {Promise<flyteidl.admin.IdentifierList>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link flyteidl.service.AdminService#listTasks}.
             * @memberof flyteidl.service.AdminService
             * @typedef ListTasksCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {flyteidl.admin.TaskList} [response] TaskList
             */

            /**
             * Calls ListTasks.
             * @function listTasks
             * @memberof flyteidl.service.AdminService
             * @instance
             * @param {flyteidl.admin.ITaskListRequest} request TaskListRequest message or plain object
             * @param {flyteidl.service.AdminService.ListTasksCallback} callback Node-style callback called with the error, if any, and TaskList
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(AdminService.prototype.listTasks = function listTasks(request, callback) {
                return this.rpcCall(listTasks, $root.flyteidl.admin.TaskListRequest, $root.flyteidl.admin.TaskList, request, callback);
            }, "name", { value: "ListTasks" });

            /**
             * Calls ListTasks.
             * @function listTasks
             * @memberof flyteidl.service.AdminService
             * @instance
             * @param {flyteidl.admin.ITaskListRequest} request TaskListRequest message or plain object
             * @returns {Promise<flyteidl.admin.TaskList>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link flyteidl.service.AdminService#createWorkflow}.
             * @memberof flyteidl.service.AdminService
             * @typedef CreateWorkflowCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {flyteidl.admin.WorkflowCreateResponse} [response] WorkflowCreateResponse
             */

            /**
             * Calls CreateWorkflow.
             * @function createWorkflow
             * @memberof flyteidl.service.AdminService
             * @instance
             * @param {flyteidl.admin.IWorkflowCreateRequest} request WorkflowCreateRequest message or plain object
             * @param {flyteidl.service.AdminService.CreateWorkflowCallback} callback Node-style callback called with the error, if any, and WorkflowCreateResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(AdminService.prototype.createWorkflow = function createWorkflow(request, callback) {
                return this.rpcCall(createWorkflow, $root.flyteidl.admin.WorkflowCreateRequest, $root.flyteidl.admin.WorkflowCreateResponse, request, callback);
            }, "name", { value: "CreateWorkflow" });

            /**
             * Calls CreateWorkflow.
             * @function createWorkflow
             * @memberof flyteidl.service.AdminService
             * @instance
             * @param {flyteidl.admin.IWorkflowCreateRequest} request WorkflowCreateRequest message or plain object
             * @returns {Promise<flyteidl.admin.WorkflowCreateResponse>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link flyteidl.service.AdminService#getWorkflow}.
             * @memberof flyteidl.service.AdminService
             * @typedef GetWorkflowCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {flyteidl.admin.Workflow} [response] Workflow
             */

            /**
             * Calls GetWorkflow.
             * @function getWorkflow
             * @memberof flyteidl.service.AdminService
             * @instance
             * @param {flyteidl.admin.IGetObjectRequest} request GetObjectRequest message or plain object
             * @param {flyteidl.service.AdminService.GetWorkflowCallback} callback Node-style callback called with the error, if any, and Workflow
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(AdminService.prototype.getWorkflow = function getWorkflow(request, callback) {
                return this.rpcCall(getWorkflow, $root.flyteidl.admin.GetObjectRequest, $root.flyteidl.admin.Workflow, request, callback);
            }, "name", { value: "GetWorkflow" });

            /**
             * Calls GetWorkflow.
             * @function getWorkflow
             * @memberof flyteidl.service.AdminService
             * @instance
             * @param {flyteidl.admin.IGetObjectRequest} request GetObjectRequest message or plain object
             * @returns {Promise<flyteidl.admin.Workflow>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link flyteidl.service.AdminService#listWorkflowIds}.
             * @memberof flyteidl.service.AdminService
             * @typedef ListWorkflowIdsCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {flyteidl.admin.IdentifierList} [response] IdentifierList
             */

            /**
             * Calls ListWorkflowIds.
             * @function listWorkflowIds
             * @memberof flyteidl.service.AdminService
             * @instance
             * @param {flyteidl.admin.IWorkflowListRequest} request WorkflowListRequest message or plain object
             * @param {flyteidl.service.AdminService.ListWorkflowIdsCallback} callback Node-style callback called with the error, if any, and IdentifierList
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(AdminService.prototype.listWorkflowIds = function listWorkflowIds(request, callback) {
                return this.rpcCall(listWorkflowIds, $root.flyteidl.admin.WorkflowListRequest, $root.flyteidl.admin.IdentifierList, request, callback);
            }, "name", { value: "ListWorkflowIds" });

            /**
             * Calls ListWorkflowIds.
             * @function listWorkflowIds
             * @memberof flyteidl.service.AdminService
             * @instance
             * @param {flyteidl.admin.IWorkflowListRequest} request WorkflowListRequest message or plain object
             * @returns {Promise<flyteidl.admin.IdentifierList>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link flyteidl.service.AdminService#listWorkflows}.
             * @memberof flyteidl.service.AdminService
             * @typedef ListWorkflowsCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {flyteidl.admin.WorkflowList} [response] WorkflowList
             */

            /**
             * Calls ListWorkflows.
             * @function listWorkflows
             * @memberof flyteidl.service.AdminService
             * @instance
             * @param {flyteidl.admin.IWorkflowListRequest} request WorkflowListRequest message or plain object
             * @param {flyteidl.service.AdminService.ListWorkflowsCallback} callback Node-style callback called with the error, if any, and WorkflowList
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(AdminService.prototype.listWorkflows = function listWorkflows(request, callback) {
                return this.rpcCall(listWorkflows, $root.flyteidl.admin.WorkflowListRequest, $root.flyteidl.admin.WorkflowList, request, callback);
            }, "name", { value: "ListWorkflows" });

            /**
             * Calls ListWorkflows.
             * @function listWorkflows
             * @memberof flyteidl.service.AdminService
             * @instance
             * @param {flyteidl.admin.IWorkflowListRequest} request WorkflowListRequest message or plain object
             * @returns {Promise<flyteidl.admin.WorkflowList>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link flyteidl.service.AdminService#createLaunchPlan}.
             * @memberof flyteidl.service.AdminService
             * @typedef CreateLaunchPlanCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {flyteidl.admin.LaunchPlanCreateResponse} [response] LaunchPlanCreateResponse
             */

            /**
             * Calls CreateLaunchPlan.
             * @function createLaunchPlan
             * @memberof flyteidl.service.AdminService
             * @instance
             * @param {flyteidl.admin.ILaunchPlanCreateRequest} request LaunchPlanCreateRequest message or plain object
             * @param {flyteidl.service.AdminService.CreateLaunchPlanCallback} callback Node-style callback called with the error, if any, and LaunchPlanCreateResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(AdminService.prototype.createLaunchPlan = function createLaunchPlan(request, callback) {
                return this.rpcCall(createLaunchPlan, $root.flyteidl.admin.LaunchPlanCreateRequest, $root.flyteidl.admin.LaunchPlanCreateResponse, request, callback);
            }, "name", { value: "CreateLaunchPlan" });

            /**
             * Calls CreateLaunchPlan.
             * @function createLaunchPlan
             * @memberof flyteidl.service.AdminService
             * @instance
             * @param {flyteidl.admin.ILaunchPlanCreateRequest} request LaunchPlanCreateRequest message or plain object
             * @returns {Promise<flyteidl.admin.LaunchPlanCreateResponse>} Promise
             * @variation 2
             */

            return AdminService;
        })();

        return service;
    })();

    return flyteidl;
})();

export const google = $root.google = (() => {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    const google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        const protobuf = {};

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.seconds = reader.int64();
                        break;
                    case 2:
                        message.nanos = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            return Timestamp;
        })();

        protobuf.Duration = (function() {

            /**
             * Properties of a Duration.
             * @memberof google.protobuf
             * @interface IDuration
             * @property {Long|null} [seconds] Duration seconds
             * @property {number|null} [nanos] Duration nanos
             */

            /**
             * Constructs a new Duration.
             * @memberof google.protobuf
             * @classdesc Represents a Duration.
             * @implements IDuration
             * @constructor
             * @param {google.protobuf.IDuration=} [properties] Properties to set
             */
            function Duration(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Duration seconds.
             * @member {Long} seconds
             * @memberof google.protobuf.Duration
             * @instance
             */
            Duration.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Duration nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Duration
             * @instance
             */
            Duration.prototype.nanos = 0;

            /**
             * Creates a new Duration instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Duration
             * @static
             * @param {google.protobuf.IDuration=} [properties] Properties to set
             * @returns {google.protobuf.Duration} Duration instance
             */
            Duration.create = function create(properties) {
                return new Duration(properties);
            };

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Duration
             * @static
             * @param {google.protobuf.IDuration} message Duration message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Duration.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Duration
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Duration} Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Duration.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Duration();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.seconds = reader.int64();
                        break;
                    case 2:
                        message.nanos = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a Duration message.
             * @function verify
             * @memberof google.protobuf.Duration
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Duration.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            return Duration;
        })();

        protobuf.FileDescriptorSet = (function() {

            /**
             * Properties of a FileDescriptorSet.
             * @memberof google.protobuf
             * @interface IFileDescriptorSet
             * @property {Array.<google.protobuf.IFileDescriptorProto>|null} [file] FileDescriptorSet file
             */

            /**
             * Constructs a new FileDescriptorSet.
             * @memberof google.protobuf
             * @classdesc Represents a FileDescriptorSet.
             * @implements IFileDescriptorSet
             * @constructor
             * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
             */
            function FileDescriptorSet(properties) {
                this.file = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileDescriptorSet file.
             * @member {Array.<google.protobuf.IFileDescriptorProto>} file
             * @memberof google.protobuf.FileDescriptorSet
             * @instance
             */
            FileDescriptorSet.prototype.file = $util.emptyArray;

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet instance
             */
            FileDescriptorSet.create = function create(properties) {
                return new FileDescriptorSet(properties);
            };

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {google.protobuf.IFileDescriptorSet} message FileDescriptorSet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorSet.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.file != null && message.file.length)
                    for (let i = 0; i < message.file.length; ++i)
                        $root.google.protobuf.FileDescriptorProto.encode(message.file[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorSet.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorSet();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.file && message.file.length))
                            message.file = [];
                        message.file.push($root.google.protobuf.FileDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a FileDescriptorSet message.
             * @function verify
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FileDescriptorSet.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.file != null && message.hasOwnProperty("file")) {
                    if (!Array.isArray(message.file))
                        return "file: array expected";
                    for (let i = 0; i < message.file.length; ++i) {
                        let error = $root.google.protobuf.FileDescriptorProto.verify(message.file[i]);
                        if (error)
                            return "file." + error;
                    }
                }
                return null;
            };

            return FileDescriptorSet;
        })();

        protobuf.FileDescriptorProto = (function() {

            /**
             * Properties of a FileDescriptorProto.
             * @memberof google.protobuf
             * @interface IFileDescriptorProto
             * @property {string|null} [name] FileDescriptorProto name
             * @property {string|null} ["package"] FileDescriptorProto package
             * @property {Array.<string>|null} [dependency] FileDescriptorProto dependency
             * @property {Array.<number>|null} [publicDependency] FileDescriptorProto publicDependency
             * @property {Array.<number>|null} [weakDependency] FileDescriptorProto weakDependency
             * @property {Array.<google.protobuf.IDescriptorProto>|null} [messageType] FileDescriptorProto messageType
             * @property {Array.<google.protobuf.IEnumDescriptorProto>|null} [enumType] FileDescriptorProto enumType
             * @property {Array.<google.protobuf.IServiceDescriptorProto>|null} [service] FileDescriptorProto service
             * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [extension] FileDescriptorProto extension
             * @property {google.protobuf.IFileOptions|null} [options] FileDescriptorProto options
             * @property {google.protobuf.ISourceCodeInfo|null} [sourceCodeInfo] FileDescriptorProto sourceCodeInfo
             * @property {string|null} [syntax] FileDescriptorProto syntax
             */

            /**
             * Constructs a new FileDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a FileDescriptorProto.
             * @implements IFileDescriptorProto
             * @constructor
             * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
             */
            function FileDescriptorProto(properties) {
                this.dependency = [];
                this.publicDependency = [];
                this.weakDependency = [];
                this.messageType = [];
                this.enumType = [];
                this.service = [];
                this.extension = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.name = "";

            /**
             * FileDescriptorProto package.
             * @member {string} package
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype["package"] = "";

            /**
             * FileDescriptorProto dependency.
             * @member {Array.<string>} dependency
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.dependency = $util.emptyArray;

            /**
             * FileDescriptorProto publicDependency.
             * @member {Array.<number>} publicDependency
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.publicDependency = $util.emptyArray;

            /**
             * FileDescriptorProto weakDependency.
             * @member {Array.<number>} weakDependency
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.weakDependency = $util.emptyArray;

            /**
             * FileDescriptorProto messageType.
             * @member {Array.<google.protobuf.IDescriptorProto>} messageType
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.messageType = $util.emptyArray;

            /**
             * FileDescriptorProto enumType.
             * @member {Array.<google.protobuf.IEnumDescriptorProto>} enumType
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.enumType = $util.emptyArray;

            /**
             * FileDescriptorProto service.
             * @member {Array.<google.protobuf.IServiceDescriptorProto>} service
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.service = $util.emptyArray;

            /**
             * FileDescriptorProto extension.
             * @member {Array.<google.protobuf.IFieldDescriptorProto>} extension
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.extension = $util.emptyArray;

            /**
             * FileDescriptorProto options.
             * @member {google.protobuf.IFileOptions|null|undefined} options
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.options = null;

            /**
             * FileDescriptorProto sourceCodeInfo.
             * @member {google.protobuf.ISourceCodeInfo|null|undefined} sourceCodeInfo
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.sourceCodeInfo = null;

            /**
             * FileDescriptorProto syntax.
             * @member {string} syntax
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.syntax = "";

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto instance
             */
            FileDescriptorProto.create = function create(properties) {
                return new FileDescriptorProto(properties);
            };

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {google.protobuf.IFileDescriptorProto} message FileDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message["package"] != null && message.hasOwnProperty("package"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message["package"]);
                if (message.dependency != null && message.dependency.length)
                    for (let i = 0; i < message.dependency.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.dependency[i]);
                if (message.messageType != null && message.messageType.length)
                    for (let i = 0; i < message.messageType.length; ++i)
                        $root.google.protobuf.DescriptorProto.encode(message.messageType[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.enumType != null && message.enumType.length)
                    for (let i = 0; i < message.enumType.length; ++i)
                        $root.google.protobuf.EnumDescriptorProto.encode(message.enumType[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.service != null && message.service.length)
                    for (let i = 0; i < message.service.length; ++i)
                        $root.google.protobuf.ServiceDescriptorProto.encode(message.service[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.extension != null && message.extension.length)
                    for (let i = 0; i < message.extension.length; ++i)
                        $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.options != null && message.hasOwnProperty("options"))
                    $root.google.protobuf.FileOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.sourceCodeInfo != null && message.hasOwnProperty("sourceCodeInfo"))
                    $root.google.protobuf.SourceCodeInfo.encode(message.sourceCodeInfo, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.publicDependency != null && message.publicDependency.length)
                    for (let i = 0; i < message.publicDependency.length; ++i)
                        writer.uint32(/* id 10, wireType 0 =*/80).int32(message.publicDependency[i]);
                if (message.weakDependency != null && message.weakDependency.length)
                    for (let i = 0; i < message.weakDependency.length; ++i)
                        writer.uint32(/* id 11, wireType 0 =*/88).int32(message.weakDependency[i]);
                if (message.syntax != null && message.hasOwnProperty("syntax"))
                    writer.uint32(/* id 12, wireType 2 =*/98).string(message.syntax);
                return writer;
            };

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message["package"] = reader.string();
                        break;
                    case 3:
                        if (!(message.dependency && message.dependency.length))
                            message.dependency = [];
                        message.dependency.push(reader.string());
                        break;
                    case 10:
                        if (!(message.publicDependency && message.publicDependency.length))
                            message.publicDependency = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.publicDependency.push(reader.int32());
                        } else
                            message.publicDependency.push(reader.int32());
                        break;
                    case 11:
                        if (!(message.weakDependency && message.weakDependency.length))
                            message.weakDependency = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.weakDependency.push(reader.int32());
                        } else
                            message.weakDependency.push(reader.int32());
                        break;
                    case 4:
                        if (!(message.messageType && message.messageType.length))
                            message.messageType = [];
                        message.messageType.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 5:
                        if (!(message.enumType && message.enumType.length))
                            message.enumType = [];
                        message.enumType.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 6:
                        if (!(message.service && message.service.length))
                            message.service = [];
                        message.service.push($root.google.protobuf.ServiceDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 7:
                        if (!(message.extension && message.extension.length))
                            message.extension = [];
                        message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 8:
                        message.options = $root.google.protobuf.FileOptions.decode(reader, reader.uint32());
                        break;
                    case 9:
                        message.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.decode(reader, reader.uint32());
                        break;
                    case 12:
                        message.syntax = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a FileDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FileDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message["package"] != null && message.hasOwnProperty("package"))
                    if (!$util.isString(message["package"]))
                        return "package: string expected";
                if (message.dependency != null && message.hasOwnProperty("dependency")) {
                    if (!Array.isArray(message.dependency))
                        return "dependency: array expected";
                    for (let i = 0; i < message.dependency.length; ++i)
                        if (!$util.isString(message.dependency[i]))
                            return "dependency: string[] expected";
                }
                if (message.publicDependency != null && message.hasOwnProperty("publicDependency")) {
                    if (!Array.isArray(message.publicDependency))
                        return "publicDependency: array expected";
                    for (let i = 0; i < message.publicDependency.length; ++i)
                        if (!$util.isInteger(message.publicDependency[i]))
                            return "publicDependency: integer[] expected";
                }
                if (message.weakDependency != null && message.hasOwnProperty("weakDependency")) {
                    if (!Array.isArray(message.weakDependency))
                        return "weakDependency: array expected";
                    for (let i = 0; i < message.weakDependency.length; ++i)
                        if (!$util.isInteger(message.weakDependency[i]))
                            return "weakDependency: integer[] expected";
                }
                if (message.messageType != null && message.hasOwnProperty("messageType")) {
                    if (!Array.isArray(message.messageType))
                        return "messageType: array expected";
                    for (let i = 0; i < message.messageType.length; ++i) {
                        let error = $root.google.protobuf.DescriptorProto.verify(message.messageType[i]);
                        if (error)
                            return "messageType." + error;
                    }
                }
                if (message.enumType != null && message.hasOwnProperty("enumType")) {
                    if (!Array.isArray(message.enumType))
                        return "enumType: array expected";
                    for (let i = 0; i < message.enumType.length; ++i) {
                        let error = $root.google.protobuf.EnumDescriptorProto.verify(message.enumType[i]);
                        if (error)
                            return "enumType." + error;
                    }
                }
                if (message.service != null && message.hasOwnProperty("service")) {
                    if (!Array.isArray(message.service))
                        return "service: array expected";
                    for (let i = 0; i < message.service.length; ++i) {
                        let error = $root.google.protobuf.ServiceDescriptorProto.verify(message.service[i]);
                        if (error)
                            return "service." + error;
                    }
                }
                if (message.extension != null && message.hasOwnProperty("extension")) {
                    if (!Array.isArray(message.extension))
                        return "extension: array expected";
                    for (let i = 0; i < message.extension.length; ++i) {
                        let error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                        if (error)
                            return "extension." + error;
                    }
                }
                if (message.options != null && message.hasOwnProperty("options")) {
                    let error = $root.google.protobuf.FileOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                if (message.sourceCodeInfo != null && message.hasOwnProperty("sourceCodeInfo")) {
                    let error = $root.google.protobuf.SourceCodeInfo.verify(message.sourceCodeInfo);
                    if (error)
                        return "sourceCodeInfo." + error;
                }
                if (message.syntax != null && message.hasOwnProperty("syntax"))
                    if (!$util.isString(message.syntax))
                        return "syntax: string expected";
                return null;
            };

            return FileDescriptorProto;
        })();

        protobuf.DescriptorProto = (function() {

            /**
             * Properties of a DescriptorProto.
             * @memberof google.protobuf
             * @interface IDescriptorProto
             * @property {string|null} [name] DescriptorProto name
             * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [field] DescriptorProto field
             * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [extension] DescriptorProto extension
             * @property {Array.<google.protobuf.IDescriptorProto>|null} [nestedType] DescriptorProto nestedType
             * @property {Array.<google.protobuf.IEnumDescriptorProto>|null} [enumType] DescriptorProto enumType
             * @property {Array.<google.protobuf.DescriptorProto.IExtensionRange>|null} [extensionRange] DescriptorProto extensionRange
             * @property {Array.<google.protobuf.IOneofDescriptorProto>|null} [oneofDecl] DescriptorProto oneofDecl
             * @property {google.protobuf.IMessageOptions|null} [options] DescriptorProto options
             * @property {Array.<google.protobuf.DescriptorProto.IReservedRange>|null} [reservedRange] DescriptorProto reservedRange
             * @property {Array.<string>|null} [reservedName] DescriptorProto reservedName
             */

            /**
             * Constructs a new DescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a DescriptorProto.
             * @implements IDescriptorProto
             * @constructor
             * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
             */
            function DescriptorProto(properties) {
                this.field = [];
                this.extension = [];
                this.nestedType = [];
                this.enumType = [];
                this.extensionRange = [];
                this.oneofDecl = [];
                this.reservedRange = [];
                this.reservedName = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.name = "";

            /**
             * DescriptorProto field.
             * @member {Array.<google.protobuf.IFieldDescriptorProto>} field
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.field = $util.emptyArray;

            /**
             * DescriptorProto extension.
             * @member {Array.<google.protobuf.IFieldDescriptorProto>} extension
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.extension = $util.emptyArray;

            /**
             * DescriptorProto nestedType.
             * @member {Array.<google.protobuf.IDescriptorProto>} nestedType
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.nestedType = $util.emptyArray;

            /**
             * DescriptorProto enumType.
             * @member {Array.<google.protobuf.IEnumDescriptorProto>} enumType
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.enumType = $util.emptyArray;

            /**
             * DescriptorProto extensionRange.
             * @member {Array.<google.protobuf.DescriptorProto.IExtensionRange>} extensionRange
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.extensionRange = $util.emptyArray;

            /**
             * DescriptorProto oneofDecl.
             * @member {Array.<google.protobuf.IOneofDescriptorProto>} oneofDecl
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.oneofDecl = $util.emptyArray;

            /**
             * DescriptorProto options.
             * @member {google.protobuf.IMessageOptions|null|undefined} options
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.options = null;

            /**
             * DescriptorProto reservedRange.
             * @member {Array.<google.protobuf.DescriptorProto.IReservedRange>} reservedRange
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.reservedRange = $util.emptyArray;

            /**
             * DescriptorProto reservedName.
             * @member {Array.<string>} reservedName
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.reservedName = $util.emptyArray;

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.DescriptorProto} DescriptorProto instance
             */
            DescriptorProto.create = function create(properties) {
                return new DescriptorProto(properties);
            };

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {google.protobuf.IDescriptorProto} message DescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.field != null && message.field.length)
                    for (let i = 0; i < message.field.length; ++i)
                        $root.google.protobuf.FieldDescriptorProto.encode(message.field[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.nestedType != null && message.nestedType.length)
                    for (let i = 0; i < message.nestedType.length; ++i)
                        $root.google.protobuf.DescriptorProto.encode(message.nestedType[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.enumType != null && message.enumType.length)
                    for (let i = 0; i < message.enumType.length; ++i)
                        $root.google.protobuf.EnumDescriptorProto.encode(message.enumType[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.extensionRange != null && message.extensionRange.length)
                    for (let i = 0; i < message.extensionRange.length; ++i)
                        $root.google.protobuf.DescriptorProto.ExtensionRange.encode(message.extensionRange[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.extension != null && message.extension.length)
                    for (let i = 0; i < message.extension.length; ++i)
                        $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.options != null && message.hasOwnProperty("options"))
                    $root.google.protobuf.MessageOptions.encode(message.options, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.oneofDecl != null && message.oneofDecl.length)
                    for (let i = 0; i < message.oneofDecl.length; ++i)
                        $root.google.protobuf.OneofDescriptorProto.encode(message.oneofDecl[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.reservedRange != null && message.reservedRange.length)
                    for (let i = 0; i < message.reservedRange.length; ++i)
                        $root.google.protobuf.DescriptorProto.ReservedRange.encode(message.reservedRange[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.reservedName != null && message.reservedName.length)
                    for (let i = 0; i < message.reservedName.length; ++i)
                        writer.uint32(/* id 10, wireType 2 =*/82).string(message.reservedName[i]);
                return writer;
            };

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.DescriptorProto} DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        if (!(message.field && message.field.length))
                            message.field = [];
                        message.field.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 6:
                        if (!(message.extension && message.extension.length))
                            message.extension = [];
                        message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        if (!(message.nestedType && message.nestedType.length))
                            message.nestedType = [];
                        message.nestedType.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 4:
                        if (!(message.enumType && message.enumType.length))
                            message.enumType = [];
                        message.enumType.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 5:
                        if (!(message.extensionRange && message.extensionRange.length))
                            message.extensionRange = [];
                        message.extensionRange.push($root.google.protobuf.DescriptorProto.ExtensionRange.decode(reader, reader.uint32()));
                        break;
                    case 8:
                        if (!(message.oneofDecl && message.oneofDecl.length))
                            message.oneofDecl = [];
                        message.oneofDecl.push($root.google.protobuf.OneofDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 7:
                        message.options = $root.google.protobuf.MessageOptions.decode(reader, reader.uint32());
                        break;
                    case 9:
                        if (!(message.reservedRange && message.reservedRange.length))
                            message.reservedRange = [];
                        message.reservedRange.push($root.google.protobuf.DescriptorProto.ReservedRange.decode(reader, reader.uint32()));
                        break;
                    case 10:
                        if (!(message.reservedName && message.reservedName.length))
                            message.reservedName = [];
                        message.reservedName.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a DescriptorProto message.
             * @function verify
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.field != null && message.hasOwnProperty("field")) {
                    if (!Array.isArray(message.field))
                        return "field: array expected";
                    for (let i = 0; i < message.field.length; ++i) {
                        let error = $root.google.protobuf.FieldDescriptorProto.verify(message.field[i]);
                        if (error)
                            return "field." + error;
                    }
                }
                if (message.extension != null && message.hasOwnProperty("extension")) {
                    if (!Array.isArray(message.extension))
                        return "extension: array expected";
                    for (let i = 0; i < message.extension.length; ++i) {
                        let error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                        if (error)
                            return "extension." + error;
                    }
                }
                if (message.nestedType != null && message.hasOwnProperty("nestedType")) {
                    if (!Array.isArray(message.nestedType))
                        return "nestedType: array expected";
                    for (let i = 0; i < message.nestedType.length; ++i) {
                        let error = $root.google.protobuf.DescriptorProto.verify(message.nestedType[i]);
                        if (error)
                            return "nestedType." + error;
                    }
                }
                if (message.enumType != null && message.hasOwnProperty("enumType")) {
                    if (!Array.isArray(message.enumType))
                        return "enumType: array expected";
                    for (let i = 0; i < message.enumType.length; ++i) {
                        let error = $root.google.protobuf.EnumDescriptorProto.verify(message.enumType[i]);
                        if (error)
                            return "enumType." + error;
                    }
                }
                if (message.extensionRange != null && message.hasOwnProperty("extensionRange")) {
                    if (!Array.isArray(message.extensionRange))
                        return "extensionRange: array expected";
                    for (let i = 0; i < message.extensionRange.length; ++i) {
                        let error = $root.google.protobuf.DescriptorProto.ExtensionRange.verify(message.extensionRange[i]);
                        if (error)
                            return "extensionRange." + error;
                    }
                }
                if (message.oneofDecl != null && message.hasOwnProperty("oneofDecl")) {
                    if (!Array.isArray(message.oneofDecl))
                        return "oneofDecl: array expected";
                    for (let i = 0; i < message.oneofDecl.length; ++i) {
                        let error = $root.google.protobuf.OneofDescriptorProto.verify(message.oneofDecl[i]);
                        if (error)
                            return "oneofDecl." + error;
                    }
                }
                if (message.options != null && message.hasOwnProperty("options")) {
                    let error = $root.google.protobuf.MessageOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                if (message.reservedRange != null && message.hasOwnProperty("reservedRange")) {
                    if (!Array.isArray(message.reservedRange))
                        return "reservedRange: array expected";
                    for (let i = 0; i < message.reservedRange.length; ++i) {
                        let error = $root.google.protobuf.DescriptorProto.ReservedRange.verify(message.reservedRange[i]);
                        if (error)
                            return "reservedRange." + error;
                    }
                }
                if (message.reservedName != null && message.hasOwnProperty("reservedName")) {
                    if (!Array.isArray(message.reservedName))
                        return "reservedName: array expected";
                    for (let i = 0; i < message.reservedName.length; ++i)
                        if (!$util.isString(message.reservedName[i]))
                            return "reservedName: string[] expected";
                }
                return null;
            };

            DescriptorProto.ExtensionRange = (function() {

                /**
                 * Properties of an ExtensionRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @interface IExtensionRange
                 * @property {number|null} [start] ExtensionRange start
                 * @property {number|null} [end] ExtensionRange end
                 */

                /**
                 * Constructs a new ExtensionRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @classdesc Represents an ExtensionRange.
                 * @implements IExtensionRange
                 * @constructor
                 * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                 */
                function ExtensionRange(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ExtensionRange start.
                 * @member {number} start
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @instance
                 */
                ExtensionRange.prototype.start = 0;

                /**
                 * ExtensionRange end.
                 * @member {number} end
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @instance
                 */
                ExtensionRange.prototype.end = 0;

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange instance
                 */
                ExtensionRange.create = function create(properties) {
                    return new ExtensionRange(properties);
                };

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IExtensionRange} message ExtensionRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ExtensionRange.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.start != null && message.hasOwnProperty("start"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                    if (message.end != null && message.hasOwnProperty("end"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                    return writer;
                };

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ExtensionRange.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.start = reader.int32();
                            break;
                        case 2:
                            message.end = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Verifies an ExtensionRange message.
                 * @function verify
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ExtensionRange.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.start != null && message.hasOwnProperty("start"))
                        if (!$util.isInteger(message.start))
                            return "start: integer expected";
                    if (message.end != null && message.hasOwnProperty("end"))
                        if (!$util.isInteger(message.end))
                            return "end: integer expected";
                    return null;
                };

                return ExtensionRange;
            })();

            DescriptorProto.ReservedRange = (function() {

                /**
                 * Properties of a ReservedRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @interface IReservedRange
                 * @property {number|null} [start] ReservedRange start
                 * @property {number|null} [end] ReservedRange end
                 */

                /**
                 * Constructs a new ReservedRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @classdesc Represents a ReservedRange.
                 * @implements IReservedRange
                 * @constructor
                 * @param {google.protobuf.DescriptorProto.IReservedRange=} [properties] Properties to set
                 */
                function ReservedRange(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ReservedRange start.
                 * @member {number} start
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @instance
                 */
                ReservedRange.prototype.start = 0;

                /**
                 * ReservedRange end.
                 * @member {number} end
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @instance
                 */
                ReservedRange.prototype.end = 0;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IReservedRange=} [properties] Properties to set
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange instance
                 */
                ReservedRange.create = function create(properties) {
                    return new ReservedRange(properties);
                };

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IReservedRange} message ReservedRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReservedRange.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.start != null && message.hasOwnProperty("start"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                    if (message.end != null && message.hasOwnProperty("end"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                    return writer;
                };

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReservedRange.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.start = reader.int32();
                            break;
                        case 2:
                            message.end = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Verifies a ReservedRange message.
                 * @function verify
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ReservedRange.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.start != null && message.hasOwnProperty("start"))
                        if (!$util.isInteger(message.start))
                            return "start: integer expected";
                    if (message.end != null && message.hasOwnProperty("end"))
                        if (!$util.isInteger(message.end))
                            return "end: integer expected";
                    return null;
                };

                return ReservedRange;
            })();

            return DescriptorProto;
        })();

        protobuf.FieldDescriptorProto = (function() {

            /**
             * Properties of a FieldDescriptorProto.
             * @memberof google.protobuf
             * @interface IFieldDescriptorProto
             * @property {string|null} [name] FieldDescriptorProto name
             * @property {number|null} [number] FieldDescriptorProto number
             * @property {google.protobuf.FieldDescriptorProto.Label|null} [label] FieldDescriptorProto label
             * @property {google.protobuf.FieldDescriptorProto.Type|null} [type] FieldDescriptorProto type
             * @property {string|null} [typeName] FieldDescriptorProto typeName
             * @property {string|null} [extendee] FieldDescriptorProto extendee
             * @property {string|null} [defaultValue] FieldDescriptorProto defaultValue
             * @property {number|null} [oneofIndex] FieldDescriptorProto oneofIndex
             * @property {string|null} [jsonName] FieldDescriptorProto jsonName
             * @property {google.protobuf.IFieldOptions|null} [options] FieldDescriptorProto options
             */

            /**
             * Constructs a new FieldDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a FieldDescriptorProto.
             * @implements IFieldDescriptorProto
             * @constructor
             * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
             */
            function FieldDescriptorProto(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FieldDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.name = "";

            /**
             * FieldDescriptorProto number.
             * @member {number} number
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.number = 0;

            /**
             * FieldDescriptorProto label.
             * @member {google.protobuf.FieldDescriptorProto.Label} label
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.label = 1;

            /**
             * FieldDescriptorProto type.
             * @member {google.protobuf.FieldDescriptorProto.Type} type
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.type = 1;

            /**
             * FieldDescriptorProto typeName.
             * @member {string} typeName
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.typeName = "";

            /**
             * FieldDescriptorProto extendee.
             * @member {string} extendee
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.extendee = "";

            /**
             * FieldDescriptorProto defaultValue.
             * @member {string} defaultValue
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.defaultValue = "";

            /**
             * FieldDescriptorProto oneofIndex.
             * @member {number} oneofIndex
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.oneofIndex = 0;

            /**
             * FieldDescriptorProto jsonName.
             * @member {string} jsonName
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.jsonName = "";

            /**
             * FieldDescriptorProto options.
             * @member {google.protobuf.IFieldOptions|null|undefined} options
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.options = null;

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto instance
             */
            FieldDescriptorProto.create = function create(properties) {
                return new FieldDescriptorProto(properties);
            };

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {google.protobuf.IFieldDescriptorProto} message FieldDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.extendee != null && message.hasOwnProperty("extendee"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.extendee);
                if (message.number != null && message.hasOwnProperty("number"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.number);
                if (message.label != null && message.hasOwnProperty("label"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.label);
                if (message.type != null && message.hasOwnProperty("type"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.type);
                if (message.typeName != null && message.hasOwnProperty("typeName"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.typeName);
                if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.defaultValue);
                if (message.options != null && message.hasOwnProperty("options"))
                    $root.google.protobuf.FieldOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.oneofIndex != null && message.hasOwnProperty("oneofIndex"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.oneofIndex);
                if (message.jsonName != null && message.hasOwnProperty("jsonName"))
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.jsonName);
                return writer;
            };

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 3:
                        message.number = reader.int32();
                        break;
                    case 4:
                        message.label = reader.int32();
                        break;
                    case 5:
                        message.type = reader.int32();
                        break;
                    case 6:
                        message.typeName = reader.string();
                        break;
                    case 2:
                        message.extendee = reader.string();
                        break;
                    case 7:
                        message.defaultValue = reader.string();
                        break;
                    case 9:
                        message.oneofIndex = reader.int32();
                        break;
                    case 10:
                        message.jsonName = reader.string();
                        break;
                    case 8:
                        message.options = $root.google.protobuf.FieldOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a FieldDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FieldDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.number != null && message.hasOwnProperty("number"))
                    if (!$util.isInteger(message.number))
                        return "number: integer expected";
                if (message.label != null && message.hasOwnProperty("label"))
                    switch (message.label) {
                    default:
                        return "label: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.type != null && message.hasOwnProperty("type"))
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                        break;
                    }
                if (message.typeName != null && message.hasOwnProperty("typeName"))
                    if (!$util.isString(message.typeName))
                        return "typeName: string expected";
                if (message.extendee != null && message.hasOwnProperty("extendee"))
                    if (!$util.isString(message.extendee))
                        return "extendee: string expected";
                if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
                    if (!$util.isString(message.defaultValue))
                        return "defaultValue: string expected";
                if (message.oneofIndex != null && message.hasOwnProperty("oneofIndex"))
                    if (!$util.isInteger(message.oneofIndex))
                        return "oneofIndex: integer expected";
                if (message.jsonName != null && message.hasOwnProperty("jsonName"))
                    if (!$util.isString(message.jsonName))
                        return "jsonName: string expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    let error = $root.google.protobuf.FieldOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Type enum.
             * @name google.protobuf.FieldDescriptorProto.Type
             * @enum {string}
             * @property {number} TYPE_DOUBLE=1 TYPE_DOUBLE value
             * @property {number} TYPE_FLOAT=2 TYPE_FLOAT value
             * @property {number} TYPE_INT64=3 TYPE_INT64 value
             * @property {number} TYPE_UINT64=4 TYPE_UINT64 value
             * @property {number} TYPE_INT32=5 TYPE_INT32 value
             * @property {number} TYPE_FIXED64=6 TYPE_FIXED64 value
             * @property {number} TYPE_FIXED32=7 TYPE_FIXED32 value
             * @property {number} TYPE_BOOL=8 TYPE_BOOL value
             * @property {number} TYPE_STRING=9 TYPE_STRING value
             * @property {number} TYPE_GROUP=10 TYPE_GROUP value
             * @property {number} TYPE_MESSAGE=11 TYPE_MESSAGE value
             * @property {number} TYPE_BYTES=12 TYPE_BYTES value
             * @property {number} TYPE_UINT32=13 TYPE_UINT32 value
             * @property {number} TYPE_ENUM=14 TYPE_ENUM value
             * @property {number} TYPE_SFIXED32=15 TYPE_SFIXED32 value
             * @property {number} TYPE_SFIXED64=16 TYPE_SFIXED64 value
             * @property {number} TYPE_SINT32=17 TYPE_SINT32 value
             * @property {number} TYPE_SINT64=18 TYPE_SINT64 value
             */
            FieldDescriptorProto.Type = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "TYPE_DOUBLE"] = 1;
                values[valuesById[2] = "TYPE_FLOAT"] = 2;
                values[valuesById[3] = "TYPE_INT64"] = 3;
                values[valuesById[4] = "TYPE_UINT64"] = 4;
                values[valuesById[5] = "TYPE_INT32"] = 5;
                values[valuesById[6] = "TYPE_FIXED64"] = 6;
                values[valuesById[7] = "TYPE_FIXED32"] = 7;
                values[valuesById[8] = "TYPE_BOOL"] = 8;
                values[valuesById[9] = "TYPE_STRING"] = 9;
                values[valuesById[10] = "TYPE_GROUP"] = 10;
                values[valuesById[11] = "TYPE_MESSAGE"] = 11;
                values[valuesById[12] = "TYPE_BYTES"] = 12;
                values[valuesById[13] = "TYPE_UINT32"] = 13;
                values[valuesById[14] = "TYPE_ENUM"] = 14;
                values[valuesById[15] = "TYPE_SFIXED32"] = 15;
                values[valuesById[16] = "TYPE_SFIXED64"] = 16;
                values[valuesById[17] = "TYPE_SINT32"] = 17;
                values[valuesById[18] = "TYPE_SINT64"] = 18;
                return values;
            })();

            /**
             * Label enum.
             * @name google.protobuf.FieldDescriptorProto.Label
             * @enum {string}
             * @property {number} LABEL_OPTIONAL=1 LABEL_OPTIONAL value
             * @property {number} LABEL_REQUIRED=2 LABEL_REQUIRED value
             * @property {number} LABEL_REPEATED=3 LABEL_REPEATED value
             */
            FieldDescriptorProto.Label = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "LABEL_OPTIONAL"] = 1;
                values[valuesById[2] = "LABEL_REQUIRED"] = 2;
                values[valuesById[3] = "LABEL_REPEATED"] = 3;
                return values;
            })();

            return FieldDescriptorProto;
        })();

        protobuf.OneofDescriptorProto = (function() {

            /**
             * Properties of an OneofDescriptorProto.
             * @memberof google.protobuf
             * @interface IOneofDescriptorProto
             * @property {string|null} [name] OneofDescriptorProto name
             * @property {google.protobuf.IOneofOptions|null} [options] OneofDescriptorProto options
             */

            /**
             * Constructs a new OneofDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents an OneofDescriptorProto.
             * @implements IOneofDescriptorProto
             * @constructor
             * @param {google.protobuf.IOneofDescriptorProto=} [properties] Properties to set
             */
            function OneofDescriptorProto(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OneofDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.OneofDescriptorProto
             * @instance
             */
            OneofDescriptorProto.prototype.name = "";

            /**
             * OneofDescriptorProto options.
             * @member {google.protobuf.IOneofOptions|null|undefined} options
             * @memberof google.protobuf.OneofDescriptorProto
             * @instance
             */
            OneofDescriptorProto.prototype.options = null;

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {google.protobuf.IOneofDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto instance
             */
            OneofDescriptorProto.create = function create(properties) {
                return new OneofDescriptorProto(properties);
            };

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {google.protobuf.IOneofDescriptorProto} message OneofDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.options != null && message.hasOwnProperty("options"))
                    $root.google.protobuf.OneofOptions.encode(message.options, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.options = $root.google.protobuf.OneofOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies an OneofDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OneofDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    let error = $root.google.protobuf.OneofOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            return OneofDescriptorProto;
        })();

        protobuf.EnumDescriptorProto = (function() {

            /**
             * Properties of an EnumDescriptorProto.
             * @memberof google.protobuf
             * @interface IEnumDescriptorProto
             * @property {string|null} [name] EnumDescriptorProto name
             * @property {Array.<google.protobuf.IEnumValueDescriptorProto>|null} [value] EnumDescriptorProto value
             * @property {google.protobuf.IEnumOptions|null} [options] EnumDescriptorProto options
             */

            /**
             * Constructs a new EnumDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents an EnumDescriptorProto.
             * @implements IEnumDescriptorProto
             * @constructor
             * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
             */
            function EnumDescriptorProto(properties) {
                this.value = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             */
            EnumDescriptorProto.prototype.name = "";

            /**
             * EnumDescriptorProto value.
             * @member {Array.<google.protobuf.IEnumValueDescriptorProto>} value
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             */
            EnumDescriptorProto.prototype.value = $util.emptyArray;

            /**
             * EnumDescriptorProto options.
             * @member {google.protobuf.IEnumOptions|null|undefined} options
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             */
            EnumDescriptorProto.prototype.options = null;

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto instance
             */
            EnumDescriptorProto.create = function create(properties) {
                return new EnumDescriptorProto(properties);
            };

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {google.protobuf.IEnumDescriptorProto} message EnumDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.value != null && message.value.length)
                    for (let i = 0; i < message.value.length; ++i)
                        $root.google.protobuf.EnumValueDescriptorProto.encode(message.value[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.options != null && message.hasOwnProperty("options"))
                    $root.google.protobuf.EnumOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        if (!(message.value && message.value.length))
                            message.value = [];
                        message.value.push($root.google.protobuf.EnumValueDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        message.options = $root.google.protobuf.EnumOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies an EnumDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnumDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.value != null && message.hasOwnProperty("value")) {
                    if (!Array.isArray(message.value))
                        return "value: array expected";
                    for (let i = 0; i < message.value.length; ++i) {
                        let error = $root.google.protobuf.EnumValueDescriptorProto.verify(message.value[i]);
                        if (error)
                            return "value." + error;
                    }
                }
                if (message.options != null && message.hasOwnProperty("options")) {
                    let error = $root.google.protobuf.EnumOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            return EnumDescriptorProto;
        })();

        protobuf.EnumValueDescriptorProto = (function() {

            /**
             * Properties of an EnumValueDescriptorProto.
             * @memberof google.protobuf
             * @interface IEnumValueDescriptorProto
             * @property {string|null} [name] EnumValueDescriptorProto name
             * @property {number|null} [number] EnumValueDescriptorProto number
             * @property {google.protobuf.IEnumValueOptions|null} [options] EnumValueDescriptorProto options
             */

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents an EnumValueDescriptorProto.
             * @implements IEnumValueDescriptorProto
             * @constructor
             * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
             */
            function EnumValueDescriptorProto(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumValueDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             */
            EnumValueDescriptorProto.prototype.name = "";

            /**
             * EnumValueDescriptorProto number.
             * @member {number} number
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             */
            EnumValueDescriptorProto.prototype.number = 0;

            /**
             * EnumValueDescriptorProto options.
             * @member {google.protobuf.IEnumValueOptions|null|undefined} options
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             */
            EnumValueDescriptorProto.prototype.options = null;

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto instance
             */
            EnumValueDescriptorProto.create = function create(properties) {
                return new EnumValueDescriptorProto(properties);
            };

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {google.protobuf.IEnumValueDescriptorProto} message EnumValueDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.number != null && message.hasOwnProperty("number"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.number);
                if (message.options != null && message.hasOwnProperty("options"))
                    $root.google.protobuf.EnumValueOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.number = reader.int32();
                        break;
                    case 3:
                        message.options = $root.google.protobuf.EnumValueOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnumValueDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.number != null && message.hasOwnProperty("number"))
                    if (!$util.isInteger(message.number))
                        return "number: integer expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    let error = $root.google.protobuf.EnumValueOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            return EnumValueDescriptorProto;
        })();

        protobuf.ServiceDescriptorProto = (function() {

            /**
             * Properties of a ServiceDescriptorProto.
             * @memberof google.protobuf
             * @interface IServiceDescriptorProto
             * @property {string|null} [name] ServiceDescriptorProto name
             * @property {Array.<google.protobuf.IMethodDescriptorProto>|null} [method] ServiceDescriptorProto method
             * @property {google.protobuf.IServiceOptions|null} [options] ServiceDescriptorProto options
             */

            /**
             * Constructs a new ServiceDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a ServiceDescriptorProto.
             * @implements IServiceDescriptorProto
             * @constructor
             * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
             */
            function ServiceDescriptorProto(properties) {
                this.method = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ServiceDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             */
            ServiceDescriptorProto.prototype.name = "";

            /**
             * ServiceDescriptorProto method.
             * @member {Array.<google.protobuf.IMethodDescriptorProto>} method
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             */
            ServiceDescriptorProto.prototype.method = $util.emptyArray;

            /**
             * ServiceDescriptorProto options.
             * @member {google.protobuf.IServiceOptions|null|undefined} options
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             */
            ServiceDescriptorProto.prototype.options = null;

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto instance
             */
            ServiceDescriptorProto.create = function create(properties) {
                return new ServiceDescriptorProto(properties);
            };

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {google.protobuf.IServiceDescriptorProto} message ServiceDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.method != null && message.method.length)
                    for (let i = 0; i < message.method.length; ++i)
                        $root.google.protobuf.MethodDescriptorProto.encode(message.method[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.options != null && message.hasOwnProperty("options"))
                    $root.google.protobuf.ServiceOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        if (!(message.method && message.method.length))
                            message.method = [];
                        message.method.push($root.google.protobuf.MethodDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        message.options = $root.google.protobuf.ServiceOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a ServiceDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ServiceDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.method != null && message.hasOwnProperty("method")) {
                    if (!Array.isArray(message.method))
                        return "method: array expected";
                    for (let i = 0; i < message.method.length; ++i) {
                        let error = $root.google.protobuf.MethodDescriptorProto.verify(message.method[i]);
                        if (error)
                            return "method." + error;
                    }
                }
                if (message.options != null && message.hasOwnProperty("options")) {
                    let error = $root.google.protobuf.ServiceOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            return ServiceDescriptorProto;
        })();

        protobuf.MethodDescriptorProto = (function() {

            /**
             * Properties of a MethodDescriptorProto.
             * @memberof google.protobuf
             * @interface IMethodDescriptorProto
             * @property {string|null} [name] MethodDescriptorProto name
             * @property {string|null} [inputType] MethodDescriptorProto inputType
             * @property {string|null} [outputType] MethodDescriptorProto outputType
             * @property {google.protobuf.IMethodOptions|null} [options] MethodDescriptorProto options
             * @property {boolean|null} [clientStreaming] MethodDescriptorProto clientStreaming
             * @property {boolean|null} [serverStreaming] MethodDescriptorProto serverStreaming
             */

            /**
             * Constructs a new MethodDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a MethodDescriptorProto.
             * @implements IMethodDescriptorProto
             * @constructor
             * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
             */
            function MethodDescriptorProto(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MethodDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.name = "";

            /**
             * MethodDescriptorProto inputType.
             * @member {string} inputType
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.inputType = "";

            /**
             * MethodDescriptorProto outputType.
             * @member {string} outputType
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.outputType = "";

            /**
             * MethodDescriptorProto options.
             * @member {google.protobuf.IMethodOptions|null|undefined} options
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.options = null;

            /**
             * MethodDescriptorProto clientStreaming.
             * @member {boolean} clientStreaming
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.clientStreaming = false;

            /**
             * MethodDescriptorProto serverStreaming.
             * @member {boolean} serverStreaming
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.serverStreaming = false;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto instance
             */
            MethodDescriptorProto.create = function create(properties) {
                return new MethodDescriptorProto(properties);
            };

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {google.protobuf.IMethodDescriptorProto} message MethodDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.inputType != null && message.hasOwnProperty("inputType"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.inputType);
                if (message.outputType != null && message.hasOwnProperty("outputType"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.outputType);
                if (message.options != null && message.hasOwnProperty("options"))
                    $root.google.protobuf.MethodOptions.encode(message.options, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.clientStreaming != null && message.hasOwnProperty("clientStreaming"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.clientStreaming);
                if (message.serverStreaming != null && message.hasOwnProperty("serverStreaming"))
                    writer.uint32(/* id 6, wireType 0 =*/48).bool(message.serverStreaming);
                return writer;
            };

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.inputType = reader.string();
                        break;
                    case 3:
                        message.outputType = reader.string();
                        break;
                    case 4:
                        message.options = $root.google.protobuf.MethodOptions.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.clientStreaming = reader.bool();
                        break;
                    case 6:
                        message.serverStreaming = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a MethodDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MethodDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.inputType != null && message.hasOwnProperty("inputType"))
                    if (!$util.isString(message.inputType))
                        return "inputType: string expected";
                if (message.outputType != null && message.hasOwnProperty("outputType"))
                    if (!$util.isString(message.outputType))
                        return "outputType: string expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    let error = $root.google.protobuf.MethodOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                if (message.clientStreaming != null && message.hasOwnProperty("clientStreaming"))
                    if (typeof message.clientStreaming !== "boolean")
                        return "clientStreaming: boolean expected";
                if (message.serverStreaming != null && message.hasOwnProperty("serverStreaming"))
                    if (typeof message.serverStreaming !== "boolean")
                        return "serverStreaming: boolean expected";
                return null;
            };

            return MethodDescriptorProto;
        })();

        protobuf.FileOptions = (function() {

            /**
             * Properties of a FileOptions.
             * @memberof google.protobuf
             * @interface IFileOptions
             * @property {string|null} [javaPackage] FileOptions javaPackage
             * @property {string|null} [javaOuterClassname] FileOptions javaOuterClassname
             * @property {boolean|null} [javaMultipleFiles] FileOptions javaMultipleFiles
             * @property {boolean|null} [javaGenerateEqualsAndHash] FileOptions javaGenerateEqualsAndHash
             * @property {boolean|null} [javaStringCheckUtf8] FileOptions javaStringCheckUtf8
             * @property {google.protobuf.FileOptions.OptimizeMode|null} [optimizeFor] FileOptions optimizeFor
             * @property {string|null} [goPackage] FileOptions goPackage
             * @property {boolean|null} [ccGenericServices] FileOptions ccGenericServices
             * @property {boolean|null} [javaGenericServices] FileOptions javaGenericServices
             * @property {boolean|null} [pyGenericServices] FileOptions pyGenericServices
             * @property {boolean|null} [deprecated] FileOptions deprecated
             * @property {boolean|null} [ccEnableArenas] FileOptions ccEnableArenas
             * @property {string|null} [objcClassPrefix] FileOptions objcClassPrefix
             * @property {string|null} [csharpNamespace] FileOptions csharpNamespace
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] FileOptions uninterpretedOption
             */

            /**
             * Constructs a new FileOptions.
             * @memberof google.protobuf
             * @classdesc Represents a FileOptions.
             * @implements IFileOptions
             * @constructor
             * @param {google.protobuf.IFileOptions=} [properties] Properties to set
             */
            function FileOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileOptions javaPackage.
             * @member {string} javaPackage
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaPackage = "";

            /**
             * FileOptions javaOuterClassname.
             * @member {string} javaOuterClassname
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaOuterClassname = "";

            /**
             * FileOptions javaMultipleFiles.
             * @member {boolean} javaMultipleFiles
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaMultipleFiles = false;

            /**
             * FileOptions javaGenerateEqualsAndHash.
             * @member {boolean} javaGenerateEqualsAndHash
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaGenerateEqualsAndHash = false;

            /**
             * FileOptions javaStringCheckUtf8.
             * @member {boolean} javaStringCheckUtf8
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaStringCheckUtf8 = false;

            /**
             * FileOptions optimizeFor.
             * @member {google.protobuf.FileOptions.OptimizeMode} optimizeFor
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.optimizeFor = 1;

            /**
             * FileOptions goPackage.
             * @member {string} goPackage
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.goPackage = "";

            /**
             * FileOptions ccGenericServices.
             * @member {boolean} ccGenericServices
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.ccGenericServices = false;

            /**
             * FileOptions javaGenericServices.
             * @member {boolean} javaGenericServices
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaGenericServices = false;

            /**
             * FileOptions pyGenericServices.
             * @member {boolean} pyGenericServices
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.pyGenericServices = false;

            /**
             * FileOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.deprecated = false;

            /**
             * FileOptions ccEnableArenas.
             * @member {boolean} ccEnableArenas
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.ccEnableArenas = false;

            /**
             * FileOptions objcClassPrefix.
             * @member {string} objcClassPrefix
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.objcClassPrefix = "";

            /**
             * FileOptions csharpNamespace.
             * @member {string} csharpNamespace
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.csharpNamespace = "";

            /**
             * FileOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {google.protobuf.IFileOptions=} [properties] Properties to set
             * @returns {google.protobuf.FileOptions} FileOptions instance
             */
            FileOptions.create = function create(properties) {
                return new FileOptions(properties);
            };

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {google.protobuf.IFileOptions} message FileOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.javaPackage != null && message.hasOwnProperty("javaPackage"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.javaPackage);
                if (message.javaOuterClassname != null && message.hasOwnProperty("javaOuterClassname"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.javaOuterClassname);
                if (message.optimizeFor != null && message.hasOwnProperty("optimizeFor"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.optimizeFor);
                if (message.javaMultipleFiles != null && message.hasOwnProperty("javaMultipleFiles"))
                    writer.uint32(/* id 10, wireType 0 =*/80).bool(message.javaMultipleFiles);
                if (message.goPackage != null && message.hasOwnProperty("goPackage"))
                    writer.uint32(/* id 11, wireType 2 =*/90).string(message.goPackage);
                if (message.ccGenericServices != null && message.hasOwnProperty("ccGenericServices"))
                    writer.uint32(/* id 16, wireType 0 =*/128).bool(message.ccGenericServices);
                if (message.javaGenericServices != null && message.hasOwnProperty("javaGenericServices"))
                    writer.uint32(/* id 17, wireType 0 =*/136).bool(message.javaGenericServices);
                if (message.pyGenericServices != null && message.hasOwnProperty("pyGenericServices"))
                    writer.uint32(/* id 18, wireType 0 =*/144).bool(message.pyGenericServices);
                if (message.javaGenerateEqualsAndHash != null && message.hasOwnProperty("javaGenerateEqualsAndHash"))
                    writer.uint32(/* id 20, wireType 0 =*/160).bool(message.javaGenerateEqualsAndHash);
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    writer.uint32(/* id 23, wireType 0 =*/184).bool(message.deprecated);
                if (message.javaStringCheckUtf8 != null && message.hasOwnProperty("javaStringCheckUtf8"))
                    writer.uint32(/* id 27, wireType 0 =*/216).bool(message.javaStringCheckUtf8);
                if (message.ccEnableArenas != null && message.hasOwnProperty("ccEnableArenas"))
                    writer.uint32(/* id 31, wireType 0 =*/248).bool(message.ccEnableArenas);
                if (message.objcClassPrefix != null && message.hasOwnProperty("objcClassPrefix"))
                    writer.uint32(/* id 36, wireType 2 =*/290).string(message.objcClassPrefix);
                if (message.csharpNamespace != null && message.hasOwnProperty("csharpNamespace"))
                    writer.uint32(/* id 37, wireType 2 =*/298).string(message.csharpNamespace);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileOptions} FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.javaPackage = reader.string();
                        break;
                    case 8:
                        message.javaOuterClassname = reader.string();
                        break;
                    case 10:
                        message.javaMultipleFiles = reader.bool();
                        break;
                    case 20:
                        message.javaGenerateEqualsAndHash = reader.bool();
                        break;
                    case 27:
                        message.javaStringCheckUtf8 = reader.bool();
                        break;
                    case 9:
                        message.optimizeFor = reader.int32();
                        break;
                    case 11:
                        message.goPackage = reader.string();
                        break;
                    case 16:
                        message.ccGenericServices = reader.bool();
                        break;
                    case 17:
                        message.javaGenericServices = reader.bool();
                        break;
                    case 18:
                        message.pyGenericServices = reader.bool();
                        break;
                    case 23:
                        message.deprecated = reader.bool();
                        break;
                    case 31:
                        message.ccEnableArenas = reader.bool();
                        break;
                    case 36:
                        message.objcClassPrefix = reader.string();
                        break;
                    case 37:
                        message.csharpNamespace = reader.string();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a FileOptions message.
             * @function verify
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FileOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.javaPackage != null && message.hasOwnProperty("javaPackage"))
                    if (!$util.isString(message.javaPackage))
                        return "javaPackage: string expected";
                if (message.javaOuterClassname != null && message.hasOwnProperty("javaOuterClassname"))
                    if (!$util.isString(message.javaOuterClassname))
                        return "javaOuterClassname: string expected";
                if (message.javaMultipleFiles != null && message.hasOwnProperty("javaMultipleFiles"))
                    if (typeof message.javaMultipleFiles !== "boolean")
                        return "javaMultipleFiles: boolean expected";
                if (message.javaGenerateEqualsAndHash != null && message.hasOwnProperty("javaGenerateEqualsAndHash"))
                    if (typeof message.javaGenerateEqualsAndHash !== "boolean")
                        return "javaGenerateEqualsAndHash: boolean expected";
                if (message.javaStringCheckUtf8 != null && message.hasOwnProperty("javaStringCheckUtf8"))
                    if (typeof message.javaStringCheckUtf8 !== "boolean")
                        return "javaStringCheckUtf8: boolean expected";
                if (message.optimizeFor != null && message.hasOwnProperty("optimizeFor"))
                    switch (message.optimizeFor) {
                    default:
                        return "optimizeFor: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.goPackage != null && message.hasOwnProperty("goPackage"))
                    if (!$util.isString(message.goPackage))
                        return "goPackage: string expected";
                if (message.ccGenericServices != null && message.hasOwnProperty("ccGenericServices"))
                    if (typeof message.ccGenericServices !== "boolean")
                        return "ccGenericServices: boolean expected";
                if (message.javaGenericServices != null && message.hasOwnProperty("javaGenericServices"))
                    if (typeof message.javaGenericServices !== "boolean")
                        return "javaGenericServices: boolean expected";
                if (message.pyGenericServices != null && message.hasOwnProperty("pyGenericServices"))
                    if (typeof message.pyGenericServices !== "boolean")
                        return "pyGenericServices: boolean expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.ccEnableArenas != null && message.hasOwnProperty("ccEnableArenas"))
                    if (typeof message.ccEnableArenas !== "boolean")
                        return "ccEnableArenas: boolean expected";
                if (message.objcClassPrefix != null && message.hasOwnProperty("objcClassPrefix"))
                    if (!$util.isString(message.objcClassPrefix))
                        return "objcClassPrefix: string expected";
                if (message.csharpNamespace != null && message.hasOwnProperty("csharpNamespace"))
                    if (!$util.isString(message.csharpNamespace))
                        return "csharpNamespace: string expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                        let error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            /**
             * OptimizeMode enum.
             * @name google.protobuf.FileOptions.OptimizeMode
             * @enum {string}
             * @property {number} SPEED=1 SPEED value
             * @property {number} CODE_SIZE=2 CODE_SIZE value
             * @property {number} LITE_RUNTIME=3 LITE_RUNTIME value
             */
            FileOptions.OptimizeMode = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "SPEED"] = 1;
                values[valuesById[2] = "CODE_SIZE"] = 2;
                values[valuesById[3] = "LITE_RUNTIME"] = 3;
                return values;
            })();

            return FileOptions;
        })();

        protobuf.MessageOptions = (function() {

            /**
             * Properties of a MessageOptions.
             * @memberof google.protobuf
             * @interface IMessageOptions
             * @property {boolean|null} [messageSetWireFormat] MessageOptions messageSetWireFormat
             * @property {boolean|null} [noStandardDescriptorAccessor] MessageOptions noStandardDescriptorAccessor
             * @property {boolean|null} [deprecated] MessageOptions deprecated
             * @property {boolean|null} [mapEntry] MessageOptions mapEntry
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] MessageOptions uninterpretedOption
             */

            /**
             * Constructs a new MessageOptions.
             * @memberof google.protobuf
             * @classdesc Represents a MessageOptions.
             * @implements IMessageOptions
             * @constructor
             * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
             */
            function MessageOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageOptions messageSetWireFormat.
             * @member {boolean} messageSetWireFormat
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.messageSetWireFormat = false;

            /**
             * MessageOptions noStandardDescriptorAccessor.
             * @member {boolean} noStandardDescriptorAccessor
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.noStandardDescriptorAccessor = false;

            /**
             * MessageOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.deprecated = false;

            /**
             * MessageOptions mapEntry.
             * @member {boolean} mapEntry
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.mapEntry = false;

            /**
             * MessageOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
             * @returns {google.protobuf.MessageOptions} MessageOptions instance
             */
            MessageOptions.create = function create(properties) {
                return new MessageOptions(properties);
            };

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {google.protobuf.IMessageOptions} message MessageOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.messageSetWireFormat != null && message.hasOwnProperty("messageSetWireFormat"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.messageSetWireFormat);
                if (message.noStandardDescriptorAccessor != null && message.hasOwnProperty("noStandardDescriptorAccessor"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.noStandardDescriptorAccessor);
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                if (message.mapEntry != null && message.hasOwnProperty("mapEntry"))
                    writer.uint32(/* id 7, wireType 0 =*/56).bool(message.mapEntry);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MessageOptions} MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MessageOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.messageSetWireFormat = reader.bool();
                        break;
                    case 2:
                        message.noStandardDescriptorAccessor = reader.bool();
                        break;
                    case 3:
                        message.deprecated = reader.bool();
                        break;
                    case 7:
                        message.mapEntry = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a MessageOptions message.
             * @function verify
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.messageSetWireFormat != null && message.hasOwnProperty("messageSetWireFormat"))
                    if (typeof message.messageSetWireFormat !== "boolean")
                        return "messageSetWireFormat: boolean expected";
                if (message.noStandardDescriptorAccessor != null && message.hasOwnProperty("noStandardDescriptorAccessor"))
                    if (typeof message.noStandardDescriptorAccessor !== "boolean")
                        return "noStandardDescriptorAccessor: boolean expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.mapEntry != null && message.hasOwnProperty("mapEntry"))
                    if (typeof message.mapEntry !== "boolean")
                        return "mapEntry: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                        let error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            return MessageOptions;
        })();

        protobuf.FieldOptions = (function() {

            /**
             * Properties of a FieldOptions.
             * @memberof google.protobuf
             * @interface IFieldOptions
             * @property {google.protobuf.FieldOptions.CType|null} [ctype] FieldOptions ctype
             * @property {boolean|null} [packed] FieldOptions packed
             * @property {google.protobuf.FieldOptions.JSType|null} [jstype] FieldOptions jstype
             * @property {boolean|null} [lazy] FieldOptions lazy
             * @property {boolean|null} [deprecated] FieldOptions deprecated
             * @property {boolean|null} [weak] FieldOptions weak
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] FieldOptions uninterpretedOption
             */

            /**
             * Constructs a new FieldOptions.
             * @memberof google.protobuf
             * @classdesc Represents a FieldOptions.
             * @implements IFieldOptions
             * @constructor
             * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
             */
            function FieldOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FieldOptions ctype.
             * @member {google.protobuf.FieldOptions.CType} ctype
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.ctype = 0;

            /**
             * FieldOptions packed.
             * @member {boolean} packed
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.packed = false;

            /**
             * FieldOptions jstype.
             * @member {google.protobuf.FieldOptions.JSType} jstype
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.jstype = 0;

            /**
             * FieldOptions lazy.
             * @member {boolean} lazy
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.lazy = false;

            /**
             * FieldOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.deprecated = false;

            /**
             * FieldOptions weak.
             * @member {boolean} weak
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.weak = false;

            /**
             * FieldOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
             * @returns {google.protobuf.FieldOptions} FieldOptions instance
             */
            FieldOptions.create = function create(properties) {
                return new FieldOptions(properties);
            };

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {google.protobuf.IFieldOptions} message FieldOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ctype != null && message.hasOwnProperty("ctype"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ctype);
                if (message.packed != null && message.hasOwnProperty("packed"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.packed);
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                if (message.lazy != null && message.hasOwnProperty("lazy"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.lazy);
                if (message.jstype != null && message.hasOwnProperty("jstype"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.jstype);
                if (message.weak != null && message.hasOwnProperty("weak"))
                    writer.uint32(/* id 10, wireType 0 =*/80).bool(message.weak);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FieldOptions} FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.ctype = reader.int32();
                        break;
                    case 2:
                        message.packed = reader.bool();
                        break;
                    case 6:
                        message.jstype = reader.int32();
                        break;
                    case 5:
                        message.lazy = reader.bool();
                        break;
                    case 3:
                        message.deprecated = reader.bool();
                        break;
                    case 10:
                        message.weak = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a FieldOptions message.
             * @function verify
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FieldOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.ctype != null && message.hasOwnProperty("ctype"))
                    switch (message.ctype) {
                    default:
                        return "ctype: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.packed != null && message.hasOwnProperty("packed"))
                    if (typeof message.packed !== "boolean")
                        return "packed: boolean expected";
                if (message.jstype != null && message.hasOwnProperty("jstype"))
                    switch (message.jstype) {
                    default:
                        return "jstype: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.lazy != null && message.hasOwnProperty("lazy"))
                    if (typeof message.lazy !== "boolean")
                        return "lazy: boolean expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.weak != null && message.hasOwnProperty("weak"))
                    if (typeof message.weak !== "boolean")
                        return "weak: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                        let error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            /**
             * CType enum.
             * @name google.protobuf.FieldOptions.CType
             * @enum {string}
             * @property {number} STRING=0 STRING value
             * @property {number} CORD=1 CORD value
             * @property {number} STRING_PIECE=2 STRING_PIECE value
             */
            FieldOptions.CType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "STRING"] = 0;
                values[valuesById[1] = "CORD"] = 1;
                values[valuesById[2] = "STRING_PIECE"] = 2;
                return values;
            })();

            /**
             * JSType enum.
             * @name google.protobuf.FieldOptions.JSType
             * @enum {string}
             * @property {number} JS_NORMAL=0 JS_NORMAL value
             * @property {number} JS_STRING=1 JS_STRING value
             * @property {number} JS_NUMBER=2 JS_NUMBER value
             */
            FieldOptions.JSType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "JS_NORMAL"] = 0;
                values[valuesById[1] = "JS_STRING"] = 1;
                values[valuesById[2] = "JS_NUMBER"] = 2;
                return values;
            })();

            return FieldOptions;
        })();

        protobuf.OneofOptions = (function() {

            /**
             * Properties of an OneofOptions.
             * @memberof google.protobuf
             * @interface IOneofOptions
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] OneofOptions uninterpretedOption
             */

            /**
             * Constructs a new OneofOptions.
             * @memberof google.protobuf
             * @classdesc Represents an OneofOptions.
             * @implements IOneofOptions
             * @constructor
             * @param {google.protobuf.IOneofOptions=} [properties] Properties to set
             */
            function OneofOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OneofOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.OneofOptions
             * @instance
             */
            OneofOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {google.protobuf.IOneofOptions=} [properties] Properties to set
             * @returns {google.protobuf.OneofOptions} OneofOptions instance
             */
            OneofOptions.create = function create(properties) {
                return new OneofOptions(properties);
            };

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {google.protobuf.IOneofOptions} message OneofOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.OneofOptions} OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies an OneofOptions message.
             * @function verify
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OneofOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                        let error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            return OneofOptions;
        })();

        protobuf.EnumOptions = (function() {

            /**
             * Properties of an EnumOptions.
             * @memberof google.protobuf
             * @interface IEnumOptions
             * @property {boolean|null} [allowAlias] EnumOptions allowAlias
             * @property {boolean|null} [deprecated] EnumOptions deprecated
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] EnumOptions uninterpretedOption
             */

            /**
             * Constructs a new EnumOptions.
             * @memberof google.protobuf
             * @classdesc Represents an EnumOptions.
             * @implements IEnumOptions
             * @constructor
             * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
             */
            function EnumOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumOptions allowAlias.
             * @member {boolean} allowAlias
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype.allowAlias = false;

            /**
             * EnumOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype.deprecated = false;

            /**
             * EnumOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
             * @returns {google.protobuf.EnumOptions} EnumOptions instance
             */
            EnumOptions.create = function create(properties) {
                return new EnumOptions(properties);
            };

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {google.protobuf.IEnumOptions} message EnumOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.allowAlias != null && message.hasOwnProperty("allowAlias"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.allowAlias);
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumOptions} EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2:
                        message.allowAlias = reader.bool();
                        break;
                    case 3:
                        message.deprecated = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies an EnumOptions message.
             * @function verify
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnumOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.allowAlias != null && message.hasOwnProperty("allowAlias"))
                    if (typeof message.allowAlias !== "boolean")
                        return "allowAlias: boolean expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                        let error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            return EnumOptions;
        })();

        protobuf.EnumValueOptions = (function() {

            /**
             * Properties of an EnumValueOptions.
             * @memberof google.protobuf
             * @interface IEnumValueOptions
             * @property {boolean|null} [deprecated] EnumValueOptions deprecated
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] EnumValueOptions uninterpretedOption
             */

            /**
             * Constructs a new EnumValueOptions.
             * @memberof google.protobuf
             * @classdesc Represents an EnumValueOptions.
             * @implements IEnumValueOptions
             * @constructor
             * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
             */
            function EnumValueOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumValueOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.EnumValueOptions
             * @instance
             */
            EnumValueOptions.prototype.deprecated = false;

            /**
             * EnumValueOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.EnumValueOptions
             * @instance
             */
            EnumValueOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions instance
             */
            EnumValueOptions.create = function create(properties) {
                return new EnumValueOptions(properties);
            };

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {google.protobuf.IEnumValueOptions} message EnumValueOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.deprecated);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.deprecated = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies an EnumValueOptions message.
             * @function verify
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnumValueOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                        let error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            return EnumValueOptions;
        })();

        protobuf.ServiceOptions = (function() {

            /**
             * Properties of a ServiceOptions.
             * @memberof google.protobuf
             * @interface IServiceOptions
             * @property {boolean|null} [deprecated] ServiceOptions deprecated
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] ServiceOptions uninterpretedOption
             */

            /**
             * Constructs a new ServiceOptions.
             * @memberof google.protobuf
             * @classdesc Represents a ServiceOptions.
             * @implements IServiceOptions
             * @constructor
             * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
             */
            function ServiceOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ServiceOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.ServiceOptions
             * @instance
             */
            ServiceOptions.prototype.deprecated = false;

            /**
             * ServiceOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.ServiceOptions
             * @instance
             */
            ServiceOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
             * @returns {google.protobuf.ServiceOptions} ServiceOptions instance
             */
            ServiceOptions.create = function create(properties) {
                return new ServiceOptions(properties);
            };

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {google.protobuf.IServiceOptions} message ServiceOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.ServiceOptions} ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 33:
                        message.deprecated = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a ServiceOptions message.
             * @function verify
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ServiceOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                        let error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            return ServiceOptions;
        })();

        protobuf.MethodOptions = (function() {

            /**
             * Properties of a MethodOptions.
             * @memberof google.protobuf
             * @interface IMethodOptions
             * @property {boolean|null} [deprecated] MethodOptions deprecated
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] MethodOptions uninterpretedOption
             * @property {google.api.IHttpRule|null} [".google.api.http"] MethodOptions .google.api.http
             */

            /**
             * Constructs a new MethodOptions.
             * @memberof google.protobuf
             * @classdesc Represents a MethodOptions.
             * @implements IMethodOptions
             * @constructor
             * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
             */
            function MethodOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MethodOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.MethodOptions
             * @instance
             */
            MethodOptions.prototype.deprecated = false;

            /**
             * MethodOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.MethodOptions
             * @instance
             */
            MethodOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * MethodOptions .google.api.http.
             * @member {google.api.IHttpRule|null|undefined} .google.api.http
             * @memberof google.protobuf.MethodOptions
             * @instance
             */
            MethodOptions.prototype[".google.api.http"] = null;

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
             * @returns {google.protobuf.MethodOptions} MethodOptions instance
             */
            MethodOptions.create = function create(properties) {
                return new MethodOptions(properties);
            };

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {google.protobuf.IMethodOptions} message MethodOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                if (message[".google.api.http"] != null && message.hasOwnProperty(".google.api.http"))
                    $root.google.api.HttpRule.encode(message[".google.api.http"], writer.uint32(/* id 72295728, wireType 2 =*/578365826).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MethodOptions} MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 33:
                        message.deprecated = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    case 72295728:
                        message[".google.api.http"] = $root.google.api.HttpRule.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a MethodOptions message.
             * @function verify
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MethodOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                        let error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                if (message[".google.api.http"] != null && message.hasOwnProperty(".google.api.http")) {
                    let error = $root.google.api.HttpRule.verify(message[".google.api.http"]);
                    if (error)
                        return ".google.api.http." + error;
                }
                return null;
            };

            return MethodOptions;
        })();

        protobuf.UninterpretedOption = (function() {

            /**
             * Properties of an UninterpretedOption.
             * @memberof google.protobuf
             * @interface IUninterpretedOption
             * @property {Array.<google.protobuf.UninterpretedOption.INamePart>|null} [name] UninterpretedOption name
             * @property {string|null} [identifierValue] UninterpretedOption identifierValue
             * @property {Long|null} [positiveIntValue] UninterpretedOption positiveIntValue
             * @property {Long|null} [negativeIntValue] UninterpretedOption negativeIntValue
             * @property {number|null} [doubleValue] UninterpretedOption doubleValue
             * @property {Uint8Array|null} [stringValue] UninterpretedOption stringValue
             * @property {string|null} [aggregateValue] UninterpretedOption aggregateValue
             */

            /**
             * Constructs a new UninterpretedOption.
             * @memberof google.protobuf
             * @classdesc Represents an UninterpretedOption.
             * @implements IUninterpretedOption
             * @constructor
             * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
             */
            function UninterpretedOption(properties) {
                this.name = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UninterpretedOption name.
             * @member {Array.<google.protobuf.UninterpretedOption.INamePart>} name
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.name = $util.emptyArray;

            /**
             * UninterpretedOption identifierValue.
             * @member {string} identifierValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.identifierValue = "";

            /**
             * UninterpretedOption positiveIntValue.
             * @member {Long} positiveIntValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.positiveIntValue = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * UninterpretedOption negativeIntValue.
             * @member {Long} negativeIntValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.negativeIntValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * UninterpretedOption doubleValue.
             * @member {number} doubleValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.doubleValue = 0;

            /**
             * UninterpretedOption stringValue.
             * @member {Uint8Array} stringValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.stringValue = $util.newBuffer([]);

            /**
             * UninterpretedOption aggregateValue.
             * @member {string} aggregateValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.aggregateValue = "";

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @function create
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption instance
             */
            UninterpretedOption.create = function create(properties) {
                return new UninterpretedOption(properties);
            };

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {google.protobuf.IUninterpretedOption} message UninterpretedOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UninterpretedOption.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.name.length)
                    for (let i = 0; i < message.name.length; ++i)
                        $root.google.protobuf.UninterpretedOption.NamePart.encode(message.name[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.identifierValue != null && message.hasOwnProperty("identifierValue"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.identifierValue);
                if (message.positiveIntValue != null && message.hasOwnProperty("positiveIntValue"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.positiveIntValue);
                if (message.negativeIntValue != null && message.hasOwnProperty("negativeIntValue"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.negativeIntValue);
                if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                    writer.uint32(/* id 6, wireType 1 =*/49).double(message.doubleValue);
                if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                    writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.stringValue);
                if (message.aggregateValue != null && message.hasOwnProperty("aggregateValue"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.aggregateValue);
                return writer;
            };

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UninterpretedOption.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2:
                        if (!(message.name && message.name.length))
                            message.name = [];
                        message.name.push($root.google.protobuf.UninterpretedOption.NamePart.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        message.identifierValue = reader.string();
                        break;
                    case 4:
                        message.positiveIntValue = reader.uint64();
                        break;
                    case 5:
                        message.negativeIntValue = reader.int64();
                        break;
                    case 6:
                        message.doubleValue = reader.double();
                        break;
                    case 7:
                        message.stringValue = reader.bytes();
                        break;
                    case 8:
                        message.aggregateValue = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies an UninterpretedOption message.
             * @function verify
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UninterpretedOption.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name")) {
                    if (!Array.isArray(message.name))
                        return "name: array expected";
                    for (let i = 0; i < message.name.length; ++i) {
                        let error = $root.google.protobuf.UninterpretedOption.NamePart.verify(message.name[i]);
                        if (error)
                            return "name." + error;
                    }
                }
                if (message.identifierValue != null && message.hasOwnProperty("identifierValue"))
                    if (!$util.isString(message.identifierValue))
                        return "identifierValue: string expected";
                if (message.positiveIntValue != null && message.hasOwnProperty("positiveIntValue"))
                    if (!$util.isInteger(message.positiveIntValue) && !(message.positiveIntValue && $util.isInteger(message.positiveIntValue.low) && $util.isInteger(message.positiveIntValue.high)))
                        return "positiveIntValue: integer|Long expected";
                if (message.negativeIntValue != null && message.hasOwnProperty("negativeIntValue"))
                    if (!$util.isInteger(message.negativeIntValue) && !(message.negativeIntValue && $util.isInteger(message.negativeIntValue.low) && $util.isInteger(message.negativeIntValue.high)))
                        return "negativeIntValue: integer|Long expected";
                if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                    if (typeof message.doubleValue !== "number")
                        return "doubleValue: number expected";
                if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                    if (!(message.stringValue && typeof message.stringValue.length === "number" || $util.isString(message.stringValue)))
                        return "stringValue: buffer expected";
                if (message.aggregateValue != null && message.hasOwnProperty("aggregateValue"))
                    if (!$util.isString(message.aggregateValue))
                        return "aggregateValue: string expected";
                return null;
            };

            UninterpretedOption.NamePart = (function() {

                /**
                 * Properties of a NamePart.
                 * @memberof google.protobuf.UninterpretedOption
                 * @interface INamePart
                 * @property {string} namePart NamePart namePart
                 * @property {boolean} isExtension NamePart isExtension
                 */

                /**
                 * Constructs a new NamePart.
                 * @memberof google.protobuf.UninterpretedOption
                 * @classdesc Represents a NamePart.
                 * @implements INamePart
                 * @constructor
                 * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                 */
                function NamePart(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * NamePart namePart.
                 * @member {string} namePart
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @instance
                 */
                NamePart.prototype.namePart = "";

                /**
                 * NamePart isExtension.
                 * @member {boolean} isExtension
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @instance
                 */
                NamePart.prototype.isExtension = false;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart instance
                 */
                NamePart.create = function create(properties) {
                    return new NamePart(properties);
                };

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {google.protobuf.UninterpretedOption.INamePart} message NamePart message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NamePart.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.namePart);
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isExtension);
                    return writer;
                };

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NamePart.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption.NamePart();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.namePart = reader.string();
                            break;
                        case 2:
                            message.isExtension = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    if (!message.hasOwnProperty("namePart"))
                        throw $util.ProtocolError("missing required 'namePart'", { instance: message });
                    if (!message.hasOwnProperty("isExtension"))
                        throw $util.ProtocolError("missing required 'isExtension'", { instance: message });
                    return message;
                };

                /**
                 * Verifies a NamePart message.
                 * @function verify
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                NamePart.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isString(message.namePart))
                        return "namePart: string expected";
                    if (typeof message.isExtension !== "boolean")
                        return "isExtension: boolean expected";
                    return null;
                };

                return NamePart;
            })();

            return UninterpretedOption;
        })();

        protobuf.SourceCodeInfo = (function() {

            /**
             * Properties of a SourceCodeInfo.
             * @memberof google.protobuf
             * @interface ISourceCodeInfo
             * @property {Array.<google.protobuf.SourceCodeInfo.ILocation>|null} [location] SourceCodeInfo location
             */

            /**
             * Constructs a new SourceCodeInfo.
             * @memberof google.protobuf
             * @classdesc Represents a SourceCodeInfo.
             * @implements ISourceCodeInfo
             * @constructor
             * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
             */
            function SourceCodeInfo(properties) {
                this.location = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SourceCodeInfo location.
             * @member {Array.<google.protobuf.SourceCodeInfo.ILocation>} location
             * @memberof google.protobuf.SourceCodeInfo
             * @instance
             */
            SourceCodeInfo.prototype.location = $util.emptyArray;

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @function create
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo instance
             */
            SourceCodeInfo.create = function create(properties) {
                return new SourceCodeInfo(properties);
            };

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {google.protobuf.ISourceCodeInfo} message SourceCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SourceCodeInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.location != null && message.location.length)
                    for (let i = 0; i < message.location.length; ++i)
                        $root.google.protobuf.SourceCodeInfo.Location.encode(message.location[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SourceCodeInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.location && message.location.length))
                            message.location = [];
                        message.location.push($root.google.protobuf.SourceCodeInfo.Location.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a SourceCodeInfo message.
             * @function verify
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SourceCodeInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.location != null && message.hasOwnProperty("location")) {
                    if (!Array.isArray(message.location))
                        return "location: array expected";
                    for (let i = 0; i < message.location.length; ++i) {
                        let error = $root.google.protobuf.SourceCodeInfo.Location.verify(message.location[i]);
                        if (error)
                            return "location." + error;
                    }
                }
                return null;
            };

            SourceCodeInfo.Location = (function() {

                /**
                 * Properties of a Location.
                 * @memberof google.protobuf.SourceCodeInfo
                 * @interface ILocation
                 * @property {Array.<number>|null} [path] Location path
                 * @property {Array.<number>|null} [span] Location span
                 * @property {string|null} [leadingComments] Location leadingComments
                 * @property {string|null} [trailingComments] Location trailingComments
                 * @property {Array.<string>|null} [leadingDetachedComments] Location leadingDetachedComments
                 */

                /**
                 * Constructs a new Location.
                 * @memberof google.protobuf.SourceCodeInfo
                 * @classdesc Represents a Location.
                 * @implements ILocation
                 * @constructor
                 * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                 */
                function Location(properties) {
                    this.path = [];
                    this.span = [];
                    this.leadingDetachedComments = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Location path.
                 * @member {Array.<number>} path
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.path = $util.emptyArray;

                /**
                 * Location span.
                 * @member {Array.<number>} span
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.span = $util.emptyArray;

                /**
                 * Location leadingComments.
                 * @member {string} leadingComments
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.leadingComments = "";

                /**
                 * Location trailingComments.
                 * @member {string} trailingComments
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.trailingComments = "";

                /**
                 * Location leadingDetachedComments.
                 * @member {Array.<string>} leadingDetachedComments
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.leadingDetachedComments = $util.emptyArray;

                /**
                 * Creates a new Location instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location instance
                 */
                Location.create = function create(properties) {
                    return new Location(properties);
                };

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {google.protobuf.SourceCodeInfo.ILocation} message Location message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Location.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.path != null && message.path.length) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork();
                        for (let i = 0; i < message.path.length; ++i)
                            writer.int32(message.path[i]);
                        writer.ldelim();
                    }
                    if (message.span != null && message.span.length) {
                        writer.uint32(/* id 2, wireType 2 =*/18).fork();
                        for (let i = 0; i < message.span.length; ++i)
                            writer.int32(message.span[i]);
                        writer.ldelim();
                    }
                    if (message.leadingComments != null && message.hasOwnProperty("leadingComments"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.leadingComments);
                    if (message.trailingComments != null && message.hasOwnProperty("trailingComments"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.trailingComments);
                    if (message.leadingDetachedComments != null && message.leadingDetachedComments.length)
                        for (let i = 0; i < message.leadingDetachedComments.length; ++i)
                            writer.uint32(/* id 6, wireType 2 =*/50).string(message.leadingDetachedComments[i]);
                    return writer;
                };

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Location.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo.Location();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.path && message.path.length))
                                message.path = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.path.push(reader.int32());
                            } else
                                message.path.push(reader.int32());
                            break;
                        case 2:
                            if (!(message.span && message.span.length))
                                message.span = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.span.push(reader.int32());
                            } else
                                message.span.push(reader.int32());
                            break;
                        case 3:
                            message.leadingComments = reader.string();
                            break;
                        case 4:
                            message.trailingComments = reader.string();
                            break;
                        case 6:
                            if (!(message.leadingDetachedComments && message.leadingDetachedComments.length))
                                message.leadingDetachedComments = [];
                            message.leadingDetachedComments.push(reader.string());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Verifies a Location message.
                 * @function verify
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Location.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.path != null && message.hasOwnProperty("path")) {
                        if (!Array.isArray(message.path))
                            return "path: array expected";
                        for (let i = 0; i < message.path.length; ++i)
                            if (!$util.isInteger(message.path[i]))
                                return "path: integer[] expected";
                    }
                    if (message.span != null && message.hasOwnProperty("span")) {
                        if (!Array.isArray(message.span))
                            return "span: array expected";
                        for (let i = 0; i < message.span.length; ++i)
                            if (!$util.isInteger(message.span[i]))
                                return "span: integer[] expected";
                    }
                    if (message.leadingComments != null && message.hasOwnProperty("leadingComments"))
                        if (!$util.isString(message.leadingComments))
                            return "leadingComments: string expected";
                    if (message.trailingComments != null && message.hasOwnProperty("trailingComments"))
                        if (!$util.isString(message.trailingComments))
                            return "trailingComments: string expected";
                    if (message.leadingDetachedComments != null && message.hasOwnProperty("leadingDetachedComments")) {
                        if (!Array.isArray(message.leadingDetachedComments))
                            return "leadingDetachedComments: array expected";
                        for (let i = 0; i < message.leadingDetachedComments.length; ++i)
                            if (!$util.isString(message.leadingDetachedComments[i]))
                                return "leadingDetachedComments: string[] expected";
                    }
                    return null;
                };

                return Location;
            })();

            return SourceCodeInfo;
        })();

        protobuf.GeneratedCodeInfo = (function() {

            /**
             * Properties of a GeneratedCodeInfo.
             * @memberof google.protobuf
             * @interface IGeneratedCodeInfo
             * @property {Array.<google.protobuf.GeneratedCodeInfo.IAnnotation>|null} [annotation] GeneratedCodeInfo annotation
             */

            /**
             * Constructs a new GeneratedCodeInfo.
             * @memberof google.protobuf
             * @classdesc Represents a GeneratedCodeInfo.
             * @implements IGeneratedCodeInfo
             * @constructor
             * @param {google.protobuf.IGeneratedCodeInfo=} [properties] Properties to set
             */
            function GeneratedCodeInfo(properties) {
                this.annotation = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GeneratedCodeInfo annotation.
             * @member {Array.<google.protobuf.GeneratedCodeInfo.IAnnotation>} annotation
             * @memberof google.protobuf.GeneratedCodeInfo
             * @instance
             */
            GeneratedCodeInfo.prototype.annotation = $util.emptyArray;

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @function create
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {google.protobuf.IGeneratedCodeInfo=} [properties] Properties to set
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo instance
             */
            GeneratedCodeInfo.create = function create(properties) {
                return new GeneratedCodeInfo(properties);
            };

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {google.protobuf.IGeneratedCodeInfo} message GeneratedCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GeneratedCodeInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.annotation != null && message.annotation.length)
                    for (let i = 0; i < message.annotation.length; ++i)
                        $root.google.protobuf.GeneratedCodeInfo.Annotation.encode(message.annotation[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GeneratedCodeInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.annotation && message.annotation.length))
                            message.annotation = [];
                        message.annotation.push($root.google.protobuf.GeneratedCodeInfo.Annotation.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a GeneratedCodeInfo message.
             * @function verify
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GeneratedCodeInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.annotation != null && message.hasOwnProperty("annotation")) {
                    if (!Array.isArray(message.annotation))
                        return "annotation: array expected";
                    for (let i = 0; i < message.annotation.length; ++i) {
                        let error = $root.google.protobuf.GeneratedCodeInfo.Annotation.verify(message.annotation[i]);
                        if (error)
                            return "annotation." + error;
                    }
                }
                return null;
            };

            GeneratedCodeInfo.Annotation = (function() {

                /**
                 * Properties of an Annotation.
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @interface IAnnotation
                 * @property {Array.<number>|null} [path] Annotation path
                 * @property {string|null} [sourceFile] Annotation sourceFile
                 * @property {number|null} [begin] Annotation begin
                 * @property {number|null} [end] Annotation end
                 */

                /**
                 * Constructs a new Annotation.
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @classdesc Represents an Annotation.
                 * @implements IAnnotation
                 * @constructor
                 * @param {google.protobuf.GeneratedCodeInfo.IAnnotation=} [properties] Properties to set
                 */
                function Annotation(properties) {
                    this.path = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Annotation path.
                 * @member {Array.<number>} path
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.path = $util.emptyArray;

                /**
                 * Annotation sourceFile.
                 * @member {string} sourceFile
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.sourceFile = "";

                /**
                 * Annotation begin.
                 * @member {number} begin
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.begin = 0;

                /**
                 * Annotation end.
                 * @member {number} end
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.end = 0;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo.IAnnotation=} [properties] Properties to set
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation instance
                 */
                Annotation.create = function create(properties) {
                    return new Annotation(properties);
                };

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo.IAnnotation} message Annotation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Annotation.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.path != null && message.path.length) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork();
                        for (let i = 0; i < message.path.length; ++i)
                            writer.int32(message.path[i]);
                        writer.ldelim();
                    }
                    if (message.sourceFile != null && message.hasOwnProperty("sourceFile"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.sourceFile);
                    if (message.begin != null && message.hasOwnProperty("begin"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.begin);
                    if (message.end != null && message.hasOwnProperty("end"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.end);
                    return writer;
                };

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Annotation.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.path && message.path.length))
                                message.path = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.path.push(reader.int32());
                            } else
                                message.path.push(reader.int32());
                            break;
                        case 2:
                            message.sourceFile = reader.string();
                            break;
                        case 3:
                            message.begin = reader.int32();
                            break;
                        case 4:
                            message.end = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Verifies an Annotation message.
                 * @function verify
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Annotation.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.path != null && message.hasOwnProperty("path")) {
                        if (!Array.isArray(message.path))
                            return "path: array expected";
                        for (let i = 0; i < message.path.length; ++i)
                            if (!$util.isInteger(message.path[i]))
                                return "path: integer[] expected";
                    }
                    if (message.sourceFile != null && message.hasOwnProperty("sourceFile"))
                        if (!$util.isString(message.sourceFile))
                            return "sourceFile: string expected";
                    if (message.begin != null && message.hasOwnProperty("begin"))
                        if (!$util.isInteger(message.begin))
                            return "begin: integer expected";
                    if (message.end != null && message.hasOwnProperty("end"))
                        if (!$util.isInteger(message.end))
                            return "end: integer expected";
                    return null;
                };

                return Annotation;
            })();

            return GeneratedCodeInfo;
        })();

        return protobuf;
    })();

    google.api = (function() {

        /**
         * Namespace api.
         * @memberof google
         * @namespace
         */
        const api = {};

        api.Http = (function() {

            /**
             * Properties of a Http.
             * @memberof google.api
             * @interface IHttp
             * @property {Array.<google.api.IHttpRule>|null} [rules] Http rules
             */

            /**
             * Constructs a new Http.
             * @memberof google.api
             * @classdesc Represents a Http.
             * @implements IHttp
             * @constructor
             * @param {google.api.IHttp=} [properties] Properties to set
             */
            function Http(properties) {
                this.rules = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Http rules.
             * @member {Array.<google.api.IHttpRule>} rules
             * @memberof google.api.Http
             * @instance
             */
            Http.prototype.rules = $util.emptyArray;

            /**
             * Creates a new Http instance using the specified properties.
             * @function create
             * @memberof google.api.Http
             * @static
             * @param {google.api.IHttp=} [properties] Properties to set
             * @returns {google.api.Http} Http instance
             */
            Http.create = function create(properties) {
                return new Http(properties);
            };

            /**
             * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @function encode
             * @memberof google.api.Http
             * @static
             * @param {google.api.IHttp} message Http message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Http.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.rules != null && message.rules.length)
                    for (let i = 0; i < message.rules.length; ++i)
                        $root.google.api.HttpRule.encode(message.rules[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @function decode
             * @memberof google.api.Http
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.api.Http} Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Http.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.Http();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.rules && message.rules.length))
                            message.rules = [];
                        message.rules.push($root.google.api.HttpRule.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a Http message.
             * @function verify
             * @memberof google.api.Http
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Http.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.rules != null && message.hasOwnProperty("rules")) {
                    if (!Array.isArray(message.rules))
                        return "rules: array expected";
                    for (let i = 0; i < message.rules.length; ++i) {
                        let error = $root.google.api.HttpRule.verify(message.rules[i]);
                        if (error)
                            return "rules." + error;
                    }
                }
                return null;
            };

            return Http;
        })();

        api.HttpRule = (function() {

            /**
             * Properties of a HttpRule.
             * @memberof google.api
             * @interface IHttpRule
             * @property {string|null} [get] HttpRule get
             * @property {string|null} [put] HttpRule put
             * @property {string|null} [post] HttpRule post
             * @property {string|null} ["delete"] HttpRule delete
             * @property {string|null} [patch] HttpRule patch
             * @property {google.api.ICustomHttpPattern|null} [custom] HttpRule custom
             * @property {string|null} [selector] HttpRule selector
             * @property {string|null} [body] HttpRule body
             * @property {Array.<google.api.IHttpRule>|null} [additionalBindings] HttpRule additionalBindings
             */

            /**
             * Constructs a new HttpRule.
             * @memberof google.api
             * @classdesc Represents a HttpRule.
             * @implements IHttpRule
             * @constructor
             * @param {google.api.IHttpRule=} [properties] Properties to set
             */
            function HttpRule(properties) {
                this.additionalBindings = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * HttpRule get.
             * @member {string} get
             * @memberof google.api.HttpRule
             * @instance
             */
            HttpRule.prototype.get = "";

            /**
             * HttpRule put.
             * @member {string} put
             * @memberof google.api.HttpRule
             * @instance
             */
            HttpRule.prototype.put = "";

            /**
             * HttpRule post.
             * @member {string} post
             * @memberof google.api.HttpRule
             * @instance
             */
            HttpRule.prototype.post = "";

            /**
             * HttpRule delete.
             * @member {string} delete
             * @memberof google.api.HttpRule
             * @instance
             */
            HttpRule.prototype["delete"] = "";

            /**
             * HttpRule patch.
             * @member {string} patch
             * @memberof google.api.HttpRule
             * @instance
             */
            HttpRule.prototype.patch = "";

            /**
             * HttpRule custom.
             * @member {google.api.ICustomHttpPattern|null|undefined} custom
             * @memberof google.api.HttpRule
             * @instance
             */
            HttpRule.prototype.custom = null;

            /**
             * HttpRule selector.
             * @member {string} selector
             * @memberof google.api.HttpRule
             * @instance
             */
            HttpRule.prototype.selector = "";

            /**
             * HttpRule body.
             * @member {string} body
             * @memberof google.api.HttpRule
             * @instance
             */
            HttpRule.prototype.body = "";

            /**
             * HttpRule additionalBindings.
             * @member {Array.<google.api.IHttpRule>} additionalBindings
             * @memberof google.api.HttpRule
             * @instance
             */
            HttpRule.prototype.additionalBindings = $util.emptyArray;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * HttpRule pattern.
             * @member {"get"|"put"|"post"|"delete"|"patch"|"custom"|undefined} pattern
             * @memberof google.api.HttpRule
             * @instance
             */
            Object.defineProperty(HttpRule.prototype, "pattern", {
                get: $util.oneOfGetter($oneOfFields = ["get", "put", "post", "delete", "patch", "custom"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new HttpRule instance using the specified properties.
             * @function create
             * @memberof google.api.HttpRule
             * @static
             * @param {google.api.IHttpRule=} [properties] Properties to set
             * @returns {google.api.HttpRule} HttpRule instance
             */
            HttpRule.create = function create(properties) {
                return new HttpRule(properties);
            };

            /**
             * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @function encode
             * @memberof google.api.HttpRule
             * @static
             * @param {google.api.IHttpRule} message HttpRule message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HttpRule.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.selector != null && message.hasOwnProperty("selector"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.selector);
                if (message.get != null && message.hasOwnProperty("get"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.get);
                if (message.put != null && message.hasOwnProperty("put"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.put);
                if (message.post != null && message.hasOwnProperty("post"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.post);
                if (message["delete"] != null && message.hasOwnProperty("delete"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message["delete"]);
                if (message.patch != null && message.hasOwnProperty("patch"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.patch);
                if (message.body != null && message.hasOwnProperty("body"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.body);
                if (message.custom != null && message.hasOwnProperty("custom"))
                    $root.google.api.CustomHttpPattern.encode(message.custom, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.additionalBindings != null && message.additionalBindings.length)
                    for (let i = 0; i < message.additionalBindings.length; ++i)
                        $root.google.api.HttpRule.encode(message.additionalBindings[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a HttpRule message from the specified reader or buffer.
             * @function decode
             * @memberof google.api.HttpRule
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.api.HttpRule} HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HttpRule.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.HttpRule();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2:
                        message.get = reader.string();
                        break;
                    case 3:
                        message.put = reader.string();
                        break;
                    case 4:
                        message.post = reader.string();
                        break;
                    case 5:
                        message["delete"] = reader.string();
                        break;
                    case 6:
                        message.patch = reader.string();
                        break;
                    case 8:
                        message.custom = $root.google.api.CustomHttpPattern.decode(reader, reader.uint32());
                        break;
                    case 1:
                        message.selector = reader.string();
                        break;
                    case 7:
                        message.body = reader.string();
                        break;
                    case 11:
                        if (!(message.additionalBindings && message.additionalBindings.length))
                            message.additionalBindings = [];
                        message.additionalBindings.push($root.google.api.HttpRule.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a HttpRule message.
             * @function verify
             * @memberof google.api.HttpRule
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            HttpRule.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.get != null && message.hasOwnProperty("get")) {
                    properties.pattern = 1;
                    if (!$util.isString(message.get))
                        return "get: string expected";
                }
                if (message.put != null && message.hasOwnProperty("put")) {
                    if (properties.pattern === 1)
                        return "pattern: multiple values";
                    properties.pattern = 1;
                    if (!$util.isString(message.put))
                        return "put: string expected";
                }
                if (message.post != null && message.hasOwnProperty("post")) {
                    if (properties.pattern === 1)
                        return "pattern: multiple values";
                    properties.pattern = 1;
                    if (!$util.isString(message.post))
                        return "post: string expected";
                }
                if (message["delete"] != null && message.hasOwnProperty("delete")) {
                    if (properties.pattern === 1)
                        return "pattern: multiple values";
                    properties.pattern = 1;
                    if (!$util.isString(message["delete"]))
                        return "delete: string expected";
                }
                if (message.patch != null && message.hasOwnProperty("patch")) {
                    if (properties.pattern === 1)
                        return "pattern: multiple values";
                    properties.pattern = 1;
                    if (!$util.isString(message.patch))
                        return "patch: string expected";
                }
                if (message.custom != null && message.hasOwnProperty("custom")) {
                    if (properties.pattern === 1)
                        return "pattern: multiple values";
                    properties.pattern = 1;
                    {
                        let error = $root.google.api.CustomHttpPattern.verify(message.custom);
                        if (error)
                            return "custom." + error;
                    }
                }
                if (message.selector != null && message.hasOwnProperty("selector"))
                    if (!$util.isString(message.selector))
                        return "selector: string expected";
                if (message.body != null && message.hasOwnProperty("body"))
                    if (!$util.isString(message.body))
                        return "body: string expected";
                if (message.additionalBindings != null && message.hasOwnProperty("additionalBindings")) {
                    if (!Array.isArray(message.additionalBindings))
                        return "additionalBindings: array expected";
                    for (let i = 0; i < message.additionalBindings.length; ++i) {
                        let error = $root.google.api.HttpRule.verify(message.additionalBindings[i]);
                        if (error)
                            return "additionalBindings." + error;
                    }
                }
                return null;
            };

            return HttpRule;
        })();

        api.CustomHttpPattern = (function() {

            /**
             * Properties of a CustomHttpPattern.
             * @memberof google.api
             * @interface ICustomHttpPattern
             * @property {string|null} [kind] CustomHttpPattern kind
             * @property {string|null} [path] CustomHttpPattern path
             */

            /**
             * Constructs a new CustomHttpPattern.
             * @memberof google.api
             * @classdesc Represents a CustomHttpPattern.
             * @implements ICustomHttpPattern
             * @constructor
             * @param {google.api.ICustomHttpPattern=} [properties] Properties to set
             */
            function CustomHttpPattern(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CustomHttpPattern kind.
             * @member {string} kind
             * @memberof google.api.CustomHttpPattern
             * @instance
             */
            CustomHttpPattern.prototype.kind = "";

            /**
             * CustomHttpPattern path.
             * @member {string} path
             * @memberof google.api.CustomHttpPattern
             * @instance
             */
            CustomHttpPattern.prototype.path = "";

            /**
             * Creates a new CustomHttpPattern instance using the specified properties.
             * @function create
             * @memberof google.api.CustomHttpPattern
             * @static
             * @param {google.api.ICustomHttpPattern=} [properties] Properties to set
             * @returns {google.api.CustomHttpPattern} CustomHttpPattern instance
             */
            CustomHttpPattern.create = function create(properties) {
                return new CustomHttpPattern(properties);
            };

            /**
             * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @function encode
             * @memberof google.api.CustomHttpPattern
             * @static
             * @param {google.api.ICustomHttpPattern} message CustomHttpPattern message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CustomHttpPattern.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.kind != null && message.hasOwnProperty("kind"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.kind);
                if (message.path != null && message.hasOwnProperty("path"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.path);
                return writer;
            };

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer.
             * @function decode
             * @memberof google.api.CustomHttpPattern
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.api.CustomHttpPattern} CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CustomHttpPattern.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.CustomHttpPattern();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.kind = reader.string();
                        break;
                    case 2:
                        message.path = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a CustomHttpPattern message.
             * @function verify
             * @memberof google.api.CustomHttpPattern
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CustomHttpPattern.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.kind != null && message.hasOwnProperty("kind"))
                    if (!$util.isString(message.kind))
                        return "kind: string expected";
                if (message.path != null && message.hasOwnProperty("path"))
                    if (!$util.isString(message.path))
                        return "path: string expected";
                return null;
            };

            return CustomHttpPattern;
        })();

        return api;
    })();

    return google;
})();

export { $root as default };
