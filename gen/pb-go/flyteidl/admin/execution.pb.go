// Code generated by protoc-gen-go. DO NOT EDIT.
// source: flyteidl/admin/execution.proto

package admin // import "github.com/lyft/flyteidl/gen/pb-go/flyteidl/admin"

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import core "github.com/lyft/flyteidl/gen/pb-go/flyteidl/core"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

type ExecutionMetadata_ExecutionMode int32

const (
	ExecutionMetadata_MANUAL    ExecutionMetadata_ExecutionMode = 0
	ExecutionMetadata_SCHEDULED ExecutionMetadata_ExecutionMode = 1
	ExecutionMetadata_SYSTEM    ExecutionMetadata_ExecutionMode = 2
)

var ExecutionMetadata_ExecutionMode_name = map[int32]string{
	0: "MANUAL",
	1: "SCHEDULED",
	2: "SYSTEM",
}
var ExecutionMetadata_ExecutionMode_value = map[string]int32{
	"MANUAL":    0,
	"SCHEDULED": 1,
	"SYSTEM":    2,
}

func (x ExecutionMetadata_ExecutionMode) String() string {
	return proto.EnumName(ExecutionMetadata_ExecutionMode_name, int32(x))
}
func (ExecutionMetadata_ExecutionMode) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_execution_3b890c1b9e7d3377, []int{7, 0}
}

type ExecutionCreateRequest struct {
	Id                   *Identifier    `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Spec                 *ExecutionSpec `protobuf:"bytes,2,opt,name=spec,proto3" json:"spec,omitempty"`
	XXX_NoUnkeyedLiteral struct{}       `json:"-"`
	XXX_unrecognized     []byte         `json:"-"`
	XXX_sizecache        int32          `json:"-"`
}

func (m *ExecutionCreateRequest) Reset()         { *m = ExecutionCreateRequest{} }
func (m *ExecutionCreateRequest) String() string { return proto.CompactTextString(m) }
func (*ExecutionCreateRequest) ProtoMessage()    {}
func (*ExecutionCreateRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_execution_3b890c1b9e7d3377, []int{0}
}
func (m *ExecutionCreateRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ExecutionCreateRequest.Unmarshal(m, b)
}
func (m *ExecutionCreateRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ExecutionCreateRequest.Marshal(b, m, deterministic)
}
func (dst *ExecutionCreateRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ExecutionCreateRequest.Merge(dst, src)
}
func (m *ExecutionCreateRequest) XXX_Size() int {
	return xxx_messageInfo_ExecutionCreateRequest.Size(m)
}
func (m *ExecutionCreateRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_ExecutionCreateRequest.DiscardUnknown(m)
}

var xxx_messageInfo_ExecutionCreateRequest proto.InternalMessageInfo

func (m *ExecutionCreateRequest) GetId() *Identifier {
	if m != nil {
		return m.Id
	}
	return nil
}

func (m *ExecutionCreateRequest) GetSpec() *ExecutionSpec {
	if m != nil {
		return m.Spec
	}
	return nil
}

type ExecutionCreateResponse struct {
	Urn                  string   `protobuf:"bytes,1,opt,name=urn,proto3" json:"urn,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ExecutionCreateResponse) Reset()         { *m = ExecutionCreateResponse{} }
func (m *ExecutionCreateResponse) String() string { return proto.CompactTextString(m) }
func (*ExecutionCreateResponse) ProtoMessage()    {}
func (*ExecutionCreateResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_execution_3b890c1b9e7d3377, []int{1}
}
func (m *ExecutionCreateResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ExecutionCreateResponse.Unmarshal(m, b)
}
func (m *ExecutionCreateResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ExecutionCreateResponse.Marshal(b, m, deterministic)
}
func (dst *ExecutionCreateResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ExecutionCreateResponse.Merge(dst, src)
}
func (m *ExecutionCreateResponse) XXX_Size() int {
	return xxx_messageInfo_ExecutionCreateResponse.Size(m)
}
func (m *ExecutionCreateResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_ExecutionCreateResponse.DiscardUnknown(m)
}

var xxx_messageInfo_ExecutionCreateResponse proto.InternalMessageInfo

func (m *ExecutionCreateResponse) GetUrn() string {
	if m != nil {
		return m.Urn
	}
	return ""
}

type Execution struct {
	Id *Identifier `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	// The execution_id string is contructed from the 'id'.
	// If name is not available in the 'id', the system will generate a random name
	ExecutionId          string           `protobuf:"bytes,2,opt,name=execution_id,json=executionId,proto3" json:"execution_id,omitempty"`
	Status               *ExecutionStatus `protobuf:"bytes,3,opt,name=status,proto3" json:"status,omitempty"`
	Spec                 *ExecutionSpec   `protobuf:"bytes,4,opt,name=spec,proto3" json:"spec,omitempty"`
	Result               *ExecutionResult `protobuf:"bytes,5,opt,name=result,proto3" json:"result,omitempty"`
	XXX_NoUnkeyedLiteral struct{}         `json:"-"`
	XXX_unrecognized     []byte           `json:"-"`
	XXX_sizecache        int32            `json:"-"`
}

func (m *Execution) Reset()         { *m = Execution{} }
func (m *Execution) String() string { return proto.CompactTextString(m) }
func (*Execution) ProtoMessage()    {}
func (*Execution) Descriptor() ([]byte, []int) {
	return fileDescriptor_execution_3b890c1b9e7d3377, []int{2}
}
func (m *Execution) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Execution.Unmarshal(m, b)
}
func (m *Execution) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Execution.Marshal(b, m, deterministic)
}
func (dst *Execution) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Execution.Merge(dst, src)
}
func (m *Execution) XXX_Size() int {
	return xxx_messageInfo_Execution.Size(m)
}
func (m *Execution) XXX_DiscardUnknown() {
	xxx_messageInfo_Execution.DiscardUnknown(m)
}

var xxx_messageInfo_Execution proto.InternalMessageInfo

func (m *Execution) GetId() *Identifier {
	if m != nil {
		return m.Id
	}
	return nil
}

func (m *Execution) GetExecutionId() string {
	if m != nil {
		return m.ExecutionId
	}
	return ""
}

func (m *Execution) GetStatus() *ExecutionStatus {
	if m != nil {
		return m.Status
	}
	return nil
}

func (m *Execution) GetSpec() *ExecutionSpec {
	if m != nil {
		return m.Spec
	}
	return nil
}

func (m *Execution) GetResult() *ExecutionResult {
	if m != nil {
		return m.Result
	}
	return nil
}

type ExecutionList struct {
	Executions           []*Execution `protobuf:"bytes,1,rep,name=executions,proto3" json:"executions,omitempty"`
	XXX_NoUnkeyedLiteral struct{}     `json:"-"`
	XXX_unrecognized     []byte       `json:"-"`
	XXX_sizecache        int32        `json:"-"`
}

func (m *ExecutionList) Reset()         { *m = ExecutionList{} }
func (m *ExecutionList) String() string { return proto.CompactTextString(m) }
func (*ExecutionList) ProtoMessage()    {}
func (*ExecutionList) Descriptor() ([]byte, []int) {
	return fileDescriptor_execution_3b890c1b9e7d3377, []int{3}
}
func (m *ExecutionList) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ExecutionList.Unmarshal(m, b)
}
func (m *ExecutionList) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ExecutionList.Marshal(b, m, deterministic)
}
func (dst *ExecutionList) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ExecutionList.Merge(dst, src)
}
func (m *ExecutionList) XXX_Size() int {
	return xxx_messageInfo_ExecutionList.Size(m)
}
func (m *ExecutionList) XXX_DiscardUnknown() {
	xxx_messageInfo_ExecutionList.DiscardUnknown(m)
}

var xxx_messageInfo_ExecutionList proto.InternalMessageInfo

func (m *ExecutionList) GetExecutions() []*Execution {
	if m != nil {
		return m.Executions
	}
	return nil
}

type ExecutionStatus struct {
	// Phase of the executions
	Phase                ExecutionPhase `protobuf:"varint,1,opt,name=phase,proto3,enum=flyteidl.admin.ExecutionPhase" json:"phase,omitempty"`
	WorkflowUrn          string         `protobuf:"bytes,2,opt,name=workflow_urn,json=workflowUrn,proto3" json:"workflow_urn,omitempty"`
	XXX_NoUnkeyedLiteral struct{}       `json:"-"`
	XXX_unrecognized     []byte         `json:"-"`
	XXX_sizecache        int32          `json:"-"`
}

func (m *ExecutionStatus) Reset()         { *m = ExecutionStatus{} }
func (m *ExecutionStatus) String() string { return proto.CompactTextString(m) }
func (*ExecutionStatus) ProtoMessage()    {}
func (*ExecutionStatus) Descriptor() ([]byte, []int) {
	return fileDescriptor_execution_3b890c1b9e7d3377, []int{4}
}
func (m *ExecutionStatus) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ExecutionStatus.Unmarshal(m, b)
}
func (m *ExecutionStatus) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ExecutionStatus.Marshal(b, m, deterministic)
}
func (dst *ExecutionStatus) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ExecutionStatus.Merge(dst, src)
}
func (m *ExecutionStatus) XXX_Size() int {
	return xxx_messageInfo_ExecutionStatus.Size(m)
}
func (m *ExecutionStatus) XXX_DiscardUnknown() {
	xxx_messageInfo_ExecutionStatus.DiscardUnknown(m)
}

var xxx_messageInfo_ExecutionStatus proto.InternalMessageInfo

func (m *ExecutionStatus) GetPhase() ExecutionPhase {
	if m != nil {
		return m.Phase
	}
	return ExecutionPhase_UNDEFINED
}

func (m *ExecutionStatus) GetWorkflowUrn() string {
	if m != nil {
		return m.WorkflowUrn
	}
	return ""
}

// Input/output data can represented by actual values or a link to where it is stored
type LiteralMapBlob struct {
	// Types that are valid to be assigned to Data:
	//	*LiteralMapBlob_Values
	//	*LiteralMapBlob_Uri
	Data                 isLiteralMapBlob_Data `protobuf_oneof:"data"`
	XXX_NoUnkeyedLiteral struct{}              `json:"-"`
	XXX_unrecognized     []byte                `json:"-"`
	XXX_sizecache        int32                 `json:"-"`
}

func (m *LiteralMapBlob) Reset()         { *m = LiteralMapBlob{} }
func (m *LiteralMapBlob) String() string { return proto.CompactTextString(m) }
func (*LiteralMapBlob) ProtoMessage()    {}
func (*LiteralMapBlob) Descriptor() ([]byte, []int) {
	return fileDescriptor_execution_3b890c1b9e7d3377, []int{5}
}
func (m *LiteralMapBlob) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_LiteralMapBlob.Unmarshal(m, b)
}
func (m *LiteralMapBlob) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_LiteralMapBlob.Marshal(b, m, deterministic)
}
func (dst *LiteralMapBlob) XXX_Merge(src proto.Message) {
	xxx_messageInfo_LiteralMapBlob.Merge(dst, src)
}
func (m *LiteralMapBlob) XXX_Size() int {
	return xxx_messageInfo_LiteralMapBlob.Size(m)
}
func (m *LiteralMapBlob) XXX_DiscardUnknown() {
	xxx_messageInfo_LiteralMapBlob.DiscardUnknown(m)
}

var xxx_messageInfo_LiteralMapBlob proto.InternalMessageInfo

type isLiteralMapBlob_Data interface {
	isLiteralMapBlob_Data()
}

type LiteralMapBlob_Values struct {
	Values *core.LiteralMap `protobuf:"bytes,1,opt,name=values,proto3,oneof"`
}

type LiteralMapBlob_Uri struct {
	Uri string `protobuf:"bytes,2,opt,name=uri,proto3,oneof"`
}

func (*LiteralMapBlob_Values) isLiteralMapBlob_Data() {}

func (*LiteralMapBlob_Uri) isLiteralMapBlob_Data() {}

func (m *LiteralMapBlob) GetData() isLiteralMapBlob_Data {
	if m != nil {
		return m.Data
	}
	return nil
}

func (m *LiteralMapBlob) GetValues() *core.LiteralMap {
	if x, ok := m.GetData().(*LiteralMapBlob_Values); ok {
		return x.Values
	}
	return nil
}

func (m *LiteralMapBlob) GetUri() string {
	if x, ok := m.GetData().(*LiteralMapBlob_Uri); ok {
		return x.Uri
	}
	return ""
}

// XXX_OneofFuncs is for the internal use of the proto package.
func (*LiteralMapBlob) XXX_OneofFuncs() (func(msg proto.Message, b *proto.Buffer) error, func(msg proto.Message, tag, wire int, b *proto.Buffer) (bool, error), func(msg proto.Message) (n int), []interface{}) {
	return _LiteralMapBlob_OneofMarshaler, _LiteralMapBlob_OneofUnmarshaler, _LiteralMapBlob_OneofSizer, []interface{}{
		(*LiteralMapBlob_Values)(nil),
		(*LiteralMapBlob_Uri)(nil),
	}
}

func _LiteralMapBlob_OneofMarshaler(msg proto.Message, b *proto.Buffer) error {
	m := msg.(*LiteralMapBlob)
	// data
	switch x := m.Data.(type) {
	case *LiteralMapBlob_Values:
		b.EncodeVarint(1<<3 | proto.WireBytes)
		if err := b.EncodeMessage(x.Values); err != nil {
			return err
		}
	case *LiteralMapBlob_Uri:
		b.EncodeVarint(2<<3 | proto.WireBytes)
		b.EncodeStringBytes(x.Uri)
	case nil:
	default:
		return fmt.Errorf("LiteralMapBlob.Data has unexpected type %T", x)
	}
	return nil
}

func _LiteralMapBlob_OneofUnmarshaler(msg proto.Message, tag, wire int, b *proto.Buffer) (bool, error) {
	m := msg.(*LiteralMapBlob)
	switch tag {
	case 1: // data.values
		if wire != proto.WireBytes {
			return true, proto.ErrInternalBadWireType
		}
		msg := new(core.LiteralMap)
		err := b.DecodeMessage(msg)
		m.Data = &LiteralMapBlob_Values{msg}
		return true, err
	case 2: // data.uri
		if wire != proto.WireBytes {
			return true, proto.ErrInternalBadWireType
		}
		x, err := b.DecodeStringBytes()
		m.Data = &LiteralMapBlob_Uri{x}
		return true, err
	default:
		return false, nil
	}
}

func _LiteralMapBlob_OneofSizer(msg proto.Message) (n int) {
	m := msg.(*LiteralMapBlob)
	// data
	switch x := m.Data.(type) {
	case *LiteralMapBlob_Values:
		s := proto.Size(x.Values)
		n += 1 // tag and wire
		n += proto.SizeVarint(uint64(s))
		n += s
	case *LiteralMapBlob_Uri:
		n += 1 // tag and wire
		n += proto.SizeVarint(uint64(len(x.Uri)))
		n += len(x.Uri)
	case nil:
	default:
		panic(fmt.Sprintf("proto: unexpected type %T in oneof", x))
	}
	return n
}

// Encapsultes the results of the Execution
type ExecutionResult struct {
	// Types that are valid to be assigned to OutputResult:
	//	*ExecutionResult_Outputs
	//	*ExecutionResult_Error
	OutputResult         isExecutionResult_OutputResult `protobuf_oneof:"output_result"`
	XXX_NoUnkeyedLiteral struct{}                       `json:"-"`
	XXX_unrecognized     []byte                         `json:"-"`
	XXX_sizecache        int32                          `json:"-"`
}

func (m *ExecutionResult) Reset()         { *m = ExecutionResult{} }
func (m *ExecutionResult) String() string { return proto.CompactTextString(m) }
func (*ExecutionResult) ProtoMessage()    {}
func (*ExecutionResult) Descriptor() ([]byte, []int) {
	return fileDescriptor_execution_3b890c1b9e7d3377, []int{6}
}
func (m *ExecutionResult) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ExecutionResult.Unmarshal(m, b)
}
func (m *ExecutionResult) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ExecutionResult.Marshal(b, m, deterministic)
}
func (dst *ExecutionResult) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ExecutionResult.Merge(dst, src)
}
func (m *ExecutionResult) XXX_Size() int {
	return xxx_messageInfo_ExecutionResult.Size(m)
}
func (m *ExecutionResult) XXX_DiscardUnknown() {
	xxx_messageInfo_ExecutionResult.DiscardUnknown(m)
}

var xxx_messageInfo_ExecutionResult proto.InternalMessageInfo

type isExecutionResult_OutputResult interface {
	isExecutionResult_OutputResult()
}

type ExecutionResult_Outputs struct {
	Outputs *LiteralMapBlob `protobuf:"bytes,1,opt,name=outputs,proto3,oneof"`
}

type ExecutionResult_Error struct {
	Error *Error `protobuf:"bytes,2,opt,name=error,proto3,oneof"`
}

func (*ExecutionResult_Outputs) isExecutionResult_OutputResult() {}

func (*ExecutionResult_Error) isExecutionResult_OutputResult() {}

func (m *ExecutionResult) GetOutputResult() isExecutionResult_OutputResult {
	if m != nil {
		return m.OutputResult
	}
	return nil
}

func (m *ExecutionResult) GetOutputs() *LiteralMapBlob {
	if x, ok := m.GetOutputResult().(*ExecutionResult_Outputs); ok {
		return x.Outputs
	}
	return nil
}

func (m *ExecutionResult) GetError() *Error {
	if x, ok := m.GetOutputResult().(*ExecutionResult_Error); ok {
		return x.Error
	}
	return nil
}

// XXX_OneofFuncs is for the internal use of the proto package.
func (*ExecutionResult) XXX_OneofFuncs() (func(msg proto.Message, b *proto.Buffer) error, func(msg proto.Message, tag, wire int, b *proto.Buffer) (bool, error), func(msg proto.Message) (n int), []interface{}) {
	return _ExecutionResult_OneofMarshaler, _ExecutionResult_OneofUnmarshaler, _ExecutionResult_OneofSizer, []interface{}{
		(*ExecutionResult_Outputs)(nil),
		(*ExecutionResult_Error)(nil),
	}
}

func _ExecutionResult_OneofMarshaler(msg proto.Message, b *proto.Buffer) error {
	m := msg.(*ExecutionResult)
	// output_result
	switch x := m.OutputResult.(type) {
	case *ExecutionResult_Outputs:
		b.EncodeVarint(1<<3 | proto.WireBytes)
		if err := b.EncodeMessage(x.Outputs); err != nil {
			return err
		}
	case *ExecutionResult_Error:
		b.EncodeVarint(2<<3 | proto.WireBytes)
		if err := b.EncodeMessage(x.Error); err != nil {
			return err
		}
	case nil:
	default:
		return fmt.Errorf("ExecutionResult.OutputResult has unexpected type %T", x)
	}
	return nil
}

func _ExecutionResult_OneofUnmarshaler(msg proto.Message, tag, wire int, b *proto.Buffer) (bool, error) {
	m := msg.(*ExecutionResult)
	switch tag {
	case 1: // output_result.outputs
		if wire != proto.WireBytes {
			return true, proto.ErrInternalBadWireType
		}
		msg := new(LiteralMapBlob)
		err := b.DecodeMessage(msg)
		m.OutputResult = &ExecutionResult_Outputs{msg}
		return true, err
	case 2: // output_result.error
		if wire != proto.WireBytes {
			return true, proto.ErrInternalBadWireType
		}
		msg := new(Error)
		err := b.DecodeMessage(msg)
		m.OutputResult = &ExecutionResult_Error{msg}
		return true, err
	default:
		return false, nil
	}
}

func _ExecutionResult_OneofSizer(msg proto.Message) (n int) {
	m := msg.(*ExecutionResult)
	// output_result
	switch x := m.OutputResult.(type) {
	case *ExecutionResult_Outputs:
		s := proto.Size(x.Outputs)
		n += 1 // tag and wire
		n += proto.SizeVarint(uint64(s))
		n += s
	case *ExecutionResult_Error:
		s := proto.Size(x.Error)
		n += 1 // tag and wire
		n += proto.SizeVarint(uint64(s))
		n += s
	case nil:
	default:
		panic(fmt.Sprintf("proto: unexpected type %T in oneof", x))
	}
	return n
}

type ExecutionMetadata struct {
	Mode ExecutionMetadata_ExecutionMode `protobuf:"varint,1,opt,name=mode,proto3,enum=flyteidl.admin.ExecutionMetadata_ExecutionMode" json:"mode,omitempty"`
	// Identifier of the entity that triggered this execution.
	Principal string `protobuf:"bytes,2,opt,name=principal,proto3" json:"principal,omitempty"`
	// Indicates the "nestedness" of this execution.
	// If a user launches a workflow execution, the default nesting is 0.
	// If this execution further launches a workflow (child workflow), the nesting level is incremented by 0 => 1
	// Generally, if workflow at nesting level k launches a workflow then the child workflow will have
	// nesting = k + 1.
	Nesting              int32    `protobuf:"varint,3,opt,name=nesting,proto3" json:"nesting,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ExecutionMetadata) Reset()         { *m = ExecutionMetadata{} }
func (m *ExecutionMetadata) String() string { return proto.CompactTextString(m) }
func (*ExecutionMetadata) ProtoMessage()    {}
func (*ExecutionMetadata) Descriptor() ([]byte, []int) {
	return fileDescriptor_execution_3b890c1b9e7d3377, []int{7}
}
func (m *ExecutionMetadata) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ExecutionMetadata.Unmarshal(m, b)
}
func (m *ExecutionMetadata) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ExecutionMetadata.Marshal(b, m, deterministic)
}
func (dst *ExecutionMetadata) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ExecutionMetadata.Merge(dst, src)
}
func (m *ExecutionMetadata) XXX_Size() int {
	return xxx_messageInfo_ExecutionMetadata.Size(m)
}
func (m *ExecutionMetadata) XXX_DiscardUnknown() {
	xxx_messageInfo_ExecutionMetadata.DiscardUnknown(m)
}

var xxx_messageInfo_ExecutionMetadata proto.InternalMessageInfo

func (m *ExecutionMetadata) GetMode() ExecutionMetadata_ExecutionMode {
	if m != nil {
		return m.Mode
	}
	return ExecutionMetadata_MANUAL
}

func (m *ExecutionMetadata) GetPrincipal() string {
	if m != nil {
		return m.Principal
	}
	return ""
}

func (m *ExecutionMetadata) GetNesting() int32 {
	if m != nil {
		return m.Nesting
	}
	return 0
}

type ExecutionSpec struct {
	// Launch plan urn to be executed
	LaunchPlanUrn string `protobuf:"bytes,1,opt,name=launch_plan_urn,json=launchPlanUrn,proto3" json:"launch_plan_urn,omitempty"`
	// Input values to be passed for the execution
	Inputs *core.LiteralMap `protobuf:"bytes,2,opt,name=inputs,proto3" json:"inputs,omitempty"`
	// Metadata for the execution
	Metadata *ExecutionMetadata `protobuf:"bytes,3,opt,name=metadata,proto3" json:"metadata,omitempty"`
	// List of notifications based on Execution status transitions
	Notifications        []*Notification `protobuf:"bytes,4,rep,name=notifications,proto3" json:"notifications,omitempty"`
	XXX_NoUnkeyedLiteral struct{}        `json:"-"`
	XXX_unrecognized     []byte          `json:"-"`
	XXX_sizecache        int32           `json:"-"`
}

func (m *ExecutionSpec) Reset()         { *m = ExecutionSpec{} }
func (m *ExecutionSpec) String() string { return proto.CompactTextString(m) }
func (*ExecutionSpec) ProtoMessage()    {}
func (*ExecutionSpec) Descriptor() ([]byte, []int) {
	return fileDescriptor_execution_3b890c1b9e7d3377, []int{8}
}
func (m *ExecutionSpec) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ExecutionSpec.Unmarshal(m, b)
}
func (m *ExecutionSpec) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ExecutionSpec.Marshal(b, m, deterministic)
}
func (dst *ExecutionSpec) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ExecutionSpec.Merge(dst, src)
}
func (m *ExecutionSpec) XXX_Size() int {
	return xxx_messageInfo_ExecutionSpec.Size(m)
}
func (m *ExecutionSpec) XXX_DiscardUnknown() {
	xxx_messageInfo_ExecutionSpec.DiscardUnknown(m)
}

var xxx_messageInfo_ExecutionSpec proto.InternalMessageInfo

func (m *ExecutionSpec) GetLaunchPlanUrn() string {
	if m != nil {
		return m.LaunchPlanUrn
	}
	return ""
}

func (m *ExecutionSpec) GetInputs() *core.LiteralMap {
	if m != nil {
		return m.Inputs
	}
	return nil
}

func (m *ExecutionSpec) GetMetadata() *ExecutionMetadata {
	if m != nil {
		return m.Metadata
	}
	return nil
}

func (m *ExecutionSpec) GetNotifications() []*Notification {
	if m != nil {
		return m.Notifications
	}
	return nil
}

func init() {
	proto.RegisterType((*ExecutionCreateRequest)(nil), "flyteidl.admin.ExecutionCreateRequest")
	proto.RegisterType((*ExecutionCreateResponse)(nil), "flyteidl.admin.ExecutionCreateResponse")
	proto.RegisterType((*Execution)(nil), "flyteidl.admin.Execution")
	proto.RegisterType((*ExecutionList)(nil), "flyteidl.admin.ExecutionList")
	proto.RegisterType((*ExecutionStatus)(nil), "flyteidl.admin.ExecutionStatus")
	proto.RegisterType((*LiteralMapBlob)(nil), "flyteidl.admin.LiteralMapBlob")
	proto.RegisterType((*ExecutionResult)(nil), "flyteidl.admin.ExecutionResult")
	proto.RegisterType((*ExecutionMetadata)(nil), "flyteidl.admin.ExecutionMetadata")
	proto.RegisterType((*ExecutionSpec)(nil), "flyteidl.admin.ExecutionSpec")
	proto.RegisterEnum("flyteidl.admin.ExecutionMetadata_ExecutionMode", ExecutionMetadata_ExecutionMode_name, ExecutionMetadata_ExecutionMode_value)
}

func init() {
	proto.RegisterFile("flyteidl/admin/execution.proto", fileDescriptor_execution_3b890c1b9e7d3377)
}

var fileDescriptor_execution_3b890c1b9e7d3377 = []byte{
	// 663 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x94, 0xdf, 0x6e, 0x12, 0x4f,
	0x14, 0xc7, 0x59, 0x0a, 0xf4, 0xc7, 0xe9, 0x8f, 0x16, 0x27, 0x51, 0x11, 0x6b, 0x6d, 0xf7, 0xc2,
	0x34, 0x9a, 0xb2, 0x69, 0x6b, 0x34, 0x9a, 0x78, 0x51, 0x5a, 0x12, 0x6a, 0xa0, 0x69, 0x06, 0xb9,
	0xd0, 0x1b, 0x32, 0xec, 0x0e, 0x74, 0x74, 0x99, 0x59, 0x67, 0x67, 0xad, 0x7d, 0x08, 0xdf, 0xcb,
	0x97, 0xf1, 0x19, 0x34, 0x33, 0xfb, 0xa7, 0x0b, 0x0d, 0x41, 0xef, 0xe0, 0x9c, 0xcf, 0xf9, 0xf7,
	0x9d, 0x73, 0x16, 0x76, 0x26, 0xfe, 0x8d, 0xa2, 0xcc, 0xf3, 0x1d, 0xe2, 0xcd, 0x18, 0x77, 0xe8,
	0x77, 0xea, 0x46, 0x8a, 0x09, 0xde, 0x0a, 0xa4, 0x50, 0x02, 0x6d, 0xa6, 0xfe, 0x96, 0xf1, 0x37,
	0xb7, 0x33, 0xde, 0x15, 0x92, 0x3a, 0x3e, 0x53, 0x54, 0x12, 0x3f, 0x8c, 0xe9, 0xe6, 0xe3, 0x85,
	0x6c, 0xae, 0x98, 0xcd, 0xd2, 0x54, 0xcd, 0xe6, 0x62, 0x29, 0x29, 0x85, 0x8c, 0x7d, 0xf6, 0x35,
	0x3c, 0xe8, 0xa4, 0x95, 0x4f, 0x25, 0x25, 0x8a, 0x62, 0xfa, 0x35, 0xa2, 0xa1, 0x42, 0xcf, 0xa1,
	0xc8, 0xbc, 0x86, 0xb5, 0x6b, 0xed, 0x6f, 0x1c, 0x35, 0x5b, 0xf3, 0xdd, 0xb4, 0xce, 0x3d, 0xca,
	0x15, 0x9b, 0x30, 0x2a, 0x71, 0x91, 0x79, 0xe8, 0x10, 0x4a, 0x61, 0x40, 0xdd, 0x46, 0xd1, 0xd0,
	0x4f, 0x16, 0xe9, 0xac, 0xc2, 0x20, 0xa0, 0x2e, 0x36, 0xa8, 0xfd, 0x02, 0x1e, 0xde, 0x29, 0x1c,
	0x06, 0x82, 0x87, 0x14, 0xd5, 0x61, 0x2d, 0x92, 0xdc, 0x94, 0xae, 0x62, 0xfd, 0xd3, 0xfe, 0x6d,
	0x41, 0x35, 0xa3, 0xff, 0xa9, 0xb3, 0x3d, 0xf8, 0x3f, 0x53, 0x76, 0xc4, 0x3c, 0xd3, 0x61, 0x15,
	0x6f, 0x64, 0xb6, 0x73, 0x0f, 0xbd, 0x86, 0x4a, 0xa8, 0x88, 0x8a, 0xc2, 0xc6, 0x9a, 0x49, 0xf9,
	0x74, 0x79, 0xfb, 0x06, 0xc3, 0x09, 0x9e, 0x4d, 0x5d, 0xfa, 0xeb, 0xa9, 0x75, 0x2d, 0x49, 0xc3,
	0xc8, 0x57, 0x8d, 0xf2, 0x8a, 0x5a, 0xd8, 0x60, 0x38, 0xc1, 0xed, 0xf7, 0x50, 0xcb, 0x5c, 0x3d,
	0x16, 0x2a, 0xf4, 0x06, 0x20, 0x1b, 0x22, 0x6c, 0x58, 0xbb, 0x6b, 0xfb, 0x1b, 0x47, 0x8f, 0x96,
	0x67, 0xcb, 0xc1, 0xf6, 0x67, 0xd8, 0x5a, 0x18, 0x09, 0xbd, 0x84, 0x72, 0x70, 0x45, 0x42, 0x6a,
	0x54, 0xdd, 0x3c, 0xda, 0x59, 0x9a, 0xe8, 0x52, 0x53, 0x38, 0x86, 0xb5, 0xb8, 0xd7, 0x42, 0x7e,
	0x99, 0xf8, 0xe2, 0x7a, 0xa4, 0x5f, 0x2c, 0x11, 0x37, 0xb5, 0x0d, 0x25, 0xb7, 0x09, 0x6c, 0xf6,
	0xe2, 0x55, 0xed, 0x93, 0xa0, 0xed, 0x8b, 0x31, 0x3a, 0x86, 0xca, 0x37, 0xe2, 0x47, 0x34, 0x4c,
	0x5e, 0x30, 0xd7, 0xb4, 0xde, 0xec, 0xd6, 0x2d, 0xde, 0x2d, 0xe0, 0x04, 0x45, 0x48, 0xaf, 0x04,
	0x8b, 0x0b, 0x74, 0x0b, 0x7a, 0x29, 0x58, 0xbb, 0x02, 0x25, 0x8f, 0x28, 0x62, 0xff, 0xb0, 0x72,
	0xf3, 0xc4, 0xb2, 0xa1, 0xb7, 0xb0, 0x2e, 0x22, 0x15, 0x44, 0x2a, 0xad, 0x72, 0x67, 0xa2, 0xf9,
	0xae, 0xba, 0x05, 0x9c, 0x06, 0xa0, 0x03, 0x28, 0x9b, 0x0b, 0x49, 0xb6, 0xf9, 0xfe, 0x1d, 0x2d,
	0xb4, 0xb3, 0x5b, 0xc0, 0x31, 0xd5, 0xde, 0x82, 0x5a, 0x1c, 0x39, 0x4a, 0x9e, 0xea, 0xa7, 0x05,
	0xf7, 0xb2, 0x7e, 0xfa, 0x54, 0x11, 0xdd, 0x25, 0x3a, 0x85, 0xd2, 0x4c, 0x78, 0xa9, 0xc0, 0xce,
	0x52, 0x81, 0xd3, 0x80, 0x9c, 0x45, 0x78, 0x14, 0x9b, 0x60, 0xb4, 0x0d, 0xd5, 0x40, 0x32, 0xee,
	0xb2, 0x80, 0xf8, 0x89, 0xda, 0xb7, 0x06, 0xd4, 0x80, 0x75, 0x4e, 0x43, 0xc5, 0xf8, 0xd4, 0x6c,
	0x72, 0x19, 0xa7, 0x7f, 0xed, 0x57, 0xb9, 0xed, 0xd1, 0xe9, 0x10, 0x40, 0xa5, 0x7f, 0x72, 0x31,
	0x3c, 0xe9, 0xd5, 0x0b, 0xa8, 0x06, 0xd5, 0xc1, 0x69, 0xb7, 0x73, 0x36, 0xec, 0x75, 0xce, 0xea,
	0x96, 0x76, 0x0d, 0x3e, 0x0e, 0x3e, 0x74, 0xfa, 0xf5, 0xa2, 0xfd, 0xcb, 0xca, 0x05, 0xea, 0x35,
	0x46, 0xcf, 0x60, 0xcb, 0x27, 0x11, 0x77, 0xaf, 0x46, 0x81, 0x4f, 0xf8, 0xe8, 0xf6, 0x4e, 0x6b,
	0xb1, 0xf9, 0xd2, 0x27, 0x7c, 0x28, 0x39, 0x3a, 0x84, 0x0a, 0xe3, 0x46, 0xff, 0xe2, 0x8a, 0x57,
	0xc6, 0x09, 0x88, 0xde, 0xc1, 0x7f, 0xb3, 0x64, 0xf8, 0xe4, 0x12, 0xf7, 0x56, 0xaa, 0x84, 0xb3,
	0x10, 0xd4, 0x86, 0x1a, 0x17, 0xfa, 0xf2, 0x5d, 0x12, 0xdf, 0x44, 0xc9, 0xdc, 0xc4, 0xf6, 0x62,
	0x8e, 0x8b, 0x1c, 0x84, 0xe7, 0x43, 0xda, 0xc7, 0x9f, 0x0e, 0xa7, 0x4c, 0x5d, 0x45, 0xe3, 0x96,
	0x2b, 0x66, 0x8e, 0x7f, 0x33, 0x51, 0x4e, 0xf6, 0xed, 0x9c, 0x52, 0xee, 0x04, 0xe3, 0x83, 0xa9,
	0x70, 0xe6, 0x3f, 0xa7, 0xe3, 0x8a, 0xf9, 0x92, 0x1e, 0xff, 0x09, 0x00, 0x00, 0xff, 0xff, 0x05,
	0x1a, 0xb1, 0x06, 0xd2, 0x05, 0x00, 0x00,
}
