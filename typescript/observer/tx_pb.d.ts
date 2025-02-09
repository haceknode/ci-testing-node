// @generated by protoc-gen-es v1.3.0 with parameter "target=dts"
// @generated from file observer/tx.proto (package zetachain.zetacore.observer, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { HeaderData } from "../common/common_pb.js";
import type { CoreParams } from "./params_pb.js";
import type { Blame } from "./blame_pb.js";
import type { BlockHeaderVerificationFlags, GasPriceIncreaseFlags } from "./crosschain_flags_pb.js";

/**
 * @generated from message zetachain.zetacore.observer.MsgAddBlockHeader
 */
export declare class MsgAddBlockHeader extends Message<MsgAddBlockHeader> {
  /**
   * @generated from field: string creator = 1;
   */
  creator: string;

  /**
   * @generated from field: int64 chain_id = 2;
   */
  chainId: bigint;

  /**
   * @generated from field: bytes block_hash = 3;
   */
  blockHash: Uint8Array;

  /**
   * @generated from field: int64 height = 4;
   */
  height: bigint;

  /**
   * @generated from field: common.HeaderData header = 5;
   */
  header?: HeaderData;

  constructor(data?: PartialMessage<MsgAddBlockHeader>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zetachain.zetacore.observer.MsgAddBlockHeader";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgAddBlockHeader;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgAddBlockHeader;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgAddBlockHeader;

  static equals(a: MsgAddBlockHeader | PlainMessage<MsgAddBlockHeader> | undefined, b: MsgAddBlockHeader | PlainMessage<MsgAddBlockHeader> | undefined): boolean;
}

/**
 * @generated from message zetachain.zetacore.observer.MsgAddBlockHeaderResponse
 */
export declare class MsgAddBlockHeaderResponse extends Message<MsgAddBlockHeaderResponse> {
  constructor(data?: PartialMessage<MsgAddBlockHeaderResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zetachain.zetacore.observer.MsgAddBlockHeaderResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgAddBlockHeaderResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgAddBlockHeaderResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgAddBlockHeaderResponse;

  static equals(a: MsgAddBlockHeaderResponse | PlainMessage<MsgAddBlockHeaderResponse> | undefined, b: MsgAddBlockHeaderResponse | PlainMessage<MsgAddBlockHeaderResponse> | undefined): boolean;
}

/**
 * @generated from message zetachain.zetacore.observer.MsgUpdateCoreParams
 */
export declare class MsgUpdateCoreParams extends Message<MsgUpdateCoreParams> {
  /**
   * @generated from field: string creator = 1;
   */
  creator: string;

  /**
   * @generated from field: zetachain.zetacore.observer.CoreParams coreParams = 2;
   */
  coreParams?: CoreParams;

  constructor(data?: PartialMessage<MsgUpdateCoreParams>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zetachain.zetacore.observer.MsgUpdateCoreParams";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateCoreParams;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateCoreParams;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateCoreParams;

  static equals(a: MsgUpdateCoreParams | PlainMessage<MsgUpdateCoreParams> | undefined, b: MsgUpdateCoreParams | PlainMessage<MsgUpdateCoreParams> | undefined): boolean;
}

/**
 * @generated from message zetachain.zetacore.observer.MsgUpdateCoreParamsResponse
 */
export declare class MsgUpdateCoreParamsResponse extends Message<MsgUpdateCoreParamsResponse> {
  constructor(data?: PartialMessage<MsgUpdateCoreParamsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zetachain.zetacore.observer.MsgUpdateCoreParamsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateCoreParamsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateCoreParamsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateCoreParamsResponse;

  static equals(a: MsgUpdateCoreParamsResponse | PlainMessage<MsgUpdateCoreParamsResponse> | undefined, b: MsgUpdateCoreParamsResponse | PlainMessage<MsgUpdateCoreParamsResponse> | undefined): boolean;
}

/**
 * @generated from message zetachain.zetacore.observer.MsgAddObserver
 */
export declare class MsgAddObserver extends Message<MsgAddObserver> {
  /**
   * @generated from field: string creator = 1;
   */
  creator: string;

  /**
   * @generated from field: string observer_address = 2;
   */
  observerAddress: string;

  /**
   * @generated from field: string zetaclient_grantee_pubkey = 3;
   */
  zetaclientGranteePubkey: string;

  /**
   * @generated from field: bool add_node_account_only = 4;
   */
  addNodeAccountOnly: boolean;

  constructor(data?: PartialMessage<MsgAddObserver>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zetachain.zetacore.observer.MsgAddObserver";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgAddObserver;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgAddObserver;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgAddObserver;

  static equals(a: MsgAddObserver | PlainMessage<MsgAddObserver> | undefined, b: MsgAddObserver | PlainMessage<MsgAddObserver> | undefined): boolean;
}

/**
 * @generated from message zetachain.zetacore.observer.MsgAddObserverResponse
 */
export declare class MsgAddObserverResponse extends Message<MsgAddObserverResponse> {
  constructor(data?: PartialMessage<MsgAddObserverResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zetachain.zetacore.observer.MsgAddObserverResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgAddObserverResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgAddObserverResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgAddObserverResponse;

  static equals(a: MsgAddObserverResponse | PlainMessage<MsgAddObserverResponse> | undefined, b: MsgAddObserverResponse | PlainMessage<MsgAddObserverResponse> | undefined): boolean;
}

/**
 * @generated from message zetachain.zetacore.observer.MsgAddBlameVote
 */
export declare class MsgAddBlameVote extends Message<MsgAddBlameVote> {
  /**
   * @generated from field: string creator = 1;
   */
  creator: string;

  /**
   * @generated from field: int64 chain_id = 2;
   */
  chainId: bigint;

  /**
   * @generated from field: zetachain.zetacore.observer.Blame blame_info = 3;
   */
  blameInfo?: Blame;

  constructor(data?: PartialMessage<MsgAddBlameVote>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zetachain.zetacore.observer.MsgAddBlameVote";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgAddBlameVote;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgAddBlameVote;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgAddBlameVote;

  static equals(a: MsgAddBlameVote | PlainMessage<MsgAddBlameVote> | undefined, b: MsgAddBlameVote | PlainMessage<MsgAddBlameVote> | undefined): boolean;
}

/**
 * @generated from message zetachain.zetacore.observer.MsgAddBlameVoteResponse
 */
export declare class MsgAddBlameVoteResponse extends Message<MsgAddBlameVoteResponse> {
  constructor(data?: PartialMessage<MsgAddBlameVoteResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zetachain.zetacore.observer.MsgAddBlameVoteResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgAddBlameVoteResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgAddBlameVoteResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgAddBlameVoteResponse;

  static equals(a: MsgAddBlameVoteResponse | PlainMessage<MsgAddBlameVoteResponse> | undefined, b: MsgAddBlameVoteResponse | PlainMessage<MsgAddBlameVoteResponse> | undefined): boolean;
}

/**
 * @generated from message zetachain.zetacore.observer.MsgUpdateCrosschainFlags
 */
export declare class MsgUpdateCrosschainFlags extends Message<MsgUpdateCrosschainFlags> {
  /**
   * @generated from field: string creator = 1;
   */
  creator: string;

  /**
   * @generated from field: bool isInboundEnabled = 3;
   */
  isInboundEnabled: boolean;

  /**
   * @generated from field: bool isOutboundEnabled = 4;
   */
  isOutboundEnabled: boolean;

  /**
   * @generated from field: zetachain.zetacore.observer.GasPriceIncreaseFlags gasPriceIncreaseFlags = 5;
   */
  gasPriceIncreaseFlags?: GasPriceIncreaseFlags;

  /**
   * @generated from field: zetachain.zetacore.observer.BlockHeaderVerificationFlags blockHeaderVerificationFlags = 6;
   */
  blockHeaderVerificationFlags?: BlockHeaderVerificationFlags;

  constructor(data?: PartialMessage<MsgUpdateCrosschainFlags>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zetachain.zetacore.observer.MsgUpdateCrosschainFlags";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateCrosschainFlags;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateCrosschainFlags;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateCrosschainFlags;

  static equals(a: MsgUpdateCrosschainFlags | PlainMessage<MsgUpdateCrosschainFlags> | undefined, b: MsgUpdateCrosschainFlags | PlainMessage<MsgUpdateCrosschainFlags> | undefined): boolean;
}

/**
 * @generated from message zetachain.zetacore.observer.MsgUpdateCrosschainFlagsResponse
 */
export declare class MsgUpdateCrosschainFlagsResponse extends Message<MsgUpdateCrosschainFlagsResponse> {
  constructor(data?: PartialMessage<MsgUpdateCrosschainFlagsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zetachain.zetacore.observer.MsgUpdateCrosschainFlagsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateCrosschainFlagsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateCrosschainFlagsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateCrosschainFlagsResponse;

  static equals(a: MsgUpdateCrosschainFlagsResponse | PlainMessage<MsgUpdateCrosschainFlagsResponse> | undefined, b: MsgUpdateCrosschainFlagsResponse | PlainMessage<MsgUpdateCrosschainFlagsResponse> | undefined): boolean;
}

/**
 * @generated from message zetachain.zetacore.observer.MsgUpdateKeygen
 */
export declare class MsgUpdateKeygen extends Message<MsgUpdateKeygen> {
  /**
   * @generated from field: string creator = 1;
   */
  creator: string;

  /**
   * @generated from field: int64 block = 2;
   */
  block: bigint;

  constructor(data?: PartialMessage<MsgUpdateKeygen>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zetachain.zetacore.observer.MsgUpdateKeygen";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateKeygen;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateKeygen;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateKeygen;

  static equals(a: MsgUpdateKeygen | PlainMessage<MsgUpdateKeygen> | undefined, b: MsgUpdateKeygen | PlainMessage<MsgUpdateKeygen> | undefined): boolean;
}

/**
 * @generated from message zetachain.zetacore.observer.MsgUpdateKeygenResponse
 */
export declare class MsgUpdateKeygenResponse extends Message<MsgUpdateKeygenResponse> {
  constructor(data?: PartialMessage<MsgUpdateKeygenResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zetachain.zetacore.observer.MsgUpdateKeygenResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateKeygenResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateKeygenResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateKeygenResponse;

  static equals(a: MsgUpdateKeygenResponse | PlainMessage<MsgUpdateKeygenResponse> | undefined, b: MsgUpdateKeygenResponse | PlainMessage<MsgUpdateKeygenResponse> | undefined): boolean;
}

