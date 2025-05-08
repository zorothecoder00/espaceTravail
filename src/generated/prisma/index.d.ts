
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Departement
 * 
 */
export type Departement = $Result.DefaultSelection<Prisma.$DepartementPayload>
/**
 * Model Utilisateur
 * 
 */
export type Utilisateur = $Result.DefaultSelection<Prisma.$UtilisateurPayload>
/**
 * Model Document
 * 
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>
/**
 * Model Projet
 * 
 */
export type Projet = $Result.DefaultSelection<Prisma.$ProjetPayload>
/**
 * Model Tache
 * 
 */
export type Tache = $Result.DefaultSelection<Prisma.$TachePayload>
/**
 * Model TacheMembre
 * 
 */
export type TacheMembre = $Result.DefaultSelection<Prisma.$TacheMembrePayload>
/**
 * Model MembreProjet
 * 
 */
export type MembreProjet = $Result.DefaultSelection<Prisma.$MembreProjetPayload>
/**
 * Model PartageDocument
 * 
 */
export type PartageDocument = $Result.DefaultSelection<Prisma.$PartageDocumentPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  UTILISATEUR: 'UTILISATEUR'
};

export type Role = (typeof Role)[keyof typeof Role]


export const TacheStatut: {
  A_FAIRE: 'A_FAIRE',
  EN_COURS: 'EN_COURS',
  TERMINE: 'TERMINE'
};

export type TacheStatut = (typeof TacheStatut)[keyof typeof TacheStatut]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type TacheStatut = $Enums.TacheStatut

export const TacheStatut: typeof $Enums.TacheStatut

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Departements
 * const departements = await prisma.departement.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Departements
   * const departements = await prisma.departement.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.departement`: Exposes CRUD operations for the **Departement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departements
    * const departements = await prisma.departement.findMany()
    * ```
    */
  get departement(): Prisma.DepartementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.utilisateur`: Exposes CRUD operations for the **Utilisateur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Utilisateurs
    * const utilisateurs = await prisma.utilisateur.findMany()
    * ```
    */
  get utilisateur(): Prisma.UtilisateurDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projet`: Exposes CRUD operations for the **Projet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projets
    * const projets = await prisma.projet.findMany()
    * ```
    */
  get projet(): Prisma.ProjetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tache`: Exposes CRUD operations for the **Tache** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Taches
    * const taches = await prisma.tache.findMany()
    * ```
    */
  get tache(): Prisma.TacheDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tacheMembre`: Exposes CRUD operations for the **TacheMembre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TacheMembres
    * const tacheMembres = await prisma.tacheMembre.findMany()
    * ```
    */
  get tacheMembre(): Prisma.TacheMembreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.membreProjet`: Exposes CRUD operations for the **MembreProjet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MembreProjets
    * const membreProjets = await prisma.membreProjet.findMany()
    * ```
    */
  get membreProjet(): Prisma.MembreProjetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.partageDocument`: Exposes CRUD operations for the **PartageDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PartageDocuments
    * const partageDocuments = await prisma.partageDocument.findMany()
    * ```
    */
  get partageDocument(): Prisma.PartageDocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Departement: 'Departement',
    Utilisateur: 'Utilisateur',
    Document: 'Document',
    Projet: 'Projet',
    Tache: 'Tache',
    TacheMembre: 'TacheMembre',
    MembreProjet: 'MembreProjet',
    PartageDocument: 'PartageDocument',
    Notification: 'Notification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "departement" | "utilisateur" | "document" | "projet" | "tache" | "tacheMembre" | "membreProjet" | "partageDocument" | "notification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Departement: {
        payload: Prisma.$DepartementPayload<ExtArgs>
        fields: Prisma.DepartementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartementPayload>
          }
          findFirst: {
            args: Prisma.DepartementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartementPayload>
          }
          findMany: {
            args: Prisma.DepartementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartementPayload>[]
          }
          create: {
            args: Prisma.DepartementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartementPayload>
          }
          createMany: {
            args: Prisma.DepartementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartementPayload>[]
          }
          delete: {
            args: Prisma.DepartementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartementPayload>
          }
          update: {
            args: Prisma.DepartementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartementPayload>
          }
          deleteMany: {
            args: Prisma.DepartementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepartementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartementPayload>[]
          }
          upsert: {
            args: Prisma.DepartementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartementPayload>
          }
          aggregate: {
            args: Prisma.DepartementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartement>
          }
          groupBy: {
            args: Prisma.DepartementGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartementGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartementCountArgs<ExtArgs>
            result: $Utils.Optional<DepartementCountAggregateOutputType> | number
          }
        }
      }
      Utilisateur: {
        payload: Prisma.$UtilisateurPayload<ExtArgs>
        fields: Prisma.UtilisateurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UtilisateurFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UtilisateurFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          findFirst: {
            args: Prisma.UtilisateurFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UtilisateurFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          findMany: {
            args: Prisma.UtilisateurFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>[]
          }
          create: {
            args: Prisma.UtilisateurCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          createMany: {
            args: Prisma.UtilisateurCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UtilisateurCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>[]
          }
          delete: {
            args: Prisma.UtilisateurDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          update: {
            args: Prisma.UtilisateurUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          deleteMany: {
            args: Prisma.UtilisateurDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UtilisateurUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UtilisateurUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>[]
          }
          upsert: {
            args: Prisma.UtilisateurUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          aggregate: {
            args: Prisma.UtilisateurAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUtilisateur>
          }
          groupBy: {
            args: Prisma.UtilisateurGroupByArgs<ExtArgs>
            result: $Utils.Optional<UtilisateurGroupByOutputType>[]
          }
          count: {
            args: Prisma.UtilisateurCountArgs<ExtArgs>
            result: $Utils.Optional<UtilisateurCountAggregateOutputType> | number
          }
        }
      }
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
      Projet: {
        payload: Prisma.$ProjetPayload<ExtArgs>
        fields: Prisma.ProjetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetPayload>
          }
          findFirst: {
            args: Prisma.ProjetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetPayload>
          }
          findMany: {
            args: Prisma.ProjetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetPayload>[]
          }
          create: {
            args: Prisma.ProjetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetPayload>
          }
          createMany: {
            args: Prisma.ProjetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetPayload>[]
          }
          delete: {
            args: Prisma.ProjetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetPayload>
          }
          update: {
            args: Prisma.ProjetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetPayload>
          }
          deleteMany: {
            args: Prisma.ProjetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetPayload>[]
          }
          upsert: {
            args: Prisma.ProjetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetPayload>
          }
          aggregate: {
            args: Prisma.ProjetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjet>
          }
          groupBy: {
            args: Prisma.ProjetGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjetGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjetCountArgs<ExtArgs>
            result: $Utils.Optional<ProjetCountAggregateOutputType> | number
          }
        }
      }
      Tache: {
        payload: Prisma.$TachePayload<ExtArgs>
        fields: Prisma.TacheFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TacheFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TachePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TacheFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TachePayload>
          }
          findFirst: {
            args: Prisma.TacheFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TachePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TacheFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TachePayload>
          }
          findMany: {
            args: Prisma.TacheFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TachePayload>[]
          }
          create: {
            args: Prisma.TacheCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TachePayload>
          }
          createMany: {
            args: Prisma.TacheCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TacheCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TachePayload>[]
          }
          delete: {
            args: Prisma.TacheDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TachePayload>
          }
          update: {
            args: Prisma.TacheUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TachePayload>
          }
          deleteMany: {
            args: Prisma.TacheDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TacheUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TacheUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TachePayload>[]
          }
          upsert: {
            args: Prisma.TacheUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TachePayload>
          }
          aggregate: {
            args: Prisma.TacheAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTache>
          }
          groupBy: {
            args: Prisma.TacheGroupByArgs<ExtArgs>
            result: $Utils.Optional<TacheGroupByOutputType>[]
          }
          count: {
            args: Prisma.TacheCountArgs<ExtArgs>
            result: $Utils.Optional<TacheCountAggregateOutputType> | number
          }
        }
      }
      TacheMembre: {
        payload: Prisma.$TacheMembrePayload<ExtArgs>
        fields: Prisma.TacheMembreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TacheMembreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TacheMembrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TacheMembreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TacheMembrePayload>
          }
          findFirst: {
            args: Prisma.TacheMembreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TacheMembrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TacheMembreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TacheMembrePayload>
          }
          findMany: {
            args: Prisma.TacheMembreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TacheMembrePayload>[]
          }
          create: {
            args: Prisma.TacheMembreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TacheMembrePayload>
          }
          createMany: {
            args: Prisma.TacheMembreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TacheMembreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TacheMembrePayload>[]
          }
          delete: {
            args: Prisma.TacheMembreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TacheMembrePayload>
          }
          update: {
            args: Prisma.TacheMembreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TacheMembrePayload>
          }
          deleteMany: {
            args: Prisma.TacheMembreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TacheMembreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TacheMembreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TacheMembrePayload>[]
          }
          upsert: {
            args: Prisma.TacheMembreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TacheMembrePayload>
          }
          aggregate: {
            args: Prisma.TacheMembreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTacheMembre>
          }
          groupBy: {
            args: Prisma.TacheMembreGroupByArgs<ExtArgs>
            result: $Utils.Optional<TacheMembreGroupByOutputType>[]
          }
          count: {
            args: Prisma.TacheMembreCountArgs<ExtArgs>
            result: $Utils.Optional<TacheMembreCountAggregateOutputType> | number
          }
        }
      }
      MembreProjet: {
        payload: Prisma.$MembreProjetPayload<ExtArgs>
        fields: Prisma.MembreProjetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MembreProjetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembreProjetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MembreProjetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembreProjetPayload>
          }
          findFirst: {
            args: Prisma.MembreProjetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembreProjetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MembreProjetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembreProjetPayload>
          }
          findMany: {
            args: Prisma.MembreProjetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembreProjetPayload>[]
          }
          create: {
            args: Prisma.MembreProjetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembreProjetPayload>
          }
          createMany: {
            args: Prisma.MembreProjetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MembreProjetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembreProjetPayload>[]
          }
          delete: {
            args: Prisma.MembreProjetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembreProjetPayload>
          }
          update: {
            args: Prisma.MembreProjetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembreProjetPayload>
          }
          deleteMany: {
            args: Prisma.MembreProjetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MembreProjetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MembreProjetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembreProjetPayload>[]
          }
          upsert: {
            args: Prisma.MembreProjetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembreProjetPayload>
          }
          aggregate: {
            args: Prisma.MembreProjetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMembreProjet>
          }
          groupBy: {
            args: Prisma.MembreProjetGroupByArgs<ExtArgs>
            result: $Utils.Optional<MembreProjetGroupByOutputType>[]
          }
          count: {
            args: Prisma.MembreProjetCountArgs<ExtArgs>
            result: $Utils.Optional<MembreProjetCountAggregateOutputType> | number
          }
        }
      }
      PartageDocument: {
        payload: Prisma.$PartageDocumentPayload<ExtArgs>
        fields: Prisma.PartageDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartageDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartageDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartageDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartageDocumentPayload>
          }
          findFirst: {
            args: Prisma.PartageDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartageDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartageDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartageDocumentPayload>
          }
          findMany: {
            args: Prisma.PartageDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartageDocumentPayload>[]
          }
          create: {
            args: Prisma.PartageDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartageDocumentPayload>
          }
          createMany: {
            args: Prisma.PartageDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PartageDocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartageDocumentPayload>[]
          }
          delete: {
            args: Prisma.PartageDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartageDocumentPayload>
          }
          update: {
            args: Prisma.PartageDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartageDocumentPayload>
          }
          deleteMany: {
            args: Prisma.PartageDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartageDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PartageDocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartageDocumentPayload>[]
          }
          upsert: {
            args: Prisma.PartageDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartageDocumentPayload>
          }
          aggregate: {
            args: Prisma.PartageDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePartageDocument>
          }
          groupBy: {
            args: Prisma.PartageDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartageDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartageDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<PartageDocumentCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    departement?: DepartementOmit
    utilisateur?: UtilisateurOmit
    document?: DocumentOmit
    projet?: ProjetOmit
    tache?: TacheOmit
    tacheMembre?: TacheMembreOmit
    membreProjet?: MembreProjetOmit
    partageDocument?: PartageDocumentOmit
    notification?: NotificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DepartementCountOutputType
   */

  export type DepartementCountOutputType = {
    projets: number
    utilisateurs: number
    partages: number
  }

  export type DepartementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projets?: boolean | DepartementCountOutputTypeCountProjetsArgs
    utilisateurs?: boolean | DepartementCountOutputTypeCountUtilisateursArgs
    partages?: boolean | DepartementCountOutputTypeCountPartagesArgs
  }

  // Custom InputTypes
  /**
   * DepartementCountOutputType without action
   */
  export type DepartementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartementCountOutputType
     */
    select?: DepartementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartementCountOutputType without action
   */
  export type DepartementCountOutputTypeCountProjetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjetWhereInput
  }

  /**
   * DepartementCountOutputType without action
   */
  export type DepartementCountOutputTypeCountUtilisateursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UtilisateurWhereInput
  }

  /**
   * DepartementCountOutputType without action
   */
  export type DepartementCountOutputTypeCountPartagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartageDocumentWhereInput
  }


  /**
   * Count Type UtilisateurCountOutputType
   */

  export type UtilisateurCountOutputType = {
    projets: number
    taches: number
    partages: number
    partagesEnTantQuePartageur: number
    notifications: number
  }

  export type UtilisateurCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projets?: boolean | UtilisateurCountOutputTypeCountProjetsArgs
    taches?: boolean | UtilisateurCountOutputTypeCountTachesArgs
    partages?: boolean | UtilisateurCountOutputTypeCountPartagesArgs
    partagesEnTantQuePartageur?: boolean | UtilisateurCountOutputTypeCountPartagesEnTantQuePartageurArgs
    notifications?: boolean | UtilisateurCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtilisateurCountOutputType
     */
    select?: UtilisateurCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountProjetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembreProjetWhereInput
  }

  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountTachesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TacheMembreWhereInput
  }

  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountPartagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartageDocumentWhereInput
  }

  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountPartagesEnTantQuePartageurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartageDocumentWhereInput
  }

  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type DocumentCountOutputType
   */

  export type DocumentCountOutputType = {
    partages: number
    notifications: number
  }

  export type DocumentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partages?: boolean | DocumentCountOutputTypeCountPartagesArgs
    notifications?: boolean | DocumentCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCountOutputType
     */
    select?: DocumentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeCountPartagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartageDocumentWhereInput
  }

  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type ProjetCountOutputType
   */

  export type ProjetCountOutputType = {
    membres: number
    taches: number
    partages: number
  }

  export type ProjetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    membres?: boolean | ProjetCountOutputTypeCountMembresArgs
    taches?: boolean | ProjetCountOutputTypeCountTachesArgs
    partages?: boolean | ProjetCountOutputTypeCountPartagesArgs
  }

  // Custom InputTypes
  /**
   * ProjetCountOutputType without action
   */
  export type ProjetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjetCountOutputType
     */
    select?: ProjetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjetCountOutputType without action
   */
  export type ProjetCountOutputTypeCountMembresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembreProjetWhereInput
  }

  /**
   * ProjetCountOutputType without action
   */
  export type ProjetCountOutputTypeCountTachesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TacheWhereInput
  }

  /**
   * ProjetCountOutputType without action
   */
  export type ProjetCountOutputTypeCountPartagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartageDocumentWhereInput
  }


  /**
   * Count Type TacheCountOutputType
   */

  export type TacheCountOutputType = {
    tacheMembres: number
  }

  export type TacheCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tacheMembres?: boolean | TacheCountOutputTypeCountTacheMembresArgs
  }

  // Custom InputTypes
  /**
   * TacheCountOutputType without action
   */
  export type TacheCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TacheCountOutputType
     */
    select?: TacheCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TacheCountOutputType without action
   */
  export type TacheCountOutputTypeCountTacheMembresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TacheMembreWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Departement
   */

  export type AggregateDepartement = {
    _count: DepartementCountAggregateOutputType | null
    _avg: DepartementAvgAggregateOutputType | null
    _sum: DepartementSumAggregateOutputType | null
    _min: DepartementMinAggregateOutputType | null
    _max: DepartementMaxAggregateOutputType | null
  }

  export type DepartementAvgAggregateOutputType = {
    id: number | null
  }

  export type DepartementSumAggregateOutputType = {
    id: number | null
  }

  export type DepartementMinAggregateOutputType = {
    id: number | null
    nom: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepartementMaxAggregateOutputType = {
    id: number | null
    nom: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepartementCountAggregateOutputType = {
    id: number
    nom: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DepartementAvgAggregateInputType = {
    id?: true
  }

  export type DepartementSumAggregateInputType = {
    id?: true
  }

  export type DepartementMinAggregateInputType = {
    id?: true
    nom?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepartementMaxAggregateInputType = {
    id?: true
    nom?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepartementCountAggregateInputType = {
    id?: true
    nom?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DepartementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departement to aggregate.
     */
    where?: DepartementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departements to fetch.
     */
    orderBy?: DepartementOrderByWithRelationInput | DepartementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departements
    **/
    _count?: true | DepartementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepartementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepartementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartementMaxAggregateInputType
  }

  export type GetDepartementAggregateType<T extends DepartementAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartement[P]>
      : GetScalarType<T[P], AggregateDepartement[P]>
  }




  export type DepartementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartementWhereInput
    orderBy?: DepartementOrderByWithAggregationInput | DepartementOrderByWithAggregationInput[]
    by: DepartementScalarFieldEnum[] | DepartementScalarFieldEnum
    having?: DepartementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartementCountAggregateInputType | true
    _avg?: DepartementAvgAggregateInputType
    _sum?: DepartementSumAggregateInputType
    _min?: DepartementMinAggregateInputType
    _max?: DepartementMaxAggregateInputType
  }

  export type DepartementGroupByOutputType = {
    id: number
    nom: string
    createdAt: Date
    updatedAt: Date
    _count: DepartementCountAggregateOutputType | null
    _avg: DepartementAvgAggregateOutputType | null
    _sum: DepartementSumAggregateOutputType | null
    _min: DepartementMinAggregateOutputType | null
    _max: DepartementMaxAggregateOutputType | null
  }

  type GetDepartementGroupByPayload<T extends DepartementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartementGroupByOutputType[P]>
            : GetScalarType<T[P], DepartementGroupByOutputType[P]>
        }
      >
    >


  export type DepartementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projets?: boolean | Departement$projetsArgs<ExtArgs>
    utilisateurs?: boolean | Departement$utilisateursArgs<ExtArgs>
    partages?: boolean | Departement$partagesArgs<ExtArgs>
    _count?: boolean | DepartementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["departement"]>

  export type DepartementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["departement"]>

  export type DepartementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["departement"]>

  export type DepartementSelectScalar = {
    id?: boolean
    nom?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DepartementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "createdAt" | "updatedAt", ExtArgs["result"]["departement"]>
  export type DepartementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projets?: boolean | Departement$projetsArgs<ExtArgs>
    utilisateurs?: boolean | Departement$utilisateursArgs<ExtArgs>
    partages?: boolean | Departement$partagesArgs<ExtArgs>
    _count?: boolean | DepartementCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DepartementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DepartementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Departement"
    objects: {
      projets: Prisma.$ProjetPayload<ExtArgs>[]
      utilisateurs: Prisma.$UtilisateurPayload<ExtArgs>[]
      partages: Prisma.$PartageDocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["departement"]>
    composites: {}
  }

  type DepartementGetPayload<S extends boolean | null | undefined | DepartementDefaultArgs> = $Result.GetResult<Prisma.$DepartementPayload, S>

  type DepartementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartementCountAggregateInputType | true
    }

  export interface DepartementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Departement'], meta: { name: 'Departement' } }
    /**
     * Find zero or one Departement that matches the filter.
     * @param {DepartementFindUniqueArgs} args - Arguments to find a Departement
     * @example
     * // Get one Departement
     * const departement = await prisma.departement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartementFindUniqueArgs>(args: SelectSubset<T, DepartementFindUniqueArgs<ExtArgs>>): Prisma__DepartementClient<$Result.GetResult<Prisma.$DepartementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Departement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartementFindUniqueOrThrowArgs} args - Arguments to find a Departement
     * @example
     * // Get one Departement
     * const departement = await prisma.departement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartementFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartementClient<$Result.GetResult<Prisma.$DepartementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Departement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartementFindFirstArgs} args - Arguments to find a Departement
     * @example
     * // Get one Departement
     * const departement = await prisma.departement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartementFindFirstArgs>(args?: SelectSubset<T, DepartementFindFirstArgs<ExtArgs>>): Prisma__DepartementClient<$Result.GetResult<Prisma.$DepartementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Departement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartementFindFirstOrThrowArgs} args - Arguments to find a Departement
     * @example
     * // Get one Departement
     * const departement = await prisma.departement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartementFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartementFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartementClient<$Result.GetResult<Prisma.$DepartementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departements
     * const departements = await prisma.departement.findMany()
     * 
     * // Get first 10 Departements
     * const departements = await prisma.departement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departementWithIdOnly = await prisma.departement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepartementFindManyArgs>(args?: SelectSubset<T, DepartementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Departement.
     * @param {DepartementCreateArgs} args - Arguments to create a Departement.
     * @example
     * // Create one Departement
     * const Departement = await prisma.departement.create({
     *   data: {
     *     // ... data to create a Departement
     *   }
     * })
     * 
     */
    create<T extends DepartementCreateArgs>(args: SelectSubset<T, DepartementCreateArgs<ExtArgs>>): Prisma__DepartementClient<$Result.GetResult<Prisma.$DepartementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departements.
     * @param {DepartementCreateManyArgs} args - Arguments to create many Departements.
     * @example
     * // Create many Departements
     * const departement = await prisma.departement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartementCreateManyArgs>(args?: SelectSubset<T, DepartementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departements and returns the data saved in the database.
     * @param {DepartementCreateManyAndReturnArgs} args - Arguments to create many Departements.
     * @example
     * // Create many Departements
     * const departement = await prisma.departement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departements and only return the `id`
     * const departementWithIdOnly = await prisma.departement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartementCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Departement.
     * @param {DepartementDeleteArgs} args - Arguments to delete one Departement.
     * @example
     * // Delete one Departement
     * const Departement = await prisma.departement.delete({
     *   where: {
     *     // ... filter to delete one Departement
     *   }
     * })
     * 
     */
    delete<T extends DepartementDeleteArgs>(args: SelectSubset<T, DepartementDeleteArgs<ExtArgs>>): Prisma__DepartementClient<$Result.GetResult<Prisma.$DepartementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Departement.
     * @param {DepartementUpdateArgs} args - Arguments to update one Departement.
     * @example
     * // Update one Departement
     * const departement = await prisma.departement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartementUpdateArgs>(args: SelectSubset<T, DepartementUpdateArgs<ExtArgs>>): Prisma__DepartementClient<$Result.GetResult<Prisma.$DepartementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departements.
     * @param {DepartementDeleteManyArgs} args - Arguments to filter Departements to delete.
     * @example
     * // Delete a few Departements
     * const { count } = await prisma.departement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartementDeleteManyArgs>(args?: SelectSubset<T, DepartementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departements
     * const departement = await prisma.departement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartementUpdateManyArgs>(args: SelectSubset<T, DepartementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departements and returns the data updated in the database.
     * @param {DepartementUpdateManyAndReturnArgs} args - Arguments to update many Departements.
     * @example
     * // Update many Departements
     * const departement = await prisma.departement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Departements and only return the `id`
     * const departementWithIdOnly = await prisma.departement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DepartementUpdateManyAndReturnArgs>(args: SelectSubset<T, DepartementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Departement.
     * @param {DepartementUpsertArgs} args - Arguments to update or create a Departement.
     * @example
     * // Update or create a Departement
     * const departement = await prisma.departement.upsert({
     *   create: {
     *     // ... data to create a Departement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Departement we want to update
     *   }
     * })
     */
    upsert<T extends DepartementUpsertArgs>(args: SelectSubset<T, DepartementUpsertArgs<ExtArgs>>): Prisma__DepartementClient<$Result.GetResult<Prisma.$DepartementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartementCountArgs} args - Arguments to filter Departements to count.
     * @example
     * // Count the number of Departements
     * const count = await prisma.departement.count({
     *   where: {
     *     // ... the filter for the Departements we want to count
     *   }
     * })
    **/
    count<T extends DepartementCountArgs>(
      args?: Subset<T, DepartementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Departement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepartementAggregateArgs>(args: Subset<T, DepartementAggregateArgs>): Prisma.PrismaPromise<GetDepartementAggregateType<T>>

    /**
     * Group by Departement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DepartementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartementGroupByArgs['orderBy'] }
        : { orderBy?: DepartementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DepartementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Departement model
   */
  readonly fields: DepartementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Departement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projets<T extends Departement$projetsArgs<ExtArgs> = {}>(args?: Subset<T, Departement$projetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    utilisateurs<T extends Departement$utilisateursArgs<ExtArgs> = {}>(args?: Subset<T, Departement$utilisateursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    partages<T extends Departement$partagesArgs<ExtArgs> = {}>(args?: Subset<T, Departement$partagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartageDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Departement model
   */
  interface DepartementFieldRefs {
    readonly id: FieldRef<"Departement", 'Int'>
    readonly nom: FieldRef<"Departement", 'String'>
    readonly createdAt: FieldRef<"Departement", 'DateTime'>
    readonly updatedAt: FieldRef<"Departement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Departement findUnique
   */
  export type DepartementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departement
     */
    select?: DepartementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departement
     */
    omit?: DepartementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartementInclude<ExtArgs> | null
    /**
     * Filter, which Departement to fetch.
     */
    where: DepartementWhereUniqueInput
  }

  /**
   * Departement findUniqueOrThrow
   */
  export type DepartementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departement
     */
    select?: DepartementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departement
     */
    omit?: DepartementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartementInclude<ExtArgs> | null
    /**
     * Filter, which Departement to fetch.
     */
    where: DepartementWhereUniqueInput
  }

  /**
   * Departement findFirst
   */
  export type DepartementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departement
     */
    select?: DepartementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departement
     */
    omit?: DepartementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartementInclude<ExtArgs> | null
    /**
     * Filter, which Departement to fetch.
     */
    where?: DepartementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departements to fetch.
     */
    orderBy?: DepartementOrderByWithRelationInput | DepartementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departements.
     */
    cursor?: DepartementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departements.
     */
    distinct?: DepartementScalarFieldEnum | DepartementScalarFieldEnum[]
  }

  /**
   * Departement findFirstOrThrow
   */
  export type DepartementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departement
     */
    select?: DepartementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departement
     */
    omit?: DepartementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartementInclude<ExtArgs> | null
    /**
     * Filter, which Departement to fetch.
     */
    where?: DepartementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departements to fetch.
     */
    orderBy?: DepartementOrderByWithRelationInput | DepartementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departements.
     */
    cursor?: DepartementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departements.
     */
    distinct?: DepartementScalarFieldEnum | DepartementScalarFieldEnum[]
  }

  /**
   * Departement findMany
   */
  export type DepartementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departement
     */
    select?: DepartementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departement
     */
    omit?: DepartementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartementInclude<ExtArgs> | null
    /**
     * Filter, which Departements to fetch.
     */
    where?: DepartementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departements to fetch.
     */
    orderBy?: DepartementOrderByWithRelationInput | DepartementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departements.
     */
    cursor?: DepartementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departements.
     */
    skip?: number
    distinct?: DepartementScalarFieldEnum | DepartementScalarFieldEnum[]
  }

  /**
   * Departement create
   */
  export type DepartementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departement
     */
    select?: DepartementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departement
     */
    omit?: DepartementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartementInclude<ExtArgs> | null
    /**
     * The data needed to create a Departement.
     */
    data: XOR<DepartementCreateInput, DepartementUncheckedCreateInput>
  }

  /**
   * Departement createMany
   */
  export type DepartementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departements.
     */
    data: DepartementCreateManyInput | DepartementCreateManyInput[]
  }

  /**
   * Departement createManyAndReturn
   */
  export type DepartementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departement
     */
    select?: DepartementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Departement
     */
    omit?: DepartementOmit<ExtArgs> | null
    /**
     * The data used to create many Departements.
     */
    data: DepartementCreateManyInput | DepartementCreateManyInput[]
  }

  /**
   * Departement update
   */
  export type DepartementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departement
     */
    select?: DepartementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departement
     */
    omit?: DepartementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartementInclude<ExtArgs> | null
    /**
     * The data needed to update a Departement.
     */
    data: XOR<DepartementUpdateInput, DepartementUncheckedUpdateInput>
    /**
     * Choose, which Departement to update.
     */
    where: DepartementWhereUniqueInput
  }

  /**
   * Departement updateMany
   */
  export type DepartementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departements.
     */
    data: XOR<DepartementUpdateManyMutationInput, DepartementUncheckedUpdateManyInput>
    /**
     * Filter which Departements to update
     */
    where?: DepartementWhereInput
    /**
     * Limit how many Departements to update.
     */
    limit?: number
  }

  /**
   * Departement updateManyAndReturn
   */
  export type DepartementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departement
     */
    select?: DepartementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Departement
     */
    omit?: DepartementOmit<ExtArgs> | null
    /**
     * The data used to update Departements.
     */
    data: XOR<DepartementUpdateManyMutationInput, DepartementUncheckedUpdateManyInput>
    /**
     * Filter which Departements to update
     */
    where?: DepartementWhereInput
    /**
     * Limit how many Departements to update.
     */
    limit?: number
  }

  /**
   * Departement upsert
   */
  export type DepartementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departement
     */
    select?: DepartementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departement
     */
    omit?: DepartementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartementInclude<ExtArgs> | null
    /**
     * The filter to search for the Departement to update in case it exists.
     */
    where: DepartementWhereUniqueInput
    /**
     * In case the Departement found by the `where` argument doesn't exist, create a new Departement with this data.
     */
    create: XOR<DepartementCreateInput, DepartementUncheckedCreateInput>
    /**
     * In case the Departement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartementUpdateInput, DepartementUncheckedUpdateInput>
  }

  /**
   * Departement delete
   */
  export type DepartementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departement
     */
    select?: DepartementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departement
     */
    omit?: DepartementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartementInclude<ExtArgs> | null
    /**
     * Filter which Departement to delete.
     */
    where: DepartementWhereUniqueInput
  }

  /**
   * Departement deleteMany
   */
  export type DepartementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departements to delete
     */
    where?: DepartementWhereInput
    /**
     * Limit how many Departements to delete.
     */
    limit?: number
  }

  /**
   * Departement.projets
   */
  export type Departement$projetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projet
     */
    select?: ProjetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projet
     */
    omit?: ProjetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetInclude<ExtArgs> | null
    where?: ProjetWhereInput
    orderBy?: ProjetOrderByWithRelationInput | ProjetOrderByWithRelationInput[]
    cursor?: ProjetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjetScalarFieldEnum | ProjetScalarFieldEnum[]
  }

  /**
   * Departement.utilisateurs
   */
  export type Departement$utilisateursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    where?: UtilisateurWhereInput
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    cursor?: UtilisateurWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Departement.partages
   */
  export type Departement$partagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartageDocument
     */
    select?: PartageDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartageDocument
     */
    omit?: PartageDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartageDocumentInclude<ExtArgs> | null
    where?: PartageDocumentWhereInput
    orderBy?: PartageDocumentOrderByWithRelationInput | PartageDocumentOrderByWithRelationInput[]
    cursor?: PartageDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartageDocumentScalarFieldEnum | PartageDocumentScalarFieldEnum[]
  }

  /**
   * Departement without action
   */
  export type DepartementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departement
     */
    select?: DepartementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departement
     */
    omit?: DepartementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartementInclude<ExtArgs> | null
  }


  /**
   * Model Utilisateur
   */

  export type AggregateUtilisateur = {
    _count: UtilisateurCountAggregateOutputType | null
    _avg: UtilisateurAvgAggregateOutputType | null
    _sum: UtilisateurSumAggregateOutputType | null
    _min: UtilisateurMinAggregateOutputType | null
    _max: UtilisateurMaxAggregateOutputType | null
  }

  export type UtilisateurAvgAggregateOutputType = {
    id: number | null
    departementId: number | null
  }

  export type UtilisateurSumAggregateOutputType = {
    id: number | null
    departementId: number | null
  }

  export type UtilisateurMinAggregateOutputType = {
    id: number | null
    nom: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    departementId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UtilisateurMaxAggregateOutputType = {
    id: number | null
    nom: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    departementId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UtilisateurCountAggregateOutputType = {
    id: number
    nom: number
    email: number
    password: number
    role: number
    departementId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UtilisateurAvgAggregateInputType = {
    id?: true
    departementId?: true
  }

  export type UtilisateurSumAggregateInputType = {
    id?: true
    departementId?: true
  }

  export type UtilisateurMinAggregateInputType = {
    id?: true
    nom?: true
    email?: true
    password?: true
    role?: true
    departementId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UtilisateurMaxAggregateInputType = {
    id?: true
    nom?: true
    email?: true
    password?: true
    role?: true
    departementId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UtilisateurCountAggregateInputType = {
    id?: true
    nom?: true
    email?: true
    password?: true
    role?: true
    departementId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UtilisateurAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utilisateur to aggregate.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Utilisateurs
    **/
    _count?: true | UtilisateurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UtilisateurAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UtilisateurSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UtilisateurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UtilisateurMaxAggregateInputType
  }

  export type GetUtilisateurAggregateType<T extends UtilisateurAggregateArgs> = {
        [P in keyof T & keyof AggregateUtilisateur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUtilisateur[P]>
      : GetScalarType<T[P], AggregateUtilisateur[P]>
  }




  export type UtilisateurGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UtilisateurWhereInput
    orderBy?: UtilisateurOrderByWithAggregationInput | UtilisateurOrderByWithAggregationInput[]
    by: UtilisateurScalarFieldEnum[] | UtilisateurScalarFieldEnum
    having?: UtilisateurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UtilisateurCountAggregateInputType | true
    _avg?: UtilisateurAvgAggregateInputType
    _sum?: UtilisateurSumAggregateInputType
    _min?: UtilisateurMinAggregateInputType
    _max?: UtilisateurMaxAggregateInputType
  }

  export type UtilisateurGroupByOutputType = {
    id: number
    nom: string
    email: string
    password: string
    role: $Enums.Role
    departementId: number | null
    createdAt: Date
    updatedAt: Date
    _count: UtilisateurCountAggregateOutputType | null
    _avg: UtilisateurAvgAggregateOutputType | null
    _sum: UtilisateurSumAggregateOutputType | null
    _min: UtilisateurMinAggregateOutputType | null
    _max: UtilisateurMaxAggregateOutputType | null
  }

  type GetUtilisateurGroupByPayload<T extends UtilisateurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UtilisateurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UtilisateurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UtilisateurGroupByOutputType[P]>
            : GetScalarType<T[P], UtilisateurGroupByOutputType[P]>
        }
      >
    >


  export type UtilisateurSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    departementId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    departement?: boolean | Utilisateur$departementArgs<ExtArgs>
    projets?: boolean | Utilisateur$projetsArgs<ExtArgs>
    taches?: boolean | Utilisateur$tachesArgs<ExtArgs>
    partages?: boolean | Utilisateur$partagesArgs<ExtArgs>
    partagesEnTantQuePartageur?: boolean | Utilisateur$partagesEnTantQuePartageurArgs<ExtArgs>
    notifications?: boolean | Utilisateur$notificationsArgs<ExtArgs>
    _count?: boolean | UtilisateurCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["utilisateur"]>

  export type UtilisateurSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    departementId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    departement?: boolean | Utilisateur$departementArgs<ExtArgs>
  }, ExtArgs["result"]["utilisateur"]>

  export type UtilisateurSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    departementId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    departement?: boolean | Utilisateur$departementArgs<ExtArgs>
  }, ExtArgs["result"]["utilisateur"]>

  export type UtilisateurSelectScalar = {
    id?: boolean
    nom?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    departementId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UtilisateurOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "email" | "password" | "role" | "departementId" | "createdAt" | "updatedAt", ExtArgs["result"]["utilisateur"]>
  export type UtilisateurInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departement?: boolean | Utilisateur$departementArgs<ExtArgs>
    projets?: boolean | Utilisateur$projetsArgs<ExtArgs>
    taches?: boolean | Utilisateur$tachesArgs<ExtArgs>
    partages?: boolean | Utilisateur$partagesArgs<ExtArgs>
    partagesEnTantQuePartageur?: boolean | Utilisateur$partagesEnTantQuePartageurArgs<ExtArgs>
    notifications?: boolean | Utilisateur$notificationsArgs<ExtArgs>
    _count?: boolean | UtilisateurCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UtilisateurIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departement?: boolean | Utilisateur$departementArgs<ExtArgs>
  }
  export type UtilisateurIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departement?: boolean | Utilisateur$departementArgs<ExtArgs>
  }

  export type $UtilisateurPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Utilisateur"
    objects: {
      departement: Prisma.$DepartementPayload<ExtArgs> | null
      projets: Prisma.$MembreProjetPayload<ExtArgs>[]
      taches: Prisma.$TacheMembrePayload<ExtArgs>[]
      partages: Prisma.$PartageDocumentPayload<ExtArgs>[]
      partagesEnTantQuePartageur: Prisma.$PartageDocumentPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string
      email: string
      password: string
      role: $Enums.Role
      departementId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["utilisateur"]>
    composites: {}
  }

  type UtilisateurGetPayload<S extends boolean | null | undefined | UtilisateurDefaultArgs> = $Result.GetResult<Prisma.$UtilisateurPayload, S>

  type UtilisateurCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UtilisateurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UtilisateurCountAggregateInputType | true
    }

  export interface UtilisateurDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Utilisateur'], meta: { name: 'Utilisateur' } }
    /**
     * Find zero or one Utilisateur that matches the filter.
     * @param {UtilisateurFindUniqueArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UtilisateurFindUniqueArgs>(args: SelectSubset<T, UtilisateurFindUniqueArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Utilisateur that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UtilisateurFindUniqueOrThrowArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UtilisateurFindUniqueOrThrowArgs>(args: SelectSubset<T, UtilisateurFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilisateur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindFirstArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UtilisateurFindFirstArgs>(args?: SelectSubset<T, UtilisateurFindFirstArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilisateur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindFirstOrThrowArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UtilisateurFindFirstOrThrowArgs>(args?: SelectSubset<T, UtilisateurFindFirstOrThrowArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Utilisateurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Utilisateurs
     * const utilisateurs = await prisma.utilisateur.findMany()
     * 
     * // Get first 10 Utilisateurs
     * const utilisateurs = await prisma.utilisateur.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const utilisateurWithIdOnly = await prisma.utilisateur.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UtilisateurFindManyArgs>(args?: SelectSubset<T, UtilisateurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Utilisateur.
     * @param {UtilisateurCreateArgs} args - Arguments to create a Utilisateur.
     * @example
     * // Create one Utilisateur
     * const Utilisateur = await prisma.utilisateur.create({
     *   data: {
     *     // ... data to create a Utilisateur
     *   }
     * })
     * 
     */
    create<T extends UtilisateurCreateArgs>(args: SelectSubset<T, UtilisateurCreateArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Utilisateurs.
     * @param {UtilisateurCreateManyArgs} args - Arguments to create many Utilisateurs.
     * @example
     * // Create many Utilisateurs
     * const utilisateur = await prisma.utilisateur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UtilisateurCreateManyArgs>(args?: SelectSubset<T, UtilisateurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Utilisateurs and returns the data saved in the database.
     * @param {UtilisateurCreateManyAndReturnArgs} args - Arguments to create many Utilisateurs.
     * @example
     * // Create many Utilisateurs
     * const utilisateur = await prisma.utilisateur.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Utilisateurs and only return the `id`
     * const utilisateurWithIdOnly = await prisma.utilisateur.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UtilisateurCreateManyAndReturnArgs>(args?: SelectSubset<T, UtilisateurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Utilisateur.
     * @param {UtilisateurDeleteArgs} args - Arguments to delete one Utilisateur.
     * @example
     * // Delete one Utilisateur
     * const Utilisateur = await prisma.utilisateur.delete({
     *   where: {
     *     // ... filter to delete one Utilisateur
     *   }
     * })
     * 
     */
    delete<T extends UtilisateurDeleteArgs>(args: SelectSubset<T, UtilisateurDeleteArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Utilisateur.
     * @param {UtilisateurUpdateArgs} args - Arguments to update one Utilisateur.
     * @example
     * // Update one Utilisateur
     * const utilisateur = await prisma.utilisateur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UtilisateurUpdateArgs>(args: SelectSubset<T, UtilisateurUpdateArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Utilisateurs.
     * @param {UtilisateurDeleteManyArgs} args - Arguments to filter Utilisateurs to delete.
     * @example
     * // Delete a few Utilisateurs
     * const { count } = await prisma.utilisateur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UtilisateurDeleteManyArgs>(args?: SelectSubset<T, UtilisateurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Utilisateurs
     * const utilisateur = await prisma.utilisateur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UtilisateurUpdateManyArgs>(args: SelectSubset<T, UtilisateurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilisateurs and returns the data updated in the database.
     * @param {UtilisateurUpdateManyAndReturnArgs} args - Arguments to update many Utilisateurs.
     * @example
     * // Update many Utilisateurs
     * const utilisateur = await prisma.utilisateur.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Utilisateurs and only return the `id`
     * const utilisateurWithIdOnly = await prisma.utilisateur.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UtilisateurUpdateManyAndReturnArgs>(args: SelectSubset<T, UtilisateurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Utilisateur.
     * @param {UtilisateurUpsertArgs} args - Arguments to update or create a Utilisateur.
     * @example
     * // Update or create a Utilisateur
     * const utilisateur = await prisma.utilisateur.upsert({
     *   create: {
     *     // ... data to create a Utilisateur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Utilisateur we want to update
     *   }
     * })
     */
    upsert<T extends UtilisateurUpsertArgs>(args: SelectSubset<T, UtilisateurUpsertArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurCountArgs} args - Arguments to filter Utilisateurs to count.
     * @example
     * // Count the number of Utilisateurs
     * const count = await prisma.utilisateur.count({
     *   where: {
     *     // ... the filter for the Utilisateurs we want to count
     *   }
     * })
    **/
    count<T extends UtilisateurCountArgs>(
      args?: Subset<T, UtilisateurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UtilisateurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Utilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UtilisateurAggregateArgs>(args: Subset<T, UtilisateurAggregateArgs>): Prisma.PrismaPromise<GetUtilisateurAggregateType<T>>

    /**
     * Group by Utilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UtilisateurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UtilisateurGroupByArgs['orderBy'] }
        : { orderBy?: UtilisateurGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UtilisateurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUtilisateurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Utilisateur model
   */
  readonly fields: UtilisateurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Utilisateur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UtilisateurClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    departement<T extends Utilisateur$departementArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$departementArgs<ExtArgs>>): Prisma__DepartementClient<$Result.GetResult<Prisma.$DepartementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    projets<T extends Utilisateur$projetsArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$projetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembreProjetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    taches<T extends Utilisateur$tachesArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$tachesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TacheMembrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    partages<T extends Utilisateur$partagesArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$partagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartageDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    partagesEnTantQuePartageur<T extends Utilisateur$partagesEnTantQuePartageurArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$partagesEnTantQuePartageurArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartageDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Utilisateur$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Utilisateur model
   */
  interface UtilisateurFieldRefs {
    readonly id: FieldRef<"Utilisateur", 'Int'>
    readonly nom: FieldRef<"Utilisateur", 'String'>
    readonly email: FieldRef<"Utilisateur", 'String'>
    readonly password: FieldRef<"Utilisateur", 'String'>
    readonly role: FieldRef<"Utilisateur", 'Role'>
    readonly departementId: FieldRef<"Utilisateur", 'Int'>
    readonly createdAt: FieldRef<"Utilisateur", 'DateTime'>
    readonly updatedAt: FieldRef<"Utilisateur", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Utilisateur findUnique
   */
  export type UtilisateurFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur findUniqueOrThrow
   */
  export type UtilisateurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur findFirst
   */
  export type UtilisateurFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utilisateurs.
     */
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Utilisateur findFirstOrThrow
   */
  export type UtilisateurFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utilisateurs.
     */
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Utilisateur findMany
   */
  export type UtilisateurFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateurs to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Utilisateur create
   */
  export type UtilisateurCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The data needed to create a Utilisateur.
     */
    data: XOR<UtilisateurCreateInput, UtilisateurUncheckedCreateInput>
  }

  /**
   * Utilisateur createMany
   */
  export type UtilisateurCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Utilisateurs.
     */
    data: UtilisateurCreateManyInput | UtilisateurCreateManyInput[]
  }

  /**
   * Utilisateur createManyAndReturn
   */
  export type UtilisateurCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * The data used to create many Utilisateurs.
     */
    data: UtilisateurCreateManyInput | UtilisateurCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Utilisateur update
   */
  export type UtilisateurUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The data needed to update a Utilisateur.
     */
    data: XOR<UtilisateurUpdateInput, UtilisateurUncheckedUpdateInput>
    /**
     * Choose, which Utilisateur to update.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur updateMany
   */
  export type UtilisateurUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Utilisateurs.
     */
    data: XOR<UtilisateurUpdateManyMutationInput, UtilisateurUncheckedUpdateManyInput>
    /**
     * Filter which Utilisateurs to update
     */
    where?: UtilisateurWhereInput
    /**
     * Limit how many Utilisateurs to update.
     */
    limit?: number
  }

  /**
   * Utilisateur updateManyAndReturn
   */
  export type UtilisateurUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * The data used to update Utilisateurs.
     */
    data: XOR<UtilisateurUpdateManyMutationInput, UtilisateurUncheckedUpdateManyInput>
    /**
     * Filter which Utilisateurs to update
     */
    where?: UtilisateurWhereInput
    /**
     * Limit how many Utilisateurs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Utilisateur upsert
   */
  export type UtilisateurUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The filter to search for the Utilisateur to update in case it exists.
     */
    where: UtilisateurWhereUniqueInput
    /**
     * In case the Utilisateur found by the `where` argument doesn't exist, create a new Utilisateur with this data.
     */
    create: XOR<UtilisateurCreateInput, UtilisateurUncheckedCreateInput>
    /**
     * In case the Utilisateur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UtilisateurUpdateInput, UtilisateurUncheckedUpdateInput>
  }

  /**
   * Utilisateur delete
   */
  export type UtilisateurDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter which Utilisateur to delete.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur deleteMany
   */
  export type UtilisateurDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utilisateurs to delete
     */
    where?: UtilisateurWhereInput
    /**
     * Limit how many Utilisateurs to delete.
     */
    limit?: number
  }

  /**
   * Utilisateur.departement
   */
  export type Utilisateur$departementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departement
     */
    select?: DepartementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departement
     */
    omit?: DepartementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartementInclude<ExtArgs> | null
    where?: DepartementWhereInput
  }

  /**
   * Utilisateur.projets
   */
  export type Utilisateur$projetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembreProjet
     */
    select?: MembreProjetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembreProjet
     */
    omit?: MembreProjetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreProjetInclude<ExtArgs> | null
    where?: MembreProjetWhereInput
    orderBy?: MembreProjetOrderByWithRelationInput | MembreProjetOrderByWithRelationInput[]
    cursor?: MembreProjetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MembreProjetScalarFieldEnum | MembreProjetScalarFieldEnum[]
  }

  /**
   * Utilisateur.taches
   */
  export type Utilisateur$tachesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TacheMembre
     */
    select?: TacheMembreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TacheMembre
     */
    omit?: TacheMembreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TacheMembreInclude<ExtArgs> | null
    where?: TacheMembreWhereInput
    orderBy?: TacheMembreOrderByWithRelationInput | TacheMembreOrderByWithRelationInput[]
    cursor?: TacheMembreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TacheMembreScalarFieldEnum | TacheMembreScalarFieldEnum[]
  }

  /**
   * Utilisateur.partages
   */
  export type Utilisateur$partagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartageDocument
     */
    select?: PartageDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartageDocument
     */
    omit?: PartageDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartageDocumentInclude<ExtArgs> | null
    where?: PartageDocumentWhereInput
    orderBy?: PartageDocumentOrderByWithRelationInput | PartageDocumentOrderByWithRelationInput[]
    cursor?: PartageDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartageDocumentScalarFieldEnum | PartageDocumentScalarFieldEnum[]
  }

  /**
   * Utilisateur.partagesEnTantQuePartageur
   */
  export type Utilisateur$partagesEnTantQuePartageurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartageDocument
     */
    select?: PartageDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartageDocument
     */
    omit?: PartageDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartageDocumentInclude<ExtArgs> | null
    where?: PartageDocumentWhereInput
    orderBy?: PartageDocumentOrderByWithRelationInput | PartageDocumentOrderByWithRelationInput[]
    cursor?: PartageDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartageDocumentScalarFieldEnum | PartageDocumentScalarFieldEnum[]
  }

  /**
   * Utilisateur.notifications
   */
  export type Utilisateur$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Utilisateur without action
   */
  export type UtilisateurDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
  }


  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentAvgAggregateOutputType = {
    id: number | null
  }

  export type DocumentSumAggregateOutputType = {
    id: number | null
  }

  export type DocumentMinAggregateOutputType = {
    id: number | null
    titre: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: number | null
    titre: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    titre: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DocumentAvgAggregateInputType = {
    id?: true
  }

  export type DocumentSumAggregateInputType = {
    id?: true
  }

  export type DocumentMinAggregateInputType = {
    id?: true
    titre?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    titre?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    titre?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _avg?: DocumentAvgAggregateInputType
    _sum?: DocumentSumAggregateInputType
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: number
    titre: string
    description: string
    createdAt: Date
    updatedAt: Date
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    partages?: boolean | Document$partagesArgs<ExtArgs>
    notifications?: boolean | Document$notificationsArgs<ExtArgs>
    _count?: boolean | DocumentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectScalar = {
    id?: boolean
    titre?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titre" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["document"]>
  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partages?: boolean | Document$partagesArgs<ExtArgs>
    notifications?: boolean | Document$notificationsArgs<ExtArgs>
    _count?: boolean | DocumentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      partages: Prisma.$PartageDocumentPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titre: string
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {DocumentCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents and returns the data updated in the database.
     * @param {DocumentUpdateManyAndReturnArgs} args - Arguments to update many Documents.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    partages<T extends Document$partagesArgs<ExtArgs> = {}>(args?: Subset<T, Document$partagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartageDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Document$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Document$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Document model
   */
  interface DocumentFieldRefs {
    readonly id: FieldRef<"Document", 'Int'>
    readonly titre: FieldRef<"Document", 'String'>
    readonly description: FieldRef<"Document", 'String'>
    readonly createdAt: FieldRef<"Document", 'DateTime'>
    readonly updatedAt: FieldRef<"Document", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
  }

  /**
   * Document createManyAndReturn
   */
  export type DocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
  }

  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document updateManyAndReturn
   */
  export type DocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Document.partages
   */
  export type Document$partagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartageDocument
     */
    select?: PartageDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartageDocument
     */
    omit?: PartageDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartageDocumentInclude<ExtArgs> | null
    where?: PartageDocumentWhereInput
    orderBy?: PartageDocumentOrderByWithRelationInput | PartageDocumentOrderByWithRelationInput[]
    cursor?: PartageDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartageDocumentScalarFieldEnum | PartageDocumentScalarFieldEnum[]
  }

  /**
   * Document.notifications
   */
  export type Document$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
  }


  /**
   * Model Projet
   */

  export type AggregateProjet = {
    _count: ProjetCountAggregateOutputType | null
    _avg: ProjetAvgAggregateOutputType | null
    _sum: ProjetSumAggregateOutputType | null
    _min: ProjetMinAggregateOutputType | null
    _max: ProjetMaxAggregateOutputType | null
  }

  export type ProjetAvgAggregateOutputType = {
    id: number | null
    departementId: number | null
  }

  export type ProjetSumAggregateOutputType = {
    id: number | null
    departementId: number | null
  }

  export type ProjetMinAggregateOutputType = {
    id: number | null
    nom: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    departementId: number | null
  }

  export type ProjetMaxAggregateOutputType = {
    id: number | null
    nom: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    departementId: number | null
  }

  export type ProjetCountAggregateOutputType = {
    id: number
    nom: number
    description: number
    createdAt: number
    updatedAt: number
    departementId: number
    _all: number
  }


  export type ProjetAvgAggregateInputType = {
    id?: true
    departementId?: true
  }

  export type ProjetSumAggregateInputType = {
    id?: true
    departementId?: true
  }

  export type ProjetMinAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    departementId?: true
  }

  export type ProjetMaxAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    departementId?: true
  }

  export type ProjetCountAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    departementId?: true
    _all?: true
  }

  export type ProjetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projet to aggregate.
     */
    where?: ProjetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projets to fetch.
     */
    orderBy?: ProjetOrderByWithRelationInput | ProjetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projets
    **/
    _count?: true | ProjetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjetMaxAggregateInputType
  }

  export type GetProjetAggregateType<T extends ProjetAggregateArgs> = {
        [P in keyof T & keyof AggregateProjet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjet[P]>
      : GetScalarType<T[P], AggregateProjet[P]>
  }




  export type ProjetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjetWhereInput
    orderBy?: ProjetOrderByWithAggregationInput | ProjetOrderByWithAggregationInput[]
    by: ProjetScalarFieldEnum[] | ProjetScalarFieldEnum
    having?: ProjetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjetCountAggregateInputType | true
    _avg?: ProjetAvgAggregateInputType
    _sum?: ProjetSumAggregateInputType
    _min?: ProjetMinAggregateInputType
    _max?: ProjetMaxAggregateInputType
  }

  export type ProjetGroupByOutputType = {
    id: number
    nom: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    departementId: number
    _count: ProjetCountAggregateOutputType | null
    _avg: ProjetAvgAggregateOutputType | null
    _sum: ProjetSumAggregateOutputType | null
    _min: ProjetMinAggregateOutputType | null
    _max: ProjetMaxAggregateOutputType | null
  }

  type GetProjetGroupByPayload<T extends ProjetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjetGroupByOutputType[P]>
            : GetScalarType<T[P], ProjetGroupByOutputType[P]>
        }
      >
    >


  export type ProjetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    departementId?: boolean
    departement?: boolean | DepartementDefaultArgs<ExtArgs>
    membres?: boolean | Projet$membresArgs<ExtArgs>
    taches?: boolean | Projet$tachesArgs<ExtArgs>
    partages?: boolean | Projet$partagesArgs<ExtArgs>
    _count?: boolean | ProjetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projet"]>

  export type ProjetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    departementId?: boolean
    departement?: boolean | DepartementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projet"]>

  export type ProjetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    departementId?: boolean
    departement?: boolean | DepartementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projet"]>

  export type ProjetSelectScalar = {
    id?: boolean
    nom?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    departementId?: boolean
  }

  export type ProjetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "description" | "createdAt" | "updatedAt" | "departementId", ExtArgs["result"]["projet"]>
  export type ProjetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departement?: boolean | DepartementDefaultArgs<ExtArgs>
    membres?: boolean | Projet$membresArgs<ExtArgs>
    taches?: boolean | Projet$tachesArgs<ExtArgs>
    partages?: boolean | Projet$partagesArgs<ExtArgs>
    _count?: boolean | ProjetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departement?: boolean | DepartementDefaultArgs<ExtArgs>
  }
  export type ProjetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departement?: boolean | DepartementDefaultArgs<ExtArgs>
  }

  export type $ProjetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Projet"
    objects: {
      departement: Prisma.$DepartementPayload<ExtArgs>
      membres: Prisma.$MembreProjetPayload<ExtArgs>[]
      taches: Prisma.$TachePayload<ExtArgs>[]
      partages: Prisma.$PartageDocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string
      description: string | null
      createdAt: Date
      updatedAt: Date
      departementId: number
    }, ExtArgs["result"]["projet"]>
    composites: {}
  }

  type ProjetGetPayload<S extends boolean | null | undefined | ProjetDefaultArgs> = $Result.GetResult<Prisma.$ProjetPayload, S>

  type ProjetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjetCountAggregateInputType | true
    }

  export interface ProjetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Projet'], meta: { name: 'Projet' } }
    /**
     * Find zero or one Projet that matches the filter.
     * @param {ProjetFindUniqueArgs} args - Arguments to find a Projet
     * @example
     * // Get one Projet
     * const projet = await prisma.projet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjetFindUniqueArgs>(args: SelectSubset<T, ProjetFindUniqueArgs<ExtArgs>>): Prisma__ProjetClient<$Result.GetResult<Prisma.$ProjetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Projet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjetFindUniqueOrThrowArgs} args - Arguments to find a Projet
     * @example
     * // Get one Projet
     * const projet = await prisma.projet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjetFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjetClient<$Result.GetResult<Prisma.$ProjetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetFindFirstArgs} args - Arguments to find a Projet
     * @example
     * // Get one Projet
     * const projet = await prisma.projet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjetFindFirstArgs>(args?: SelectSubset<T, ProjetFindFirstArgs<ExtArgs>>): Prisma__ProjetClient<$Result.GetResult<Prisma.$ProjetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetFindFirstOrThrowArgs} args - Arguments to find a Projet
     * @example
     * // Get one Projet
     * const projet = await prisma.projet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjetFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjetFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjetClient<$Result.GetResult<Prisma.$ProjetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projets
     * const projets = await prisma.projet.findMany()
     * 
     * // Get first 10 Projets
     * const projets = await prisma.projet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projetWithIdOnly = await prisma.projet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjetFindManyArgs>(args?: SelectSubset<T, ProjetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Projet.
     * @param {ProjetCreateArgs} args - Arguments to create a Projet.
     * @example
     * // Create one Projet
     * const Projet = await prisma.projet.create({
     *   data: {
     *     // ... data to create a Projet
     *   }
     * })
     * 
     */
    create<T extends ProjetCreateArgs>(args: SelectSubset<T, ProjetCreateArgs<ExtArgs>>): Prisma__ProjetClient<$Result.GetResult<Prisma.$ProjetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projets.
     * @param {ProjetCreateManyArgs} args - Arguments to create many Projets.
     * @example
     * // Create many Projets
     * const projet = await prisma.projet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjetCreateManyArgs>(args?: SelectSubset<T, ProjetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projets and returns the data saved in the database.
     * @param {ProjetCreateManyAndReturnArgs} args - Arguments to create many Projets.
     * @example
     * // Create many Projets
     * const projet = await prisma.projet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projets and only return the `id`
     * const projetWithIdOnly = await prisma.projet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjetCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Projet.
     * @param {ProjetDeleteArgs} args - Arguments to delete one Projet.
     * @example
     * // Delete one Projet
     * const Projet = await prisma.projet.delete({
     *   where: {
     *     // ... filter to delete one Projet
     *   }
     * })
     * 
     */
    delete<T extends ProjetDeleteArgs>(args: SelectSubset<T, ProjetDeleteArgs<ExtArgs>>): Prisma__ProjetClient<$Result.GetResult<Prisma.$ProjetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Projet.
     * @param {ProjetUpdateArgs} args - Arguments to update one Projet.
     * @example
     * // Update one Projet
     * const projet = await prisma.projet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjetUpdateArgs>(args: SelectSubset<T, ProjetUpdateArgs<ExtArgs>>): Prisma__ProjetClient<$Result.GetResult<Prisma.$ProjetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projets.
     * @param {ProjetDeleteManyArgs} args - Arguments to filter Projets to delete.
     * @example
     * // Delete a few Projets
     * const { count } = await prisma.projet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjetDeleteManyArgs>(args?: SelectSubset<T, ProjetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projets
     * const projet = await prisma.projet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjetUpdateManyArgs>(args: SelectSubset<T, ProjetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projets and returns the data updated in the database.
     * @param {ProjetUpdateManyAndReturnArgs} args - Arguments to update many Projets.
     * @example
     * // Update many Projets
     * const projet = await prisma.projet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projets and only return the `id`
     * const projetWithIdOnly = await prisma.projet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjetUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Projet.
     * @param {ProjetUpsertArgs} args - Arguments to update or create a Projet.
     * @example
     * // Update or create a Projet
     * const projet = await prisma.projet.upsert({
     *   create: {
     *     // ... data to create a Projet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Projet we want to update
     *   }
     * })
     */
    upsert<T extends ProjetUpsertArgs>(args: SelectSubset<T, ProjetUpsertArgs<ExtArgs>>): Prisma__ProjetClient<$Result.GetResult<Prisma.$ProjetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetCountArgs} args - Arguments to filter Projets to count.
     * @example
     * // Count the number of Projets
     * const count = await prisma.projet.count({
     *   where: {
     *     // ... the filter for the Projets we want to count
     *   }
     * })
    **/
    count<T extends ProjetCountArgs>(
      args?: Subset<T, ProjetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Projet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjetAggregateArgs>(args: Subset<T, ProjetAggregateArgs>): Prisma.PrismaPromise<GetProjetAggregateType<T>>

    /**
     * Group by Projet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjetGroupByArgs['orderBy'] }
        : { orderBy?: ProjetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Projet model
   */
  readonly fields: ProjetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Projet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    departement<T extends DepartementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartementDefaultArgs<ExtArgs>>): Prisma__DepartementClient<$Result.GetResult<Prisma.$DepartementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    membres<T extends Projet$membresArgs<ExtArgs> = {}>(args?: Subset<T, Projet$membresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembreProjetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    taches<T extends Projet$tachesArgs<ExtArgs> = {}>(args?: Subset<T, Projet$tachesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TachePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    partages<T extends Projet$partagesArgs<ExtArgs> = {}>(args?: Subset<T, Projet$partagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartageDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Projet model
   */
  interface ProjetFieldRefs {
    readonly id: FieldRef<"Projet", 'Int'>
    readonly nom: FieldRef<"Projet", 'String'>
    readonly description: FieldRef<"Projet", 'String'>
    readonly createdAt: FieldRef<"Projet", 'DateTime'>
    readonly updatedAt: FieldRef<"Projet", 'DateTime'>
    readonly departementId: FieldRef<"Projet", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Projet findUnique
   */
  export type ProjetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projet
     */
    select?: ProjetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projet
     */
    omit?: ProjetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetInclude<ExtArgs> | null
    /**
     * Filter, which Projet to fetch.
     */
    where: ProjetWhereUniqueInput
  }

  /**
   * Projet findUniqueOrThrow
   */
  export type ProjetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projet
     */
    select?: ProjetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projet
     */
    omit?: ProjetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetInclude<ExtArgs> | null
    /**
     * Filter, which Projet to fetch.
     */
    where: ProjetWhereUniqueInput
  }

  /**
   * Projet findFirst
   */
  export type ProjetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projet
     */
    select?: ProjetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projet
     */
    omit?: ProjetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetInclude<ExtArgs> | null
    /**
     * Filter, which Projet to fetch.
     */
    where?: ProjetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projets to fetch.
     */
    orderBy?: ProjetOrderByWithRelationInput | ProjetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projets.
     */
    cursor?: ProjetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projets.
     */
    distinct?: ProjetScalarFieldEnum | ProjetScalarFieldEnum[]
  }

  /**
   * Projet findFirstOrThrow
   */
  export type ProjetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projet
     */
    select?: ProjetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projet
     */
    omit?: ProjetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetInclude<ExtArgs> | null
    /**
     * Filter, which Projet to fetch.
     */
    where?: ProjetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projets to fetch.
     */
    orderBy?: ProjetOrderByWithRelationInput | ProjetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projets.
     */
    cursor?: ProjetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projets.
     */
    distinct?: ProjetScalarFieldEnum | ProjetScalarFieldEnum[]
  }

  /**
   * Projet findMany
   */
  export type ProjetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projet
     */
    select?: ProjetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projet
     */
    omit?: ProjetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetInclude<ExtArgs> | null
    /**
     * Filter, which Projets to fetch.
     */
    where?: ProjetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projets to fetch.
     */
    orderBy?: ProjetOrderByWithRelationInput | ProjetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projets.
     */
    cursor?: ProjetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projets.
     */
    skip?: number
    distinct?: ProjetScalarFieldEnum | ProjetScalarFieldEnum[]
  }

  /**
   * Projet create
   */
  export type ProjetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projet
     */
    select?: ProjetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projet
     */
    omit?: ProjetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetInclude<ExtArgs> | null
    /**
     * The data needed to create a Projet.
     */
    data: XOR<ProjetCreateInput, ProjetUncheckedCreateInput>
  }

  /**
   * Projet createMany
   */
  export type ProjetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projets.
     */
    data: ProjetCreateManyInput | ProjetCreateManyInput[]
  }

  /**
   * Projet createManyAndReturn
   */
  export type ProjetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projet
     */
    select?: ProjetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Projet
     */
    omit?: ProjetOmit<ExtArgs> | null
    /**
     * The data used to create many Projets.
     */
    data: ProjetCreateManyInput | ProjetCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Projet update
   */
  export type ProjetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projet
     */
    select?: ProjetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projet
     */
    omit?: ProjetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetInclude<ExtArgs> | null
    /**
     * The data needed to update a Projet.
     */
    data: XOR<ProjetUpdateInput, ProjetUncheckedUpdateInput>
    /**
     * Choose, which Projet to update.
     */
    where: ProjetWhereUniqueInput
  }

  /**
   * Projet updateMany
   */
  export type ProjetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projets.
     */
    data: XOR<ProjetUpdateManyMutationInput, ProjetUncheckedUpdateManyInput>
    /**
     * Filter which Projets to update
     */
    where?: ProjetWhereInput
    /**
     * Limit how many Projets to update.
     */
    limit?: number
  }

  /**
   * Projet updateManyAndReturn
   */
  export type ProjetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projet
     */
    select?: ProjetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Projet
     */
    omit?: ProjetOmit<ExtArgs> | null
    /**
     * The data used to update Projets.
     */
    data: XOR<ProjetUpdateManyMutationInput, ProjetUncheckedUpdateManyInput>
    /**
     * Filter which Projets to update
     */
    where?: ProjetWhereInput
    /**
     * Limit how many Projets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Projet upsert
   */
  export type ProjetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projet
     */
    select?: ProjetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projet
     */
    omit?: ProjetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetInclude<ExtArgs> | null
    /**
     * The filter to search for the Projet to update in case it exists.
     */
    where: ProjetWhereUniqueInput
    /**
     * In case the Projet found by the `where` argument doesn't exist, create a new Projet with this data.
     */
    create: XOR<ProjetCreateInput, ProjetUncheckedCreateInput>
    /**
     * In case the Projet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjetUpdateInput, ProjetUncheckedUpdateInput>
  }

  /**
   * Projet delete
   */
  export type ProjetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projet
     */
    select?: ProjetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projet
     */
    omit?: ProjetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetInclude<ExtArgs> | null
    /**
     * Filter which Projet to delete.
     */
    where: ProjetWhereUniqueInput
  }

  /**
   * Projet deleteMany
   */
  export type ProjetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projets to delete
     */
    where?: ProjetWhereInput
    /**
     * Limit how many Projets to delete.
     */
    limit?: number
  }

  /**
   * Projet.membres
   */
  export type Projet$membresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembreProjet
     */
    select?: MembreProjetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembreProjet
     */
    omit?: MembreProjetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreProjetInclude<ExtArgs> | null
    where?: MembreProjetWhereInput
    orderBy?: MembreProjetOrderByWithRelationInput | MembreProjetOrderByWithRelationInput[]
    cursor?: MembreProjetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MembreProjetScalarFieldEnum | MembreProjetScalarFieldEnum[]
  }

  /**
   * Projet.taches
   */
  export type Projet$tachesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tache
     */
    select?: TacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tache
     */
    omit?: TacheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TacheInclude<ExtArgs> | null
    where?: TacheWhereInput
    orderBy?: TacheOrderByWithRelationInput | TacheOrderByWithRelationInput[]
    cursor?: TacheWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TacheScalarFieldEnum | TacheScalarFieldEnum[]
  }

  /**
   * Projet.partages
   */
  export type Projet$partagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartageDocument
     */
    select?: PartageDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartageDocument
     */
    omit?: PartageDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartageDocumentInclude<ExtArgs> | null
    where?: PartageDocumentWhereInput
    orderBy?: PartageDocumentOrderByWithRelationInput | PartageDocumentOrderByWithRelationInput[]
    cursor?: PartageDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartageDocumentScalarFieldEnum | PartageDocumentScalarFieldEnum[]
  }

  /**
   * Projet without action
   */
  export type ProjetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projet
     */
    select?: ProjetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projet
     */
    omit?: ProjetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetInclude<ExtArgs> | null
  }


  /**
   * Model Tache
   */

  export type AggregateTache = {
    _count: TacheCountAggregateOutputType | null
    _avg: TacheAvgAggregateOutputType | null
    _sum: TacheSumAggregateOutputType | null
    _min: TacheMinAggregateOutputType | null
    _max: TacheMaxAggregateOutputType | null
  }

  export type TacheAvgAggregateOutputType = {
    id: number | null
    projetId: number | null
  }

  export type TacheSumAggregateOutputType = {
    id: number | null
    projetId: number | null
  }

  export type TacheMinAggregateOutputType = {
    id: number | null
    titre: string | null
    description: string | null
    projetId: number | null
    deadline: Date | null
    statut: $Enums.TacheStatut | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TacheMaxAggregateOutputType = {
    id: number | null
    titre: string | null
    description: string | null
    projetId: number | null
    deadline: Date | null
    statut: $Enums.TacheStatut | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TacheCountAggregateOutputType = {
    id: number
    titre: number
    description: number
    projetId: number
    deadline: number
    statut: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TacheAvgAggregateInputType = {
    id?: true
    projetId?: true
  }

  export type TacheSumAggregateInputType = {
    id?: true
    projetId?: true
  }

  export type TacheMinAggregateInputType = {
    id?: true
    titre?: true
    description?: true
    projetId?: true
    deadline?: true
    statut?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TacheMaxAggregateInputType = {
    id?: true
    titre?: true
    description?: true
    projetId?: true
    deadline?: true
    statut?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TacheCountAggregateInputType = {
    id?: true
    titre?: true
    description?: true
    projetId?: true
    deadline?: true
    statut?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TacheAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tache to aggregate.
     */
    where?: TacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Taches to fetch.
     */
    orderBy?: TacheOrderByWithRelationInput | TacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Taches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Taches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Taches
    **/
    _count?: true | TacheCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TacheAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TacheSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TacheMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TacheMaxAggregateInputType
  }

  export type GetTacheAggregateType<T extends TacheAggregateArgs> = {
        [P in keyof T & keyof AggregateTache]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTache[P]>
      : GetScalarType<T[P], AggregateTache[P]>
  }




  export type TacheGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TacheWhereInput
    orderBy?: TacheOrderByWithAggregationInput | TacheOrderByWithAggregationInput[]
    by: TacheScalarFieldEnum[] | TacheScalarFieldEnum
    having?: TacheScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TacheCountAggregateInputType | true
    _avg?: TacheAvgAggregateInputType
    _sum?: TacheSumAggregateInputType
    _min?: TacheMinAggregateInputType
    _max?: TacheMaxAggregateInputType
  }

  export type TacheGroupByOutputType = {
    id: number
    titre: string
    description: string | null
    projetId: number
    deadline: Date | null
    statut: $Enums.TacheStatut
    createdAt: Date
    updatedAt: Date
    _count: TacheCountAggregateOutputType | null
    _avg: TacheAvgAggregateOutputType | null
    _sum: TacheSumAggregateOutputType | null
    _min: TacheMinAggregateOutputType | null
    _max: TacheMaxAggregateOutputType | null
  }

  type GetTacheGroupByPayload<T extends TacheGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TacheGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TacheGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TacheGroupByOutputType[P]>
            : GetScalarType<T[P], TacheGroupByOutputType[P]>
        }
      >
    >


  export type TacheSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    description?: boolean
    projetId?: boolean
    deadline?: boolean
    statut?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projet?: boolean | ProjetDefaultArgs<ExtArgs>
    tacheMembres?: boolean | Tache$tacheMembresArgs<ExtArgs>
    _count?: boolean | TacheCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tache"]>

  export type TacheSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    description?: boolean
    projetId?: boolean
    deadline?: boolean
    statut?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projet?: boolean | ProjetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tache"]>

  export type TacheSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    description?: boolean
    projetId?: boolean
    deadline?: boolean
    statut?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projet?: boolean | ProjetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tache"]>

  export type TacheSelectScalar = {
    id?: boolean
    titre?: boolean
    description?: boolean
    projetId?: boolean
    deadline?: boolean
    statut?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TacheOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titre" | "description" | "projetId" | "deadline" | "statut" | "createdAt" | "updatedAt", ExtArgs["result"]["tache"]>
  export type TacheInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projet?: boolean | ProjetDefaultArgs<ExtArgs>
    tacheMembres?: boolean | Tache$tacheMembresArgs<ExtArgs>
    _count?: boolean | TacheCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TacheIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projet?: boolean | ProjetDefaultArgs<ExtArgs>
  }
  export type TacheIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projet?: boolean | ProjetDefaultArgs<ExtArgs>
  }

  export type $TachePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tache"
    objects: {
      projet: Prisma.$ProjetPayload<ExtArgs>
      tacheMembres: Prisma.$TacheMembrePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titre: string
      description: string | null
      projetId: number
      deadline: Date | null
      statut: $Enums.TacheStatut
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tache"]>
    composites: {}
  }

  type TacheGetPayload<S extends boolean | null | undefined | TacheDefaultArgs> = $Result.GetResult<Prisma.$TachePayload, S>

  type TacheCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TacheFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TacheCountAggregateInputType | true
    }

  export interface TacheDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tache'], meta: { name: 'Tache' } }
    /**
     * Find zero or one Tache that matches the filter.
     * @param {TacheFindUniqueArgs} args - Arguments to find a Tache
     * @example
     * // Get one Tache
     * const tache = await prisma.tache.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TacheFindUniqueArgs>(args: SelectSubset<T, TacheFindUniqueArgs<ExtArgs>>): Prisma__TacheClient<$Result.GetResult<Prisma.$TachePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tache that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TacheFindUniqueOrThrowArgs} args - Arguments to find a Tache
     * @example
     * // Get one Tache
     * const tache = await prisma.tache.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TacheFindUniqueOrThrowArgs>(args: SelectSubset<T, TacheFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TacheClient<$Result.GetResult<Prisma.$TachePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tache that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TacheFindFirstArgs} args - Arguments to find a Tache
     * @example
     * // Get one Tache
     * const tache = await prisma.tache.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TacheFindFirstArgs>(args?: SelectSubset<T, TacheFindFirstArgs<ExtArgs>>): Prisma__TacheClient<$Result.GetResult<Prisma.$TachePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tache that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TacheFindFirstOrThrowArgs} args - Arguments to find a Tache
     * @example
     * // Get one Tache
     * const tache = await prisma.tache.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TacheFindFirstOrThrowArgs>(args?: SelectSubset<T, TacheFindFirstOrThrowArgs<ExtArgs>>): Prisma__TacheClient<$Result.GetResult<Prisma.$TachePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Taches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TacheFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Taches
     * const taches = await prisma.tache.findMany()
     * 
     * // Get first 10 Taches
     * const taches = await prisma.tache.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tacheWithIdOnly = await prisma.tache.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TacheFindManyArgs>(args?: SelectSubset<T, TacheFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TachePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tache.
     * @param {TacheCreateArgs} args - Arguments to create a Tache.
     * @example
     * // Create one Tache
     * const Tache = await prisma.tache.create({
     *   data: {
     *     // ... data to create a Tache
     *   }
     * })
     * 
     */
    create<T extends TacheCreateArgs>(args: SelectSubset<T, TacheCreateArgs<ExtArgs>>): Prisma__TacheClient<$Result.GetResult<Prisma.$TachePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Taches.
     * @param {TacheCreateManyArgs} args - Arguments to create many Taches.
     * @example
     * // Create many Taches
     * const tache = await prisma.tache.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TacheCreateManyArgs>(args?: SelectSubset<T, TacheCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Taches and returns the data saved in the database.
     * @param {TacheCreateManyAndReturnArgs} args - Arguments to create many Taches.
     * @example
     * // Create many Taches
     * const tache = await prisma.tache.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Taches and only return the `id`
     * const tacheWithIdOnly = await prisma.tache.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TacheCreateManyAndReturnArgs>(args?: SelectSubset<T, TacheCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TachePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tache.
     * @param {TacheDeleteArgs} args - Arguments to delete one Tache.
     * @example
     * // Delete one Tache
     * const Tache = await prisma.tache.delete({
     *   where: {
     *     // ... filter to delete one Tache
     *   }
     * })
     * 
     */
    delete<T extends TacheDeleteArgs>(args: SelectSubset<T, TacheDeleteArgs<ExtArgs>>): Prisma__TacheClient<$Result.GetResult<Prisma.$TachePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tache.
     * @param {TacheUpdateArgs} args - Arguments to update one Tache.
     * @example
     * // Update one Tache
     * const tache = await prisma.tache.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TacheUpdateArgs>(args: SelectSubset<T, TacheUpdateArgs<ExtArgs>>): Prisma__TacheClient<$Result.GetResult<Prisma.$TachePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Taches.
     * @param {TacheDeleteManyArgs} args - Arguments to filter Taches to delete.
     * @example
     * // Delete a few Taches
     * const { count } = await prisma.tache.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TacheDeleteManyArgs>(args?: SelectSubset<T, TacheDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Taches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TacheUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Taches
     * const tache = await prisma.tache.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TacheUpdateManyArgs>(args: SelectSubset<T, TacheUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Taches and returns the data updated in the database.
     * @param {TacheUpdateManyAndReturnArgs} args - Arguments to update many Taches.
     * @example
     * // Update many Taches
     * const tache = await prisma.tache.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Taches and only return the `id`
     * const tacheWithIdOnly = await prisma.tache.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TacheUpdateManyAndReturnArgs>(args: SelectSubset<T, TacheUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TachePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tache.
     * @param {TacheUpsertArgs} args - Arguments to update or create a Tache.
     * @example
     * // Update or create a Tache
     * const tache = await prisma.tache.upsert({
     *   create: {
     *     // ... data to create a Tache
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tache we want to update
     *   }
     * })
     */
    upsert<T extends TacheUpsertArgs>(args: SelectSubset<T, TacheUpsertArgs<ExtArgs>>): Prisma__TacheClient<$Result.GetResult<Prisma.$TachePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Taches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TacheCountArgs} args - Arguments to filter Taches to count.
     * @example
     * // Count the number of Taches
     * const count = await prisma.tache.count({
     *   where: {
     *     // ... the filter for the Taches we want to count
     *   }
     * })
    **/
    count<T extends TacheCountArgs>(
      args?: Subset<T, TacheCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TacheCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tache.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TacheAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TacheAggregateArgs>(args: Subset<T, TacheAggregateArgs>): Prisma.PrismaPromise<GetTacheAggregateType<T>>

    /**
     * Group by Tache.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TacheGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TacheGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TacheGroupByArgs['orderBy'] }
        : { orderBy?: TacheGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TacheGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTacheGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tache model
   */
  readonly fields: TacheFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tache.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TacheClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projet<T extends ProjetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjetDefaultArgs<ExtArgs>>): Prisma__ProjetClient<$Result.GetResult<Prisma.$ProjetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tacheMembres<T extends Tache$tacheMembresArgs<ExtArgs> = {}>(args?: Subset<T, Tache$tacheMembresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TacheMembrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tache model
   */
  interface TacheFieldRefs {
    readonly id: FieldRef<"Tache", 'Int'>
    readonly titre: FieldRef<"Tache", 'String'>
    readonly description: FieldRef<"Tache", 'String'>
    readonly projetId: FieldRef<"Tache", 'Int'>
    readonly deadline: FieldRef<"Tache", 'DateTime'>
    readonly statut: FieldRef<"Tache", 'TacheStatut'>
    readonly createdAt: FieldRef<"Tache", 'DateTime'>
    readonly updatedAt: FieldRef<"Tache", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tache findUnique
   */
  export type TacheFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tache
     */
    select?: TacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tache
     */
    omit?: TacheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TacheInclude<ExtArgs> | null
    /**
     * Filter, which Tache to fetch.
     */
    where: TacheWhereUniqueInput
  }

  /**
   * Tache findUniqueOrThrow
   */
  export type TacheFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tache
     */
    select?: TacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tache
     */
    omit?: TacheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TacheInclude<ExtArgs> | null
    /**
     * Filter, which Tache to fetch.
     */
    where: TacheWhereUniqueInput
  }

  /**
   * Tache findFirst
   */
  export type TacheFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tache
     */
    select?: TacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tache
     */
    omit?: TacheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TacheInclude<ExtArgs> | null
    /**
     * Filter, which Tache to fetch.
     */
    where?: TacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Taches to fetch.
     */
    orderBy?: TacheOrderByWithRelationInput | TacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Taches.
     */
    cursor?: TacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Taches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Taches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Taches.
     */
    distinct?: TacheScalarFieldEnum | TacheScalarFieldEnum[]
  }

  /**
   * Tache findFirstOrThrow
   */
  export type TacheFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tache
     */
    select?: TacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tache
     */
    omit?: TacheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TacheInclude<ExtArgs> | null
    /**
     * Filter, which Tache to fetch.
     */
    where?: TacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Taches to fetch.
     */
    orderBy?: TacheOrderByWithRelationInput | TacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Taches.
     */
    cursor?: TacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Taches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Taches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Taches.
     */
    distinct?: TacheScalarFieldEnum | TacheScalarFieldEnum[]
  }

  /**
   * Tache findMany
   */
  export type TacheFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tache
     */
    select?: TacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tache
     */
    omit?: TacheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TacheInclude<ExtArgs> | null
    /**
     * Filter, which Taches to fetch.
     */
    where?: TacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Taches to fetch.
     */
    orderBy?: TacheOrderByWithRelationInput | TacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Taches.
     */
    cursor?: TacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Taches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Taches.
     */
    skip?: number
    distinct?: TacheScalarFieldEnum | TacheScalarFieldEnum[]
  }

  /**
   * Tache create
   */
  export type TacheCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tache
     */
    select?: TacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tache
     */
    omit?: TacheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TacheInclude<ExtArgs> | null
    /**
     * The data needed to create a Tache.
     */
    data: XOR<TacheCreateInput, TacheUncheckedCreateInput>
  }

  /**
   * Tache createMany
   */
  export type TacheCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Taches.
     */
    data: TacheCreateManyInput | TacheCreateManyInput[]
  }

  /**
   * Tache createManyAndReturn
   */
  export type TacheCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tache
     */
    select?: TacheSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tache
     */
    omit?: TacheOmit<ExtArgs> | null
    /**
     * The data used to create many Taches.
     */
    data: TacheCreateManyInput | TacheCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TacheIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tache update
   */
  export type TacheUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tache
     */
    select?: TacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tache
     */
    omit?: TacheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TacheInclude<ExtArgs> | null
    /**
     * The data needed to update a Tache.
     */
    data: XOR<TacheUpdateInput, TacheUncheckedUpdateInput>
    /**
     * Choose, which Tache to update.
     */
    where: TacheWhereUniqueInput
  }

  /**
   * Tache updateMany
   */
  export type TacheUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Taches.
     */
    data: XOR<TacheUpdateManyMutationInput, TacheUncheckedUpdateManyInput>
    /**
     * Filter which Taches to update
     */
    where?: TacheWhereInput
    /**
     * Limit how many Taches to update.
     */
    limit?: number
  }

  /**
   * Tache updateManyAndReturn
   */
  export type TacheUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tache
     */
    select?: TacheSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tache
     */
    omit?: TacheOmit<ExtArgs> | null
    /**
     * The data used to update Taches.
     */
    data: XOR<TacheUpdateManyMutationInput, TacheUncheckedUpdateManyInput>
    /**
     * Filter which Taches to update
     */
    where?: TacheWhereInput
    /**
     * Limit how many Taches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TacheIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tache upsert
   */
  export type TacheUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tache
     */
    select?: TacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tache
     */
    omit?: TacheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TacheInclude<ExtArgs> | null
    /**
     * The filter to search for the Tache to update in case it exists.
     */
    where: TacheWhereUniqueInput
    /**
     * In case the Tache found by the `where` argument doesn't exist, create a new Tache with this data.
     */
    create: XOR<TacheCreateInput, TacheUncheckedCreateInput>
    /**
     * In case the Tache was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TacheUpdateInput, TacheUncheckedUpdateInput>
  }

  /**
   * Tache delete
   */
  export type TacheDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tache
     */
    select?: TacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tache
     */
    omit?: TacheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TacheInclude<ExtArgs> | null
    /**
     * Filter which Tache to delete.
     */
    where: TacheWhereUniqueInput
  }

  /**
   * Tache deleteMany
   */
  export type TacheDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Taches to delete
     */
    where?: TacheWhereInput
    /**
     * Limit how many Taches to delete.
     */
    limit?: number
  }

  /**
   * Tache.tacheMembres
   */
  export type Tache$tacheMembresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TacheMembre
     */
    select?: TacheMembreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TacheMembre
     */
    omit?: TacheMembreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TacheMembreInclude<ExtArgs> | null
    where?: TacheMembreWhereInput
    orderBy?: TacheMembreOrderByWithRelationInput | TacheMembreOrderByWithRelationInput[]
    cursor?: TacheMembreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TacheMembreScalarFieldEnum | TacheMembreScalarFieldEnum[]
  }

  /**
   * Tache without action
   */
  export type TacheDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tache
     */
    select?: TacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tache
     */
    omit?: TacheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TacheInclude<ExtArgs> | null
  }


  /**
   * Model TacheMembre
   */

  export type AggregateTacheMembre = {
    _count: TacheMembreCountAggregateOutputType | null
    _avg: TacheMembreAvgAggregateOutputType | null
    _sum: TacheMembreSumAggregateOutputType | null
    _min: TacheMembreMinAggregateOutputType | null
    _max: TacheMembreMaxAggregateOutputType | null
  }

  export type TacheMembreAvgAggregateOutputType = {
    tacheId: number | null
    utilisateurId: number | null
  }

  export type TacheMembreSumAggregateOutputType = {
    tacheId: number | null
    utilisateurId: number | null
  }

  export type TacheMembreMinAggregateOutputType = {
    tacheId: number | null
    utilisateurId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TacheMembreMaxAggregateOutputType = {
    tacheId: number | null
    utilisateurId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TacheMembreCountAggregateOutputType = {
    tacheId: number
    utilisateurId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TacheMembreAvgAggregateInputType = {
    tacheId?: true
    utilisateurId?: true
  }

  export type TacheMembreSumAggregateInputType = {
    tacheId?: true
    utilisateurId?: true
  }

  export type TacheMembreMinAggregateInputType = {
    tacheId?: true
    utilisateurId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TacheMembreMaxAggregateInputType = {
    tacheId?: true
    utilisateurId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TacheMembreCountAggregateInputType = {
    tacheId?: true
    utilisateurId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TacheMembreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TacheMembre to aggregate.
     */
    where?: TacheMembreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TacheMembres to fetch.
     */
    orderBy?: TacheMembreOrderByWithRelationInput | TacheMembreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TacheMembreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TacheMembres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TacheMembres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TacheMembres
    **/
    _count?: true | TacheMembreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TacheMembreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TacheMembreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TacheMembreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TacheMembreMaxAggregateInputType
  }

  export type GetTacheMembreAggregateType<T extends TacheMembreAggregateArgs> = {
        [P in keyof T & keyof AggregateTacheMembre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTacheMembre[P]>
      : GetScalarType<T[P], AggregateTacheMembre[P]>
  }




  export type TacheMembreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TacheMembreWhereInput
    orderBy?: TacheMembreOrderByWithAggregationInput | TacheMembreOrderByWithAggregationInput[]
    by: TacheMembreScalarFieldEnum[] | TacheMembreScalarFieldEnum
    having?: TacheMembreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TacheMembreCountAggregateInputType | true
    _avg?: TacheMembreAvgAggregateInputType
    _sum?: TacheMembreSumAggregateInputType
    _min?: TacheMembreMinAggregateInputType
    _max?: TacheMembreMaxAggregateInputType
  }

  export type TacheMembreGroupByOutputType = {
    tacheId: number
    utilisateurId: number
    createdAt: Date
    updatedAt: Date
    _count: TacheMembreCountAggregateOutputType | null
    _avg: TacheMembreAvgAggregateOutputType | null
    _sum: TacheMembreSumAggregateOutputType | null
    _min: TacheMembreMinAggregateOutputType | null
    _max: TacheMembreMaxAggregateOutputType | null
  }

  type GetTacheMembreGroupByPayload<T extends TacheMembreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TacheMembreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TacheMembreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TacheMembreGroupByOutputType[P]>
            : GetScalarType<T[P], TacheMembreGroupByOutputType[P]>
        }
      >
    >


  export type TacheMembreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tacheId?: boolean
    utilisateurId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tache?: boolean | TacheDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tacheMembre"]>

  export type TacheMembreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tacheId?: boolean
    utilisateurId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tache?: boolean | TacheDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tacheMembre"]>

  export type TacheMembreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tacheId?: boolean
    utilisateurId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tache?: boolean | TacheDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tacheMembre"]>

  export type TacheMembreSelectScalar = {
    tacheId?: boolean
    utilisateurId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TacheMembreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tacheId" | "utilisateurId" | "createdAt" | "updatedAt", ExtArgs["result"]["tacheMembre"]>
  export type TacheMembreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tache?: boolean | TacheDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }
  export type TacheMembreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tache?: boolean | TacheDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }
  export type TacheMembreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tache?: boolean | TacheDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }

  export type $TacheMembrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TacheMembre"
    objects: {
      tache: Prisma.$TachePayload<ExtArgs>
      utilisateur: Prisma.$UtilisateurPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      tacheId: number
      utilisateurId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tacheMembre"]>
    composites: {}
  }

  type TacheMembreGetPayload<S extends boolean | null | undefined | TacheMembreDefaultArgs> = $Result.GetResult<Prisma.$TacheMembrePayload, S>

  type TacheMembreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TacheMembreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TacheMembreCountAggregateInputType | true
    }

  export interface TacheMembreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TacheMembre'], meta: { name: 'TacheMembre' } }
    /**
     * Find zero or one TacheMembre that matches the filter.
     * @param {TacheMembreFindUniqueArgs} args - Arguments to find a TacheMembre
     * @example
     * // Get one TacheMembre
     * const tacheMembre = await prisma.tacheMembre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TacheMembreFindUniqueArgs>(args: SelectSubset<T, TacheMembreFindUniqueArgs<ExtArgs>>): Prisma__TacheMembreClient<$Result.GetResult<Prisma.$TacheMembrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TacheMembre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TacheMembreFindUniqueOrThrowArgs} args - Arguments to find a TacheMembre
     * @example
     * // Get one TacheMembre
     * const tacheMembre = await prisma.tacheMembre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TacheMembreFindUniqueOrThrowArgs>(args: SelectSubset<T, TacheMembreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TacheMembreClient<$Result.GetResult<Prisma.$TacheMembrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TacheMembre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TacheMembreFindFirstArgs} args - Arguments to find a TacheMembre
     * @example
     * // Get one TacheMembre
     * const tacheMembre = await prisma.tacheMembre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TacheMembreFindFirstArgs>(args?: SelectSubset<T, TacheMembreFindFirstArgs<ExtArgs>>): Prisma__TacheMembreClient<$Result.GetResult<Prisma.$TacheMembrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TacheMembre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TacheMembreFindFirstOrThrowArgs} args - Arguments to find a TacheMembre
     * @example
     * // Get one TacheMembre
     * const tacheMembre = await prisma.tacheMembre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TacheMembreFindFirstOrThrowArgs>(args?: SelectSubset<T, TacheMembreFindFirstOrThrowArgs<ExtArgs>>): Prisma__TacheMembreClient<$Result.GetResult<Prisma.$TacheMembrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TacheMembres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TacheMembreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TacheMembres
     * const tacheMembres = await prisma.tacheMembre.findMany()
     * 
     * // Get first 10 TacheMembres
     * const tacheMembres = await prisma.tacheMembre.findMany({ take: 10 })
     * 
     * // Only select the `tacheId`
     * const tacheMembreWithTacheIdOnly = await prisma.tacheMembre.findMany({ select: { tacheId: true } })
     * 
     */
    findMany<T extends TacheMembreFindManyArgs>(args?: SelectSubset<T, TacheMembreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TacheMembrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TacheMembre.
     * @param {TacheMembreCreateArgs} args - Arguments to create a TacheMembre.
     * @example
     * // Create one TacheMembre
     * const TacheMembre = await prisma.tacheMembre.create({
     *   data: {
     *     // ... data to create a TacheMembre
     *   }
     * })
     * 
     */
    create<T extends TacheMembreCreateArgs>(args: SelectSubset<T, TacheMembreCreateArgs<ExtArgs>>): Prisma__TacheMembreClient<$Result.GetResult<Prisma.$TacheMembrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TacheMembres.
     * @param {TacheMembreCreateManyArgs} args - Arguments to create many TacheMembres.
     * @example
     * // Create many TacheMembres
     * const tacheMembre = await prisma.tacheMembre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TacheMembreCreateManyArgs>(args?: SelectSubset<T, TacheMembreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TacheMembres and returns the data saved in the database.
     * @param {TacheMembreCreateManyAndReturnArgs} args - Arguments to create many TacheMembres.
     * @example
     * // Create many TacheMembres
     * const tacheMembre = await prisma.tacheMembre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TacheMembres and only return the `tacheId`
     * const tacheMembreWithTacheIdOnly = await prisma.tacheMembre.createManyAndReturn({
     *   select: { tacheId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TacheMembreCreateManyAndReturnArgs>(args?: SelectSubset<T, TacheMembreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TacheMembrePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TacheMembre.
     * @param {TacheMembreDeleteArgs} args - Arguments to delete one TacheMembre.
     * @example
     * // Delete one TacheMembre
     * const TacheMembre = await prisma.tacheMembre.delete({
     *   where: {
     *     // ... filter to delete one TacheMembre
     *   }
     * })
     * 
     */
    delete<T extends TacheMembreDeleteArgs>(args: SelectSubset<T, TacheMembreDeleteArgs<ExtArgs>>): Prisma__TacheMembreClient<$Result.GetResult<Prisma.$TacheMembrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TacheMembre.
     * @param {TacheMembreUpdateArgs} args - Arguments to update one TacheMembre.
     * @example
     * // Update one TacheMembre
     * const tacheMembre = await prisma.tacheMembre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TacheMembreUpdateArgs>(args: SelectSubset<T, TacheMembreUpdateArgs<ExtArgs>>): Prisma__TacheMembreClient<$Result.GetResult<Prisma.$TacheMembrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TacheMembres.
     * @param {TacheMembreDeleteManyArgs} args - Arguments to filter TacheMembres to delete.
     * @example
     * // Delete a few TacheMembres
     * const { count } = await prisma.tacheMembre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TacheMembreDeleteManyArgs>(args?: SelectSubset<T, TacheMembreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TacheMembres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TacheMembreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TacheMembres
     * const tacheMembre = await prisma.tacheMembre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TacheMembreUpdateManyArgs>(args: SelectSubset<T, TacheMembreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TacheMembres and returns the data updated in the database.
     * @param {TacheMembreUpdateManyAndReturnArgs} args - Arguments to update many TacheMembres.
     * @example
     * // Update many TacheMembres
     * const tacheMembre = await prisma.tacheMembre.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TacheMembres and only return the `tacheId`
     * const tacheMembreWithTacheIdOnly = await prisma.tacheMembre.updateManyAndReturn({
     *   select: { tacheId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TacheMembreUpdateManyAndReturnArgs>(args: SelectSubset<T, TacheMembreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TacheMembrePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TacheMembre.
     * @param {TacheMembreUpsertArgs} args - Arguments to update or create a TacheMembre.
     * @example
     * // Update or create a TacheMembre
     * const tacheMembre = await prisma.tacheMembre.upsert({
     *   create: {
     *     // ... data to create a TacheMembre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TacheMembre we want to update
     *   }
     * })
     */
    upsert<T extends TacheMembreUpsertArgs>(args: SelectSubset<T, TacheMembreUpsertArgs<ExtArgs>>): Prisma__TacheMembreClient<$Result.GetResult<Prisma.$TacheMembrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TacheMembres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TacheMembreCountArgs} args - Arguments to filter TacheMembres to count.
     * @example
     * // Count the number of TacheMembres
     * const count = await prisma.tacheMembre.count({
     *   where: {
     *     // ... the filter for the TacheMembres we want to count
     *   }
     * })
    **/
    count<T extends TacheMembreCountArgs>(
      args?: Subset<T, TacheMembreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TacheMembreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TacheMembre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TacheMembreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TacheMembreAggregateArgs>(args: Subset<T, TacheMembreAggregateArgs>): Prisma.PrismaPromise<GetTacheMembreAggregateType<T>>

    /**
     * Group by TacheMembre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TacheMembreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TacheMembreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TacheMembreGroupByArgs['orderBy'] }
        : { orderBy?: TacheMembreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TacheMembreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTacheMembreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TacheMembre model
   */
  readonly fields: TacheMembreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TacheMembre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TacheMembreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tache<T extends TacheDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TacheDefaultArgs<ExtArgs>>): Prisma__TacheClient<$Result.GetResult<Prisma.$TachePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    utilisateur<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TacheMembre model
   */
  interface TacheMembreFieldRefs {
    readonly tacheId: FieldRef<"TacheMembre", 'Int'>
    readonly utilisateurId: FieldRef<"TacheMembre", 'Int'>
    readonly createdAt: FieldRef<"TacheMembre", 'DateTime'>
    readonly updatedAt: FieldRef<"TacheMembre", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TacheMembre findUnique
   */
  export type TacheMembreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TacheMembre
     */
    select?: TacheMembreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TacheMembre
     */
    omit?: TacheMembreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TacheMembreInclude<ExtArgs> | null
    /**
     * Filter, which TacheMembre to fetch.
     */
    where: TacheMembreWhereUniqueInput
  }

  /**
   * TacheMembre findUniqueOrThrow
   */
  export type TacheMembreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TacheMembre
     */
    select?: TacheMembreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TacheMembre
     */
    omit?: TacheMembreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TacheMembreInclude<ExtArgs> | null
    /**
     * Filter, which TacheMembre to fetch.
     */
    where: TacheMembreWhereUniqueInput
  }

  /**
   * TacheMembre findFirst
   */
  export type TacheMembreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TacheMembre
     */
    select?: TacheMembreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TacheMembre
     */
    omit?: TacheMembreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TacheMembreInclude<ExtArgs> | null
    /**
     * Filter, which TacheMembre to fetch.
     */
    where?: TacheMembreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TacheMembres to fetch.
     */
    orderBy?: TacheMembreOrderByWithRelationInput | TacheMembreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TacheMembres.
     */
    cursor?: TacheMembreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TacheMembres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TacheMembres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TacheMembres.
     */
    distinct?: TacheMembreScalarFieldEnum | TacheMembreScalarFieldEnum[]
  }

  /**
   * TacheMembre findFirstOrThrow
   */
  export type TacheMembreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TacheMembre
     */
    select?: TacheMembreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TacheMembre
     */
    omit?: TacheMembreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TacheMembreInclude<ExtArgs> | null
    /**
     * Filter, which TacheMembre to fetch.
     */
    where?: TacheMembreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TacheMembres to fetch.
     */
    orderBy?: TacheMembreOrderByWithRelationInput | TacheMembreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TacheMembres.
     */
    cursor?: TacheMembreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TacheMembres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TacheMembres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TacheMembres.
     */
    distinct?: TacheMembreScalarFieldEnum | TacheMembreScalarFieldEnum[]
  }

  /**
   * TacheMembre findMany
   */
  export type TacheMembreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TacheMembre
     */
    select?: TacheMembreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TacheMembre
     */
    omit?: TacheMembreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TacheMembreInclude<ExtArgs> | null
    /**
     * Filter, which TacheMembres to fetch.
     */
    where?: TacheMembreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TacheMembres to fetch.
     */
    orderBy?: TacheMembreOrderByWithRelationInput | TacheMembreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TacheMembres.
     */
    cursor?: TacheMembreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TacheMembres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TacheMembres.
     */
    skip?: number
    distinct?: TacheMembreScalarFieldEnum | TacheMembreScalarFieldEnum[]
  }

  /**
   * TacheMembre create
   */
  export type TacheMembreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TacheMembre
     */
    select?: TacheMembreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TacheMembre
     */
    omit?: TacheMembreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TacheMembreInclude<ExtArgs> | null
    /**
     * The data needed to create a TacheMembre.
     */
    data: XOR<TacheMembreCreateInput, TacheMembreUncheckedCreateInput>
  }

  /**
   * TacheMembre createMany
   */
  export type TacheMembreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TacheMembres.
     */
    data: TacheMembreCreateManyInput | TacheMembreCreateManyInput[]
  }

  /**
   * TacheMembre createManyAndReturn
   */
  export type TacheMembreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TacheMembre
     */
    select?: TacheMembreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TacheMembre
     */
    omit?: TacheMembreOmit<ExtArgs> | null
    /**
     * The data used to create many TacheMembres.
     */
    data: TacheMembreCreateManyInput | TacheMembreCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TacheMembreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TacheMembre update
   */
  export type TacheMembreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TacheMembre
     */
    select?: TacheMembreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TacheMembre
     */
    omit?: TacheMembreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TacheMembreInclude<ExtArgs> | null
    /**
     * The data needed to update a TacheMembre.
     */
    data: XOR<TacheMembreUpdateInput, TacheMembreUncheckedUpdateInput>
    /**
     * Choose, which TacheMembre to update.
     */
    where: TacheMembreWhereUniqueInput
  }

  /**
   * TacheMembre updateMany
   */
  export type TacheMembreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TacheMembres.
     */
    data: XOR<TacheMembreUpdateManyMutationInput, TacheMembreUncheckedUpdateManyInput>
    /**
     * Filter which TacheMembres to update
     */
    where?: TacheMembreWhereInput
    /**
     * Limit how many TacheMembres to update.
     */
    limit?: number
  }

  /**
   * TacheMembre updateManyAndReturn
   */
  export type TacheMembreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TacheMembre
     */
    select?: TacheMembreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TacheMembre
     */
    omit?: TacheMembreOmit<ExtArgs> | null
    /**
     * The data used to update TacheMembres.
     */
    data: XOR<TacheMembreUpdateManyMutationInput, TacheMembreUncheckedUpdateManyInput>
    /**
     * Filter which TacheMembres to update
     */
    where?: TacheMembreWhereInput
    /**
     * Limit how many TacheMembres to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TacheMembreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TacheMembre upsert
   */
  export type TacheMembreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TacheMembre
     */
    select?: TacheMembreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TacheMembre
     */
    omit?: TacheMembreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TacheMembreInclude<ExtArgs> | null
    /**
     * The filter to search for the TacheMembre to update in case it exists.
     */
    where: TacheMembreWhereUniqueInput
    /**
     * In case the TacheMembre found by the `where` argument doesn't exist, create a new TacheMembre with this data.
     */
    create: XOR<TacheMembreCreateInput, TacheMembreUncheckedCreateInput>
    /**
     * In case the TacheMembre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TacheMembreUpdateInput, TacheMembreUncheckedUpdateInput>
  }

  /**
   * TacheMembre delete
   */
  export type TacheMembreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TacheMembre
     */
    select?: TacheMembreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TacheMembre
     */
    omit?: TacheMembreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TacheMembreInclude<ExtArgs> | null
    /**
     * Filter which TacheMembre to delete.
     */
    where: TacheMembreWhereUniqueInput
  }

  /**
   * TacheMembre deleteMany
   */
  export type TacheMembreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TacheMembres to delete
     */
    where?: TacheMembreWhereInput
    /**
     * Limit how many TacheMembres to delete.
     */
    limit?: number
  }

  /**
   * TacheMembre without action
   */
  export type TacheMembreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TacheMembre
     */
    select?: TacheMembreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TacheMembre
     */
    omit?: TacheMembreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TacheMembreInclude<ExtArgs> | null
  }


  /**
   * Model MembreProjet
   */

  export type AggregateMembreProjet = {
    _count: MembreProjetCountAggregateOutputType | null
    _avg: MembreProjetAvgAggregateOutputType | null
    _sum: MembreProjetSumAggregateOutputType | null
    _min: MembreProjetMinAggregateOutputType | null
    _max: MembreProjetMaxAggregateOutputType | null
  }

  export type MembreProjetAvgAggregateOutputType = {
    utilisateurId: number | null
    projetId: number | null
  }

  export type MembreProjetSumAggregateOutputType = {
    utilisateurId: number | null
    projetId: number | null
  }

  export type MembreProjetMinAggregateOutputType = {
    utilisateurId: number | null
    projetId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MembreProjetMaxAggregateOutputType = {
    utilisateurId: number | null
    projetId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MembreProjetCountAggregateOutputType = {
    utilisateurId: number
    projetId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MembreProjetAvgAggregateInputType = {
    utilisateurId?: true
    projetId?: true
  }

  export type MembreProjetSumAggregateInputType = {
    utilisateurId?: true
    projetId?: true
  }

  export type MembreProjetMinAggregateInputType = {
    utilisateurId?: true
    projetId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MembreProjetMaxAggregateInputType = {
    utilisateurId?: true
    projetId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MembreProjetCountAggregateInputType = {
    utilisateurId?: true
    projetId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MembreProjetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MembreProjet to aggregate.
     */
    where?: MembreProjetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MembreProjets to fetch.
     */
    orderBy?: MembreProjetOrderByWithRelationInput | MembreProjetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MembreProjetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MembreProjets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MembreProjets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MembreProjets
    **/
    _count?: true | MembreProjetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MembreProjetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MembreProjetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MembreProjetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MembreProjetMaxAggregateInputType
  }

  export type GetMembreProjetAggregateType<T extends MembreProjetAggregateArgs> = {
        [P in keyof T & keyof AggregateMembreProjet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMembreProjet[P]>
      : GetScalarType<T[P], AggregateMembreProjet[P]>
  }




  export type MembreProjetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembreProjetWhereInput
    orderBy?: MembreProjetOrderByWithAggregationInput | MembreProjetOrderByWithAggregationInput[]
    by: MembreProjetScalarFieldEnum[] | MembreProjetScalarFieldEnum
    having?: MembreProjetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MembreProjetCountAggregateInputType | true
    _avg?: MembreProjetAvgAggregateInputType
    _sum?: MembreProjetSumAggregateInputType
    _min?: MembreProjetMinAggregateInputType
    _max?: MembreProjetMaxAggregateInputType
  }

  export type MembreProjetGroupByOutputType = {
    utilisateurId: number
    projetId: number
    createdAt: Date
    updatedAt: Date
    _count: MembreProjetCountAggregateOutputType | null
    _avg: MembreProjetAvgAggregateOutputType | null
    _sum: MembreProjetSumAggregateOutputType | null
    _min: MembreProjetMinAggregateOutputType | null
    _max: MembreProjetMaxAggregateOutputType | null
  }

  type GetMembreProjetGroupByPayload<T extends MembreProjetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MembreProjetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MembreProjetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MembreProjetGroupByOutputType[P]>
            : GetScalarType<T[P], MembreProjetGroupByOutputType[P]>
        }
      >
    >


  export type MembreProjetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    utilisateurId?: boolean
    projetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    projet?: boolean | ProjetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membreProjet"]>

  export type MembreProjetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    utilisateurId?: boolean
    projetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    projet?: boolean | ProjetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membreProjet"]>

  export type MembreProjetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    utilisateurId?: boolean
    projetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    projet?: boolean | ProjetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membreProjet"]>

  export type MembreProjetSelectScalar = {
    utilisateurId?: boolean
    projetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MembreProjetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"utilisateurId" | "projetId" | "createdAt" | "updatedAt", ExtArgs["result"]["membreProjet"]>
  export type MembreProjetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    projet?: boolean | ProjetDefaultArgs<ExtArgs>
  }
  export type MembreProjetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    projet?: boolean | ProjetDefaultArgs<ExtArgs>
  }
  export type MembreProjetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    projet?: boolean | ProjetDefaultArgs<ExtArgs>
  }

  export type $MembreProjetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MembreProjet"
    objects: {
      utilisateur: Prisma.$UtilisateurPayload<ExtArgs>
      projet: Prisma.$ProjetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      utilisateurId: number
      projetId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["membreProjet"]>
    composites: {}
  }

  type MembreProjetGetPayload<S extends boolean | null | undefined | MembreProjetDefaultArgs> = $Result.GetResult<Prisma.$MembreProjetPayload, S>

  type MembreProjetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MembreProjetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MembreProjetCountAggregateInputType | true
    }

  export interface MembreProjetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MembreProjet'], meta: { name: 'MembreProjet' } }
    /**
     * Find zero or one MembreProjet that matches the filter.
     * @param {MembreProjetFindUniqueArgs} args - Arguments to find a MembreProjet
     * @example
     * // Get one MembreProjet
     * const membreProjet = await prisma.membreProjet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MembreProjetFindUniqueArgs>(args: SelectSubset<T, MembreProjetFindUniqueArgs<ExtArgs>>): Prisma__MembreProjetClient<$Result.GetResult<Prisma.$MembreProjetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MembreProjet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MembreProjetFindUniqueOrThrowArgs} args - Arguments to find a MembreProjet
     * @example
     * // Get one MembreProjet
     * const membreProjet = await prisma.membreProjet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MembreProjetFindUniqueOrThrowArgs>(args: SelectSubset<T, MembreProjetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MembreProjetClient<$Result.GetResult<Prisma.$MembreProjetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MembreProjet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembreProjetFindFirstArgs} args - Arguments to find a MembreProjet
     * @example
     * // Get one MembreProjet
     * const membreProjet = await prisma.membreProjet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MembreProjetFindFirstArgs>(args?: SelectSubset<T, MembreProjetFindFirstArgs<ExtArgs>>): Prisma__MembreProjetClient<$Result.GetResult<Prisma.$MembreProjetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MembreProjet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembreProjetFindFirstOrThrowArgs} args - Arguments to find a MembreProjet
     * @example
     * // Get one MembreProjet
     * const membreProjet = await prisma.membreProjet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MembreProjetFindFirstOrThrowArgs>(args?: SelectSubset<T, MembreProjetFindFirstOrThrowArgs<ExtArgs>>): Prisma__MembreProjetClient<$Result.GetResult<Prisma.$MembreProjetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MembreProjets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembreProjetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MembreProjets
     * const membreProjets = await prisma.membreProjet.findMany()
     * 
     * // Get first 10 MembreProjets
     * const membreProjets = await prisma.membreProjet.findMany({ take: 10 })
     * 
     * // Only select the `utilisateurId`
     * const membreProjetWithUtilisateurIdOnly = await prisma.membreProjet.findMany({ select: { utilisateurId: true } })
     * 
     */
    findMany<T extends MembreProjetFindManyArgs>(args?: SelectSubset<T, MembreProjetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembreProjetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MembreProjet.
     * @param {MembreProjetCreateArgs} args - Arguments to create a MembreProjet.
     * @example
     * // Create one MembreProjet
     * const MembreProjet = await prisma.membreProjet.create({
     *   data: {
     *     // ... data to create a MembreProjet
     *   }
     * })
     * 
     */
    create<T extends MembreProjetCreateArgs>(args: SelectSubset<T, MembreProjetCreateArgs<ExtArgs>>): Prisma__MembreProjetClient<$Result.GetResult<Prisma.$MembreProjetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MembreProjets.
     * @param {MembreProjetCreateManyArgs} args - Arguments to create many MembreProjets.
     * @example
     * // Create many MembreProjets
     * const membreProjet = await prisma.membreProjet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MembreProjetCreateManyArgs>(args?: SelectSubset<T, MembreProjetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MembreProjets and returns the data saved in the database.
     * @param {MembreProjetCreateManyAndReturnArgs} args - Arguments to create many MembreProjets.
     * @example
     * // Create many MembreProjets
     * const membreProjet = await prisma.membreProjet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MembreProjets and only return the `utilisateurId`
     * const membreProjetWithUtilisateurIdOnly = await prisma.membreProjet.createManyAndReturn({
     *   select: { utilisateurId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MembreProjetCreateManyAndReturnArgs>(args?: SelectSubset<T, MembreProjetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembreProjetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MembreProjet.
     * @param {MembreProjetDeleteArgs} args - Arguments to delete one MembreProjet.
     * @example
     * // Delete one MembreProjet
     * const MembreProjet = await prisma.membreProjet.delete({
     *   where: {
     *     // ... filter to delete one MembreProjet
     *   }
     * })
     * 
     */
    delete<T extends MembreProjetDeleteArgs>(args: SelectSubset<T, MembreProjetDeleteArgs<ExtArgs>>): Prisma__MembreProjetClient<$Result.GetResult<Prisma.$MembreProjetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MembreProjet.
     * @param {MembreProjetUpdateArgs} args - Arguments to update one MembreProjet.
     * @example
     * // Update one MembreProjet
     * const membreProjet = await prisma.membreProjet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MembreProjetUpdateArgs>(args: SelectSubset<T, MembreProjetUpdateArgs<ExtArgs>>): Prisma__MembreProjetClient<$Result.GetResult<Prisma.$MembreProjetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MembreProjets.
     * @param {MembreProjetDeleteManyArgs} args - Arguments to filter MembreProjets to delete.
     * @example
     * // Delete a few MembreProjets
     * const { count } = await prisma.membreProjet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MembreProjetDeleteManyArgs>(args?: SelectSubset<T, MembreProjetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MembreProjets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembreProjetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MembreProjets
     * const membreProjet = await prisma.membreProjet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MembreProjetUpdateManyArgs>(args: SelectSubset<T, MembreProjetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MembreProjets and returns the data updated in the database.
     * @param {MembreProjetUpdateManyAndReturnArgs} args - Arguments to update many MembreProjets.
     * @example
     * // Update many MembreProjets
     * const membreProjet = await prisma.membreProjet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MembreProjets and only return the `utilisateurId`
     * const membreProjetWithUtilisateurIdOnly = await prisma.membreProjet.updateManyAndReturn({
     *   select: { utilisateurId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MembreProjetUpdateManyAndReturnArgs>(args: SelectSubset<T, MembreProjetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembreProjetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MembreProjet.
     * @param {MembreProjetUpsertArgs} args - Arguments to update or create a MembreProjet.
     * @example
     * // Update or create a MembreProjet
     * const membreProjet = await prisma.membreProjet.upsert({
     *   create: {
     *     // ... data to create a MembreProjet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MembreProjet we want to update
     *   }
     * })
     */
    upsert<T extends MembreProjetUpsertArgs>(args: SelectSubset<T, MembreProjetUpsertArgs<ExtArgs>>): Prisma__MembreProjetClient<$Result.GetResult<Prisma.$MembreProjetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MembreProjets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembreProjetCountArgs} args - Arguments to filter MembreProjets to count.
     * @example
     * // Count the number of MembreProjets
     * const count = await prisma.membreProjet.count({
     *   where: {
     *     // ... the filter for the MembreProjets we want to count
     *   }
     * })
    **/
    count<T extends MembreProjetCountArgs>(
      args?: Subset<T, MembreProjetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MembreProjetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MembreProjet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembreProjetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MembreProjetAggregateArgs>(args: Subset<T, MembreProjetAggregateArgs>): Prisma.PrismaPromise<GetMembreProjetAggregateType<T>>

    /**
     * Group by MembreProjet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembreProjetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MembreProjetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MembreProjetGroupByArgs['orderBy'] }
        : { orderBy?: MembreProjetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MembreProjetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMembreProjetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MembreProjet model
   */
  readonly fields: MembreProjetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MembreProjet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MembreProjetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    utilisateur<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    projet<T extends ProjetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjetDefaultArgs<ExtArgs>>): Prisma__ProjetClient<$Result.GetResult<Prisma.$ProjetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MembreProjet model
   */
  interface MembreProjetFieldRefs {
    readonly utilisateurId: FieldRef<"MembreProjet", 'Int'>
    readonly projetId: FieldRef<"MembreProjet", 'Int'>
    readonly createdAt: FieldRef<"MembreProjet", 'DateTime'>
    readonly updatedAt: FieldRef<"MembreProjet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MembreProjet findUnique
   */
  export type MembreProjetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembreProjet
     */
    select?: MembreProjetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembreProjet
     */
    omit?: MembreProjetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreProjetInclude<ExtArgs> | null
    /**
     * Filter, which MembreProjet to fetch.
     */
    where: MembreProjetWhereUniqueInput
  }

  /**
   * MembreProjet findUniqueOrThrow
   */
  export type MembreProjetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembreProjet
     */
    select?: MembreProjetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembreProjet
     */
    omit?: MembreProjetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreProjetInclude<ExtArgs> | null
    /**
     * Filter, which MembreProjet to fetch.
     */
    where: MembreProjetWhereUniqueInput
  }

  /**
   * MembreProjet findFirst
   */
  export type MembreProjetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembreProjet
     */
    select?: MembreProjetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembreProjet
     */
    omit?: MembreProjetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreProjetInclude<ExtArgs> | null
    /**
     * Filter, which MembreProjet to fetch.
     */
    where?: MembreProjetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MembreProjets to fetch.
     */
    orderBy?: MembreProjetOrderByWithRelationInput | MembreProjetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MembreProjets.
     */
    cursor?: MembreProjetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MembreProjets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MembreProjets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MembreProjets.
     */
    distinct?: MembreProjetScalarFieldEnum | MembreProjetScalarFieldEnum[]
  }

  /**
   * MembreProjet findFirstOrThrow
   */
  export type MembreProjetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembreProjet
     */
    select?: MembreProjetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembreProjet
     */
    omit?: MembreProjetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreProjetInclude<ExtArgs> | null
    /**
     * Filter, which MembreProjet to fetch.
     */
    where?: MembreProjetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MembreProjets to fetch.
     */
    orderBy?: MembreProjetOrderByWithRelationInput | MembreProjetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MembreProjets.
     */
    cursor?: MembreProjetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MembreProjets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MembreProjets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MembreProjets.
     */
    distinct?: MembreProjetScalarFieldEnum | MembreProjetScalarFieldEnum[]
  }

  /**
   * MembreProjet findMany
   */
  export type MembreProjetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembreProjet
     */
    select?: MembreProjetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembreProjet
     */
    omit?: MembreProjetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreProjetInclude<ExtArgs> | null
    /**
     * Filter, which MembreProjets to fetch.
     */
    where?: MembreProjetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MembreProjets to fetch.
     */
    orderBy?: MembreProjetOrderByWithRelationInput | MembreProjetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MembreProjets.
     */
    cursor?: MembreProjetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MembreProjets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MembreProjets.
     */
    skip?: number
    distinct?: MembreProjetScalarFieldEnum | MembreProjetScalarFieldEnum[]
  }

  /**
   * MembreProjet create
   */
  export type MembreProjetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembreProjet
     */
    select?: MembreProjetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembreProjet
     */
    omit?: MembreProjetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreProjetInclude<ExtArgs> | null
    /**
     * The data needed to create a MembreProjet.
     */
    data: XOR<MembreProjetCreateInput, MembreProjetUncheckedCreateInput>
  }

  /**
   * MembreProjet createMany
   */
  export type MembreProjetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MembreProjets.
     */
    data: MembreProjetCreateManyInput | MembreProjetCreateManyInput[]
  }

  /**
   * MembreProjet createManyAndReturn
   */
  export type MembreProjetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembreProjet
     */
    select?: MembreProjetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MembreProjet
     */
    omit?: MembreProjetOmit<ExtArgs> | null
    /**
     * The data used to create many MembreProjets.
     */
    data: MembreProjetCreateManyInput | MembreProjetCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreProjetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MembreProjet update
   */
  export type MembreProjetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembreProjet
     */
    select?: MembreProjetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembreProjet
     */
    omit?: MembreProjetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreProjetInclude<ExtArgs> | null
    /**
     * The data needed to update a MembreProjet.
     */
    data: XOR<MembreProjetUpdateInput, MembreProjetUncheckedUpdateInput>
    /**
     * Choose, which MembreProjet to update.
     */
    where: MembreProjetWhereUniqueInput
  }

  /**
   * MembreProjet updateMany
   */
  export type MembreProjetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MembreProjets.
     */
    data: XOR<MembreProjetUpdateManyMutationInput, MembreProjetUncheckedUpdateManyInput>
    /**
     * Filter which MembreProjets to update
     */
    where?: MembreProjetWhereInput
    /**
     * Limit how many MembreProjets to update.
     */
    limit?: number
  }

  /**
   * MembreProjet updateManyAndReturn
   */
  export type MembreProjetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembreProjet
     */
    select?: MembreProjetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MembreProjet
     */
    omit?: MembreProjetOmit<ExtArgs> | null
    /**
     * The data used to update MembreProjets.
     */
    data: XOR<MembreProjetUpdateManyMutationInput, MembreProjetUncheckedUpdateManyInput>
    /**
     * Filter which MembreProjets to update
     */
    where?: MembreProjetWhereInput
    /**
     * Limit how many MembreProjets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreProjetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MembreProjet upsert
   */
  export type MembreProjetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembreProjet
     */
    select?: MembreProjetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembreProjet
     */
    omit?: MembreProjetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreProjetInclude<ExtArgs> | null
    /**
     * The filter to search for the MembreProjet to update in case it exists.
     */
    where: MembreProjetWhereUniqueInput
    /**
     * In case the MembreProjet found by the `where` argument doesn't exist, create a new MembreProjet with this data.
     */
    create: XOR<MembreProjetCreateInput, MembreProjetUncheckedCreateInput>
    /**
     * In case the MembreProjet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MembreProjetUpdateInput, MembreProjetUncheckedUpdateInput>
  }

  /**
   * MembreProjet delete
   */
  export type MembreProjetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembreProjet
     */
    select?: MembreProjetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembreProjet
     */
    omit?: MembreProjetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreProjetInclude<ExtArgs> | null
    /**
     * Filter which MembreProjet to delete.
     */
    where: MembreProjetWhereUniqueInput
  }

  /**
   * MembreProjet deleteMany
   */
  export type MembreProjetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MembreProjets to delete
     */
    where?: MembreProjetWhereInput
    /**
     * Limit how many MembreProjets to delete.
     */
    limit?: number
  }

  /**
   * MembreProjet without action
   */
  export type MembreProjetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembreProjet
     */
    select?: MembreProjetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembreProjet
     */
    omit?: MembreProjetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreProjetInclude<ExtArgs> | null
  }


  /**
   * Model PartageDocument
   */

  export type AggregatePartageDocument = {
    _count: PartageDocumentCountAggregateOutputType | null
    _avg: PartageDocumentAvgAggregateOutputType | null
    _sum: PartageDocumentSumAggregateOutputType | null
    _min: PartageDocumentMinAggregateOutputType | null
    _max: PartageDocumentMaxAggregateOutputType | null
  }

  export type PartageDocumentAvgAggregateOutputType = {
    id: number | null
    documentId: number | null
    utilisateurId: number | null
    departementId: number | null
    projetId: number | null
    partageurId: number | null
  }

  export type PartageDocumentSumAggregateOutputType = {
    id: number | null
    documentId: number | null
    utilisateurId: number | null
    departementId: number | null
    projetId: number | null
    partageurId: number | null
  }

  export type PartageDocumentMinAggregateOutputType = {
    id: number | null
    documentId: number | null
    utilisateurId: number | null
    departementId: number | null
    projetId: number | null
    datePartage: Date | null
    partageurId: number | null
    historique: string | null
  }

  export type PartageDocumentMaxAggregateOutputType = {
    id: number | null
    documentId: number | null
    utilisateurId: number | null
    departementId: number | null
    projetId: number | null
    datePartage: Date | null
    partageurId: number | null
    historique: string | null
  }

  export type PartageDocumentCountAggregateOutputType = {
    id: number
    documentId: number
    utilisateurId: number
    departementId: number
    projetId: number
    datePartage: number
    partageurId: number
    historique: number
    _all: number
  }


  export type PartageDocumentAvgAggregateInputType = {
    id?: true
    documentId?: true
    utilisateurId?: true
    departementId?: true
    projetId?: true
    partageurId?: true
  }

  export type PartageDocumentSumAggregateInputType = {
    id?: true
    documentId?: true
    utilisateurId?: true
    departementId?: true
    projetId?: true
    partageurId?: true
  }

  export type PartageDocumentMinAggregateInputType = {
    id?: true
    documentId?: true
    utilisateurId?: true
    departementId?: true
    projetId?: true
    datePartage?: true
    partageurId?: true
    historique?: true
  }

  export type PartageDocumentMaxAggregateInputType = {
    id?: true
    documentId?: true
    utilisateurId?: true
    departementId?: true
    projetId?: true
    datePartage?: true
    partageurId?: true
    historique?: true
  }

  export type PartageDocumentCountAggregateInputType = {
    id?: true
    documentId?: true
    utilisateurId?: true
    departementId?: true
    projetId?: true
    datePartage?: true
    partageurId?: true
    historique?: true
    _all?: true
  }

  export type PartageDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PartageDocument to aggregate.
     */
    where?: PartageDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartageDocuments to fetch.
     */
    orderBy?: PartageDocumentOrderByWithRelationInput | PartageDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartageDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartageDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartageDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PartageDocuments
    **/
    _count?: true | PartageDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PartageDocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PartageDocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartageDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartageDocumentMaxAggregateInputType
  }

  export type GetPartageDocumentAggregateType<T extends PartageDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregatePartageDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePartageDocument[P]>
      : GetScalarType<T[P], AggregatePartageDocument[P]>
  }




  export type PartageDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartageDocumentWhereInput
    orderBy?: PartageDocumentOrderByWithAggregationInput | PartageDocumentOrderByWithAggregationInput[]
    by: PartageDocumentScalarFieldEnum[] | PartageDocumentScalarFieldEnum
    having?: PartageDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartageDocumentCountAggregateInputType | true
    _avg?: PartageDocumentAvgAggregateInputType
    _sum?: PartageDocumentSumAggregateInputType
    _min?: PartageDocumentMinAggregateInputType
    _max?: PartageDocumentMaxAggregateInputType
  }

  export type PartageDocumentGroupByOutputType = {
    id: number
    documentId: number
    utilisateurId: number | null
    departementId: number | null
    projetId: number | null
    datePartage: Date
    partageurId: number
    historique: string | null
    _count: PartageDocumentCountAggregateOutputType | null
    _avg: PartageDocumentAvgAggregateOutputType | null
    _sum: PartageDocumentSumAggregateOutputType | null
    _min: PartageDocumentMinAggregateOutputType | null
    _max: PartageDocumentMaxAggregateOutputType | null
  }

  type GetPartageDocumentGroupByPayload<T extends PartageDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartageDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartageDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartageDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], PartageDocumentGroupByOutputType[P]>
        }
      >
    >


  export type PartageDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    utilisateurId?: boolean
    departementId?: boolean
    projetId?: boolean
    datePartage?: boolean
    partageurId?: boolean
    historique?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    utilisateur?: boolean | PartageDocument$utilisateurArgs<ExtArgs>
    departement?: boolean | PartageDocument$departementArgs<ExtArgs>
    projet?: boolean | PartageDocument$projetArgs<ExtArgs>
    partageur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partageDocument"]>

  export type PartageDocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    utilisateurId?: boolean
    departementId?: boolean
    projetId?: boolean
    datePartage?: boolean
    partageurId?: boolean
    historique?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    utilisateur?: boolean | PartageDocument$utilisateurArgs<ExtArgs>
    departement?: boolean | PartageDocument$departementArgs<ExtArgs>
    projet?: boolean | PartageDocument$projetArgs<ExtArgs>
    partageur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partageDocument"]>

  export type PartageDocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    utilisateurId?: boolean
    departementId?: boolean
    projetId?: boolean
    datePartage?: boolean
    partageurId?: boolean
    historique?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    utilisateur?: boolean | PartageDocument$utilisateurArgs<ExtArgs>
    departement?: boolean | PartageDocument$departementArgs<ExtArgs>
    projet?: boolean | PartageDocument$projetArgs<ExtArgs>
    partageur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partageDocument"]>

  export type PartageDocumentSelectScalar = {
    id?: boolean
    documentId?: boolean
    utilisateurId?: boolean
    departementId?: boolean
    projetId?: boolean
    datePartage?: boolean
    partageurId?: boolean
    historique?: boolean
  }

  export type PartageDocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documentId" | "utilisateurId" | "departementId" | "projetId" | "datePartage" | "partageurId" | "historique", ExtArgs["result"]["partageDocument"]>
  export type PartageDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    utilisateur?: boolean | PartageDocument$utilisateurArgs<ExtArgs>
    departement?: boolean | PartageDocument$departementArgs<ExtArgs>
    projet?: boolean | PartageDocument$projetArgs<ExtArgs>
    partageur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }
  export type PartageDocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    utilisateur?: boolean | PartageDocument$utilisateurArgs<ExtArgs>
    departement?: boolean | PartageDocument$departementArgs<ExtArgs>
    projet?: boolean | PartageDocument$projetArgs<ExtArgs>
    partageur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }
  export type PartageDocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    utilisateur?: boolean | PartageDocument$utilisateurArgs<ExtArgs>
    departement?: boolean | PartageDocument$departementArgs<ExtArgs>
    projet?: boolean | PartageDocument$projetArgs<ExtArgs>
    partageur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }

  export type $PartageDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PartageDocument"
    objects: {
      document: Prisma.$DocumentPayload<ExtArgs>
      utilisateur: Prisma.$UtilisateurPayload<ExtArgs> | null
      departement: Prisma.$DepartementPayload<ExtArgs> | null
      projet: Prisma.$ProjetPayload<ExtArgs> | null
      partageur: Prisma.$UtilisateurPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      documentId: number
      utilisateurId: number | null
      departementId: number | null
      projetId: number | null
      datePartage: Date
      partageurId: number
      historique: string | null
    }, ExtArgs["result"]["partageDocument"]>
    composites: {}
  }

  type PartageDocumentGetPayload<S extends boolean | null | undefined | PartageDocumentDefaultArgs> = $Result.GetResult<Prisma.$PartageDocumentPayload, S>

  type PartageDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PartageDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PartageDocumentCountAggregateInputType | true
    }

  export interface PartageDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PartageDocument'], meta: { name: 'PartageDocument' } }
    /**
     * Find zero or one PartageDocument that matches the filter.
     * @param {PartageDocumentFindUniqueArgs} args - Arguments to find a PartageDocument
     * @example
     * // Get one PartageDocument
     * const partageDocument = await prisma.partageDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartageDocumentFindUniqueArgs>(args: SelectSubset<T, PartageDocumentFindUniqueArgs<ExtArgs>>): Prisma__PartageDocumentClient<$Result.GetResult<Prisma.$PartageDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PartageDocument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartageDocumentFindUniqueOrThrowArgs} args - Arguments to find a PartageDocument
     * @example
     * // Get one PartageDocument
     * const partageDocument = await prisma.partageDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartageDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, PartageDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartageDocumentClient<$Result.GetResult<Prisma.$PartageDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PartageDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartageDocumentFindFirstArgs} args - Arguments to find a PartageDocument
     * @example
     * // Get one PartageDocument
     * const partageDocument = await prisma.partageDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartageDocumentFindFirstArgs>(args?: SelectSubset<T, PartageDocumentFindFirstArgs<ExtArgs>>): Prisma__PartageDocumentClient<$Result.GetResult<Prisma.$PartageDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PartageDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartageDocumentFindFirstOrThrowArgs} args - Arguments to find a PartageDocument
     * @example
     * // Get one PartageDocument
     * const partageDocument = await prisma.partageDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartageDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, PartageDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartageDocumentClient<$Result.GetResult<Prisma.$PartageDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PartageDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartageDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PartageDocuments
     * const partageDocuments = await prisma.partageDocument.findMany()
     * 
     * // Get first 10 PartageDocuments
     * const partageDocuments = await prisma.partageDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partageDocumentWithIdOnly = await prisma.partageDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartageDocumentFindManyArgs>(args?: SelectSubset<T, PartageDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartageDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PartageDocument.
     * @param {PartageDocumentCreateArgs} args - Arguments to create a PartageDocument.
     * @example
     * // Create one PartageDocument
     * const PartageDocument = await prisma.partageDocument.create({
     *   data: {
     *     // ... data to create a PartageDocument
     *   }
     * })
     * 
     */
    create<T extends PartageDocumentCreateArgs>(args: SelectSubset<T, PartageDocumentCreateArgs<ExtArgs>>): Prisma__PartageDocumentClient<$Result.GetResult<Prisma.$PartageDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PartageDocuments.
     * @param {PartageDocumentCreateManyArgs} args - Arguments to create many PartageDocuments.
     * @example
     * // Create many PartageDocuments
     * const partageDocument = await prisma.partageDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartageDocumentCreateManyArgs>(args?: SelectSubset<T, PartageDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PartageDocuments and returns the data saved in the database.
     * @param {PartageDocumentCreateManyAndReturnArgs} args - Arguments to create many PartageDocuments.
     * @example
     * // Create many PartageDocuments
     * const partageDocument = await prisma.partageDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PartageDocuments and only return the `id`
     * const partageDocumentWithIdOnly = await prisma.partageDocument.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PartageDocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, PartageDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartageDocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PartageDocument.
     * @param {PartageDocumentDeleteArgs} args - Arguments to delete one PartageDocument.
     * @example
     * // Delete one PartageDocument
     * const PartageDocument = await prisma.partageDocument.delete({
     *   where: {
     *     // ... filter to delete one PartageDocument
     *   }
     * })
     * 
     */
    delete<T extends PartageDocumentDeleteArgs>(args: SelectSubset<T, PartageDocumentDeleteArgs<ExtArgs>>): Prisma__PartageDocumentClient<$Result.GetResult<Prisma.$PartageDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PartageDocument.
     * @param {PartageDocumentUpdateArgs} args - Arguments to update one PartageDocument.
     * @example
     * // Update one PartageDocument
     * const partageDocument = await prisma.partageDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartageDocumentUpdateArgs>(args: SelectSubset<T, PartageDocumentUpdateArgs<ExtArgs>>): Prisma__PartageDocumentClient<$Result.GetResult<Prisma.$PartageDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PartageDocuments.
     * @param {PartageDocumentDeleteManyArgs} args - Arguments to filter PartageDocuments to delete.
     * @example
     * // Delete a few PartageDocuments
     * const { count } = await prisma.partageDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartageDocumentDeleteManyArgs>(args?: SelectSubset<T, PartageDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PartageDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartageDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PartageDocuments
     * const partageDocument = await prisma.partageDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartageDocumentUpdateManyArgs>(args: SelectSubset<T, PartageDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PartageDocuments and returns the data updated in the database.
     * @param {PartageDocumentUpdateManyAndReturnArgs} args - Arguments to update many PartageDocuments.
     * @example
     * // Update many PartageDocuments
     * const partageDocument = await prisma.partageDocument.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PartageDocuments and only return the `id`
     * const partageDocumentWithIdOnly = await prisma.partageDocument.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PartageDocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, PartageDocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartageDocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PartageDocument.
     * @param {PartageDocumentUpsertArgs} args - Arguments to update or create a PartageDocument.
     * @example
     * // Update or create a PartageDocument
     * const partageDocument = await prisma.partageDocument.upsert({
     *   create: {
     *     // ... data to create a PartageDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PartageDocument we want to update
     *   }
     * })
     */
    upsert<T extends PartageDocumentUpsertArgs>(args: SelectSubset<T, PartageDocumentUpsertArgs<ExtArgs>>): Prisma__PartageDocumentClient<$Result.GetResult<Prisma.$PartageDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PartageDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartageDocumentCountArgs} args - Arguments to filter PartageDocuments to count.
     * @example
     * // Count the number of PartageDocuments
     * const count = await prisma.partageDocument.count({
     *   where: {
     *     // ... the filter for the PartageDocuments we want to count
     *   }
     * })
    **/
    count<T extends PartageDocumentCountArgs>(
      args?: Subset<T, PartageDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartageDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PartageDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartageDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PartageDocumentAggregateArgs>(args: Subset<T, PartageDocumentAggregateArgs>): Prisma.PrismaPromise<GetPartageDocumentAggregateType<T>>

    /**
     * Group by PartageDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartageDocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PartageDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartageDocumentGroupByArgs['orderBy'] }
        : { orderBy?: PartageDocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PartageDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartageDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PartageDocument model
   */
  readonly fields: PartageDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PartageDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartageDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    document<T extends DocumentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocumentDefaultArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    utilisateur<T extends PartageDocument$utilisateurArgs<ExtArgs> = {}>(args?: Subset<T, PartageDocument$utilisateurArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    departement<T extends PartageDocument$departementArgs<ExtArgs> = {}>(args?: Subset<T, PartageDocument$departementArgs<ExtArgs>>): Prisma__DepartementClient<$Result.GetResult<Prisma.$DepartementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    projet<T extends PartageDocument$projetArgs<ExtArgs> = {}>(args?: Subset<T, PartageDocument$projetArgs<ExtArgs>>): Prisma__ProjetClient<$Result.GetResult<Prisma.$ProjetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    partageur<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PartageDocument model
   */
  interface PartageDocumentFieldRefs {
    readonly id: FieldRef<"PartageDocument", 'Int'>
    readonly documentId: FieldRef<"PartageDocument", 'Int'>
    readonly utilisateurId: FieldRef<"PartageDocument", 'Int'>
    readonly departementId: FieldRef<"PartageDocument", 'Int'>
    readonly projetId: FieldRef<"PartageDocument", 'Int'>
    readonly datePartage: FieldRef<"PartageDocument", 'DateTime'>
    readonly partageurId: FieldRef<"PartageDocument", 'Int'>
    readonly historique: FieldRef<"PartageDocument", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PartageDocument findUnique
   */
  export type PartageDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartageDocument
     */
    select?: PartageDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartageDocument
     */
    omit?: PartageDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartageDocumentInclude<ExtArgs> | null
    /**
     * Filter, which PartageDocument to fetch.
     */
    where: PartageDocumentWhereUniqueInput
  }

  /**
   * PartageDocument findUniqueOrThrow
   */
  export type PartageDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartageDocument
     */
    select?: PartageDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartageDocument
     */
    omit?: PartageDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartageDocumentInclude<ExtArgs> | null
    /**
     * Filter, which PartageDocument to fetch.
     */
    where: PartageDocumentWhereUniqueInput
  }

  /**
   * PartageDocument findFirst
   */
  export type PartageDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartageDocument
     */
    select?: PartageDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartageDocument
     */
    omit?: PartageDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartageDocumentInclude<ExtArgs> | null
    /**
     * Filter, which PartageDocument to fetch.
     */
    where?: PartageDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartageDocuments to fetch.
     */
    orderBy?: PartageDocumentOrderByWithRelationInput | PartageDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PartageDocuments.
     */
    cursor?: PartageDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartageDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartageDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartageDocuments.
     */
    distinct?: PartageDocumentScalarFieldEnum | PartageDocumentScalarFieldEnum[]
  }

  /**
   * PartageDocument findFirstOrThrow
   */
  export type PartageDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartageDocument
     */
    select?: PartageDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartageDocument
     */
    omit?: PartageDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartageDocumentInclude<ExtArgs> | null
    /**
     * Filter, which PartageDocument to fetch.
     */
    where?: PartageDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartageDocuments to fetch.
     */
    orderBy?: PartageDocumentOrderByWithRelationInput | PartageDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PartageDocuments.
     */
    cursor?: PartageDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartageDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartageDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartageDocuments.
     */
    distinct?: PartageDocumentScalarFieldEnum | PartageDocumentScalarFieldEnum[]
  }

  /**
   * PartageDocument findMany
   */
  export type PartageDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartageDocument
     */
    select?: PartageDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartageDocument
     */
    omit?: PartageDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartageDocumentInclude<ExtArgs> | null
    /**
     * Filter, which PartageDocuments to fetch.
     */
    where?: PartageDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartageDocuments to fetch.
     */
    orderBy?: PartageDocumentOrderByWithRelationInput | PartageDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PartageDocuments.
     */
    cursor?: PartageDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartageDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartageDocuments.
     */
    skip?: number
    distinct?: PartageDocumentScalarFieldEnum | PartageDocumentScalarFieldEnum[]
  }

  /**
   * PartageDocument create
   */
  export type PartageDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartageDocument
     */
    select?: PartageDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartageDocument
     */
    omit?: PartageDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartageDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a PartageDocument.
     */
    data: XOR<PartageDocumentCreateInput, PartageDocumentUncheckedCreateInput>
  }

  /**
   * PartageDocument createMany
   */
  export type PartageDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PartageDocuments.
     */
    data: PartageDocumentCreateManyInput | PartageDocumentCreateManyInput[]
  }

  /**
   * PartageDocument createManyAndReturn
   */
  export type PartageDocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartageDocument
     */
    select?: PartageDocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PartageDocument
     */
    omit?: PartageDocumentOmit<ExtArgs> | null
    /**
     * The data used to create many PartageDocuments.
     */
    data: PartageDocumentCreateManyInput | PartageDocumentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartageDocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PartageDocument update
   */
  export type PartageDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartageDocument
     */
    select?: PartageDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartageDocument
     */
    omit?: PartageDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartageDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a PartageDocument.
     */
    data: XOR<PartageDocumentUpdateInput, PartageDocumentUncheckedUpdateInput>
    /**
     * Choose, which PartageDocument to update.
     */
    where: PartageDocumentWhereUniqueInput
  }

  /**
   * PartageDocument updateMany
   */
  export type PartageDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PartageDocuments.
     */
    data: XOR<PartageDocumentUpdateManyMutationInput, PartageDocumentUncheckedUpdateManyInput>
    /**
     * Filter which PartageDocuments to update
     */
    where?: PartageDocumentWhereInput
    /**
     * Limit how many PartageDocuments to update.
     */
    limit?: number
  }

  /**
   * PartageDocument updateManyAndReturn
   */
  export type PartageDocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartageDocument
     */
    select?: PartageDocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PartageDocument
     */
    omit?: PartageDocumentOmit<ExtArgs> | null
    /**
     * The data used to update PartageDocuments.
     */
    data: XOR<PartageDocumentUpdateManyMutationInput, PartageDocumentUncheckedUpdateManyInput>
    /**
     * Filter which PartageDocuments to update
     */
    where?: PartageDocumentWhereInput
    /**
     * Limit how many PartageDocuments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartageDocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PartageDocument upsert
   */
  export type PartageDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartageDocument
     */
    select?: PartageDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartageDocument
     */
    omit?: PartageDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartageDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the PartageDocument to update in case it exists.
     */
    where: PartageDocumentWhereUniqueInput
    /**
     * In case the PartageDocument found by the `where` argument doesn't exist, create a new PartageDocument with this data.
     */
    create: XOR<PartageDocumentCreateInput, PartageDocumentUncheckedCreateInput>
    /**
     * In case the PartageDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartageDocumentUpdateInput, PartageDocumentUncheckedUpdateInput>
  }

  /**
   * PartageDocument delete
   */
  export type PartageDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartageDocument
     */
    select?: PartageDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartageDocument
     */
    omit?: PartageDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartageDocumentInclude<ExtArgs> | null
    /**
     * Filter which PartageDocument to delete.
     */
    where: PartageDocumentWhereUniqueInput
  }

  /**
   * PartageDocument deleteMany
   */
  export type PartageDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PartageDocuments to delete
     */
    where?: PartageDocumentWhereInput
    /**
     * Limit how many PartageDocuments to delete.
     */
    limit?: number
  }

  /**
   * PartageDocument.utilisateur
   */
  export type PartageDocument$utilisateurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    where?: UtilisateurWhereInput
  }

  /**
   * PartageDocument.departement
   */
  export type PartageDocument$departementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departement
     */
    select?: DepartementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departement
     */
    omit?: DepartementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartementInclude<ExtArgs> | null
    where?: DepartementWhereInput
  }

  /**
   * PartageDocument.projet
   */
  export type PartageDocument$projetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projet
     */
    select?: ProjetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projet
     */
    omit?: ProjetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetInclude<ExtArgs> | null
    where?: ProjetWhereInput
  }

  /**
   * PartageDocument without action
   */
  export type PartageDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartageDocument
     */
    select?: PartageDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartageDocument
     */
    omit?: PartageDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartageDocumentInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
    utilisateurId: number | null
    documentId: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
    utilisateurId: number | null
    documentId: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    utilisateurId: number | null
    message: string | null
    dateNotification: Date | null
    documentId: number | null
    vu: boolean | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    utilisateurId: number | null
    message: string | null
    dateNotification: Date | null
    documentId: number | null
    vu: boolean | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    utilisateurId: number
    message: number
    dateNotification: number
    documentId: number
    vu: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
    utilisateurId?: true
    documentId?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
    utilisateurId?: true
    documentId?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    utilisateurId?: true
    message?: true
    dateNotification?: true
    documentId?: true
    vu?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    utilisateurId?: true
    message?: true
    dateNotification?: true
    documentId?: true
    vu?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    utilisateurId?: true
    message?: true
    dateNotification?: true
    documentId?: true
    vu?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    utilisateurId: number
    message: string
    dateNotification: Date
    documentId: number
    vu: boolean
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    utilisateurId?: boolean
    message?: boolean
    dateNotification?: boolean
    documentId?: boolean
    vu?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    utilisateurId?: boolean
    message?: boolean
    dateNotification?: boolean
    documentId?: boolean
    vu?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    utilisateurId?: boolean
    message?: boolean
    dateNotification?: boolean
    documentId?: boolean
    vu?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    utilisateurId?: boolean
    message?: boolean
    dateNotification?: boolean
    documentId?: boolean
    vu?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "utilisateurId" | "message" | "dateNotification" | "documentId" | "vu", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      document: Prisma.$DocumentPayload<ExtArgs>
      utilisateur: Prisma.$UtilisateurPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      utilisateurId: number
      message: string
      dateNotification: Date
      documentId: number
      vu: boolean
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    document<T extends DocumentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocumentDefaultArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    utilisateur<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'Int'>
    readonly utilisateurId: FieldRef<"Notification", 'Int'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly dateNotification: FieldRef<"Notification", 'DateTime'>
    readonly documentId: FieldRef<"Notification", 'Int'>
    readonly vu: FieldRef<"Notification", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DepartementScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DepartementScalarFieldEnum = (typeof DepartementScalarFieldEnum)[keyof typeof DepartementScalarFieldEnum]


  export const UtilisateurScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    email: 'email',
    password: 'password',
    role: 'role',
    departementId: 'departementId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UtilisateurScalarFieldEnum = (typeof UtilisateurScalarFieldEnum)[keyof typeof UtilisateurScalarFieldEnum]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    titre: 'titre',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const ProjetScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    departementId: 'departementId'
  };

  export type ProjetScalarFieldEnum = (typeof ProjetScalarFieldEnum)[keyof typeof ProjetScalarFieldEnum]


  export const TacheScalarFieldEnum: {
    id: 'id',
    titre: 'titre',
    description: 'description',
    projetId: 'projetId',
    deadline: 'deadline',
    statut: 'statut',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TacheScalarFieldEnum = (typeof TacheScalarFieldEnum)[keyof typeof TacheScalarFieldEnum]


  export const TacheMembreScalarFieldEnum: {
    tacheId: 'tacheId',
    utilisateurId: 'utilisateurId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TacheMembreScalarFieldEnum = (typeof TacheMembreScalarFieldEnum)[keyof typeof TacheMembreScalarFieldEnum]


  export const MembreProjetScalarFieldEnum: {
    utilisateurId: 'utilisateurId',
    projetId: 'projetId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MembreProjetScalarFieldEnum = (typeof MembreProjetScalarFieldEnum)[keyof typeof MembreProjetScalarFieldEnum]


  export const PartageDocumentScalarFieldEnum: {
    id: 'id',
    documentId: 'documentId',
    utilisateurId: 'utilisateurId',
    departementId: 'departementId',
    projetId: 'projetId',
    datePartage: 'datePartage',
    partageurId: 'partageurId',
    historique: 'historique'
  };

  export type PartageDocumentScalarFieldEnum = (typeof PartageDocumentScalarFieldEnum)[keyof typeof PartageDocumentScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    utilisateurId: 'utilisateurId',
    message: 'message',
    dateNotification: 'dateNotification',
    documentId: 'documentId',
    vu: 'vu'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'TacheStatut'
   */
  export type EnumTacheStatutFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TacheStatut'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type DepartementWhereInput = {
    AND?: DepartementWhereInput | DepartementWhereInput[]
    OR?: DepartementWhereInput[]
    NOT?: DepartementWhereInput | DepartementWhereInput[]
    id?: IntFilter<"Departement"> | number
    nom?: StringFilter<"Departement"> | string
    createdAt?: DateTimeFilter<"Departement"> | Date | string
    updatedAt?: DateTimeFilter<"Departement"> | Date | string
    projets?: ProjetListRelationFilter
    utilisateurs?: UtilisateurListRelationFilter
    partages?: PartageDocumentListRelationFilter
  }

  export type DepartementOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projets?: ProjetOrderByRelationAggregateInput
    utilisateurs?: UtilisateurOrderByRelationAggregateInput
    partages?: PartageDocumentOrderByRelationAggregateInput
  }

  export type DepartementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DepartementWhereInput | DepartementWhereInput[]
    OR?: DepartementWhereInput[]
    NOT?: DepartementWhereInput | DepartementWhereInput[]
    nom?: StringFilter<"Departement"> | string
    createdAt?: DateTimeFilter<"Departement"> | Date | string
    updatedAt?: DateTimeFilter<"Departement"> | Date | string
    projets?: ProjetListRelationFilter
    utilisateurs?: UtilisateurListRelationFilter
    partages?: PartageDocumentListRelationFilter
  }, "id">

  export type DepartementOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DepartementCountOrderByAggregateInput
    _avg?: DepartementAvgOrderByAggregateInput
    _max?: DepartementMaxOrderByAggregateInput
    _min?: DepartementMinOrderByAggregateInput
    _sum?: DepartementSumOrderByAggregateInput
  }

  export type DepartementScalarWhereWithAggregatesInput = {
    AND?: DepartementScalarWhereWithAggregatesInput | DepartementScalarWhereWithAggregatesInput[]
    OR?: DepartementScalarWhereWithAggregatesInput[]
    NOT?: DepartementScalarWhereWithAggregatesInput | DepartementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Departement"> | number
    nom?: StringWithAggregatesFilter<"Departement"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Departement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Departement"> | Date | string
  }

  export type UtilisateurWhereInput = {
    AND?: UtilisateurWhereInput | UtilisateurWhereInput[]
    OR?: UtilisateurWhereInput[]
    NOT?: UtilisateurWhereInput | UtilisateurWhereInput[]
    id?: IntFilter<"Utilisateur"> | number
    nom?: StringFilter<"Utilisateur"> | string
    email?: StringFilter<"Utilisateur"> | string
    password?: StringFilter<"Utilisateur"> | string
    role?: EnumRoleFilter<"Utilisateur"> | $Enums.Role
    departementId?: IntNullableFilter<"Utilisateur"> | number | null
    createdAt?: DateTimeFilter<"Utilisateur"> | Date | string
    updatedAt?: DateTimeFilter<"Utilisateur"> | Date | string
    departement?: XOR<DepartementNullableScalarRelationFilter, DepartementWhereInput> | null
    projets?: MembreProjetListRelationFilter
    taches?: TacheMembreListRelationFilter
    partages?: PartageDocumentListRelationFilter
    partagesEnTantQuePartageur?: PartageDocumentListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type UtilisateurOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    departementId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    departement?: DepartementOrderByWithRelationInput
    projets?: MembreProjetOrderByRelationAggregateInput
    taches?: TacheMembreOrderByRelationAggregateInput
    partages?: PartageDocumentOrderByRelationAggregateInput
    partagesEnTantQuePartageur?: PartageDocumentOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type UtilisateurWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UtilisateurWhereInput | UtilisateurWhereInput[]
    OR?: UtilisateurWhereInput[]
    NOT?: UtilisateurWhereInput | UtilisateurWhereInput[]
    nom?: StringFilter<"Utilisateur"> | string
    password?: StringFilter<"Utilisateur"> | string
    role?: EnumRoleFilter<"Utilisateur"> | $Enums.Role
    departementId?: IntNullableFilter<"Utilisateur"> | number | null
    createdAt?: DateTimeFilter<"Utilisateur"> | Date | string
    updatedAt?: DateTimeFilter<"Utilisateur"> | Date | string
    departement?: XOR<DepartementNullableScalarRelationFilter, DepartementWhereInput> | null
    projets?: MembreProjetListRelationFilter
    taches?: TacheMembreListRelationFilter
    partages?: PartageDocumentListRelationFilter
    partagesEnTantQuePartageur?: PartageDocumentListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id" | "email">

  export type UtilisateurOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    departementId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UtilisateurCountOrderByAggregateInput
    _avg?: UtilisateurAvgOrderByAggregateInput
    _max?: UtilisateurMaxOrderByAggregateInput
    _min?: UtilisateurMinOrderByAggregateInput
    _sum?: UtilisateurSumOrderByAggregateInput
  }

  export type UtilisateurScalarWhereWithAggregatesInput = {
    AND?: UtilisateurScalarWhereWithAggregatesInput | UtilisateurScalarWhereWithAggregatesInput[]
    OR?: UtilisateurScalarWhereWithAggregatesInput[]
    NOT?: UtilisateurScalarWhereWithAggregatesInput | UtilisateurScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Utilisateur"> | number
    nom?: StringWithAggregatesFilter<"Utilisateur"> | string
    email?: StringWithAggregatesFilter<"Utilisateur"> | string
    password?: StringWithAggregatesFilter<"Utilisateur"> | string
    role?: EnumRoleWithAggregatesFilter<"Utilisateur"> | $Enums.Role
    departementId?: IntNullableWithAggregatesFilter<"Utilisateur"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Utilisateur"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Utilisateur"> | Date | string
  }

  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    id?: IntFilter<"Document"> | number
    titre?: StringFilter<"Document"> | string
    description?: StringFilter<"Document"> | string
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
    partages?: PartageDocumentListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type DocumentOrderByWithRelationInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    partages?: PartageDocumentOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    titre?: StringFilter<"Document"> | string
    description?: StringFilter<"Document"> | string
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
    partages?: PartageDocumentListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id">

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _avg?: DocumentAvgOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
    _sum?: DocumentSumOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Document"> | number
    titre?: StringWithAggregatesFilter<"Document"> | string
    description?: StringWithAggregatesFilter<"Document"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
  }

  export type ProjetWhereInput = {
    AND?: ProjetWhereInput | ProjetWhereInput[]
    OR?: ProjetWhereInput[]
    NOT?: ProjetWhereInput | ProjetWhereInput[]
    id?: IntFilter<"Projet"> | number
    nom?: StringFilter<"Projet"> | string
    description?: StringNullableFilter<"Projet"> | string | null
    createdAt?: DateTimeFilter<"Projet"> | Date | string
    updatedAt?: DateTimeFilter<"Projet"> | Date | string
    departementId?: IntFilter<"Projet"> | number
    departement?: XOR<DepartementScalarRelationFilter, DepartementWhereInput>
    membres?: MembreProjetListRelationFilter
    taches?: TacheListRelationFilter
    partages?: PartageDocumentListRelationFilter
  }

  export type ProjetOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    departementId?: SortOrder
    departement?: DepartementOrderByWithRelationInput
    membres?: MembreProjetOrderByRelationAggregateInput
    taches?: TacheOrderByRelationAggregateInput
    partages?: PartageDocumentOrderByRelationAggregateInput
  }

  export type ProjetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjetWhereInput | ProjetWhereInput[]
    OR?: ProjetWhereInput[]
    NOT?: ProjetWhereInput | ProjetWhereInput[]
    nom?: StringFilter<"Projet"> | string
    description?: StringNullableFilter<"Projet"> | string | null
    createdAt?: DateTimeFilter<"Projet"> | Date | string
    updatedAt?: DateTimeFilter<"Projet"> | Date | string
    departementId?: IntFilter<"Projet"> | number
    departement?: XOR<DepartementScalarRelationFilter, DepartementWhereInput>
    membres?: MembreProjetListRelationFilter
    taches?: TacheListRelationFilter
    partages?: PartageDocumentListRelationFilter
  }, "id">

  export type ProjetOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    departementId?: SortOrder
    _count?: ProjetCountOrderByAggregateInput
    _avg?: ProjetAvgOrderByAggregateInput
    _max?: ProjetMaxOrderByAggregateInput
    _min?: ProjetMinOrderByAggregateInput
    _sum?: ProjetSumOrderByAggregateInput
  }

  export type ProjetScalarWhereWithAggregatesInput = {
    AND?: ProjetScalarWhereWithAggregatesInput | ProjetScalarWhereWithAggregatesInput[]
    OR?: ProjetScalarWhereWithAggregatesInput[]
    NOT?: ProjetScalarWhereWithAggregatesInput | ProjetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Projet"> | number
    nom?: StringWithAggregatesFilter<"Projet"> | string
    description?: StringNullableWithAggregatesFilter<"Projet"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Projet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Projet"> | Date | string
    departementId?: IntWithAggregatesFilter<"Projet"> | number
  }

  export type TacheWhereInput = {
    AND?: TacheWhereInput | TacheWhereInput[]
    OR?: TacheWhereInput[]
    NOT?: TacheWhereInput | TacheWhereInput[]
    id?: IntFilter<"Tache"> | number
    titre?: StringFilter<"Tache"> | string
    description?: StringNullableFilter<"Tache"> | string | null
    projetId?: IntFilter<"Tache"> | number
    deadline?: DateTimeNullableFilter<"Tache"> | Date | string | null
    statut?: EnumTacheStatutFilter<"Tache"> | $Enums.TacheStatut
    createdAt?: DateTimeFilter<"Tache"> | Date | string
    updatedAt?: DateTimeFilter<"Tache"> | Date | string
    projet?: XOR<ProjetScalarRelationFilter, ProjetWhereInput>
    tacheMembres?: TacheMembreListRelationFilter
  }

  export type TacheOrderByWithRelationInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrderInput | SortOrder
    projetId?: SortOrder
    deadline?: SortOrderInput | SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projet?: ProjetOrderByWithRelationInput
    tacheMembres?: TacheMembreOrderByRelationAggregateInput
  }

  export type TacheWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TacheWhereInput | TacheWhereInput[]
    OR?: TacheWhereInput[]
    NOT?: TacheWhereInput | TacheWhereInput[]
    titre?: StringFilter<"Tache"> | string
    description?: StringNullableFilter<"Tache"> | string | null
    projetId?: IntFilter<"Tache"> | number
    deadline?: DateTimeNullableFilter<"Tache"> | Date | string | null
    statut?: EnumTacheStatutFilter<"Tache"> | $Enums.TacheStatut
    createdAt?: DateTimeFilter<"Tache"> | Date | string
    updatedAt?: DateTimeFilter<"Tache"> | Date | string
    projet?: XOR<ProjetScalarRelationFilter, ProjetWhereInput>
    tacheMembres?: TacheMembreListRelationFilter
  }, "id">

  export type TacheOrderByWithAggregationInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrderInput | SortOrder
    projetId?: SortOrder
    deadline?: SortOrderInput | SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TacheCountOrderByAggregateInput
    _avg?: TacheAvgOrderByAggregateInput
    _max?: TacheMaxOrderByAggregateInput
    _min?: TacheMinOrderByAggregateInput
    _sum?: TacheSumOrderByAggregateInput
  }

  export type TacheScalarWhereWithAggregatesInput = {
    AND?: TacheScalarWhereWithAggregatesInput | TacheScalarWhereWithAggregatesInput[]
    OR?: TacheScalarWhereWithAggregatesInput[]
    NOT?: TacheScalarWhereWithAggregatesInput | TacheScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tache"> | number
    titre?: StringWithAggregatesFilter<"Tache"> | string
    description?: StringNullableWithAggregatesFilter<"Tache"> | string | null
    projetId?: IntWithAggregatesFilter<"Tache"> | number
    deadline?: DateTimeNullableWithAggregatesFilter<"Tache"> | Date | string | null
    statut?: EnumTacheStatutWithAggregatesFilter<"Tache"> | $Enums.TacheStatut
    createdAt?: DateTimeWithAggregatesFilter<"Tache"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tache"> | Date | string
  }

  export type TacheMembreWhereInput = {
    AND?: TacheMembreWhereInput | TacheMembreWhereInput[]
    OR?: TacheMembreWhereInput[]
    NOT?: TacheMembreWhereInput | TacheMembreWhereInput[]
    tacheId?: IntFilter<"TacheMembre"> | number
    utilisateurId?: IntFilter<"TacheMembre"> | number
    createdAt?: DateTimeFilter<"TacheMembre"> | Date | string
    updatedAt?: DateTimeFilter<"TacheMembre"> | Date | string
    tache?: XOR<TacheScalarRelationFilter, TacheWhereInput>
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
  }

  export type TacheMembreOrderByWithRelationInput = {
    tacheId?: SortOrder
    utilisateurId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tache?: TacheOrderByWithRelationInput
    utilisateur?: UtilisateurOrderByWithRelationInput
  }

  export type TacheMembreWhereUniqueInput = Prisma.AtLeast<{
    tacheId_utilisateurId?: TacheMembreTacheIdUtilisateurIdCompoundUniqueInput
    AND?: TacheMembreWhereInput | TacheMembreWhereInput[]
    OR?: TacheMembreWhereInput[]
    NOT?: TacheMembreWhereInput | TacheMembreWhereInput[]
    tacheId?: IntFilter<"TacheMembre"> | number
    utilisateurId?: IntFilter<"TacheMembre"> | number
    createdAt?: DateTimeFilter<"TacheMembre"> | Date | string
    updatedAt?: DateTimeFilter<"TacheMembre"> | Date | string
    tache?: XOR<TacheScalarRelationFilter, TacheWhereInput>
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
  }, "tacheId_utilisateurId">

  export type TacheMembreOrderByWithAggregationInput = {
    tacheId?: SortOrder
    utilisateurId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TacheMembreCountOrderByAggregateInput
    _avg?: TacheMembreAvgOrderByAggregateInput
    _max?: TacheMembreMaxOrderByAggregateInput
    _min?: TacheMembreMinOrderByAggregateInput
    _sum?: TacheMembreSumOrderByAggregateInput
  }

  export type TacheMembreScalarWhereWithAggregatesInput = {
    AND?: TacheMembreScalarWhereWithAggregatesInput | TacheMembreScalarWhereWithAggregatesInput[]
    OR?: TacheMembreScalarWhereWithAggregatesInput[]
    NOT?: TacheMembreScalarWhereWithAggregatesInput | TacheMembreScalarWhereWithAggregatesInput[]
    tacheId?: IntWithAggregatesFilter<"TacheMembre"> | number
    utilisateurId?: IntWithAggregatesFilter<"TacheMembre"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TacheMembre"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TacheMembre"> | Date | string
  }

  export type MembreProjetWhereInput = {
    AND?: MembreProjetWhereInput | MembreProjetWhereInput[]
    OR?: MembreProjetWhereInput[]
    NOT?: MembreProjetWhereInput | MembreProjetWhereInput[]
    utilisateurId?: IntFilter<"MembreProjet"> | number
    projetId?: IntFilter<"MembreProjet"> | number
    createdAt?: DateTimeFilter<"MembreProjet"> | Date | string
    updatedAt?: DateTimeFilter<"MembreProjet"> | Date | string
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    projet?: XOR<ProjetScalarRelationFilter, ProjetWhereInput>
  }

  export type MembreProjetOrderByWithRelationInput = {
    utilisateurId?: SortOrder
    projetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    utilisateur?: UtilisateurOrderByWithRelationInput
    projet?: ProjetOrderByWithRelationInput
  }

  export type MembreProjetWhereUniqueInput = Prisma.AtLeast<{
    utilisateurId_projetId?: MembreProjetUtilisateurIdProjetIdCompoundUniqueInput
    AND?: MembreProjetWhereInput | MembreProjetWhereInput[]
    OR?: MembreProjetWhereInput[]
    NOT?: MembreProjetWhereInput | MembreProjetWhereInput[]
    utilisateurId?: IntFilter<"MembreProjet"> | number
    projetId?: IntFilter<"MembreProjet"> | number
    createdAt?: DateTimeFilter<"MembreProjet"> | Date | string
    updatedAt?: DateTimeFilter<"MembreProjet"> | Date | string
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    projet?: XOR<ProjetScalarRelationFilter, ProjetWhereInput>
  }, "utilisateurId_projetId">

  export type MembreProjetOrderByWithAggregationInput = {
    utilisateurId?: SortOrder
    projetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MembreProjetCountOrderByAggregateInput
    _avg?: MembreProjetAvgOrderByAggregateInput
    _max?: MembreProjetMaxOrderByAggregateInput
    _min?: MembreProjetMinOrderByAggregateInput
    _sum?: MembreProjetSumOrderByAggregateInput
  }

  export type MembreProjetScalarWhereWithAggregatesInput = {
    AND?: MembreProjetScalarWhereWithAggregatesInput | MembreProjetScalarWhereWithAggregatesInput[]
    OR?: MembreProjetScalarWhereWithAggregatesInput[]
    NOT?: MembreProjetScalarWhereWithAggregatesInput | MembreProjetScalarWhereWithAggregatesInput[]
    utilisateurId?: IntWithAggregatesFilter<"MembreProjet"> | number
    projetId?: IntWithAggregatesFilter<"MembreProjet"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MembreProjet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MembreProjet"> | Date | string
  }

  export type PartageDocumentWhereInput = {
    AND?: PartageDocumentWhereInput | PartageDocumentWhereInput[]
    OR?: PartageDocumentWhereInput[]
    NOT?: PartageDocumentWhereInput | PartageDocumentWhereInput[]
    id?: IntFilter<"PartageDocument"> | number
    documentId?: IntFilter<"PartageDocument"> | number
    utilisateurId?: IntNullableFilter<"PartageDocument"> | number | null
    departementId?: IntNullableFilter<"PartageDocument"> | number | null
    projetId?: IntNullableFilter<"PartageDocument"> | number | null
    datePartage?: DateTimeFilter<"PartageDocument"> | Date | string
    partageurId?: IntFilter<"PartageDocument"> | number
    historique?: StringNullableFilter<"PartageDocument"> | string | null
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
    utilisateur?: XOR<UtilisateurNullableScalarRelationFilter, UtilisateurWhereInput> | null
    departement?: XOR<DepartementNullableScalarRelationFilter, DepartementWhereInput> | null
    projet?: XOR<ProjetNullableScalarRelationFilter, ProjetWhereInput> | null
    partageur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
  }

  export type PartageDocumentOrderByWithRelationInput = {
    id?: SortOrder
    documentId?: SortOrder
    utilisateurId?: SortOrderInput | SortOrder
    departementId?: SortOrderInput | SortOrder
    projetId?: SortOrderInput | SortOrder
    datePartage?: SortOrder
    partageurId?: SortOrder
    historique?: SortOrderInput | SortOrder
    document?: DocumentOrderByWithRelationInput
    utilisateur?: UtilisateurOrderByWithRelationInput
    departement?: DepartementOrderByWithRelationInput
    projet?: ProjetOrderByWithRelationInput
    partageur?: UtilisateurOrderByWithRelationInput
  }

  export type PartageDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    documentId_utilisateurId_departementId_projetId?: PartageDocumentDocumentIdUtilisateurIdDepartementIdProjetIdCompoundUniqueInput
    AND?: PartageDocumentWhereInput | PartageDocumentWhereInput[]
    OR?: PartageDocumentWhereInput[]
    NOT?: PartageDocumentWhereInput | PartageDocumentWhereInput[]
    documentId?: IntFilter<"PartageDocument"> | number
    utilisateurId?: IntNullableFilter<"PartageDocument"> | number | null
    departementId?: IntNullableFilter<"PartageDocument"> | number | null
    projetId?: IntNullableFilter<"PartageDocument"> | number | null
    datePartage?: DateTimeFilter<"PartageDocument"> | Date | string
    partageurId?: IntFilter<"PartageDocument"> | number
    historique?: StringNullableFilter<"PartageDocument"> | string | null
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
    utilisateur?: XOR<UtilisateurNullableScalarRelationFilter, UtilisateurWhereInput> | null
    departement?: XOR<DepartementNullableScalarRelationFilter, DepartementWhereInput> | null
    projet?: XOR<ProjetNullableScalarRelationFilter, ProjetWhereInput> | null
    partageur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
  }, "id" | "documentId_utilisateurId_departementId_projetId">

  export type PartageDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    documentId?: SortOrder
    utilisateurId?: SortOrderInput | SortOrder
    departementId?: SortOrderInput | SortOrder
    projetId?: SortOrderInput | SortOrder
    datePartage?: SortOrder
    partageurId?: SortOrder
    historique?: SortOrderInput | SortOrder
    _count?: PartageDocumentCountOrderByAggregateInput
    _avg?: PartageDocumentAvgOrderByAggregateInput
    _max?: PartageDocumentMaxOrderByAggregateInput
    _min?: PartageDocumentMinOrderByAggregateInput
    _sum?: PartageDocumentSumOrderByAggregateInput
  }

  export type PartageDocumentScalarWhereWithAggregatesInput = {
    AND?: PartageDocumentScalarWhereWithAggregatesInput | PartageDocumentScalarWhereWithAggregatesInput[]
    OR?: PartageDocumentScalarWhereWithAggregatesInput[]
    NOT?: PartageDocumentScalarWhereWithAggregatesInput | PartageDocumentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PartageDocument"> | number
    documentId?: IntWithAggregatesFilter<"PartageDocument"> | number
    utilisateurId?: IntNullableWithAggregatesFilter<"PartageDocument"> | number | null
    departementId?: IntNullableWithAggregatesFilter<"PartageDocument"> | number | null
    projetId?: IntNullableWithAggregatesFilter<"PartageDocument"> | number | null
    datePartage?: DateTimeWithAggregatesFilter<"PartageDocument"> | Date | string
    partageurId?: IntWithAggregatesFilter<"PartageDocument"> | number
    historique?: StringNullableWithAggregatesFilter<"PartageDocument"> | string | null
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: IntFilter<"Notification"> | number
    utilisateurId?: IntFilter<"Notification"> | number
    message?: StringFilter<"Notification"> | string
    dateNotification?: DateTimeFilter<"Notification"> | Date | string
    documentId?: IntFilter<"Notification"> | number
    vu?: BoolFilter<"Notification"> | boolean
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    utilisateurId?: SortOrder
    message?: SortOrder
    dateNotification?: SortOrder
    documentId?: SortOrder
    vu?: SortOrder
    document?: DocumentOrderByWithRelationInput
    utilisateur?: UtilisateurOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    utilisateurId?: IntFilter<"Notification"> | number
    message?: StringFilter<"Notification"> | string
    dateNotification?: DateTimeFilter<"Notification"> | Date | string
    documentId?: IntFilter<"Notification"> | number
    vu?: BoolFilter<"Notification"> | boolean
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    utilisateurId?: SortOrder
    message?: SortOrder
    dateNotification?: SortOrder
    documentId?: SortOrder
    vu?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notification"> | number
    utilisateurId?: IntWithAggregatesFilter<"Notification"> | number
    message?: StringWithAggregatesFilter<"Notification"> | string
    dateNotification?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    documentId?: IntWithAggregatesFilter<"Notification"> | number
    vu?: BoolWithAggregatesFilter<"Notification"> | boolean
  }

  export type DepartementCreateInput = {
    nom: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projets?: ProjetCreateNestedManyWithoutDepartementInput
    utilisateurs?: UtilisateurCreateNestedManyWithoutDepartementInput
    partages?: PartageDocumentCreateNestedManyWithoutDepartementInput
  }

  export type DepartementUncheckedCreateInput = {
    id?: number
    nom: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projets?: ProjetUncheckedCreateNestedManyWithoutDepartementInput
    utilisateurs?: UtilisateurUncheckedCreateNestedManyWithoutDepartementInput
    partages?: PartageDocumentUncheckedCreateNestedManyWithoutDepartementInput
  }

  export type DepartementUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projets?: ProjetUpdateManyWithoutDepartementNestedInput
    utilisateurs?: UtilisateurUpdateManyWithoutDepartementNestedInput
    partages?: PartageDocumentUpdateManyWithoutDepartementNestedInput
  }

  export type DepartementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projets?: ProjetUncheckedUpdateManyWithoutDepartementNestedInput
    utilisateurs?: UtilisateurUncheckedUpdateManyWithoutDepartementNestedInput
    partages?: PartageDocumentUncheckedUpdateManyWithoutDepartementNestedInput
  }

  export type DepartementCreateManyInput = {
    id?: number
    nom: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartementUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UtilisateurCreateInput = {
    nom: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    departement?: DepartementCreateNestedOneWithoutUtilisateursInput
    projets?: MembreProjetCreateNestedManyWithoutUtilisateurInput
    taches?: TacheMembreCreateNestedManyWithoutUtilisateurInput
    partages?: PartageDocumentCreateNestedManyWithoutUtilisateurInput
    partagesEnTantQuePartageur?: PartageDocumentCreateNestedManyWithoutPartageurInput
    notifications?: NotificationCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateInput = {
    id?: number
    nom: string
    email: string
    password: string
    role?: $Enums.Role
    departementId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projets?: MembreProjetUncheckedCreateNestedManyWithoutUtilisateurInput
    taches?: TacheMembreUncheckedCreateNestedManyWithoutUtilisateurInput
    partages?: PartageDocumentUncheckedCreateNestedManyWithoutUtilisateurInput
    partagesEnTantQuePartageur?: PartageDocumentUncheckedCreateNestedManyWithoutPartageurInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departement?: DepartementUpdateOneWithoutUtilisateursNestedInput
    projets?: MembreProjetUpdateManyWithoutUtilisateurNestedInput
    taches?: TacheMembreUpdateManyWithoutUtilisateurNestedInput
    partages?: PartageDocumentUpdateManyWithoutUtilisateurNestedInput
    partagesEnTantQuePartageur?: PartageDocumentUpdateManyWithoutPartageurNestedInput
    notifications?: NotificationUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    departementId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projets?: MembreProjetUncheckedUpdateManyWithoutUtilisateurNestedInput
    taches?: TacheMembreUncheckedUpdateManyWithoutUtilisateurNestedInput
    partages?: PartageDocumentUncheckedUpdateManyWithoutUtilisateurNestedInput
    partagesEnTantQuePartageur?: PartageDocumentUncheckedUpdateManyWithoutPartageurNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurCreateManyInput = {
    id?: number
    nom: string
    email: string
    password: string
    role?: $Enums.Role
    departementId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UtilisateurUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UtilisateurUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    departementId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateInput = {
    titre: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    partages?: PartageDocumentCreateNestedManyWithoutDocumentInput
    notifications?: NotificationCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUncheckedCreateInput = {
    id?: number
    titre: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    partages?: PartageDocumentUncheckedCreateNestedManyWithoutDocumentInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUpdateInput = {
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partages?: PartageDocumentUpdateManyWithoutDocumentNestedInput
    notifications?: NotificationUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partages?: PartageDocumentUncheckedUpdateManyWithoutDocumentNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentCreateManyInput = {
    id?: number
    titre: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentUpdateManyMutationInput = {
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjetCreateInput = {
    nom: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    departement: DepartementCreateNestedOneWithoutProjetsInput
    membres?: MembreProjetCreateNestedManyWithoutProjetInput
    taches?: TacheCreateNestedManyWithoutProjetInput
    partages?: PartageDocumentCreateNestedManyWithoutProjetInput
  }

  export type ProjetUncheckedCreateInput = {
    id?: number
    nom: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    departementId: number
    membres?: MembreProjetUncheckedCreateNestedManyWithoutProjetInput
    taches?: TacheUncheckedCreateNestedManyWithoutProjetInput
    partages?: PartageDocumentUncheckedCreateNestedManyWithoutProjetInput
  }

  export type ProjetUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departement?: DepartementUpdateOneRequiredWithoutProjetsNestedInput
    membres?: MembreProjetUpdateManyWithoutProjetNestedInput
    taches?: TacheUpdateManyWithoutProjetNestedInput
    partages?: PartageDocumentUpdateManyWithoutProjetNestedInput
  }

  export type ProjetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departementId?: IntFieldUpdateOperationsInput | number
    membres?: MembreProjetUncheckedUpdateManyWithoutProjetNestedInput
    taches?: TacheUncheckedUpdateManyWithoutProjetNestedInput
    partages?: PartageDocumentUncheckedUpdateManyWithoutProjetNestedInput
  }

  export type ProjetCreateManyInput = {
    id?: number
    nom: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    departementId: number
  }

  export type ProjetUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departementId?: IntFieldUpdateOperationsInput | number
  }

  export type TacheCreateInput = {
    titre: string
    description?: string | null
    deadline?: Date | string | null
    statut: $Enums.TacheStatut
    createdAt?: Date | string
    updatedAt?: Date | string
    projet: ProjetCreateNestedOneWithoutTachesInput
    tacheMembres?: TacheMembreCreateNestedManyWithoutTacheInput
  }

  export type TacheUncheckedCreateInput = {
    id?: number
    titre: string
    description?: string | null
    projetId: number
    deadline?: Date | string | null
    statut: $Enums.TacheStatut
    createdAt?: Date | string
    updatedAt?: Date | string
    tacheMembres?: TacheMembreUncheckedCreateNestedManyWithoutTacheInput
  }

  export type TacheUpdateInput = {
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumTacheStatutFieldUpdateOperationsInput | $Enums.TacheStatut
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projet?: ProjetUpdateOneRequiredWithoutTachesNestedInput
    tacheMembres?: TacheMembreUpdateManyWithoutTacheNestedInput
  }

  export type TacheUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    projetId?: IntFieldUpdateOperationsInput | number
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumTacheStatutFieldUpdateOperationsInput | $Enums.TacheStatut
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tacheMembres?: TacheMembreUncheckedUpdateManyWithoutTacheNestedInput
  }

  export type TacheCreateManyInput = {
    id?: number
    titre: string
    description?: string | null
    projetId: number
    deadline?: Date | string | null
    statut: $Enums.TacheStatut
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TacheUpdateManyMutationInput = {
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumTacheStatutFieldUpdateOperationsInput | $Enums.TacheStatut
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TacheUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    projetId?: IntFieldUpdateOperationsInput | number
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumTacheStatutFieldUpdateOperationsInput | $Enums.TacheStatut
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TacheMembreCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    tache: TacheCreateNestedOneWithoutTacheMembresInput
    utilisateur: UtilisateurCreateNestedOneWithoutTachesInput
  }

  export type TacheMembreUncheckedCreateInput = {
    tacheId: number
    utilisateurId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TacheMembreUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tache?: TacheUpdateOneRequiredWithoutTacheMembresNestedInput
    utilisateur?: UtilisateurUpdateOneRequiredWithoutTachesNestedInput
  }

  export type TacheMembreUncheckedUpdateInput = {
    tacheId?: IntFieldUpdateOperationsInput | number
    utilisateurId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TacheMembreCreateManyInput = {
    tacheId: number
    utilisateurId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TacheMembreUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TacheMembreUncheckedUpdateManyInput = {
    tacheId?: IntFieldUpdateOperationsInput | number
    utilisateurId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembreProjetCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    utilisateur: UtilisateurCreateNestedOneWithoutProjetsInput
    projet: ProjetCreateNestedOneWithoutMembresInput
  }

  export type MembreProjetUncheckedCreateInput = {
    utilisateurId: number
    projetId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MembreProjetUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutProjetsNestedInput
    projet?: ProjetUpdateOneRequiredWithoutMembresNestedInput
  }

  export type MembreProjetUncheckedUpdateInput = {
    utilisateurId?: IntFieldUpdateOperationsInput | number
    projetId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembreProjetCreateManyInput = {
    utilisateurId: number
    projetId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MembreProjetUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembreProjetUncheckedUpdateManyInput = {
    utilisateurId?: IntFieldUpdateOperationsInput | number
    projetId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartageDocumentCreateInput = {
    datePartage?: Date | string
    historique?: string | null
    document: DocumentCreateNestedOneWithoutPartagesInput
    utilisateur?: UtilisateurCreateNestedOneWithoutPartagesInput
    departement?: DepartementCreateNestedOneWithoutPartagesInput
    projet?: ProjetCreateNestedOneWithoutPartagesInput
    partageur: UtilisateurCreateNestedOneWithoutPartagesEnTantQuePartageurInput
  }

  export type PartageDocumentUncheckedCreateInput = {
    id?: number
    documentId: number
    utilisateurId?: number | null
    departementId?: number | null
    projetId?: number | null
    datePartage?: Date | string
    partageurId: number
    historique?: string | null
  }

  export type PartageDocumentUpdateInput = {
    datePartage?: DateTimeFieldUpdateOperationsInput | Date | string
    historique?: NullableStringFieldUpdateOperationsInput | string | null
    document?: DocumentUpdateOneRequiredWithoutPartagesNestedInput
    utilisateur?: UtilisateurUpdateOneWithoutPartagesNestedInput
    departement?: DepartementUpdateOneWithoutPartagesNestedInput
    projet?: ProjetUpdateOneWithoutPartagesNestedInput
    partageur?: UtilisateurUpdateOneRequiredWithoutPartagesEnTantQuePartageurNestedInput
  }

  export type PartageDocumentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: IntFieldUpdateOperationsInput | number
    utilisateurId?: NullableIntFieldUpdateOperationsInput | number | null
    departementId?: NullableIntFieldUpdateOperationsInput | number | null
    projetId?: NullableIntFieldUpdateOperationsInput | number | null
    datePartage?: DateTimeFieldUpdateOperationsInput | Date | string
    partageurId?: IntFieldUpdateOperationsInput | number
    historique?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PartageDocumentCreateManyInput = {
    id?: number
    documentId: number
    utilisateurId?: number | null
    departementId?: number | null
    projetId?: number | null
    datePartage?: Date | string
    partageurId: number
    historique?: string | null
  }

  export type PartageDocumentUpdateManyMutationInput = {
    datePartage?: DateTimeFieldUpdateOperationsInput | Date | string
    historique?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PartageDocumentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: IntFieldUpdateOperationsInput | number
    utilisateurId?: NullableIntFieldUpdateOperationsInput | number | null
    departementId?: NullableIntFieldUpdateOperationsInput | number | null
    projetId?: NullableIntFieldUpdateOperationsInput | number | null
    datePartage?: DateTimeFieldUpdateOperationsInput | Date | string
    partageurId?: IntFieldUpdateOperationsInput | number
    historique?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationCreateInput = {
    message: string
    dateNotification?: Date | string
    vu?: boolean
    document: DocumentCreateNestedOneWithoutNotificationsInput
    utilisateur: UtilisateurCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    utilisateurId: number
    message: string
    dateNotification?: Date | string
    documentId: number
    vu?: boolean
  }

  export type NotificationUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    dateNotification?: DateTimeFieldUpdateOperationsInput | Date | string
    vu?: BoolFieldUpdateOperationsInput | boolean
    document?: DocumentUpdateOneRequiredWithoutNotificationsNestedInput
    utilisateur?: UtilisateurUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    utilisateurId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    dateNotification?: DateTimeFieldUpdateOperationsInput | Date | string
    documentId?: IntFieldUpdateOperationsInput | number
    vu?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationCreateManyInput = {
    id?: number
    utilisateurId: number
    message: string
    dateNotification?: Date | string
    documentId: number
    vu?: boolean
  }

  export type NotificationUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    dateNotification?: DateTimeFieldUpdateOperationsInput | Date | string
    vu?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    utilisateurId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    dateNotification?: DateTimeFieldUpdateOperationsInput | Date | string
    documentId?: IntFieldUpdateOperationsInput | number
    vu?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProjetListRelationFilter = {
    every?: ProjetWhereInput
    some?: ProjetWhereInput
    none?: ProjetWhereInput
  }

  export type UtilisateurListRelationFilter = {
    every?: UtilisateurWhereInput
    some?: UtilisateurWhereInput
    none?: UtilisateurWhereInput
  }

  export type PartageDocumentListRelationFilter = {
    every?: PartageDocumentWhereInput
    some?: PartageDocumentWhereInput
    none?: PartageDocumentWhereInput
  }

  export type ProjetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UtilisateurOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PartageDocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepartementCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartementAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DepartementMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartementMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartementSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DepartementNullableScalarRelationFilter = {
    is?: DepartementWhereInput | null
    isNot?: DepartementWhereInput | null
  }

  export type MembreProjetListRelationFilter = {
    every?: MembreProjetWhereInput
    some?: MembreProjetWhereInput
    none?: MembreProjetWhereInput
  }

  export type TacheMembreListRelationFilter = {
    every?: TacheMembreWhereInput
    some?: TacheMembreWhereInput
    none?: TacheMembreWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MembreProjetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TacheMembreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UtilisateurCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    departementId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UtilisateurAvgOrderByAggregateInput = {
    id?: SortOrder
    departementId?: SortOrder
  }

  export type UtilisateurMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    departementId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UtilisateurMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    departementId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UtilisateurSumOrderByAggregateInput = {
    id?: SortOrder
    departementId?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DepartementScalarRelationFilter = {
    is?: DepartementWhereInput
    isNot?: DepartementWhereInput
  }

  export type TacheListRelationFilter = {
    every?: TacheWhereInput
    some?: TacheWhereInput
    none?: TacheWhereInput
  }

  export type TacheOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjetCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    departementId?: SortOrder
  }

  export type ProjetAvgOrderByAggregateInput = {
    id?: SortOrder
    departementId?: SortOrder
  }

  export type ProjetMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    departementId?: SortOrder
  }

  export type ProjetMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    departementId?: SortOrder
  }

  export type ProjetSumOrderByAggregateInput = {
    id?: SortOrder
    departementId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumTacheStatutFilter<$PrismaModel = never> = {
    equals?: $Enums.TacheStatut | EnumTacheStatutFieldRefInput<$PrismaModel>
    in?: $Enums.TacheStatut[]
    notIn?: $Enums.TacheStatut[]
    not?: NestedEnumTacheStatutFilter<$PrismaModel> | $Enums.TacheStatut
  }

  export type ProjetScalarRelationFilter = {
    is?: ProjetWhereInput
    isNot?: ProjetWhereInput
  }

  export type TacheCountOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    projetId?: SortOrder
    deadline?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TacheAvgOrderByAggregateInput = {
    id?: SortOrder
    projetId?: SortOrder
  }

  export type TacheMaxOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    projetId?: SortOrder
    deadline?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TacheMinOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    projetId?: SortOrder
    deadline?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TacheSumOrderByAggregateInput = {
    id?: SortOrder
    projetId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumTacheStatutWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TacheStatut | EnumTacheStatutFieldRefInput<$PrismaModel>
    in?: $Enums.TacheStatut[]
    notIn?: $Enums.TacheStatut[]
    not?: NestedEnumTacheStatutWithAggregatesFilter<$PrismaModel> | $Enums.TacheStatut
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTacheStatutFilter<$PrismaModel>
    _max?: NestedEnumTacheStatutFilter<$PrismaModel>
  }

  export type TacheScalarRelationFilter = {
    is?: TacheWhereInput
    isNot?: TacheWhereInput
  }

  export type UtilisateurScalarRelationFilter = {
    is?: UtilisateurWhereInput
    isNot?: UtilisateurWhereInput
  }

  export type TacheMembreTacheIdUtilisateurIdCompoundUniqueInput = {
    tacheId: number
    utilisateurId: number
  }

  export type TacheMembreCountOrderByAggregateInput = {
    tacheId?: SortOrder
    utilisateurId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TacheMembreAvgOrderByAggregateInput = {
    tacheId?: SortOrder
    utilisateurId?: SortOrder
  }

  export type TacheMembreMaxOrderByAggregateInput = {
    tacheId?: SortOrder
    utilisateurId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TacheMembreMinOrderByAggregateInput = {
    tacheId?: SortOrder
    utilisateurId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TacheMembreSumOrderByAggregateInput = {
    tacheId?: SortOrder
    utilisateurId?: SortOrder
  }

  export type MembreProjetUtilisateurIdProjetIdCompoundUniqueInput = {
    utilisateurId: number
    projetId: number
  }

  export type MembreProjetCountOrderByAggregateInput = {
    utilisateurId?: SortOrder
    projetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MembreProjetAvgOrderByAggregateInput = {
    utilisateurId?: SortOrder
    projetId?: SortOrder
  }

  export type MembreProjetMaxOrderByAggregateInput = {
    utilisateurId?: SortOrder
    projetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MembreProjetMinOrderByAggregateInput = {
    utilisateurId?: SortOrder
    projetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MembreProjetSumOrderByAggregateInput = {
    utilisateurId?: SortOrder
    projetId?: SortOrder
  }

  export type DocumentScalarRelationFilter = {
    is?: DocumentWhereInput
    isNot?: DocumentWhereInput
  }

  export type UtilisateurNullableScalarRelationFilter = {
    is?: UtilisateurWhereInput | null
    isNot?: UtilisateurWhereInput | null
  }

  export type ProjetNullableScalarRelationFilter = {
    is?: ProjetWhereInput | null
    isNot?: ProjetWhereInput | null
  }

  export type PartageDocumentDocumentIdUtilisateurIdDepartementIdProjetIdCompoundUniqueInput = {
    documentId: number
    utilisateurId: number
    departementId: number
    projetId: number
  }

  export type PartageDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    utilisateurId?: SortOrder
    departementId?: SortOrder
    projetId?: SortOrder
    datePartage?: SortOrder
    partageurId?: SortOrder
    historique?: SortOrder
  }

  export type PartageDocumentAvgOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    utilisateurId?: SortOrder
    departementId?: SortOrder
    projetId?: SortOrder
    partageurId?: SortOrder
  }

  export type PartageDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    utilisateurId?: SortOrder
    departementId?: SortOrder
    projetId?: SortOrder
    datePartage?: SortOrder
    partageurId?: SortOrder
    historique?: SortOrder
  }

  export type PartageDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    utilisateurId?: SortOrder
    departementId?: SortOrder
    projetId?: SortOrder
    datePartage?: SortOrder
    partageurId?: SortOrder
    historique?: SortOrder
  }

  export type PartageDocumentSumOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    utilisateurId?: SortOrder
    departementId?: SortOrder
    projetId?: SortOrder
    partageurId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    utilisateurId?: SortOrder
    message?: SortOrder
    dateNotification?: SortOrder
    documentId?: SortOrder
    vu?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
    utilisateurId?: SortOrder
    documentId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    utilisateurId?: SortOrder
    message?: SortOrder
    dateNotification?: SortOrder
    documentId?: SortOrder
    vu?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    utilisateurId?: SortOrder
    message?: SortOrder
    dateNotification?: SortOrder
    documentId?: SortOrder
    vu?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
    utilisateurId?: SortOrder
    documentId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProjetCreateNestedManyWithoutDepartementInput = {
    create?: XOR<ProjetCreateWithoutDepartementInput, ProjetUncheckedCreateWithoutDepartementInput> | ProjetCreateWithoutDepartementInput[] | ProjetUncheckedCreateWithoutDepartementInput[]
    connectOrCreate?: ProjetCreateOrConnectWithoutDepartementInput | ProjetCreateOrConnectWithoutDepartementInput[]
    createMany?: ProjetCreateManyDepartementInputEnvelope
    connect?: ProjetWhereUniqueInput | ProjetWhereUniqueInput[]
  }

  export type UtilisateurCreateNestedManyWithoutDepartementInput = {
    create?: XOR<UtilisateurCreateWithoutDepartementInput, UtilisateurUncheckedCreateWithoutDepartementInput> | UtilisateurCreateWithoutDepartementInput[] | UtilisateurUncheckedCreateWithoutDepartementInput[]
    connectOrCreate?: UtilisateurCreateOrConnectWithoutDepartementInput | UtilisateurCreateOrConnectWithoutDepartementInput[]
    createMany?: UtilisateurCreateManyDepartementInputEnvelope
    connect?: UtilisateurWhereUniqueInput | UtilisateurWhereUniqueInput[]
  }

  export type PartageDocumentCreateNestedManyWithoutDepartementInput = {
    create?: XOR<PartageDocumentCreateWithoutDepartementInput, PartageDocumentUncheckedCreateWithoutDepartementInput> | PartageDocumentCreateWithoutDepartementInput[] | PartageDocumentUncheckedCreateWithoutDepartementInput[]
    connectOrCreate?: PartageDocumentCreateOrConnectWithoutDepartementInput | PartageDocumentCreateOrConnectWithoutDepartementInput[]
    createMany?: PartageDocumentCreateManyDepartementInputEnvelope
    connect?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
  }

  export type ProjetUncheckedCreateNestedManyWithoutDepartementInput = {
    create?: XOR<ProjetCreateWithoutDepartementInput, ProjetUncheckedCreateWithoutDepartementInput> | ProjetCreateWithoutDepartementInput[] | ProjetUncheckedCreateWithoutDepartementInput[]
    connectOrCreate?: ProjetCreateOrConnectWithoutDepartementInput | ProjetCreateOrConnectWithoutDepartementInput[]
    createMany?: ProjetCreateManyDepartementInputEnvelope
    connect?: ProjetWhereUniqueInput | ProjetWhereUniqueInput[]
  }

  export type UtilisateurUncheckedCreateNestedManyWithoutDepartementInput = {
    create?: XOR<UtilisateurCreateWithoutDepartementInput, UtilisateurUncheckedCreateWithoutDepartementInput> | UtilisateurCreateWithoutDepartementInput[] | UtilisateurUncheckedCreateWithoutDepartementInput[]
    connectOrCreate?: UtilisateurCreateOrConnectWithoutDepartementInput | UtilisateurCreateOrConnectWithoutDepartementInput[]
    createMany?: UtilisateurCreateManyDepartementInputEnvelope
    connect?: UtilisateurWhereUniqueInput | UtilisateurWhereUniqueInput[]
  }

  export type PartageDocumentUncheckedCreateNestedManyWithoutDepartementInput = {
    create?: XOR<PartageDocumentCreateWithoutDepartementInput, PartageDocumentUncheckedCreateWithoutDepartementInput> | PartageDocumentCreateWithoutDepartementInput[] | PartageDocumentUncheckedCreateWithoutDepartementInput[]
    connectOrCreate?: PartageDocumentCreateOrConnectWithoutDepartementInput | PartageDocumentCreateOrConnectWithoutDepartementInput[]
    createMany?: PartageDocumentCreateManyDepartementInputEnvelope
    connect?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProjetUpdateManyWithoutDepartementNestedInput = {
    create?: XOR<ProjetCreateWithoutDepartementInput, ProjetUncheckedCreateWithoutDepartementInput> | ProjetCreateWithoutDepartementInput[] | ProjetUncheckedCreateWithoutDepartementInput[]
    connectOrCreate?: ProjetCreateOrConnectWithoutDepartementInput | ProjetCreateOrConnectWithoutDepartementInput[]
    upsert?: ProjetUpsertWithWhereUniqueWithoutDepartementInput | ProjetUpsertWithWhereUniqueWithoutDepartementInput[]
    createMany?: ProjetCreateManyDepartementInputEnvelope
    set?: ProjetWhereUniqueInput | ProjetWhereUniqueInput[]
    disconnect?: ProjetWhereUniqueInput | ProjetWhereUniqueInput[]
    delete?: ProjetWhereUniqueInput | ProjetWhereUniqueInput[]
    connect?: ProjetWhereUniqueInput | ProjetWhereUniqueInput[]
    update?: ProjetUpdateWithWhereUniqueWithoutDepartementInput | ProjetUpdateWithWhereUniqueWithoutDepartementInput[]
    updateMany?: ProjetUpdateManyWithWhereWithoutDepartementInput | ProjetUpdateManyWithWhereWithoutDepartementInput[]
    deleteMany?: ProjetScalarWhereInput | ProjetScalarWhereInput[]
  }

  export type UtilisateurUpdateManyWithoutDepartementNestedInput = {
    create?: XOR<UtilisateurCreateWithoutDepartementInput, UtilisateurUncheckedCreateWithoutDepartementInput> | UtilisateurCreateWithoutDepartementInput[] | UtilisateurUncheckedCreateWithoutDepartementInput[]
    connectOrCreate?: UtilisateurCreateOrConnectWithoutDepartementInput | UtilisateurCreateOrConnectWithoutDepartementInput[]
    upsert?: UtilisateurUpsertWithWhereUniqueWithoutDepartementInput | UtilisateurUpsertWithWhereUniqueWithoutDepartementInput[]
    createMany?: UtilisateurCreateManyDepartementInputEnvelope
    set?: UtilisateurWhereUniqueInput | UtilisateurWhereUniqueInput[]
    disconnect?: UtilisateurWhereUniqueInput | UtilisateurWhereUniqueInput[]
    delete?: UtilisateurWhereUniqueInput | UtilisateurWhereUniqueInput[]
    connect?: UtilisateurWhereUniqueInput | UtilisateurWhereUniqueInput[]
    update?: UtilisateurUpdateWithWhereUniqueWithoutDepartementInput | UtilisateurUpdateWithWhereUniqueWithoutDepartementInput[]
    updateMany?: UtilisateurUpdateManyWithWhereWithoutDepartementInput | UtilisateurUpdateManyWithWhereWithoutDepartementInput[]
    deleteMany?: UtilisateurScalarWhereInput | UtilisateurScalarWhereInput[]
  }

  export type PartageDocumentUpdateManyWithoutDepartementNestedInput = {
    create?: XOR<PartageDocumentCreateWithoutDepartementInput, PartageDocumentUncheckedCreateWithoutDepartementInput> | PartageDocumentCreateWithoutDepartementInput[] | PartageDocumentUncheckedCreateWithoutDepartementInput[]
    connectOrCreate?: PartageDocumentCreateOrConnectWithoutDepartementInput | PartageDocumentCreateOrConnectWithoutDepartementInput[]
    upsert?: PartageDocumentUpsertWithWhereUniqueWithoutDepartementInput | PartageDocumentUpsertWithWhereUniqueWithoutDepartementInput[]
    createMany?: PartageDocumentCreateManyDepartementInputEnvelope
    set?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
    disconnect?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
    delete?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
    connect?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
    update?: PartageDocumentUpdateWithWhereUniqueWithoutDepartementInput | PartageDocumentUpdateWithWhereUniqueWithoutDepartementInput[]
    updateMany?: PartageDocumentUpdateManyWithWhereWithoutDepartementInput | PartageDocumentUpdateManyWithWhereWithoutDepartementInput[]
    deleteMany?: PartageDocumentScalarWhereInput | PartageDocumentScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjetUncheckedUpdateManyWithoutDepartementNestedInput = {
    create?: XOR<ProjetCreateWithoutDepartementInput, ProjetUncheckedCreateWithoutDepartementInput> | ProjetCreateWithoutDepartementInput[] | ProjetUncheckedCreateWithoutDepartementInput[]
    connectOrCreate?: ProjetCreateOrConnectWithoutDepartementInput | ProjetCreateOrConnectWithoutDepartementInput[]
    upsert?: ProjetUpsertWithWhereUniqueWithoutDepartementInput | ProjetUpsertWithWhereUniqueWithoutDepartementInput[]
    createMany?: ProjetCreateManyDepartementInputEnvelope
    set?: ProjetWhereUniqueInput | ProjetWhereUniqueInput[]
    disconnect?: ProjetWhereUniqueInput | ProjetWhereUniqueInput[]
    delete?: ProjetWhereUniqueInput | ProjetWhereUniqueInput[]
    connect?: ProjetWhereUniqueInput | ProjetWhereUniqueInput[]
    update?: ProjetUpdateWithWhereUniqueWithoutDepartementInput | ProjetUpdateWithWhereUniqueWithoutDepartementInput[]
    updateMany?: ProjetUpdateManyWithWhereWithoutDepartementInput | ProjetUpdateManyWithWhereWithoutDepartementInput[]
    deleteMany?: ProjetScalarWhereInput | ProjetScalarWhereInput[]
  }

  export type UtilisateurUncheckedUpdateManyWithoutDepartementNestedInput = {
    create?: XOR<UtilisateurCreateWithoutDepartementInput, UtilisateurUncheckedCreateWithoutDepartementInput> | UtilisateurCreateWithoutDepartementInput[] | UtilisateurUncheckedCreateWithoutDepartementInput[]
    connectOrCreate?: UtilisateurCreateOrConnectWithoutDepartementInput | UtilisateurCreateOrConnectWithoutDepartementInput[]
    upsert?: UtilisateurUpsertWithWhereUniqueWithoutDepartementInput | UtilisateurUpsertWithWhereUniqueWithoutDepartementInput[]
    createMany?: UtilisateurCreateManyDepartementInputEnvelope
    set?: UtilisateurWhereUniqueInput | UtilisateurWhereUniqueInput[]
    disconnect?: UtilisateurWhereUniqueInput | UtilisateurWhereUniqueInput[]
    delete?: UtilisateurWhereUniqueInput | UtilisateurWhereUniqueInput[]
    connect?: UtilisateurWhereUniqueInput | UtilisateurWhereUniqueInput[]
    update?: UtilisateurUpdateWithWhereUniqueWithoutDepartementInput | UtilisateurUpdateWithWhereUniqueWithoutDepartementInput[]
    updateMany?: UtilisateurUpdateManyWithWhereWithoutDepartementInput | UtilisateurUpdateManyWithWhereWithoutDepartementInput[]
    deleteMany?: UtilisateurScalarWhereInput | UtilisateurScalarWhereInput[]
  }

  export type PartageDocumentUncheckedUpdateManyWithoutDepartementNestedInput = {
    create?: XOR<PartageDocumentCreateWithoutDepartementInput, PartageDocumentUncheckedCreateWithoutDepartementInput> | PartageDocumentCreateWithoutDepartementInput[] | PartageDocumentUncheckedCreateWithoutDepartementInput[]
    connectOrCreate?: PartageDocumentCreateOrConnectWithoutDepartementInput | PartageDocumentCreateOrConnectWithoutDepartementInput[]
    upsert?: PartageDocumentUpsertWithWhereUniqueWithoutDepartementInput | PartageDocumentUpsertWithWhereUniqueWithoutDepartementInput[]
    createMany?: PartageDocumentCreateManyDepartementInputEnvelope
    set?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
    disconnect?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
    delete?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
    connect?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
    update?: PartageDocumentUpdateWithWhereUniqueWithoutDepartementInput | PartageDocumentUpdateWithWhereUniqueWithoutDepartementInput[]
    updateMany?: PartageDocumentUpdateManyWithWhereWithoutDepartementInput | PartageDocumentUpdateManyWithWhereWithoutDepartementInput[]
    deleteMany?: PartageDocumentScalarWhereInput | PartageDocumentScalarWhereInput[]
  }

  export type DepartementCreateNestedOneWithoutUtilisateursInput = {
    create?: XOR<DepartementCreateWithoutUtilisateursInput, DepartementUncheckedCreateWithoutUtilisateursInput>
    connectOrCreate?: DepartementCreateOrConnectWithoutUtilisateursInput
    connect?: DepartementWhereUniqueInput
  }

  export type MembreProjetCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<MembreProjetCreateWithoutUtilisateurInput, MembreProjetUncheckedCreateWithoutUtilisateurInput> | MembreProjetCreateWithoutUtilisateurInput[] | MembreProjetUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: MembreProjetCreateOrConnectWithoutUtilisateurInput | MembreProjetCreateOrConnectWithoutUtilisateurInput[]
    createMany?: MembreProjetCreateManyUtilisateurInputEnvelope
    connect?: MembreProjetWhereUniqueInput | MembreProjetWhereUniqueInput[]
  }

  export type TacheMembreCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<TacheMembreCreateWithoutUtilisateurInput, TacheMembreUncheckedCreateWithoutUtilisateurInput> | TacheMembreCreateWithoutUtilisateurInput[] | TacheMembreUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: TacheMembreCreateOrConnectWithoutUtilisateurInput | TacheMembreCreateOrConnectWithoutUtilisateurInput[]
    createMany?: TacheMembreCreateManyUtilisateurInputEnvelope
    connect?: TacheMembreWhereUniqueInput | TacheMembreWhereUniqueInput[]
  }

  export type PartageDocumentCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<PartageDocumentCreateWithoutUtilisateurInput, PartageDocumentUncheckedCreateWithoutUtilisateurInput> | PartageDocumentCreateWithoutUtilisateurInput[] | PartageDocumentUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: PartageDocumentCreateOrConnectWithoutUtilisateurInput | PartageDocumentCreateOrConnectWithoutUtilisateurInput[]
    createMany?: PartageDocumentCreateManyUtilisateurInputEnvelope
    connect?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
  }

  export type PartageDocumentCreateNestedManyWithoutPartageurInput = {
    create?: XOR<PartageDocumentCreateWithoutPartageurInput, PartageDocumentUncheckedCreateWithoutPartageurInput> | PartageDocumentCreateWithoutPartageurInput[] | PartageDocumentUncheckedCreateWithoutPartageurInput[]
    connectOrCreate?: PartageDocumentCreateOrConnectWithoutPartageurInput | PartageDocumentCreateOrConnectWithoutPartageurInput[]
    createMany?: PartageDocumentCreateManyPartageurInputEnvelope
    connect?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<NotificationCreateWithoutUtilisateurInput, NotificationUncheckedCreateWithoutUtilisateurInput> | NotificationCreateWithoutUtilisateurInput[] | NotificationUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUtilisateurInput | NotificationCreateOrConnectWithoutUtilisateurInput[]
    createMany?: NotificationCreateManyUtilisateurInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type MembreProjetUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<MembreProjetCreateWithoutUtilisateurInput, MembreProjetUncheckedCreateWithoutUtilisateurInput> | MembreProjetCreateWithoutUtilisateurInput[] | MembreProjetUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: MembreProjetCreateOrConnectWithoutUtilisateurInput | MembreProjetCreateOrConnectWithoutUtilisateurInput[]
    createMany?: MembreProjetCreateManyUtilisateurInputEnvelope
    connect?: MembreProjetWhereUniqueInput | MembreProjetWhereUniqueInput[]
  }

  export type TacheMembreUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<TacheMembreCreateWithoutUtilisateurInput, TacheMembreUncheckedCreateWithoutUtilisateurInput> | TacheMembreCreateWithoutUtilisateurInput[] | TacheMembreUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: TacheMembreCreateOrConnectWithoutUtilisateurInput | TacheMembreCreateOrConnectWithoutUtilisateurInput[]
    createMany?: TacheMembreCreateManyUtilisateurInputEnvelope
    connect?: TacheMembreWhereUniqueInput | TacheMembreWhereUniqueInput[]
  }

  export type PartageDocumentUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<PartageDocumentCreateWithoutUtilisateurInput, PartageDocumentUncheckedCreateWithoutUtilisateurInput> | PartageDocumentCreateWithoutUtilisateurInput[] | PartageDocumentUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: PartageDocumentCreateOrConnectWithoutUtilisateurInput | PartageDocumentCreateOrConnectWithoutUtilisateurInput[]
    createMany?: PartageDocumentCreateManyUtilisateurInputEnvelope
    connect?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
  }

  export type PartageDocumentUncheckedCreateNestedManyWithoutPartageurInput = {
    create?: XOR<PartageDocumentCreateWithoutPartageurInput, PartageDocumentUncheckedCreateWithoutPartageurInput> | PartageDocumentCreateWithoutPartageurInput[] | PartageDocumentUncheckedCreateWithoutPartageurInput[]
    connectOrCreate?: PartageDocumentCreateOrConnectWithoutPartageurInput | PartageDocumentCreateOrConnectWithoutPartageurInput[]
    createMany?: PartageDocumentCreateManyPartageurInputEnvelope
    connect?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<NotificationCreateWithoutUtilisateurInput, NotificationUncheckedCreateWithoutUtilisateurInput> | NotificationCreateWithoutUtilisateurInput[] | NotificationUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUtilisateurInput | NotificationCreateOrConnectWithoutUtilisateurInput[]
    createMany?: NotificationCreateManyUtilisateurInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DepartementUpdateOneWithoutUtilisateursNestedInput = {
    create?: XOR<DepartementCreateWithoutUtilisateursInput, DepartementUncheckedCreateWithoutUtilisateursInput>
    connectOrCreate?: DepartementCreateOrConnectWithoutUtilisateursInput
    upsert?: DepartementUpsertWithoutUtilisateursInput
    disconnect?: DepartementWhereInput | boolean
    delete?: DepartementWhereInput | boolean
    connect?: DepartementWhereUniqueInput
    update?: XOR<XOR<DepartementUpdateToOneWithWhereWithoutUtilisateursInput, DepartementUpdateWithoutUtilisateursInput>, DepartementUncheckedUpdateWithoutUtilisateursInput>
  }

  export type MembreProjetUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<MembreProjetCreateWithoutUtilisateurInput, MembreProjetUncheckedCreateWithoutUtilisateurInput> | MembreProjetCreateWithoutUtilisateurInput[] | MembreProjetUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: MembreProjetCreateOrConnectWithoutUtilisateurInput | MembreProjetCreateOrConnectWithoutUtilisateurInput[]
    upsert?: MembreProjetUpsertWithWhereUniqueWithoutUtilisateurInput | MembreProjetUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: MembreProjetCreateManyUtilisateurInputEnvelope
    set?: MembreProjetWhereUniqueInput | MembreProjetWhereUniqueInput[]
    disconnect?: MembreProjetWhereUniqueInput | MembreProjetWhereUniqueInput[]
    delete?: MembreProjetWhereUniqueInput | MembreProjetWhereUniqueInput[]
    connect?: MembreProjetWhereUniqueInput | MembreProjetWhereUniqueInput[]
    update?: MembreProjetUpdateWithWhereUniqueWithoutUtilisateurInput | MembreProjetUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: MembreProjetUpdateManyWithWhereWithoutUtilisateurInput | MembreProjetUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: MembreProjetScalarWhereInput | MembreProjetScalarWhereInput[]
  }

  export type TacheMembreUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<TacheMembreCreateWithoutUtilisateurInput, TacheMembreUncheckedCreateWithoutUtilisateurInput> | TacheMembreCreateWithoutUtilisateurInput[] | TacheMembreUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: TacheMembreCreateOrConnectWithoutUtilisateurInput | TacheMembreCreateOrConnectWithoutUtilisateurInput[]
    upsert?: TacheMembreUpsertWithWhereUniqueWithoutUtilisateurInput | TacheMembreUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: TacheMembreCreateManyUtilisateurInputEnvelope
    set?: TacheMembreWhereUniqueInput | TacheMembreWhereUniqueInput[]
    disconnect?: TacheMembreWhereUniqueInput | TacheMembreWhereUniqueInput[]
    delete?: TacheMembreWhereUniqueInput | TacheMembreWhereUniqueInput[]
    connect?: TacheMembreWhereUniqueInput | TacheMembreWhereUniqueInput[]
    update?: TacheMembreUpdateWithWhereUniqueWithoutUtilisateurInput | TacheMembreUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: TacheMembreUpdateManyWithWhereWithoutUtilisateurInput | TacheMembreUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: TacheMembreScalarWhereInput | TacheMembreScalarWhereInput[]
  }

  export type PartageDocumentUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<PartageDocumentCreateWithoutUtilisateurInput, PartageDocumentUncheckedCreateWithoutUtilisateurInput> | PartageDocumentCreateWithoutUtilisateurInput[] | PartageDocumentUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: PartageDocumentCreateOrConnectWithoutUtilisateurInput | PartageDocumentCreateOrConnectWithoutUtilisateurInput[]
    upsert?: PartageDocumentUpsertWithWhereUniqueWithoutUtilisateurInput | PartageDocumentUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: PartageDocumentCreateManyUtilisateurInputEnvelope
    set?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
    disconnect?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
    delete?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
    connect?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
    update?: PartageDocumentUpdateWithWhereUniqueWithoutUtilisateurInput | PartageDocumentUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: PartageDocumentUpdateManyWithWhereWithoutUtilisateurInput | PartageDocumentUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: PartageDocumentScalarWhereInput | PartageDocumentScalarWhereInput[]
  }

  export type PartageDocumentUpdateManyWithoutPartageurNestedInput = {
    create?: XOR<PartageDocumentCreateWithoutPartageurInput, PartageDocumentUncheckedCreateWithoutPartageurInput> | PartageDocumentCreateWithoutPartageurInput[] | PartageDocumentUncheckedCreateWithoutPartageurInput[]
    connectOrCreate?: PartageDocumentCreateOrConnectWithoutPartageurInput | PartageDocumentCreateOrConnectWithoutPartageurInput[]
    upsert?: PartageDocumentUpsertWithWhereUniqueWithoutPartageurInput | PartageDocumentUpsertWithWhereUniqueWithoutPartageurInput[]
    createMany?: PartageDocumentCreateManyPartageurInputEnvelope
    set?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
    disconnect?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
    delete?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
    connect?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
    update?: PartageDocumentUpdateWithWhereUniqueWithoutPartageurInput | PartageDocumentUpdateWithWhereUniqueWithoutPartageurInput[]
    updateMany?: PartageDocumentUpdateManyWithWhereWithoutPartageurInput | PartageDocumentUpdateManyWithWhereWithoutPartageurInput[]
    deleteMany?: PartageDocumentScalarWhereInput | PartageDocumentScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<NotificationCreateWithoutUtilisateurInput, NotificationUncheckedCreateWithoutUtilisateurInput> | NotificationCreateWithoutUtilisateurInput[] | NotificationUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUtilisateurInput | NotificationCreateOrConnectWithoutUtilisateurInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUtilisateurInput | NotificationUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: NotificationCreateManyUtilisateurInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUtilisateurInput | NotificationUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUtilisateurInput | NotificationUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MembreProjetUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<MembreProjetCreateWithoutUtilisateurInput, MembreProjetUncheckedCreateWithoutUtilisateurInput> | MembreProjetCreateWithoutUtilisateurInput[] | MembreProjetUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: MembreProjetCreateOrConnectWithoutUtilisateurInput | MembreProjetCreateOrConnectWithoutUtilisateurInput[]
    upsert?: MembreProjetUpsertWithWhereUniqueWithoutUtilisateurInput | MembreProjetUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: MembreProjetCreateManyUtilisateurInputEnvelope
    set?: MembreProjetWhereUniqueInput | MembreProjetWhereUniqueInput[]
    disconnect?: MembreProjetWhereUniqueInput | MembreProjetWhereUniqueInput[]
    delete?: MembreProjetWhereUniqueInput | MembreProjetWhereUniqueInput[]
    connect?: MembreProjetWhereUniqueInput | MembreProjetWhereUniqueInput[]
    update?: MembreProjetUpdateWithWhereUniqueWithoutUtilisateurInput | MembreProjetUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: MembreProjetUpdateManyWithWhereWithoutUtilisateurInput | MembreProjetUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: MembreProjetScalarWhereInput | MembreProjetScalarWhereInput[]
  }

  export type TacheMembreUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<TacheMembreCreateWithoutUtilisateurInput, TacheMembreUncheckedCreateWithoutUtilisateurInput> | TacheMembreCreateWithoutUtilisateurInput[] | TacheMembreUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: TacheMembreCreateOrConnectWithoutUtilisateurInput | TacheMembreCreateOrConnectWithoutUtilisateurInput[]
    upsert?: TacheMembreUpsertWithWhereUniqueWithoutUtilisateurInput | TacheMembreUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: TacheMembreCreateManyUtilisateurInputEnvelope
    set?: TacheMembreWhereUniqueInput | TacheMembreWhereUniqueInput[]
    disconnect?: TacheMembreWhereUniqueInput | TacheMembreWhereUniqueInput[]
    delete?: TacheMembreWhereUniqueInput | TacheMembreWhereUniqueInput[]
    connect?: TacheMembreWhereUniqueInput | TacheMembreWhereUniqueInput[]
    update?: TacheMembreUpdateWithWhereUniqueWithoutUtilisateurInput | TacheMembreUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: TacheMembreUpdateManyWithWhereWithoutUtilisateurInput | TacheMembreUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: TacheMembreScalarWhereInput | TacheMembreScalarWhereInput[]
  }

  export type PartageDocumentUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<PartageDocumentCreateWithoutUtilisateurInput, PartageDocumentUncheckedCreateWithoutUtilisateurInput> | PartageDocumentCreateWithoutUtilisateurInput[] | PartageDocumentUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: PartageDocumentCreateOrConnectWithoutUtilisateurInput | PartageDocumentCreateOrConnectWithoutUtilisateurInput[]
    upsert?: PartageDocumentUpsertWithWhereUniqueWithoutUtilisateurInput | PartageDocumentUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: PartageDocumentCreateManyUtilisateurInputEnvelope
    set?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
    disconnect?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
    delete?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
    connect?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
    update?: PartageDocumentUpdateWithWhereUniqueWithoutUtilisateurInput | PartageDocumentUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: PartageDocumentUpdateManyWithWhereWithoutUtilisateurInput | PartageDocumentUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: PartageDocumentScalarWhereInput | PartageDocumentScalarWhereInput[]
  }

  export type PartageDocumentUncheckedUpdateManyWithoutPartageurNestedInput = {
    create?: XOR<PartageDocumentCreateWithoutPartageurInput, PartageDocumentUncheckedCreateWithoutPartageurInput> | PartageDocumentCreateWithoutPartageurInput[] | PartageDocumentUncheckedCreateWithoutPartageurInput[]
    connectOrCreate?: PartageDocumentCreateOrConnectWithoutPartageurInput | PartageDocumentCreateOrConnectWithoutPartageurInput[]
    upsert?: PartageDocumentUpsertWithWhereUniqueWithoutPartageurInput | PartageDocumentUpsertWithWhereUniqueWithoutPartageurInput[]
    createMany?: PartageDocumentCreateManyPartageurInputEnvelope
    set?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
    disconnect?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
    delete?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
    connect?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
    update?: PartageDocumentUpdateWithWhereUniqueWithoutPartageurInput | PartageDocumentUpdateWithWhereUniqueWithoutPartageurInput[]
    updateMany?: PartageDocumentUpdateManyWithWhereWithoutPartageurInput | PartageDocumentUpdateManyWithWhereWithoutPartageurInput[]
    deleteMany?: PartageDocumentScalarWhereInput | PartageDocumentScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<NotificationCreateWithoutUtilisateurInput, NotificationUncheckedCreateWithoutUtilisateurInput> | NotificationCreateWithoutUtilisateurInput[] | NotificationUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUtilisateurInput | NotificationCreateOrConnectWithoutUtilisateurInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUtilisateurInput | NotificationUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: NotificationCreateManyUtilisateurInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUtilisateurInput | NotificationUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUtilisateurInput | NotificationUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type PartageDocumentCreateNestedManyWithoutDocumentInput = {
    create?: XOR<PartageDocumentCreateWithoutDocumentInput, PartageDocumentUncheckedCreateWithoutDocumentInput> | PartageDocumentCreateWithoutDocumentInput[] | PartageDocumentUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: PartageDocumentCreateOrConnectWithoutDocumentInput | PartageDocumentCreateOrConnectWithoutDocumentInput[]
    createMany?: PartageDocumentCreateManyDocumentInputEnvelope
    connect?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutDocumentInput = {
    create?: XOR<NotificationCreateWithoutDocumentInput, NotificationUncheckedCreateWithoutDocumentInput> | NotificationCreateWithoutDocumentInput[] | NotificationUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutDocumentInput | NotificationCreateOrConnectWithoutDocumentInput[]
    createMany?: NotificationCreateManyDocumentInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type PartageDocumentUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: XOR<PartageDocumentCreateWithoutDocumentInput, PartageDocumentUncheckedCreateWithoutDocumentInput> | PartageDocumentCreateWithoutDocumentInput[] | PartageDocumentUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: PartageDocumentCreateOrConnectWithoutDocumentInput | PartageDocumentCreateOrConnectWithoutDocumentInput[]
    createMany?: PartageDocumentCreateManyDocumentInputEnvelope
    connect?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: XOR<NotificationCreateWithoutDocumentInput, NotificationUncheckedCreateWithoutDocumentInput> | NotificationCreateWithoutDocumentInput[] | NotificationUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutDocumentInput | NotificationCreateOrConnectWithoutDocumentInput[]
    createMany?: NotificationCreateManyDocumentInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type PartageDocumentUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<PartageDocumentCreateWithoutDocumentInput, PartageDocumentUncheckedCreateWithoutDocumentInput> | PartageDocumentCreateWithoutDocumentInput[] | PartageDocumentUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: PartageDocumentCreateOrConnectWithoutDocumentInput | PartageDocumentCreateOrConnectWithoutDocumentInput[]
    upsert?: PartageDocumentUpsertWithWhereUniqueWithoutDocumentInput | PartageDocumentUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: PartageDocumentCreateManyDocumentInputEnvelope
    set?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
    disconnect?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
    delete?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
    connect?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
    update?: PartageDocumentUpdateWithWhereUniqueWithoutDocumentInput | PartageDocumentUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: PartageDocumentUpdateManyWithWhereWithoutDocumentInput | PartageDocumentUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: PartageDocumentScalarWhereInput | PartageDocumentScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<NotificationCreateWithoutDocumentInput, NotificationUncheckedCreateWithoutDocumentInput> | NotificationCreateWithoutDocumentInput[] | NotificationUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutDocumentInput | NotificationCreateOrConnectWithoutDocumentInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutDocumentInput | NotificationUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: NotificationCreateManyDocumentInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutDocumentInput | NotificationUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutDocumentInput | NotificationUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type PartageDocumentUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<PartageDocumentCreateWithoutDocumentInput, PartageDocumentUncheckedCreateWithoutDocumentInput> | PartageDocumentCreateWithoutDocumentInput[] | PartageDocumentUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: PartageDocumentCreateOrConnectWithoutDocumentInput | PartageDocumentCreateOrConnectWithoutDocumentInput[]
    upsert?: PartageDocumentUpsertWithWhereUniqueWithoutDocumentInput | PartageDocumentUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: PartageDocumentCreateManyDocumentInputEnvelope
    set?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
    disconnect?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
    delete?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
    connect?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
    update?: PartageDocumentUpdateWithWhereUniqueWithoutDocumentInput | PartageDocumentUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: PartageDocumentUpdateManyWithWhereWithoutDocumentInput | PartageDocumentUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: PartageDocumentScalarWhereInput | PartageDocumentScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<NotificationCreateWithoutDocumentInput, NotificationUncheckedCreateWithoutDocumentInput> | NotificationCreateWithoutDocumentInput[] | NotificationUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutDocumentInput | NotificationCreateOrConnectWithoutDocumentInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutDocumentInput | NotificationUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: NotificationCreateManyDocumentInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutDocumentInput | NotificationUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutDocumentInput | NotificationUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type DepartementCreateNestedOneWithoutProjetsInput = {
    create?: XOR<DepartementCreateWithoutProjetsInput, DepartementUncheckedCreateWithoutProjetsInput>
    connectOrCreate?: DepartementCreateOrConnectWithoutProjetsInput
    connect?: DepartementWhereUniqueInput
  }

  export type MembreProjetCreateNestedManyWithoutProjetInput = {
    create?: XOR<MembreProjetCreateWithoutProjetInput, MembreProjetUncheckedCreateWithoutProjetInput> | MembreProjetCreateWithoutProjetInput[] | MembreProjetUncheckedCreateWithoutProjetInput[]
    connectOrCreate?: MembreProjetCreateOrConnectWithoutProjetInput | MembreProjetCreateOrConnectWithoutProjetInput[]
    createMany?: MembreProjetCreateManyProjetInputEnvelope
    connect?: MembreProjetWhereUniqueInput | MembreProjetWhereUniqueInput[]
  }

  export type TacheCreateNestedManyWithoutProjetInput = {
    create?: XOR<TacheCreateWithoutProjetInput, TacheUncheckedCreateWithoutProjetInput> | TacheCreateWithoutProjetInput[] | TacheUncheckedCreateWithoutProjetInput[]
    connectOrCreate?: TacheCreateOrConnectWithoutProjetInput | TacheCreateOrConnectWithoutProjetInput[]
    createMany?: TacheCreateManyProjetInputEnvelope
    connect?: TacheWhereUniqueInput | TacheWhereUniqueInput[]
  }

  export type PartageDocumentCreateNestedManyWithoutProjetInput = {
    create?: XOR<PartageDocumentCreateWithoutProjetInput, PartageDocumentUncheckedCreateWithoutProjetInput> | PartageDocumentCreateWithoutProjetInput[] | PartageDocumentUncheckedCreateWithoutProjetInput[]
    connectOrCreate?: PartageDocumentCreateOrConnectWithoutProjetInput | PartageDocumentCreateOrConnectWithoutProjetInput[]
    createMany?: PartageDocumentCreateManyProjetInputEnvelope
    connect?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
  }

  export type MembreProjetUncheckedCreateNestedManyWithoutProjetInput = {
    create?: XOR<MembreProjetCreateWithoutProjetInput, MembreProjetUncheckedCreateWithoutProjetInput> | MembreProjetCreateWithoutProjetInput[] | MembreProjetUncheckedCreateWithoutProjetInput[]
    connectOrCreate?: MembreProjetCreateOrConnectWithoutProjetInput | MembreProjetCreateOrConnectWithoutProjetInput[]
    createMany?: MembreProjetCreateManyProjetInputEnvelope
    connect?: MembreProjetWhereUniqueInput | MembreProjetWhereUniqueInput[]
  }

  export type TacheUncheckedCreateNestedManyWithoutProjetInput = {
    create?: XOR<TacheCreateWithoutProjetInput, TacheUncheckedCreateWithoutProjetInput> | TacheCreateWithoutProjetInput[] | TacheUncheckedCreateWithoutProjetInput[]
    connectOrCreate?: TacheCreateOrConnectWithoutProjetInput | TacheCreateOrConnectWithoutProjetInput[]
    createMany?: TacheCreateManyProjetInputEnvelope
    connect?: TacheWhereUniqueInput | TacheWhereUniqueInput[]
  }

  export type PartageDocumentUncheckedCreateNestedManyWithoutProjetInput = {
    create?: XOR<PartageDocumentCreateWithoutProjetInput, PartageDocumentUncheckedCreateWithoutProjetInput> | PartageDocumentCreateWithoutProjetInput[] | PartageDocumentUncheckedCreateWithoutProjetInput[]
    connectOrCreate?: PartageDocumentCreateOrConnectWithoutProjetInput | PartageDocumentCreateOrConnectWithoutProjetInput[]
    createMany?: PartageDocumentCreateManyProjetInputEnvelope
    connect?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DepartementUpdateOneRequiredWithoutProjetsNestedInput = {
    create?: XOR<DepartementCreateWithoutProjetsInput, DepartementUncheckedCreateWithoutProjetsInput>
    connectOrCreate?: DepartementCreateOrConnectWithoutProjetsInput
    upsert?: DepartementUpsertWithoutProjetsInput
    connect?: DepartementWhereUniqueInput
    update?: XOR<XOR<DepartementUpdateToOneWithWhereWithoutProjetsInput, DepartementUpdateWithoutProjetsInput>, DepartementUncheckedUpdateWithoutProjetsInput>
  }

  export type MembreProjetUpdateManyWithoutProjetNestedInput = {
    create?: XOR<MembreProjetCreateWithoutProjetInput, MembreProjetUncheckedCreateWithoutProjetInput> | MembreProjetCreateWithoutProjetInput[] | MembreProjetUncheckedCreateWithoutProjetInput[]
    connectOrCreate?: MembreProjetCreateOrConnectWithoutProjetInput | MembreProjetCreateOrConnectWithoutProjetInput[]
    upsert?: MembreProjetUpsertWithWhereUniqueWithoutProjetInput | MembreProjetUpsertWithWhereUniqueWithoutProjetInput[]
    createMany?: MembreProjetCreateManyProjetInputEnvelope
    set?: MembreProjetWhereUniqueInput | MembreProjetWhereUniqueInput[]
    disconnect?: MembreProjetWhereUniqueInput | MembreProjetWhereUniqueInput[]
    delete?: MembreProjetWhereUniqueInput | MembreProjetWhereUniqueInput[]
    connect?: MembreProjetWhereUniqueInput | MembreProjetWhereUniqueInput[]
    update?: MembreProjetUpdateWithWhereUniqueWithoutProjetInput | MembreProjetUpdateWithWhereUniqueWithoutProjetInput[]
    updateMany?: MembreProjetUpdateManyWithWhereWithoutProjetInput | MembreProjetUpdateManyWithWhereWithoutProjetInput[]
    deleteMany?: MembreProjetScalarWhereInput | MembreProjetScalarWhereInput[]
  }

  export type TacheUpdateManyWithoutProjetNestedInput = {
    create?: XOR<TacheCreateWithoutProjetInput, TacheUncheckedCreateWithoutProjetInput> | TacheCreateWithoutProjetInput[] | TacheUncheckedCreateWithoutProjetInput[]
    connectOrCreate?: TacheCreateOrConnectWithoutProjetInput | TacheCreateOrConnectWithoutProjetInput[]
    upsert?: TacheUpsertWithWhereUniqueWithoutProjetInput | TacheUpsertWithWhereUniqueWithoutProjetInput[]
    createMany?: TacheCreateManyProjetInputEnvelope
    set?: TacheWhereUniqueInput | TacheWhereUniqueInput[]
    disconnect?: TacheWhereUniqueInput | TacheWhereUniqueInput[]
    delete?: TacheWhereUniqueInput | TacheWhereUniqueInput[]
    connect?: TacheWhereUniqueInput | TacheWhereUniqueInput[]
    update?: TacheUpdateWithWhereUniqueWithoutProjetInput | TacheUpdateWithWhereUniqueWithoutProjetInput[]
    updateMany?: TacheUpdateManyWithWhereWithoutProjetInput | TacheUpdateManyWithWhereWithoutProjetInput[]
    deleteMany?: TacheScalarWhereInput | TacheScalarWhereInput[]
  }

  export type PartageDocumentUpdateManyWithoutProjetNestedInput = {
    create?: XOR<PartageDocumentCreateWithoutProjetInput, PartageDocumentUncheckedCreateWithoutProjetInput> | PartageDocumentCreateWithoutProjetInput[] | PartageDocumentUncheckedCreateWithoutProjetInput[]
    connectOrCreate?: PartageDocumentCreateOrConnectWithoutProjetInput | PartageDocumentCreateOrConnectWithoutProjetInput[]
    upsert?: PartageDocumentUpsertWithWhereUniqueWithoutProjetInput | PartageDocumentUpsertWithWhereUniqueWithoutProjetInput[]
    createMany?: PartageDocumentCreateManyProjetInputEnvelope
    set?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
    disconnect?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
    delete?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
    connect?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
    update?: PartageDocumentUpdateWithWhereUniqueWithoutProjetInput | PartageDocumentUpdateWithWhereUniqueWithoutProjetInput[]
    updateMany?: PartageDocumentUpdateManyWithWhereWithoutProjetInput | PartageDocumentUpdateManyWithWhereWithoutProjetInput[]
    deleteMany?: PartageDocumentScalarWhereInput | PartageDocumentScalarWhereInput[]
  }

  export type MembreProjetUncheckedUpdateManyWithoutProjetNestedInput = {
    create?: XOR<MembreProjetCreateWithoutProjetInput, MembreProjetUncheckedCreateWithoutProjetInput> | MembreProjetCreateWithoutProjetInput[] | MembreProjetUncheckedCreateWithoutProjetInput[]
    connectOrCreate?: MembreProjetCreateOrConnectWithoutProjetInput | MembreProjetCreateOrConnectWithoutProjetInput[]
    upsert?: MembreProjetUpsertWithWhereUniqueWithoutProjetInput | MembreProjetUpsertWithWhereUniqueWithoutProjetInput[]
    createMany?: MembreProjetCreateManyProjetInputEnvelope
    set?: MembreProjetWhereUniqueInput | MembreProjetWhereUniqueInput[]
    disconnect?: MembreProjetWhereUniqueInput | MembreProjetWhereUniqueInput[]
    delete?: MembreProjetWhereUniqueInput | MembreProjetWhereUniqueInput[]
    connect?: MembreProjetWhereUniqueInput | MembreProjetWhereUniqueInput[]
    update?: MembreProjetUpdateWithWhereUniqueWithoutProjetInput | MembreProjetUpdateWithWhereUniqueWithoutProjetInput[]
    updateMany?: MembreProjetUpdateManyWithWhereWithoutProjetInput | MembreProjetUpdateManyWithWhereWithoutProjetInput[]
    deleteMany?: MembreProjetScalarWhereInput | MembreProjetScalarWhereInput[]
  }

  export type TacheUncheckedUpdateManyWithoutProjetNestedInput = {
    create?: XOR<TacheCreateWithoutProjetInput, TacheUncheckedCreateWithoutProjetInput> | TacheCreateWithoutProjetInput[] | TacheUncheckedCreateWithoutProjetInput[]
    connectOrCreate?: TacheCreateOrConnectWithoutProjetInput | TacheCreateOrConnectWithoutProjetInput[]
    upsert?: TacheUpsertWithWhereUniqueWithoutProjetInput | TacheUpsertWithWhereUniqueWithoutProjetInput[]
    createMany?: TacheCreateManyProjetInputEnvelope
    set?: TacheWhereUniqueInput | TacheWhereUniqueInput[]
    disconnect?: TacheWhereUniqueInput | TacheWhereUniqueInput[]
    delete?: TacheWhereUniqueInput | TacheWhereUniqueInput[]
    connect?: TacheWhereUniqueInput | TacheWhereUniqueInput[]
    update?: TacheUpdateWithWhereUniqueWithoutProjetInput | TacheUpdateWithWhereUniqueWithoutProjetInput[]
    updateMany?: TacheUpdateManyWithWhereWithoutProjetInput | TacheUpdateManyWithWhereWithoutProjetInput[]
    deleteMany?: TacheScalarWhereInput | TacheScalarWhereInput[]
  }

  export type PartageDocumentUncheckedUpdateManyWithoutProjetNestedInput = {
    create?: XOR<PartageDocumentCreateWithoutProjetInput, PartageDocumentUncheckedCreateWithoutProjetInput> | PartageDocumentCreateWithoutProjetInput[] | PartageDocumentUncheckedCreateWithoutProjetInput[]
    connectOrCreate?: PartageDocumentCreateOrConnectWithoutProjetInput | PartageDocumentCreateOrConnectWithoutProjetInput[]
    upsert?: PartageDocumentUpsertWithWhereUniqueWithoutProjetInput | PartageDocumentUpsertWithWhereUniqueWithoutProjetInput[]
    createMany?: PartageDocumentCreateManyProjetInputEnvelope
    set?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
    disconnect?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
    delete?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
    connect?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
    update?: PartageDocumentUpdateWithWhereUniqueWithoutProjetInput | PartageDocumentUpdateWithWhereUniqueWithoutProjetInput[]
    updateMany?: PartageDocumentUpdateManyWithWhereWithoutProjetInput | PartageDocumentUpdateManyWithWhereWithoutProjetInput[]
    deleteMany?: PartageDocumentScalarWhereInput | PartageDocumentScalarWhereInput[]
  }

  export type ProjetCreateNestedOneWithoutTachesInput = {
    create?: XOR<ProjetCreateWithoutTachesInput, ProjetUncheckedCreateWithoutTachesInput>
    connectOrCreate?: ProjetCreateOrConnectWithoutTachesInput
    connect?: ProjetWhereUniqueInput
  }

  export type TacheMembreCreateNestedManyWithoutTacheInput = {
    create?: XOR<TacheMembreCreateWithoutTacheInput, TacheMembreUncheckedCreateWithoutTacheInput> | TacheMembreCreateWithoutTacheInput[] | TacheMembreUncheckedCreateWithoutTacheInput[]
    connectOrCreate?: TacheMembreCreateOrConnectWithoutTacheInput | TacheMembreCreateOrConnectWithoutTacheInput[]
    createMany?: TacheMembreCreateManyTacheInputEnvelope
    connect?: TacheMembreWhereUniqueInput | TacheMembreWhereUniqueInput[]
  }

  export type TacheMembreUncheckedCreateNestedManyWithoutTacheInput = {
    create?: XOR<TacheMembreCreateWithoutTacheInput, TacheMembreUncheckedCreateWithoutTacheInput> | TacheMembreCreateWithoutTacheInput[] | TacheMembreUncheckedCreateWithoutTacheInput[]
    connectOrCreate?: TacheMembreCreateOrConnectWithoutTacheInput | TacheMembreCreateOrConnectWithoutTacheInput[]
    createMany?: TacheMembreCreateManyTacheInputEnvelope
    connect?: TacheMembreWhereUniqueInput | TacheMembreWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumTacheStatutFieldUpdateOperationsInput = {
    set?: $Enums.TacheStatut
  }

  export type ProjetUpdateOneRequiredWithoutTachesNestedInput = {
    create?: XOR<ProjetCreateWithoutTachesInput, ProjetUncheckedCreateWithoutTachesInput>
    connectOrCreate?: ProjetCreateOrConnectWithoutTachesInput
    upsert?: ProjetUpsertWithoutTachesInput
    connect?: ProjetWhereUniqueInput
    update?: XOR<XOR<ProjetUpdateToOneWithWhereWithoutTachesInput, ProjetUpdateWithoutTachesInput>, ProjetUncheckedUpdateWithoutTachesInput>
  }

  export type TacheMembreUpdateManyWithoutTacheNestedInput = {
    create?: XOR<TacheMembreCreateWithoutTacheInput, TacheMembreUncheckedCreateWithoutTacheInput> | TacheMembreCreateWithoutTacheInput[] | TacheMembreUncheckedCreateWithoutTacheInput[]
    connectOrCreate?: TacheMembreCreateOrConnectWithoutTacheInput | TacheMembreCreateOrConnectWithoutTacheInput[]
    upsert?: TacheMembreUpsertWithWhereUniqueWithoutTacheInput | TacheMembreUpsertWithWhereUniqueWithoutTacheInput[]
    createMany?: TacheMembreCreateManyTacheInputEnvelope
    set?: TacheMembreWhereUniqueInput | TacheMembreWhereUniqueInput[]
    disconnect?: TacheMembreWhereUniqueInput | TacheMembreWhereUniqueInput[]
    delete?: TacheMembreWhereUniqueInput | TacheMembreWhereUniqueInput[]
    connect?: TacheMembreWhereUniqueInput | TacheMembreWhereUniqueInput[]
    update?: TacheMembreUpdateWithWhereUniqueWithoutTacheInput | TacheMembreUpdateWithWhereUniqueWithoutTacheInput[]
    updateMany?: TacheMembreUpdateManyWithWhereWithoutTacheInput | TacheMembreUpdateManyWithWhereWithoutTacheInput[]
    deleteMany?: TacheMembreScalarWhereInput | TacheMembreScalarWhereInput[]
  }

  export type TacheMembreUncheckedUpdateManyWithoutTacheNestedInput = {
    create?: XOR<TacheMembreCreateWithoutTacheInput, TacheMembreUncheckedCreateWithoutTacheInput> | TacheMembreCreateWithoutTacheInput[] | TacheMembreUncheckedCreateWithoutTacheInput[]
    connectOrCreate?: TacheMembreCreateOrConnectWithoutTacheInput | TacheMembreCreateOrConnectWithoutTacheInput[]
    upsert?: TacheMembreUpsertWithWhereUniqueWithoutTacheInput | TacheMembreUpsertWithWhereUniqueWithoutTacheInput[]
    createMany?: TacheMembreCreateManyTacheInputEnvelope
    set?: TacheMembreWhereUniqueInput | TacheMembreWhereUniqueInput[]
    disconnect?: TacheMembreWhereUniqueInput | TacheMembreWhereUniqueInput[]
    delete?: TacheMembreWhereUniqueInput | TacheMembreWhereUniqueInput[]
    connect?: TacheMembreWhereUniqueInput | TacheMembreWhereUniqueInput[]
    update?: TacheMembreUpdateWithWhereUniqueWithoutTacheInput | TacheMembreUpdateWithWhereUniqueWithoutTacheInput[]
    updateMany?: TacheMembreUpdateManyWithWhereWithoutTacheInput | TacheMembreUpdateManyWithWhereWithoutTacheInput[]
    deleteMany?: TacheMembreScalarWhereInput | TacheMembreScalarWhereInput[]
  }

  export type TacheCreateNestedOneWithoutTacheMembresInput = {
    create?: XOR<TacheCreateWithoutTacheMembresInput, TacheUncheckedCreateWithoutTacheMembresInput>
    connectOrCreate?: TacheCreateOrConnectWithoutTacheMembresInput
    connect?: TacheWhereUniqueInput
  }

  export type UtilisateurCreateNestedOneWithoutTachesInput = {
    create?: XOR<UtilisateurCreateWithoutTachesInput, UtilisateurUncheckedCreateWithoutTachesInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutTachesInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type TacheUpdateOneRequiredWithoutTacheMembresNestedInput = {
    create?: XOR<TacheCreateWithoutTacheMembresInput, TacheUncheckedCreateWithoutTacheMembresInput>
    connectOrCreate?: TacheCreateOrConnectWithoutTacheMembresInput
    upsert?: TacheUpsertWithoutTacheMembresInput
    connect?: TacheWhereUniqueInput
    update?: XOR<XOR<TacheUpdateToOneWithWhereWithoutTacheMembresInput, TacheUpdateWithoutTacheMembresInput>, TacheUncheckedUpdateWithoutTacheMembresInput>
  }

  export type UtilisateurUpdateOneRequiredWithoutTachesNestedInput = {
    create?: XOR<UtilisateurCreateWithoutTachesInput, UtilisateurUncheckedCreateWithoutTachesInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutTachesInput
    upsert?: UtilisateurUpsertWithoutTachesInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutTachesInput, UtilisateurUpdateWithoutTachesInput>, UtilisateurUncheckedUpdateWithoutTachesInput>
  }

  export type UtilisateurCreateNestedOneWithoutProjetsInput = {
    create?: XOR<UtilisateurCreateWithoutProjetsInput, UtilisateurUncheckedCreateWithoutProjetsInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutProjetsInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type ProjetCreateNestedOneWithoutMembresInput = {
    create?: XOR<ProjetCreateWithoutMembresInput, ProjetUncheckedCreateWithoutMembresInput>
    connectOrCreate?: ProjetCreateOrConnectWithoutMembresInput
    connect?: ProjetWhereUniqueInput
  }

  export type UtilisateurUpdateOneRequiredWithoutProjetsNestedInput = {
    create?: XOR<UtilisateurCreateWithoutProjetsInput, UtilisateurUncheckedCreateWithoutProjetsInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutProjetsInput
    upsert?: UtilisateurUpsertWithoutProjetsInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutProjetsInput, UtilisateurUpdateWithoutProjetsInput>, UtilisateurUncheckedUpdateWithoutProjetsInput>
  }

  export type ProjetUpdateOneRequiredWithoutMembresNestedInput = {
    create?: XOR<ProjetCreateWithoutMembresInput, ProjetUncheckedCreateWithoutMembresInput>
    connectOrCreate?: ProjetCreateOrConnectWithoutMembresInput
    upsert?: ProjetUpsertWithoutMembresInput
    connect?: ProjetWhereUniqueInput
    update?: XOR<XOR<ProjetUpdateToOneWithWhereWithoutMembresInput, ProjetUpdateWithoutMembresInput>, ProjetUncheckedUpdateWithoutMembresInput>
  }

  export type DocumentCreateNestedOneWithoutPartagesInput = {
    create?: XOR<DocumentCreateWithoutPartagesInput, DocumentUncheckedCreateWithoutPartagesInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutPartagesInput
    connect?: DocumentWhereUniqueInput
  }

  export type UtilisateurCreateNestedOneWithoutPartagesInput = {
    create?: XOR<UtilisateurCreateWithoutPartagesInput, UtilisateurUncheckedCreateWithoutPartagesInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutPartagesInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type DepartementCreateNestedOneWithoutPartagesInput = {
    create?: XOR<DepartementCreateWithoutPartagesInput, DepartementUncheckedCreateWithoutPartagesInput>
    connectOrCreate?: DepartementCreateOrConnectWithoutPartagesInput
    connect?: DepartementWhereUniqueInput
  }

  export type ProjetCreateNestedOneWithoutPartagesInput = {
    create?: XOR<ProjetCreateWithoutPartagesInput, ProjetUncheckedCreateWithoutPartagesInput>
    connectOrCreate?: ProjetCreateOrConnectWithoutPartagesInput
    connect?: ProjetWhereUniqueInput
  }

  export type UtilisateurCreateNestedOneWithoutPartagesEnTantQuePartageurInput = {
    create?: XOR<UtilisateurCreateWithoutPartagesEnTantQuePartageurInput, UtilisateurUncheckedCreateWithoutPartagesEnTantQuePartageurInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutPartagesEnTantQuePartageurInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type DocumentUpdateOneRequiredWithoutPartagesNestedInput = {
    create?: XOR<DocumentCreateWithoutPartagesInput, DocumentUncheckedCreateWithoutPartagesInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutPartagesInput
    upsert?: DocumentUpsertWithoutPartagesInput
    connect?: DocumentWhereUniqueInput
    update?: XOR<XOR<DocumentUpdateToOneWithWhereWithoutPartagesInput, DocumentUpdateWithoutPartagesInput>, DocumentUncheckedUpdateWithoutPartagesInput>
  }

  export type UtilisateurUpdateOneWithoutPartagesNestedInput = {
    create?: XOR<UtilisateurCreateWithoutPartagesInput, UtilisateurUncheckedCreateWithoutPartagesInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutPartagesInput
    upsert?: UtilisateurUpsertWithoutPartagesInput
    disconnect?: UtilisateurWhereInput | boolean
    delete?: UtilisateurWhereInput | boolean
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutPartagesInput, UtilisateurUpdateWithoutPartagesInput>, UtilisateurUncheckedUpdateWithoutPartagesInput>
  }

  export type DepartementUpdateOneWithoutPartagesNestedInput = {
    create?: XOR<DepartementCreateWithoutPartagesInput, DepartementUncheckedCreateWithoutPartagesInput>
    connectOrCreate?: DepartementCreateOrConnectWithoutPartagesInput
    upsert?: DepartementUpsertWithoutPartagesInput
    disconnect?: DepartementWhereInput | boolean
    delete?: DepartementWhereInput | boolean
    connect?: DepartementWhereUniqueInput
    update?: XOR<XOR<DepartementUpdateToOneWithWhereWithoutPartagesInput, DepartementUpdateWithoutPartagesInput>, DepartementUncheckedUpdateWithoutPartagesInput>
  }

  export type ProjetUpdateOneWithoutPartagesNestedInput = {
    create?: XOR<ProjetCreateWithoutPartagesInput, ProjetUncheckedCreateWithoutPartagesInput>
    connectOrCreate?: ProjetCreateOrConnectWithoutPartagesInput
    upsert?: ProjetUpsertWithoutPartagesInput
    disconnect?: ProjetWhereInput | boolean
    delete?: ProjetWhereInput | boolean
    connect?: ProjetWhereUniqueInput
    update?: XOR<XOR<ProjetUpdateToOneWithWhereWithoutPartagesInput, ProjetUpdateWithoutPartagesInput>, ProjetUncheckedUpdateWithoutPartagesInput>
  }

  export type UtilisateurUpdateOneRequiredWithoutPartagesEnTantQuePartageurNestedInput = {
    create?: XOR<UtilisateurCreateWithoutPartagesEnTantQuePartageurInput, UtilisateurUncheckedCreateWithoutPartagesEnTantQuePartageurInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutPartagesEnTantQuePartageurInput
    upsert?: UtilisateurUpsertWithoutPartagesEnTantQuePartageurInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutPartagesEnTantQuePartageurInput, UtilisateurUpdateWithoutPartagesEnTantQuePartageurInput>, UtilisateurUncheckedUpdateWithoutPartagesEnTantQuePartageurInput>
  }

  export type DocumentCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<DocumentCreateWithoutNotificationsInput, DocumentUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutNotificationsInput
    connect?: DocumentWhereUniqueInput
  }

  export type UtilisateurCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UtilisateurCreateWithoutNotificationsInput, UtilisateurUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutNotificationsInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DocumentUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<DocumentCreateWithoutNotificationsInput, DocumentUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutNotificationsInput
    upsert?: DocumentUpsertWithoutNotificationsInput
    connect?: DocumentWhereUniqueInput
    update?: XOR<XOR<DocumentUpdateToOneWithWhereWithoutNotificationsInput, DocumentUpdateWithoutNotificationsInput>, DocumentUncheckedUpdateWithoutNotificationsInput>
  }

  export type UtilisateurUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UtilisateurCreateWithoutNotificationsInput, UtilisateurUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutNotificationsInput
    upsert?: UtilisateurUpsertWithoutNotificationsInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutNotificationsInput, UtilisateurUpdateWithoutNotificationsInput>, UtilisateurUncheckedUpdateWithoutNotificationsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumTacheStatutFilter<$PrismaModel = never> = {
    equals?: $Enums.TacheStatut | EnumTacheStatutFieldRefInput<$PrismaModel>
    in?: $Enums.TacheStatut[]
    notIn?: $Enums.TacheStatut[]
    not?: NestedEnumTacheStatutFilter<$PrismaModel> | $Enums.TacheStatut
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumTacheStatutWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TacheStatut | EnumTacheStatutFieldRefInput<$PrismaModel>
    in?: $Enums.TacheStatut[]
    notIn?: $Enums.TacheStatut[]
    not?: NestedEnumTacheStatutWithAggregatesFilter<$PrismaModel> | $Enums.TacheStatut
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTacheStatutFilter<$PrismaModel>
    _max?: NestedEnumTacheStatutFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProjetCreateWithoutDepartementInput = {
    nom: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    membres?: MembreProjetCreateNestedManyWithoutProjetInput
    taches?: TacheCreateNestedManyWithoutProjetInput
    partages?: PartageDocumentCreateNestedManyWithoutProjetInput
  }

  export type ProjetUncheckedCreateWithoutDepartementInput = {
    id?: number
    nom: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    membres?: MembreProjetUncheckedCreateNestedManyWithoutProjetInput
    taches?: TacheUncheckedCreateNestedManyWithoutProjetInput
    partages?: PartageDocumentUncheckedCreateNestedManyWithoutProjetInput
  }

  export type ProjetCreateOrConnectWithoutDepartementInput = {
    where: ProjetWhereUniqueInput
    create: XOR<ProjetCreateWithoutDepartementInput, ProjetUncheckedCreateWithoutDepartementInput>
  }

  export type ProjetCreateManyDepartementInputEnvelope = {
    data: ProjetCreateManyDepartementInput | ProjetCreateManyDepartementInput[]
  }

  export type UtilisateurCreateWithoutDepartementInput = {
    nom: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    projets?: MembreProjetCreateNestedManyWithoutUtilisateurInput
    taches?: TacheMembreCreateNestedManyWithoutUtilisateurInput
    partages?: PartageDocumentCreateNestedManyWithoutUtilisateurInput
    partagesEnTantQuePartageur?: PartageDocumentCreateNestedManyWithoutPartageurInput
    notifications?: NotificationCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateWithoutDepartementInput = {
    id?: number
    nom: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    projets?: MembreProjetUncheckedCreateNestedManyWithoutUtilisateurInput
    taches?: TacheMembreUncheckedCreateNestedManyWithoutUtilisateurInput
    partages?: PartageDocumentUncheckedCreateNestedManyWithoutUtilisateurInput
    partagesEnTantQuePartageur?: PartageDocumentUncheckedCreateNestedManyWithoutPartageurInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurCreateOrConnectWithoutDepartementInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutDepartementInput, UtilisateurUncheckedCreateWithoutDepartementInput>
  }

  export type UtilisateurCreateManyDepartementInputEnvelope = {
    data: UtilisateurCreateManyDepartementInput | UtilisateurCreateManyDepartementInput[]
  }

  export type PartageDocumentCreateWithoutDepartementInput = {
    datePartage?: Date | string
    historique?: string | null
    document: DocumentCreateNestedOneWithoutPartagesInput
    utilisateur?: UtilisateurCreateNestedOneWithoutPartagesInput
    projet?: ProjetCreateNestedOneWithoutPartagesInput
    partageur: UtilisateurCreateNestedOneWithoutPartagesEnTantQuePartageurInput
  }

  export type PartageDocumentUncheckedCreateWithoutDepartementInput = {
    id?: number
    documentId: number
    utilisateurId?: number | null
    projetId?: number | null
    datePartage?: Date | string
    partageurId: number
    historique?: string | null
  }

  export type PartageDocumentCreateOrConnectWithoutDepartementInput = {
    where: PartageDocumentWhereUniqueInput
    create: XOR<PartageDocumentCreateWithoutDepartementInput, PartageDocumentUncheckedCreateWithoutDepartementInput>
  }

  export type PartageDocumentCreateManyDepartementInputEnvelope = {
    data: PartageDocumentCreateManyDepartementInput | PartageDocumentCreateManyDepartementInput[]
  }

  export type ProjetUpsertWithWhereUniqueWithoutDepartementInput = {
    where: ProjetWhereUniqueInput
    update: XOR<ProjetUpdateWithoutDepartementInput, ProjetUncheckedUpdateWithoutDepartementInput>
    create: XOR<ProjetCreateWithoutDepartementInput, ProjetUncheckedCreateWithoutDepartementInput>
  }

  export type ProjetUpdateWithWhereUniqueWithoutDepartementInput = {
    where: ProjetWhereUniqueInput
    data: XOR<ProjetUpdateWithoutDepartementInput, ProjetUncheckedUpdateWithoutDepartementInput>
  }

  export type ProjetUpdateManyWithWhereWithoutDepartementInput = {
    where: ProjetScalarWhereInput
    data: XOR<ProjetUpdateManyMutationInput, ProjetUncheckedUpdateManyWithoutDepartementInput>
  }

  export type ProjetScalarWhereInput = {
    AND?: ProjetScalarWhereInput | ProjetScalarWhereInput[]
    OR?: ProjetScalarWhereInput[]
    NOT?: ProjetScalarWhereInput | ProjetScalarWhereInput[]
    id?: IntFilter<"Projet"> | number
    nom?: StringFilter<"Projet"> | string
    description?: StringNullableFilter<"Projet"> | string | null
    createdAt?: DateTimeFilter<"Projet"> | Date | string
    updatedAt?: DateTimeFilter<"Projet"> | Date | string
    departementId?: IntFilter<"Projet"> | number
  }

  export type UtilisateurUpsertWithWhereUniqueWithoutDepartementInput = {
    where: UtilisateurWhereUniqueInput
    update: XOR<UtilisateurUpdateWithoutDepartementInput, UtilisateurUncheckedUpdateWithoutDepartementInput>
    create: XOR<UtilisateurCreateWithoutDepartementInput, UtilisateurUncheckedCreateWithoutDepartementInput>
  }

  export type UtilisateurUpdateWithWhereUniqueWithoutDepartementInput = {
    where: UtilisateurWhereUniqueInput
    data: XOR<UtilisateurUpdateWithoutDepartementInput, UtilisateurUncheckedUpdateWithoutDepartementInput>
  }

  export type UtilisateurUpdateManyWithWhereWithoutDepartementInput = {
    where: UtilisateurScalarWhereInput
    data: XOR<UtilisateurUpdateManyMutationInput, UtilisateurUncheckedUpdateManyWithoutDepartementInput>
  }

  export type UtilisateurScalarWhereInput = {
    AND?: UtilisateurScalarWhereInput | UtilisateurScalarWhereInput[]
    OR?: UtilisateurScalarWhereInput[]
    NOT?: UtilisateurScalarWhereInput | UtilisateurScalarWhereInput[]
    id?: IntFilter<"Utilisateur"> | number
    nom?: StringFilter<"Utilisateur"> | string
    email?: StringFilter<"Utilisateur"> | string
    password?: StringFilter<"Utilisateur"> | string
    role?: EnumRoleFilter<"Utilisateur"> | $Enums.Role
    departementId?: IntNullableFilter<"Utilisateur"> | number | null
    createdAt?: DateTimeFilter<"Utilisateur"> | Date | string
    updatedAt?: DateTimeFilter<"Utilisateur"> | Date | string
  }

  export type PartageDocumentUpsertWithWhereUniqueWithoutDepartementInput = {
    where: PartageDocumentWhereUniqueInput
    update: XOR<PartageDocumentUpdateWithoutDepartementInput, PartageDocumentUncheckedUpdateWithoutDepartementInput>
    create: XOR<PartageDocumentCreateWithoutDepartementInput, PartageDocumentUncheckedCreateWithoutDepartementInput>
  }

  export type PartageDocumentUpdateWithWhereUniqueWithoutDepartementInput = {
    where: PartageDocumentWhereUniqueInput
    data: XOR<PartageDocumentUpdateWithoutDepartementInput, PartageDocumentUncheckedUpdateWithoutDepartementInput>
  }

  export type PartageDocumentUpdateManyWithWhereWithoutDepartementInput = {
    where: PartageDocumentScalarWhereInput
    data: XOR<PartageDocumentUpdateManyMutationInput, PartageDocumentUncheckedUpdateManyWithoutDepartementInput>
  }

  export type PartageDocumentScalarWhereInput = {
    AND?: PartageDocumentScalarWhereInput | PartageDocumentScalarWhereInput[]
    OR?: PartageDocumentScalarWhereInput[]
    NOT?: PartageDocumentScalarWhereInput | PartageDocumentScalarWhereInput[]
    id?: IntFilter<"PartageDocument"> | number
    documentId?: IntFilter<"PartageDocument"> | number
    utilisateurId?: IntNullableFilter<"PartageDocument"> | number | null
    departementId?: IntNullableFilter<"PartageDocument"> | number | null
    projetId?: IntNullableFilter<"PartageDocument"> | number | null
    datePartage?: DateTimeFilter<"PartageDocument"> | Date | string
    partageurId?: IntFilter<"PartageDocument"> | number
    historique?: StringNullableFilter<"PartageDocument"> | string | null
  }

  export type DepartementCreateWithoutUtilisateursInput = {
    nom: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projets?: ProjetCreateNestedManyWithoutDepartementInput
    partages?: PartageDocumentCreateNestedManyWithoutDepartementInput
  }

  export type DepartementUncheckedCreateWithoutUtilisateursInput = {
    id?: number
    nom: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projets?: ProjetUncheckedCreateNestedManyWithoutDepartementInput
    partages?: PartageDocumentUncheckedCreateNestedManyWithoutDepartementInput
  }

  export type DepartementCreateOrConnectWithoutUtilisateursInput = {
    where: DepartementWhereUniqueInput
    create: XOR<DepartementCreateWithoutUtilisateursInput, DepartementUncheckedCreateWithoutUtilisateursInput>
  }

  export type MembreProjetCreateWithoutUtilisateurInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    projet: ProjetCreateNestedOneWithoutMembresInput
  }

  export type MembreProjetUncheckedCreateWithoutUtilisateurInput = {
    projetId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MembreProjetCreateOrConnectWithoutUtilisateurInput = {
    where: MembreProjetWhereUniqueInput
    create: XOR<MembreProjetCreateWithoutUtilisateurInput, MembreProjetUncheckedCreateWithoutUtilisateurInput>
  }

  export type MembreProjetCreateManyUtilisateurInputEnvelope = {
    data: MembreProjetCreateManyUtilisateurInput | MembreProjetCreateManyUtilisateurInput[]
  }

  export type TacheMembreCreateWithoutUtilisateurInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    tache: TacheCreateNestedOneWithoutTacheMembresInput
  }

  export type TacheMembreUncheckedCreateWithoutUtilisateurInput = {
    tacheId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TacheMembreCreateOrConnectWithoutUtilisateurInput = {
    where: TacheMembreWhereUniqueInput
    create: XOR<TacheMembreCreateWithoutUtilisateurInput, TacheMembreUncheckedCreateWithoutUtilisateurInput>
  }

  export type TacheMembreCreateManyUtilisateurInputEnvelope = {
    data: TacheMembreCreateManyUtilisateurInput | TacheMembreCreateManyUtilisateurInput[]
  }

  export type PartageDocumentCreateWithoutUtilisateurInput = {
    datePartage?: Date | string
    historique?: string | null
    document: DocumentCreateNestedOneWithoutPartagesInput
    departement?: DepartementCreateNestedOneWithoutPartagesInput
    projet?: ProjetCreateNestedOneWithoutPartagesInput
    partageur: UtilisateurCreateNestedOneWithoutPartagesEnTantQuePartageurInput
  }

  export type PartageDocumentUncheckedCreateWithoutUtilisateurInput = {
    id?: number
    documentId: number
    departementId?: number | null
    projetId?: number | null
    datePartage?: Date | string
    partageurId: number
    historique?: string | null
  }

  export type PartageDocumentCreateOrConnectWithoutUtilisateurInput = {
    where: PartageDocumentWhereUniqueInput
    create: XOR<PartageDocumentCreateWithoutUtilisateurInput, PartageDocumentUncheckedCreateWithoutUtilisateurInput>
  }

  export type PartageDocumentCreateManyUtilisateurInputEnvelope = {
    data: PartageDocumentCreateManyUtilisateurInput | PartageDocumentCreateManyUtilisateurInput[]
  }

  export type PartageDocumentCreateWithoutPartageurInput = {
    datePartage?: Date | string
    historique?: string | null
    document: DocumentCreateNestedOneWithoutPartagesInput
    utilisateur?: UtilisateurCreateNestedOneWithoutPartagesInput
    departement?: DepartementCreateNestedOneWithoutPartagesInput
    projet?: ProjetCreateNestedOneWithoutPartagesInput
  }

  export type PartageDocumentUncheckedCreateWithoutPartageurInput = {
    id?: number
    documentId: number
    utilisateurId?: number | null
    departementId?: number | null
    projetId?: number | null
    datePartage?: Date | string
    historique?: string | null
  }

  export type PartageDocumentCreateOrConnectWithoutPartageurInput = {
    where: PartageDocumentWhereUniqueInput
    create: XOR<PartageDocumentCreateWithoutPartageurInput, PartageDocumentUncheckedCreateWithoutPartageurInput>
  }

  export type PartageDocumentCreateManyPartageurInputEnvelope = {
    data: PartageDocumentCreateManyPartageurInput | PartageDocumentCreateManyPartageurInput[]
  }

  export type NotificationCreateWithoutUtilisateurInput = {
    message: string
    dateNotification?: Date | string
    vu?: boolean
    document: DocumentCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutUtilisateurInput = {
    id?: number
    message: string
    dateNotification?: Date | string
    documentId: number
    vu?: boolean
  }

  export type NotificationCreateOrConnectWithoutUtilisateurInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUtilisateurInput, NotificationUncheckedCreateWithoutUtilisateurInput>
  }

  export type NotificationCreateManyUtilisateurInputEnvelope = {
    data: NotificationCreateManyUtilisateurInput | NotificationCreateManyUtilisateurInput[]
  }

  export type DepartementUpsertWithoutUtilisateursInput = {
    update: XOR<DepartementUpdateWithoutUtilisateursInput, DepartementUncheckedUpdateWithoutUtilisateursInput>
    create: XOR<DepartementCreateWithoutUtilisateursInput, DepartementUncheckedCreateWithoutUtilisateursInput>
    where?: DepartementWhereInput
  }

  export type DepartementUpdateToOneWithWhereWithoutUtilisateursInput = {
    where?: DepartementWhereInput
    data: XOR<DepartementUpdateWithoutUtilisateursInput, DepartementUncheckedUpdateWithoutUtilisateursInput>
  }

  export type DepartementUpdateWithoutUtilisateursInput = {
    nom?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projets?: ProjetUpdateManyWithoutDepartementNestedInput
    partages?: PartageDocumentUpdateManyWithoutDepartementNestedInput
  }

  export type DepartementUncheckedUpdateWithoutUtilisateursInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projets?: ProjetUncheckedUpdateManyWithoutDepartementNestedInput
    partages?: PartageDocumentUncheckedUpdateManyWithoutDepartementNestedInput
  }

  export type MembreProjetUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: MembreProjetWhereUniqueInput
    update: XOR<MembreProjetUpdateWithoutUtilisateurInput, MembreProjetUncheckedUpdateWithoutUtilisateurInput>
    create: XOR<MembreProjetCreateWithoutUtilisateurInput, MembreProjetUncheckedCreateWithoutUtilisateurInput>
  }

  export type MembreProjetUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: MembreProjetWhereUniqueInput
    data: XOR<MembreProjetUpdateWithoutUtilisateurInput, MembreProjetUncheckedUpdateWithoutUtilisateurInput>
  }

  export type MembreProjetUpdateManyWithWhereWithoutUtilisateurInput = {
    where: MembreProjetScalarWhereInput
    data: XOR<MembreProjetUpdateManyMutationInput, MembreProjetUncheckedUpdateManyWithoutUtilisateurInput>
  }

  export type MembreProjetScalarWhereInput = {
    AND?: MembreProjetScalarWhereInput | MembreProjetScalarWhereInput[]
    OR?: MembreProjetScalarWhereInput[]
    NOT?: MembreProjetScalarWhereInput | MembreProjetScalarWhereInput[]
    utilisateurId?: IntFilter<"MembreProjet"> | number
    projetId?: IntFilter<"MembreProjet"> | number
    createdAt?: DateTimeFilter<"MembreProjet"> | Date | string
    updatedAt?: DateTimeFilter<"MembreProjet"> | Date | string
  }

  export type TacheMembreUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: TacheMembreWhereUniqueInput
    update: XOR<TacheMembreUpdateWithoutUtilisateurInput, TacheMembreUncheckedUpdateWithoutUtilisateurInput>
    create: XOR<TacheMembreCreateWithoutUtilisateurInput, TacheMembreUncheckedCreateWithoutUtilisateurInput>
  }

  export type TacheMembreUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: TacheMembreWhereUniqueInput
    data: XOR<TacheMembreUpdateWithoutUtilisateurInput, TacheMembreUncheckedUpdateWithoutUtilisateurInput>
  }

  export type TacheMembreUpdateManyWithWhereWithoutUtilisateurInput = {
    where: TacheMembreScalarWhereInput
    data: XOR<TacheMembreUpdateManyMutationInput, TacheMembreUncheckedUpdateManyWithoutUtilisateurInput>
  }

  export type TacheMembreScalarWhereInput = {
    AND?: TacheMembreScalarWhereInput | TacheMembreScalarWhereInput[]
    OR?: TacheMembreScalarWhereInput[]
    NOT?: TacheMembreScalarWhereInput | TacheMembreScalarWhereInput[]
    tacheId?: IntFilter<"TacheMembre"> | number
    utilisateurId?: IntFilter<"TacheMembre"> | number
    createdAt?: DateTimeFilter<"TacheMembre"> | Date | string
    updatedAt?: DateTimeFilter<"TacheMembre"> | Date | string
  }

  export type PartageDocumentUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: PartageDocumentWhereUniqueInput
    update: XOR<PartageDocumentUpdateWithoutUtilisateurInput, PartageDocumentUncheckedUpdateWithoutUtilisateurInput>
    create: XOR<PartageDocumentCreateWithoutUtilisateurInput, PartageDocumentUncheckedCreateWithoutUtilisateurInput>
  }

  export type PartageDocumentUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: PartageDocumentWhereUniqueInput
    data: XOR<PartageDocumentUpdateWithoutUtilisateurInput, PartageDocumentUncheckedUpdateWithoutUtilisateurInput>
  }

  export type PartageDocumentUpdateManyWithWhereWithoutUtilisateurInput = {
    where: PartageDocumentScalarWhereInput
    data: XOR<PartageDocumentUpdateManyMutationInput, PartageDocumentUncheckedUpdateManyWithoutUtilisateurInput>
  }

  export type PartageDocumentUpsertWithWhereUniqueWithoutPartageurInput = {
    where: PartageDocumentWhereUniqueInput
    update: XOR<PartageDocumentUpdateWithoutPartageurInput, PartageDocumentUncheckedUpdateWithoutPartageurInput>
    create: XOR<PartageDocumentCreateWithoutPartageurInput, PartageDocumentUncheckedCreateWithoutPartageurInput>
  }

  export type PartageDocumentUpdateWithWhereUniqueWithoutPartageurInput = {
    where: PartageDocumentWhereUniqueInput
    data: XOR<PartageDocumentUpdateWithoutPartageurInput, PartageDocumentUncheckedUpdateWithoutPartageurInput>
  }

  export type PartageDocumentUpdateManyWithWhereWithoutPartageurInput = {
    where: PartageDocumentScalarWhereInput
    data: XOR<PartageDocumentUpdateManyMutationInput, PartageDocumentUncheckedUpdateManyWithoutPartageurInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUtilisateurInput, NotificationUncheckedUpdateWithoutUtilisateurInput>
    create: XOR<NotificationCreateWithoutUtilisateurInput, NotificationUncheckedCreateWithoutUtilisateurInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUtilisateurInput, NotificationUncheckedUpdateWithoutUtilisateurInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUtilisateurInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUtilisateurInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: IntFilter<"Notification"> | number
    utilisateurId?: IntFilter<"Notification"> | number
    message?: StringFilter<"Notification"> | string
    dateNotification?: DateTimeFilter<"Notification"> | Date | string
    documentId?: IntFilter<"Notification"> | number
    vu?: BoolFilter<"Notification"> | boolean
  }

  export type PartageDocumentCreateWithoutDocumentInput = {
    datePartage?: Date | string
    historique?: string | null
    utilisateur?: UtilisateurCreateNestedOneWithoutPartagesInput
    departement?: DepartementCreateNestedOneWithoutPartagesInput
    projet?: ProjetCreateNestedOneWithoutPartagesInput
    partageur: UtilisateurCreateNestedOneWithoutPartagesEnTantQuePartageurInput
  }

  export type PartageDocumentUncheckedCreateWithoutDocumentInput = {
    id?: number
    utilisateurId?: number | null
    departementId?: number | null
    projetId?: number | null
    datePartage?: Date | string
    partageurId: number
    historique?: string | null
  }

  export type PartageDocumentCreateOrConnectWithoutDocumentInput = {
    where: PartageDocumentWhereUniqueInput
    create: XOR<PartageDocumentCreateWithoutDocumentInput, PartageDocumentUncheckedCreateWithoutDocumentInput>
  }

  export type PartageDocumentCreateManyDocumentInputEnvelope = {
    data: PartageDocumentCreateManyDocumentInput | PartageDocumentCreateManyDocumentInput[]
  }

  export type NotificationCreateWithoutDocumentInput = {
    message: string
    dateNotification?: Date | string
    vu?: boolean
    utilisateur: UtilisateurCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutDocumentInput = {
    id?: number
    utilisateurId: number
    message: string
    dateNotification?: Date | string
    vu?: boolean
  }

  export type NotificationCreateOrConnectWithoutDocumentInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutDocumentInput, NotificationUncheckedCreateWithoutDocumentInput>
  }

  export type NotificationCreateManyDocumentInputEnvelope = {
    data: NotificationCreateManyDocumentInput | NotificationCreateManyDocumentInput[]
  }

  export type PartageDocumentUpsertWithWhereUniqueWithoutDocumentInput = {
    where: PartageDocumentWhereUniqueInput
    update: XOR<PartageDocumentUpdateWithoutDocumentInput, PartageDocumentUncheckedUpdateWithoutDocumentInput>
    create: XOR<PartageDocumentCreateWithoutDocumentInput, PartageDocumentUncheckedCreateWithoutDocumentInput>
  }

  export type PartageDocumentUpdateWithWhereUniqueWithoutDocumentInput = {
    where: PartageDocumentWhereUniqueInput
    data: XOR<PartageDocumentUpdateWithoutDocumentInput, PartageDocumentUncheckedUpdateWithoutDocumentInput>
  }

  export type PartageDocumentUpdateManyWithWhereWithoutDocumentInput = {
    where: PartageDocumentScalarWhereInput
    data: XOR<PartageDocumentUpdateManyMutationInput, PartageDocumentUncheckedUpdateManyWithoutDocumentInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutDocumentInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutDocumentInput, NotificationUncheckedUpdateWithoutDocumentInput>
    create: XOR<NotificationCreateWithoutDocumentInput, NotificationUncheckedCreateWithoutDocumentInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutDocumentInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutDocumentInput, NotificationUncheckedUpdateWithoutDocumentInput>
  }

  export type NotificationUpdateManyWithWhereWithoutDocumentInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutDocumentInput>
  }

  export type DepartementCreateWithoutProjetsInput = {
    nom: string
    createdAt?: Date | string
    updatedAt?: Date | string
    utilisateurs?: UtilisateurCreateNestedManyWithoutDepartementInput
    partages?: PartageDocumentCreateNestedManyWithoutDepartementInput
  }

  export type DepartementUncheckedCreateWithoutProjetsInput = {
    id?: number
    nom: string
    createdAt?: Date | string
    updatedAt?: Date | string
    utilisateurs?: UtilisateurUncheckedCreateNestedManyWithoutDepartementInput
    partages?: PartageDocumentUncheckedCreateNestedManyWithoutDepartementInput
  }

  export type DepartementCreateOrConnectWithoutProjetsInput = {
    where: DepartementWhereUniqueInput
    create: XOR<DepartementCreateWithoutProjetsInput, DepartementUncheckedCreateWithoutProjetsInput>
  }

  export type MembreProjetCreateWithoutProjetInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    utilisateur: UtilisateurCreateNestedOneWithoutProjetsInput
  }

  export type MembreProjetUncheckedCreateWithoutProjetInput = {
    utilisateurId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MembreProjetCreateOrConnectWithoutProjetInput = {
    where: MembreProjetWhereUniqueInput
    create: XOR<MembreProjetCreateWithoutProjetInput, MembreProjetUncheckedCreateWithoutProjetInput>
  }

  export type MembreProjetCreateManyProjetInputEnvelope = {
    data: MembreProjetCreateManyProjetInput | MembreProjetCreateManyProjetInput[]
  }

  export type TacheCreateWithoutProjetInput = {
    titre: string
    description?: string | null
    deadline?: Date | string | null
    statut: $Enums.TacheStatut
    createdAt?: Date | string
    updatedAt?: Date | string
    tacheMembres?: TacheMembreCreateNestedManyWithoutTacheInput
  }

  export type TacheUncheckedCreateWithoutProjetInput = {
    id?: number
    titre: string
    description?: string | null
    deadline?: Date | string | null
    statut: $Enums.TacheStatut
    createdAt?: Date | string
    updatedAt?: Date | string
    tacheMembres?: TacheMembreUncheckedCreateNestedManyWithoutTacheInput
  }

  export type TacheCreateOrConnectWithoutProjetInput = {
    where: TacheWhereUniqueInput
    create: XOR<TacheCreateWithoutProjetInput, TacheUncheckedCreateWithoutProjetInput>
  }

  export type TacheCreateManyProjetInputEnvelope = {
    data: TacheCreateManyProjetInput | TacheCreateManyProjetInput[]
  }

  export type PartageDocumentCreateWithoutProjetInput = {
    datePartage?: Date | string
    historique?: string | null
    document: DocumentCreateNestedOneWithoutPartagesInput
    utilisateur?: UtilisateurCreateNestedOneWithoutPartagesInput
    departement?: DepartementCreateNestedOneWithoutPartagesInput
    partageur: UtilisateurCreateNestedOneWithoutPartagesEnTantQuePartageurInput
  }

  export type PartageDocumentUncheckedCreateWithoutProjetInput = {
    id?: number
    documentId: number
    utilisateurId?: number | null
    departementId?: number | null
    datePartage?: Date | string
    partageurId: number
    historique?: string | null
  }

  export type PartageDocumentCreateOrConnectWithoutProjetInput = {
    where: PartageDocumentWhereUniqueInput
    create: XOR<PartageDocumentCreateWithoutProjetInput, PartageDocumentUncheckedCreateWithoutProjetInput>
  }

  export type PartageDocumentCreateManyProjetInputEnvelope = {
    data: PartageDocumentCreateManyProjetInput | PartageDocumentCreateManyProjetInput[]
  }

  export type DepartementUpsertWithoutProjetsInput = {
    update: XOR<DepartementUpdateWithoutProjetsInput, DepartementUncheckedUpdateWithoutProjetsInput>
    create: XOR<DepartementCreateWithoutProjetsInput, DepartementUncheckedCreateWithoutProjetsInput>
    where?: DepartementWhereInput
  }

  export type DepartementUpdateToOneWithWhereWithoutProjetsInput = {
    where?: DepartementWhereInput
    data: XOR<DepartementUpdateWithoutProjetsInput, DepartementUncheckedUpdateWithoutProjetsInput>
  }

  export type DepartementUpdateWithoutProjetsInput = {
    nom?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateurs?: UtilisateurUpdateManyWithoutDepartementNestedInput
    partages?: PartageDocumentUpdateManyWithoutDepartementNestedInput
  }

  export type DepartementUncheckedUpdateWithoutProjetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateurs?: UtilisateurUncheckedUpdateManyWithoutDepartementNestedInput
    partages?: PartageDocumentUncheckedUpdateManyWithoutDepartementNestedInput
  }

  export type MembreProjetUpsertWithWhereUniqueWithoutProjetInput = {
    where: MembreProjetWhereUniqueInput
    update: XOR<MembreProjetUpdateWithoutProjetInput, MembreProjetUncheckedUpdateWithoutProjetInput>
    create: XOR<MembreProjetCreateWithoutProjetInput, MembreProjetUncheckedCreateWithoutProjetInput>
  }

  export type MembreProjetUpdateWithWhereUniqueWithoutProjetInput = {
    where: MembreProjetWhereUniqueInput
    data: XOR<MembreProjetUpdateWithoutProjetInput, MembreProjetUncheckedUpdateWithoutProjetInput>
  }

  export type MembreProjetUpdateManyWithWhereWithoutProjetInput = {
    where: MembreProjetScalarWhereInput
    data: XOR<MembreProjetUpdateManyMutationInput, MembreProjetUncheckedUpdateManyWithoutProjetInput>
  }

  export type TacheUpsertWithWhereUniqueWithoutProjetInput = {
    where: TacheWhereUniqueInput
    update: XOR<TacheUpdateWithoutProjetInput, TacheUncheckedUpdateWithoutProjetInput>
    create: XOR<TacheCreateWithoutProjetInput, TacheUncheckedCreateWithoutProjetInput>
  }

  export type TacheUpdateWithWhereUniqueWithoutProjetInput = {
    where: TacheWhereUniqueInput
    data: XOR<TacheUpdateWithoutProjetInput, TacheUncheckedUpdateWithoutProjetInput>
  }

  export type TacheUpdateManyWithWhereWithoutProjetInput = {
    where: TacheScalarWhereInput
    data: XOR<TacheUpdateManyMutationInput, TacheUncheckedUpdateManyWithoutProjetInput>
  }

  export type TacheScalarWhereInput = {
    AND?: TacheScalarWhereInput | TacheScalarWhereInput[]
    OR?: TacheScalarWhereInput[]
    NOT?: TacheScalarWhereInput | TacheScalarWhereInput[]
    id?: IntFilter<"Tache"> | number
    titre?: StringFilter<"Tache"> | string
    description?: StringNullableFilter<"Tache"> | string | null
    projetId?: IntFilter<"Tache"> | number
    deadline?: DateTimeNullableFilter<"Tache"> | Date | string | null
    statut?: EnumTacheStatutFilter<"Tache"> | $Enums.TacheStatut
    createdAt?: DateTimeFilter<"Tache"> | Date | string
    updatedAt?: DateTimeFilter<"Tache"> | Date | string
  }

  export type PartageDocumentUpsertWithWhereUniqueWithoutProjetInput = {
    where: PartageDocumentWhereUniqueInput
    update: XOR<PartageDocumentUpdateWithoutProjetInput, PartageDocumentUncheckedUpdateWithoutProjetInput>
    create: XOR<PartageDocumentCreateWithoutProjetInput, PartageDocumentUncheckedCreateWithoutProjetInput>
  }

  export type PartageDocumentUpdateWithWhereUniqueWithoutProjetInput = {
    where: PartageDocumentWhereUniqueInput
    data: XOR<PartageDocumentUpdateWithoutProjetInput, PartageDocumentUncheckedUpdateWithoutProjetInput>
  }

  export type PartageDocumentUpdateManyWithWhereWithoutProjetInput = {
    where: PartageDocumentScalarWhereInput
    data: XOR<PartageDocumentUpdateManyMutationInput, PartageDocumentUncheckedUpdateManyWithoutProjetInput>
  }

  export type ProjetCreateWithoutTachesInput = {
    nom: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    departement: DepartementCreateNestedOneWithoutProjetsInput
    membres?: MembreProjetCreateNestedManyWithoutProjetInput
    partages?: PartageDocumentCreateNestedManyWithoutProjetInput
  }

  export type ProjetUncheckedCreateWithoutTachesInput = {
    id?: number
    nom: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    departementId: number
    membres?: MembreProjetUncheckedCreateNestedManyWithoutProjetInput
    partages?: PartageDocumentUncheckedCreateNestedManyWithoutProjetInput
  }

  export type ProjetCreateOrConnectWithoutTachesInput = {
    where: ProjetWhereUniqueInput
    create: XOR<ProjetCreateWithoutTachesInput, ProjetUncheckedCreateWithoutTachesInput>
  }

  export type TacheMembreCreateWithoutTacheInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    utilisateur: UtilisateurCreateNestedOneWithoutTachesInput
  }

  export type TacheMembreUncheckedCreateWithoutTacheInput = {
    utilisateurId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TacheMembreCreateOrConnectWithoutTacheInput = {
    where: TacheMembreWhereUniqueInput
    create: XOR<TacheMembreCreateWithoutTacheInput, TacheMembreUncheckedCreateWithoutTacheInput>
  }

  export type TacheMembreCreateManyTacheInputEnvelope = {
    data: TacheMembreCreateManyTacheInput | TacheMembreCreateManyTacheInput[]
  }

  export type ProjetUpsertWithoutTachesInput = {
    update: XOR<ProjetUpdateWithoutTachesInput, ProjetUncheckedUpdateWithoutTachesInput>
    create: XOR<ProjetCreateWithoutTachesInput, ProjetUncheckedCreateWithoutTachesInput>
    where?: ProjetWhereInput
  }

  export type ProjetUpdateToOneWithWhereWithoutTachesInput = {
    where?: ProjetWhereInput
    data: XOR<ProjetUpdateWithoutTachesInput, ProjetUncheckedUpdateWithoutTachesInput>
  }

  export type ProjetUpdateWithoutTachesInput = {
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departement?: DepartementUpdateOneRequiredWithoutProjetsNestedInput
    membres?: MembreProjetUpdateManyWithoutProjetNestedInput
    partages?: PartageDocumentUpdateManyWithoutProjetNestedInput
  }

  export type ProjetUncheckedUpdateWithoutTachesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departementId?: IntFieldUpdateOperationsInput | number
    membres?: MembreProjetUncheckedUpdateManyWithoutProjetNestedInput
    partages?: PartageDocumentUncheckedUpdateManyWithoutProjetNestedInput
  }

  export type TacheMembreUpsertWithWhereUniqueWithoutTacheInput = {
    where: TacheMembreWhereUniqueInput
    update: XOR<TacheMembreUpdateWithoutTacheInput, TacheMembreUncheckedUpdateWithoutTacheInput>
    create: XOR<TacheMembreCreateWithoutTacheInput, TacheMembreUncheckedCreateWithoutTacheInput>
  }

  export type TacheMembreUpdateWithWhereUniqueWithoutTacheInput = {
    where: TacheMembreWhereUniqueInput
    data: XOR<TacheMembreUpdateWithoutTacheInput, TacheMembreUncheckedUpdateWithoutTacheInput>
  }

  export type TacheMembreUpdateManyWithWhereWithoutTacheInput = {
    where: TacheMembreScalarWhereInput
    data: XOR<TacheMembreUpdateManyMutationInput, TacheMembreUncheckedUpdateManyWithoutTacheInput>
  }

  export type TacheCreateWithoutTacheMembresInput = {
    titre: string
    description?: string | null
    deadline?: Date | string | null
    statut: $Enums.TacheStatut
    createdAt?: Date | string
    updatedAt?: Date | string
    projet: ProjetCreateNestedOneWithoutTachesInput
  }

  export type TacheUncheckedCreateWithoutTacheMembresInput = {
    id?: number
    titre: string
    description?: string | null
    projetId: number
    deadline?: Date | string | null
    statut: $Enums.TacheStatut
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TacheCreateOrConnectWithoutTacheMembresInput = {
    where: TacheWhereUniqueInput
    create: XOR<TacheCreateWithoutTacheMembresInput, TacheUncheckedCreateWithoutTacheMembresInput>
  }

  export type UtilisateurCreateWithoutTachesInput = {
    nom: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    departement?: DepartementCreateNestedOneWithoutUtilisateursInput
    projets?: MembreProjetCreateNestedManyWithoutUtilisateurInput
    partages?: PartageDocumentCreateNestedManyWithoutUtilisateurInput
    partagesEnTantQuePartageur?: PartageDocumentCreateNestedManyWithoutPartageurInput
    notifications?: NotificationCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateWithoutTachesInput = {
    id?: number
    nom: string
    email: string
    password: string
    role?: $Enums.Role
    departementId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projets?: MembreProjetUncheckedCreateNestedManyWithoutUtilisateurInput
    partages?: PartageDocumentUncheckedCreateNestedManyWithoutUtilisateurInput
    partagesEnTantQuePartageur?: PartageDocumentUncheckedCreateNestedManyWithoutPartageurInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurCreateOrConnectWithoutTachesInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutTachesInput, UtilisateurUncheckedCreateWithoutTachesInput>
  }

  export type TacheUpsertWithoutTacheMembresInput = {
    update: XOR<TacheUpdateWithoutTacheMembresInput, TacheUncheckedUpdateWithoutTacheMembresInput>
    create: XOR<TacheCreateWithoutTacheMembresInput, TacheUncheckedCreateWithoutTacheMembresInput>
    where?: TacheWhereInput
  }

  export type TacheUpdateToOneWithWhereWithoutTacheMembresInput = {
    where?: TacheWhereInput
    data: XOR<TacheUpdateWithoutTacheMembresInput, TacheUncheckedUpdateWithoutTacheMembresInput>
  }

  export type TacheUpdateWithoutTacheMembresInput = {
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumTacheStatutFieldUpdateOperationsInput | $Enums.TacheStatut
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projet?: ProjetUpdateOneRequiredWithoutTachesNestedInput
  }

  export type TacheUncheckedUpdateWithoutTacheMembresInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    projetId?: IntFieldUpdateOperationsInput | number
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumTacheStatutFieldUpdateOperationsInput | $Enums.TacheStatut
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UtilisateurUpsertWithoutTachesInput = {
    update: XOR<UtilisateurUpdateWithoutTachesInput, UtilisateurUncheckedUpdateWithoutTachesInput>
    create: XOR<UtilisateurCreateWithoutTachesInput, UtilisateurUncheckedCreateWithoutTachesInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutTachesInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutTachesInput, UtilisateurUncheckedUpdateWithoutTachesInput>
  }

  export type UtilisateurUpdateWithoutTachesInput = {
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departement?: DepartementUpdateOneWithoutUtilisateursNestedInput
    projets?: MembreProjetUpdateManyWithoutUtilisateurNestedInput
    partages?: PartageDocumentUpdateManyWithoutUtilisateurNestedInput
    partagesEnTantQuePartageur?: PartageDocumentUpdateManyWithoutPartageurNestedInput
    notifications?: NotificationUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutTachesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    departementId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projets?: MembreProjetUncheckedUpdateManyWithoutUtilisateurNestedInput
    partages?: PartageDocumentUncheckedUpdateManyWithoutUtilisateurNestedInput
    partagesEnTantQuePartageur?: PartageDocumentUncheckedUpdateManyWithoutPartageurNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurCreateWithoutProjetsInput = {
    nom: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    departement?: DepartementCreateNestedOneWithoutUtilisateursInput
    taches?: TacheMembreCreateNestedManyWithoutUtilisateurInput
    partages?: PartageDocumentCreateNestedManyWithoutUtilisateurInput
    partagesEnTantQuePartageur?: PartageDocumentCreateNestedManyWithoutPartageurInput
    notifications?: NotificationCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateWithoutProjetsInput = {
    id?: number
    nom: string
    email: string
    password: string
    role?: $Enums.Role
    departementId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    taches?: TacheMembreUncheckedCreateNestedManyWithoutUtilisateurInput
    partages?: PartageDocumentUncheckedCreateNestedManyWithoutUtilisateurInput
    partagesEnTantQuePartageur?: PartageDocumentUncheckedCreateNestedManyWithoutPartageurInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurCreateOrConnectWithoutProjetsInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutProjetsInput, UtilisateurUncheckedCreateWithoutProjetsInput>
  }

  export type ProjetCreateWithoutMembresInput = {
    nom: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    departement: DepartementCreateNestedOneWithoutProjetsInput
    taches?: TacheCreateNestedManyWithoutProjetInput
    partages?: PartageDocumentCreateNestedManyWithoutProjetInput
  }

  export type ProjetUncheckedCreateWithoutMembresInput = {
    id?: number
    nom: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    departementId: number
    taches?: TacheUncheckedCreateNestedManyWithoutProjetInput
    partages?: PartageDocumentUncheckedCreateNestedManyWithoutProjetInput
  }

  export type ProjetCreateOrConnectWithoutMembresInput = {
    where: ProjetWhereUniqueInput
    create: XOR<ProjetCreateWithoutMembresInput, ProjetUncheckedCreateWithoutMembresInput>
  }

  export type UtilisateurUpsertWithoutProjetsInput = {
    update: XOR<UtilisateurUpdateWithoutProjetsInput, UtilisateurUncheckedUpdateWithoutProjetsInput>
    create: XOR<UtilisateurCreateWithoutProjetsInput, UtilisateurUncheckedCreateWithoutProjetsInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutProjetsInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutProjetsInput, UtilisateurUncheckedUpdateWithoutProjetsInput>
  }

  export type UtilisateurUpdateWithoutProjetsInput = {
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departement?: DepartementUpdateOneWithoutUtilisateursNestedInput
    taches?: TacheMembreUpdateManyWithoutUtilisateurNestedInput
    partages?: PartageDocumentUpdateManyWithoutUtilisateurNestedInput
    partagesEnTantQuePartageur?: PartageDocumentUpdateManyWithoutPartageurNestedInput
    notifications?: NotificationUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutProjetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    departementId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taches?: TacheMembreUncheckedUpdateManyWithoutUtilisateurNestedInput
    partages?: PartageDocumentUncheckedUpdateManyWithoutUtilisateurNestedInput
    partagesEnTantQuePartageur?: PartageDocumentUncheckedUpdateManyWithoutPartageurNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type ProjetUpsertWithoutMembresInput = {
    update: XOR<ProjetUpdateWithoutMembresInput, ProjetUncheckedUpdateWithoutMembresInput>
    create: XOR<ProjetCreateWithoutMembresInput, ProjetUncheckedCreateWithoutMembresInput>
    where?: ProjetWhereInput
  }

  export type ProjetUpdateToOneWithWhereWithoutMembresInput = {
    where?: ProjetWhereInput
    data: XOR<ProjetUpdateWithoutMembresInput, ProjetUncheckedUpdateWithoutMembresInput>
  }

  export type ProjetUpdateWithoutMembresInput = {
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departement?: DepartementUpdateOneRequiredWithoutProjetsNestedInput
    taches?: TacheUpdateManyWithoutProjetNestedInput
    partages?: PartageDocumentUpdateManyWithoutProjetNestedInput
  }

  export type ProjetUncheckedUpdateWithoutMembresInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departementId?: IntFieldUpdateOperationsInput | number
    taches?: TacheUncheckedUpdateManyWithoutProjetNestedInput
    partages?: PartageDocumentUncheckedUpdateManyWithoutProjetNestedInput
  }

  export type DocumentCreateWithoutPartagesInput = {
    titre: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUncheckedCreateWithoutPartagesInput = {
    id?: number
    titre: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type DocumentCreateOrConnectWithoutPartagesInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutPartagesInput, DocumentUncheckedCreateWithoutPartagesInput>
  }

  export type UtilisateurCreateWithoutPartagesInput = {
    nom: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    departement?: DepartementCreateNestedOneWithoutUtilisateursInput
    projets?: MembreProjetCreateNestedManyWithoutUtilisateurInput
    taches?: TacheMembreCreateNestedManyWithoutUtilisateurInput
    partagesEnTantQuePartageur?: PartageDocumentCreateNestedManyWithoutPartageurInput
    notifications?: NotificationCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateWithoutPartagesInput = {
    id?: number
    nom: string
    email: string
    password: string
    role?: $Enums.Role
    departementId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projets?: MembreProjetUncheckedCreateNestedManyWithoutUtilisateurInput
    taches?: TacheMembreUncheckedCreateNestedManyWithoutUtilisateurInput
    partagesEnTantQuePartageur?: PartageDocumentUncheckedCreateNestedManyWithoutPartageurInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurCreateOrConnectWithoutPartagesInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutPartagesInput, UtilisateurUncheckedCreateWithoutPartagesInput>
  }

  export type DepartementCreateWithoutPartagesInput = {
    nom: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projets?: ProjetCreateNestedManyWithoutDepartementInput
    utilisateurs?: UtilisateurCreateNestedManyWithoutDepartementInput
  }

  export type DepartementUncheckedCreateWithoutPartagesInput = {
    id?: number
    nom: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projets?: ProjetUncheckedCreateNestedManyWithoutDepartementInput
    utilisateurs?: UtilisateurUncheckedCreateNestedManyWithoutDepartementInput
  }

  export type DepartementCreateOrConnectWithoutPartagesInput = {
    where: DepartementWhereUniqueInput
    create: XOR<DepartementCreateWithoutPartagesInput, DepartementUncheckedCreateWithoutPartagesInput>
  }

  export type ProjetCreateWithoutPartagesInput = {
    nom: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    departement: DepartementCreateNestedOneWithoutProjetsInput
    membres?: MembreProjetCreateNestedManyWithoutProjetInput
    taches?: TacheCreateNestedManyWithoutProjetInput
  }

  export type ProjetUncheckedCreateWithoutPartagesInput = {
    id?: number
    nom: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    departementId: number
    membres?: MembreProjetUncheckedCreateNestedManyWithoutProjetInput
    taches?: TacheUncheckedCreateNestedManyWithoutProjetInput
  }

  export type ProjetCreateOrConnectWithoutPartagesInput = {
    where: ProjetWhereUniqueInput
    create: XOR<ProjetCreateWithoutPartagesInput, ProjetUncheckedCreateWithoutPartagesInput>
  }

  export type UtilisateurCreateWithoutPartagesEnTantQuePartageurInput = {
    nom: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    departement?: DepartementCreateNestedOneWithoutUtilisateursInput
    projets?: MembreProjetCreateNestedManyWithoutUtilisateurInput
    taches?: TacheMembreCreateNestedManyWithoutUtilisateurInput
    partages?: PartageDocumentCreateNestedManyWithoutUtilisateurInput
    notifications?: NotificationCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateWithoutPartagesEnTantQuePartageurInput = {
    id?: number
    nom: string
    email: string
    password: string
    role?: $Enums.Role
    departementId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projets?: MembreProjetUncheckedCreateNestedManyWithoutUtilisateurInput
    taches?: TacheMembreUncheckedCreateNestedManyWithoutUtilisateurInput
    partages?: PartageDocumentUncheckedCreateNestedManyWithoutUtilisateurInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurCreateOrConnectWithoutPartagesEnTantQuePartageurInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutPartagesEnTantQuePartageurInput, UtilisateurUncheckedCreateWithoutPartagesEnTantQuePartageurInput>
  }

  export type DocumentUpsertWithoutPartagesInput = {
    update: XOR<DocumentUpdateWithoutPartagesInput, DocumentUncheckedUpdateWithoutPartagesInput>
    create: XOR<DocumentCreateWithoutPartagesInput, DocumentUncheckedCreateWithoutPartagesInput>
    where?: DocumentWhereInput
  }

  export type DocumentUpdateToOneWithWhereWithoutPartagesInput = {
    where?: DocumentWhereInput
    data: XOR<DocumentUpdateWithoutPartagesInput, DocumentUncheckedUpdateWithoutPartagesInput>
  }

  export type DocumentUpdateWithoutPartagesInput = {
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateWithoutPartagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type UtilisateurUpsertWithoutPartagesInput = {
    update: XOR<UtilisateurUpdateWithoutPartagesInput, UtilisateurUncheckedUpdateWithoutPartagesInput>
    create: XOR<UtilisateurCreateWithoutPartagesInput, UtilisateurUncheckedCreateWithoutPartagesInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutPartagesInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutPartagesInput, UtilisateurUncheckedUpdateWithoutPartagesInput>
  }

  export type UtilisateurUpdateWithoutPartagesInput = {
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departement?: DepartementUpdateOneWithoutUtilisateursNestedInput
    projets?: MembreProjetUpdateManyWithoutUtilisateurNestedInput
    taches?: TacheMembreUpdateManyWithoutUtilisateurNestedInput
    partagesEnTantQuePartageur?: PartageDocumentUpdateManyWithoutPartageurNestedInput
    notifications?: NotificationUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutPartagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    departementId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projets?: MembreProjetUncheckedUpdateManyWithoutUtilisateurNestedInput
    taches?: TacheMembreUncheckedUpdateManyWithoutUtilisateurNestedInput
    partagesEnTantQuePartageur?: PartageDocumentUncheckedUpdateManyWithoutPartageurNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type DepartementUpsertWithoutPartagesInput = {
    update: XOR<DepartementUpdateWithoutPartagesInput, DepartementUncheckedUpdateWithoutPartagesInput>
    create: XOR<DepartementCreateWithoutPartagesInput, DepartementUncheckedCreateWithoutPartagesInput>
    where?: DepartementWhereInput
  }

  export type DepartementUpdateToOneWithWhereWithoutPartagesInput = {
    where?: DepartementWhereInput
    data: XOR<DepartementUpdateWithoutPartagesInput, DepartementUncheckedUpdateWithoutPartagesInput>
  }

  export type DepartementUpdateWithoutPartagesInput = {
    nom?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projets?: ProjetUpdateManyWithoutDepartementNestedInput
    utilisateurs?: UtilisateurUpdateManyWithoutDepartementNestedInput
  }

  export type DepartementUncheckedUpdateWithoutPartagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projets?: ProjetUncheckedUpdateManyWithoutDepartementNestedInput
    utilisateurs?: UtilisateurUncheckedUpdateManyWithoutDepartementNestedInput
  }

  export type ProjetUpsertWithoutPartagesInput = {
    update: XOR<ProjetUpdateWithoutPartagesInput, ProjetUncheckedUpdateWithoutPartagesInput>
    create: XOR<ProjetCreateWithoutPartagesInput, ProjetUncheckedCreateWithoutPartagesInput>
    where?: ProjetWhereInput
  }

  export type ProjetUpdateToOneWithWhereWithoutPartagesInput = {
    where?: ProjetWhereInput
    data: XOR<ProjetUpdateWithoutPartagesInput, ProjetUncheckedUpdateWithoutPartagesInput>
  }

  export type ProjetUpdateWithoutPartagesInput = {
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departement?: DepartementUpdateOneRequiredWithoutProjetsNestedInput
    membres?: MembreProjetUpdateManyWithoutProjetNestedInput
    taches?: TacheUpdateManyWithoutProjetNestedInput
  }

  export type ProjetUncheckedUpdateWithoutPartagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departementId?: IntFieldUpdateOperationsInput | number
    membres?: MembreProjetUncheckedUpdateManyWithoutProjetNestedInput
    taches?: TacheUncheckedUpdateManyWithoutProjetNestedInput
  }

  export type UtilisateurUpsertWithoutPartagesEnTantQuePartageurInput = {
    update: XOR<UtilisateurUpdateWithoutPartagesEnTantQuePartageurInput, UtilisateurUncheckedUpdateWithoutPartagesEnTantQuePartageurInput>
    create: XOR<UtilisateurCreateWithoutPartagesEnTantQuePartageurInput, UtilisateurUncheckedCreateWithoutPartagesEnTantQuePartageurInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutPartagesEnTantQuePartageurInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutPartagesEnTantQuePartageurInput, UtilisateurUncheckedUpdateWithoutPartagesEnTantQuePartageurInput>
  }

  export type UtilisateurUpdateWithoutPartagesEnTantQuePartageurInput = {
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departement?: DepartementUpdateOneWithoutUtilisateursNestedInput
    projets?: MembreProjetUpdateManyWithoutUtilisateurNestedInput
    taches?: TacheMembreUpdateManyWithoutUtilisateurNestedInput
    partages?: PartageDocumentUpdateManyWithoutUtilisateurNestedInput
    notifications?: NotificationUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutPartagesEnTantQuePartageurInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    departementId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projets?: MembreProjetUncheckedUpdateManyWithoutUtilisateurNestedInput
    taches?: TacheMembreUncheckedUpdateManyWithoutUtilisateurNestedInput
    partages?: PartageDocumentUncheckedUpdateManyWithoutUtilisateurNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type DocumentCreateWithoutNotificationsInput = {
    titre: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    partages?: PartageDocumentCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUncheckedCreateWithoutNotificationsInput = {
    id?: number
    titre: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    partages?: PartageDocumentUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type DocumentCreateOrConnectWithoutNotificationsInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutNotificationsInput, DocumentUncheckedCreateWithoutNotificationsInput>
  }

  export type UtilisateurCreateWithoutNotificationsInput = {
    nom: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    departement?: DepartementCreateNestedOneWithoutUtilisateursInput
    projets?: MembreProjetCreateNestedManyWithoutUtilisateurInput
    taches?: TacheMembreCreateNestedManyWithoutUtilisateurInput
    partages?: PartageDocumentCreateNestedManyWithoutUtilisateurInput
    partagesEnTantQuePartageur?: PartageDocumentCreateNestedManyWithoutPartageurInput
  }

  export type UtilisateurUncheckedCreateWithoutNotificationsInput = {
    id?: number
    nom: string
    email: string
    password: string
    role?: $Enums.Role
    departementId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projets?: MembreProjetUncheckedCreateNestedManyWithoutUtilisateurInput
    taches?: TacheMembreUncheckedCreateNestedManyWithoutUtilisateurInput
    partages?: PartageDocumentUncheckedCreateNestedManyWithoutUtilisateurInput
    partagesEnTantQuePartageur?: PartageDocumentUncheckedCreateNestedManyWithoutPartageurInput
  }

  export type UtilisateurCreateOrConnectWithoutNotificationsInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutNotificationsInput, UtilisateurUncheckedCreateWithoutNotificationsInput>
  }

  export type DocumentUpsertWithoutNotificationsInput = {
    update: XOR<DocumentUpdateWithoutNotificationsInput, DocumentUncheckedUpdateWithoutNotificationsInput>
    create: XOR<DocumentCreateWithoutNotificationsInput, DocumentUncheckedCreateWithoutNotificationsInput>
    where?: DocumentWhereInput
  }

  export type DocumentUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: DocumentWhereInput
    data: XOR<DocumentUpdateWithoutNotificationsInput, DocumentUncheckedUpdateWithoutNotificationsInput>
  }

  export type DocumentUpdateWithoutNotificationsInput = {
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partages?: PartageDocumentUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partages?: PartageDocumentUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type UtilisateurUpsertWithoutNotificationsInput = {
    update: XOR<UtilisateurUpdateWithoutNotificationsInput, UtilisateurUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UtilisateurCreateWithoutNotificationsInput, UtilisateurUncheckedCreateWithoutNotificationsInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutNotificationsInput, UtilisateurUncheckedUpdateWithoutNotificationsInput>
  }

  export type UtilisateurUpdateWithoutNotificationsInput = {
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departement?: DepartementUpdateOneWithoutUtilisateursNestedInput
    projets?: MembreProjetUpdateManyWithoutUtilisateurNestedInput
    taches?: TacheMembreUpdateManyWithoutUtilisateurNestedInput
    partages?: PartageDocumentUpdateManyWithoutUtilisateurNestedInput
    partagesEnTantQuePartageur?: PartageDocumentUpdateManyWithoutPartageurNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    departementId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projets?: MembreProjetUncheckedUpdateManyWithoutUtilisateurNestedInput
    taches?: TacheMembreUncheckedUpdateManyWithoutUtilisateurNestedInput
    partages?: PartageDocumentUncheckedUpdateManyWithoutUtilisateurNestedInput
    partagesEnTantQuePartageur?: PartageDocumentUncheckedUpdateManyWithoutPartageurNestedInput
  }

  export type ProjetCreateManyDepartementInput = {
    id?: number
    nom: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UtilisateurCreateManyDepartementInput = {
    id?: number
    nom: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartageDocumentCreateManyDepartementInput = {
    id?: number
    documentId: number
    utilisateurId?: number | null
    projetId?: number | null
    datePartage?: Date | string
    partageurId: number
    historique?: string | null
  }

  export type ProjetUpdateWithoutDepartementInput = {
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    membres?: MembreProjetUpdateManyWithoutProjetNestedInput
    taches?: TacheUpdateManyWithoutProjetNestedInput
    partages?: PartageDocumentUpdateManyWithoutProjetNestedInput
  }

  export type ProjetUncheckedUpdateWithoutDepartementInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    membres?: MembreProjetUncheckedUpdateManyWithoutProjetNestedInput
    taches?: TacheUncheckedUpdateManyWithoutProjetNestedInput
    partages?: PartageDocumentUncheckedUpdateManyWithoutProjetNestedInput
  }

  export type ProjetUncheckedUpdateManyWithoutDepartementInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UtilisateurUpdateWithoutDepartementInput = {
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projets?: MembreProjetUpdateManyWithoutUtilisateurNestedInput
    taches?: TacheMembreUpdateManyWithoutUtilisateurNestedInput
    partages?: PartageDocumentUpdateManyWithoutUtilisateurNestedInput
    partagesEnTantQuePartageur?: PartageDocumentUpdateManyWithoutPartageurNestedInput
    notifications?: NotificationUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutDepartementInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projets?: MembreProjetUncheckedUpdateManyWithoutUtilisateurNestedInput
    taches?: TacheMembreUncheckedUpdateManyWithoutUtilisateurNestedInput
    partages?: PartageDocumentUncheckedUpdateManyWithoutUtilisateurNestedInput
    partagesEnTantQuePartageur?: PartageDocumentUncheckedUpdateManyWithoutPartageurNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateManyWithoutDepartementInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartageDocumentUpdateWithoutDepartementInput = {
    datePartage?: DateTimeFieldUpdateOperationsInput | Date | string
    historique?: NullableStringFieldUpdateOperationsInput | string | null
    document?: DocumentUpdateOneRequiredWithoutPartagesNestedInput
    utilisateur?: UtilisateurUpdateOneWithoutPartagesNestedInput
    projet?: ProjetUpdateOneWithoutPartagesNestedInput
    partageur?: UtilisateurUpdateOneRequiredWithoutPartagesEnTantQuePartageurNestedInput
  }

  export type PartageDocumentUncheckedUpdateWithoutDepartementInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: IntFieldUpdateOperationsInput | number
    utilisateurId?: NullableIntFieldUpdateOperationsInput | number | null
    projetId?: NullableIntFieldUpdateOperationsInput | number | null
    datePartage?: DateTimeFieldUpdateOperationsInput | Date | string
    partageurId?: IntFieldUpdateOperationsInput | number
    historique?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PartageDocumentUncheckedUpdateManyWithoutDepartementInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: IntFieldUpdateOperationsInput | number
    utilisateurId?: NullableIntFieldUpdateOperationsInput | number | null
    projetId?: NullableIntFieldUpdateOperationsInput | number | null
    datePartage?: DateTimeFieldUpdateOperationsInput | Date | string
    partageurId?: IntFieldUpdateOperationsInput | number
    historique?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MembreProjetCreateManyUtilisateurInput = {
    projetId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TacheMembreCreateManyUtilisateurInput = {
    tacheId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartageDocumentCreateManyUtilisateurInput = {
    id?: number
    documentId: number
    departementId?: number | null
    projetId?: number | null
    datePartage?: Date | string
    partageurId: number
    historique?: string | null
  }

  export type PartageDocumentCreateManyPartageurInput = {
    id?: number
    documentId: number
    utilisateurId?: number | null
    departementId?: number | null
    projetId?: number | null
    datePartage?: Date | string
    historique?: string | null
  }

  export type NotificationCreateManyUtilisateurInput = {
    id?: number
    message: string
    dateNotification?: Date | string
    documentId: number
    vu?: boolean
  }

  export type MembreProjetUpdateWithoutUtilisateurInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projet?: ProjetUpdateOneRequiredWithoutMembresNestedInput
  }

  export type MembreProjetUncheckedUpdateWithoutUtilisateurInput = {
    projetId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembreProjetUncheckedUpdateManyWithoutUtilisateurInput = {
    projetId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TacheMembreUpdateWithoutUtilisateurInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tache?: TacheUpdateOneRequiredWithoutTacheMembresNestedInput
  }

  export type TacheMembreUncheckedUpdateWithoutUtilisateurInput = {
    tacheId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TacheMembreUncheckedUpdateManyWithoutUtilisateurInput = {
    tacheId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartageDocumentUpdateWithoutUtilisateurInput = {
    datePartage?: DateTimeFieldUpdateOperationsInput | Date | string
    historique?: NullableStringFieldUpdateOperationsInput | string | null
    document?: DocumentUpdateOneRequiredWithoutPartagesNestedInput
    departement?: DepartementUpdateOneWithoutPartagesNestedInput
    projet?: ProjetUpdateOneWithoutPartagesNestedInput
    partageur?: UtilisateurUpdateOneRequiredWithoutPartagesEnTantQuePartageurNestedInput
  }

  export type PartageDocumentUncheckedUpdateWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: IntFieldUpdateOperationsInput | number
    departementId?: NullableIntFieldUpdateOperationsInput | number | null
    projetId?: NullableIntFieldUpdateOperationsInput | number | null
    datePartage?: DateTimeFieldUpdateOperationsInput | Date | string
    partageurId?: IntFieldUpdateOperationsInput | number
    historique?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PartageDocumentUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: IntFieldUpdateOperationsInput | number
    departementId?: NullableIntFieldUpdateOperationsInput | number | null
    projetId?: NullableIntFieldUpdateOperationsInput | number | null
    datePartage?: DateTimeFieldUpdateOperationsInput | Date | string
    partageurId?: IntFieldUpdateOperationsInput | number
    historique?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PartageDocumentUpdateWithoutPartageurInput = {
    datePartage?: DateTimeFieldUpdateOperationsInput | Date | string
    historique?: NullableStringFieldUpdateOperationsInput | string | null
    document?: DocumentUpdateOneRequiredWithoutPartagesNestedInput
    utilisateur?: UtilisateurUpdateOneWithoutPartagesNestedInput
    departement?: DepartementUpdateOneWithoutPartagesNestedInput
    projet?: ProjetUpdateOneWithoutPartagesNestedInput
  }

  export type PartageDocumentUncheckedUpdateWithoutPartageurInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: IntFieldUpdateOperationsInput | number
    utilisateurId?: NullableIntFieldUpdateOperationsInput | number | null
    departementId?: NullableIntFieldUpdateOperationsInput | number | null
    projetId?: NullableIntFieldUpdateOperationsInput | number | null
    datePartage?: DateTimeFieldUpdateOperationsInput | Date | string
    historique?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PartageDocumentUncheckedUpdateManyWithoutPartageurInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: IntFieldUpdateOperationsInput | number
    utilisateurId?: NullableIntFieldUpdateOperationsInput | number | null
    departementId?: NullableIntFieldUpdateOperationsInput | number | null
    projetId?: NullableIntFieldUpdateOperationsInput | number | null
    datePartage?: DateTimeFieldUpdateOperationsInput | Date | string
    historique?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationUpdateWithoutUtilisateurInput = {
    message?: StringFieldUpdateOperationsInput | string
    dateNotification?: DateTimeFieldUpdateOperationsInput | Date | string
    vu?: BoolFieldUpdateOperationsInput | boolean
    document?: DocumentUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    dateNotification?: DateTimeFieldUpdateOperationsInput | Date | string
    documentId?: IntFieldUpdateOperationsInput | number
    vu?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    dateNotification?: DateTimeFieldUpdateOperationsInput | Date | string
    documentId?: IntFieldUpdateOperationsInput | number
    vu?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PartageDocumentCreateManyDocumentInput = {
    id?: number
    utilisateurId?: number | null
    departementId?: number | null
    projetId?: number | null
    datePartage?: Date | string
    partageurId: number
    historique?: string | null
  }

  export type NotificationCreateManyDocumentInput = {
    id?: number
    utilisateurId: number
    message: string
    dateNotification?: Date | string
    vu?: boolean
  }

  export type PartageDocumentUpdateWithoutDocumentInput = {
    datePartage?: DateTimeFieldUpdateOperationsInput | Date | string
    historique?: NullableStringFieldUpdateOperationsInput | string | null
    utilisateur?: UtilisateurUpdateOneWithoutPartagesNestedInput
    departement?: DepartementUpdateOneWithoutPartagesNestedInput
    projet?: ProjetUpdateOneWithoutPartagesNestedInput
    partageur?: UtilisateurUpdateOneRequiredWithoutPartagesEnTantQuePartageurNestedInput
  }

  export type PartageDocumentUncheckedUpdateWithoutDocumentInput = {
    id?: IntFieldUpdateOperationsInput | number
    utilisateurId?: NullableIntFieldUpdateOperationsInput | number | null
    departementId?: NullableIntFieldUpdateOperationsInput | number | null
    projetId?: NullableIntFieldUpdateOperationsInput | number | null
    datePartage?: DateTimeFieldUpdateOperationsInput | Date | string
    partageurId?: IntFieldUpdateOperationsInput | number
    historique?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PartageDocumentUncheckedUpdateManyWithoutDocumentInput = {
    id?: IntFieldUpdateOperationsInput | number
    utilisateurId?: NullableIntFieldUpdateOperationsInput | number | null
    departementId?: NullableIntFieldUpdateOperationsInput | number | null
    projetId?: NullableIntFieldUpdateOperationsInput | number | null
    datePartage?: DateTimeFieldUpdateOperationsInput | Date | string
    partageurId?: IntFieldUpdateOperationsInput | number
    historique?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationUpdateWithoutDocumentInput = {
    message?: StringFieldUpdateOperationsInput | string
    dateNotification?: DateTimeFieldUpdateOperationsInput | Date | string
    vu?: BoolFieldUpdateOperationsInput | boolean
    utilisateur?: UtilisateurUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutDocumentInput = {
    id?: IntFieldUpdateOperationsInput | number
    utilisateurId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    dateNotification?: DateTimeFieldUpdateOperationsInput | Date | string
    vu?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationUncheckedUpdateManyWithoutDocumentInput = {
    id?: IntFieldUpdateOperationsInput | number
    utilisateurId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    dateNotification?: DateTimeFieldUpdateOperationsInput | Date | string
    vu?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MembreProjetCreateManyProjetInput = {
    utilisateurId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TacheCreateManyProjetInput = {
    id?: number
    titre: string
    description?: string | null
    deadline?: Date | string | null
    statut: $Enums.TacheStatut
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartageDocumentCreateManyProjetInput = {
    id?: number
    documentId: number
    utilisateurId?: number | null
    departementId?: number | null
    datePartage?: Date | string
    partageurId: number
    historique?: string | null
  }

  export type MembreProjetUpdateWithoutProjetInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutProjetsNestedInput
  }

  export type MembreProjetUncheckedUpdateWithoutProjetInput = {
    utilisateurId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembreProjetUncheckedUpdateManyWithoutProjetInput = {
    utilisateurId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TacheUpdateWithoutProjetInput = {
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumTacheStatutFieldUpdateOperationsInput | $Enums.TacheStatut
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tacheMembres?: TacheMembreUpdateManyWithoutTacheNestedInput
  }

  export type TacheUncheckedUpdateWithoutProjetInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumTacheStatutFieldUpdateOperationsInput | $Enums.TacheStatut
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tacheMembres?: TacheMembreUncheckedUpdateManyWithoutTacheNestedInput
  }

  export type TacheUncheckedUpdateManyWithoutProjetInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumTacheStatutFieldUpdateOperationsInput | $Enums.TacheStatut
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartageDocumentUpdateWithoutProjetInput = {
    datePartage?: DateTimeFieldUpdateOperationsInput | Date | string
    historique?: NullableStringFieldUpdateOperationsInput | string | null
    document?: DocumentUpdateOneRequiredWithoutPartagesNestedInput
    utilisateur?: UtilisateurUpdateOneWithoutPartagesNestedInput
    departement?: DepartementUpdateOneWithoutPartagesNestedInput
    partageur?: UtilisateurUpdateOneRequiredWithoutPartagesEnTantQuePartageurNestedInput
  }

  export type PartageDocumentUncheckedUpdateWithoutProjetInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: IntFieldUpdateOperationsInput | number
    utilisateurId?: NullableIntFieldUpdateOperationsInput | number | null
    departementId?: NullableIntFieldUpdateOperationsInput | number | null
    datePartage?: DateTimeFieldUpdateOperationsInput | Date | string
    partageurId?: IntFieldUpdateOperationsInput | number
    historique?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PartageDocumentUncheckedUpdateManyWithoutProjetInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: IntFieldUpdateOperationsInput | number
    utilisateurId?: NullableIntFieldUpdateOperationsInput | number | null
    departementId?: NullableIntFieldUpdateOperationsInput | number | null
    datePartage?: DateTimeFieldUpdateOperationsInput | Date | string
    partageurId?: IntFieldUpdateOperationsInput | number
    historique?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TacheMembreCreateManyTacheInput = {
    utilisateurId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TacheMembreUpdateWithoutTacheInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutTachesNestedInput
  }

  export type TacheMembreUncheckedUpdateWithoutTacheInput = {
    utilisateurId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TacheMembreUncheckedUpdateManyWithoutTacheInput = {
    utilisateurId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}