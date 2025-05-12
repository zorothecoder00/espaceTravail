
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
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
 * Model TacheUtilisateur
 * 
 */
export type TacheUtilisateur = $Result.DefaultSelection<Prisma.$TacheUtilisateurPayload>
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
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.tacheUtilisateur`: Exposes CRUD operations for the **TacheUtilisateur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TacheUtilisateurs
    * const tacheUtilisateurs = await prisma.tacheUtilisateur.findMany()
    * ```
    */
  get tacheUtilisateur(): Prisma.TacheUtilisateurDelegate<ExtArgs, ClientOptions>;

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

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;
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
    User: 'User',
    Document: 'Document',
    Projet: 'Projet',
    Tache: 'Tache',
    TacheUtilisateur: 'TacheUtilisateur',
    MembreProjet: 'MembreProjet',
    PartageDocument: 'PartageDocument',
    Notification: 'Notification',
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken'
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
      modelProps: "departement" | "user" | "document" | "projet" | "tache" | "tacheUtilisateur" | "membreProjet" | "partageDocument" | "notification" | "account" | "session" | "verificationToken"
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
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
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
      TacheUtilisateur: {
        payload: Prisma.$TacheUtilisateurPayload<ExtArgs>
        fields: Prisma.TacheUtilisateurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TacheUtilisateurFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TacheUtilisateurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TacheUtilisateurFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TacheUtilisateurPayload>
          }
          findFirst: {
            args: Prisma.TacheUtilisateurFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TacheUtilisateurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TacheUtilisateurFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TacheUtilisateurPayload>
          }
          findMany: {
            args: Prisma.TacheUtilisateurFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TacheUtilisateurPayload>[]
          }
          create: {
            args: Prisma.TacheUtilisateurCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TacheUtilisateurPayload>
          }
          createMany: {
            args: Prisma.TacheUtilisateurCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TacheUtilisateurCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TacheUtilisateurPayload>[]
          }
          delete: {
            args: Prisma.TacheUtilisateurDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TacheUtilisateurPayload>
          }
          update: {
            args: Prisma.TacheUtilisateurUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TacheUtilisateurPayload>
          }
          deleteMany: {
            args: Prisma.TacheUtilisateurDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TacheUtilisateurUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TacheUtilisateurUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TacheUtilisateurPayload>[]
          }
          upsert: {
            args: Prisma.TacheUtilisateurUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TacheUtilisateurPayload>
          }
          aggregate: {
            args: Prisma.TacheUtilisateurAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTacheUtilisateur>
          }
          groupBy: {
            args: Prisma.TacheUtilisateurGroupByArgs<ExtArgs>
            result: $Utils.Optional<TacheUtilisateurGroupByOutputType>[]
          }
          count: {
            args: Prisma.TacheUtilisateurCountArgs<ExtArgs>
            result: $Utils.Optional<TacheUtilisateurCountAggregateOutputType> | number
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
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
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
    user?: UserOmit
    document?: DocumentOmit
    projet?: ProjetOmit
    tache?: TacheOmit
    tacheUtilisateur?: TacheUtilisateurOmit
    membreProjet?: MembreProjetOmit
    partageDocument?: PartageDocumentOmit
    notification?: NotificationOmit
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
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
    users: number
    partages: number
  }

  export type DepartementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projets?: boolean | DepartementCountOutputTypeCountProjetsArgs
    users?: boolean | DepartementCountOutputTypeCountUsersArgs
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
  export type DepartementCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * DepartementCountOutputType without action
   */
  export type DepartementCountOutputTypeCountPartagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartageDocumentWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    projets: number
    taches: number
    partages: number
    partagesEnTantQuePartageur: number
    notifications: number
    accounts: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projets?: boolean | UserCountOutputTypeCountProjetsArgs
    taches?: boolean | UserCountOutputTypeCountTachesArgs
    partages?: boolean | UserCountOutputTypeCountPartagesArgs
    partagesEnTantQuePartageur?: boolean | UserCountOutputTypeCountPartagesEnTantQuePartageurArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembreProjetWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTachesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TacheUtilisateurWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPartagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartageDocumentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPartagesEnTantQuePartageurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartageDocumentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
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
    TacheUtilisateur: number
  }

  export type TacheCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TacheUtilisateur?: boolean | TacheCountOutputTypeCountTacheUtilisateurArgs
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
  export type TacheCountOutputTypeCountTacheUtilisateurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TacheUtilisateurWhereInput
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
    users?: boolean | Departement$usersArgs<ExtArgs>
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
    users?: boolean | Departement$usersArgs<ExtArgs>
    partages?: boolean | Departement$partagesArgs<ExtArgs>
    _count?: boolean | DepartementCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DepartementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DepartementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Departement"
    objects: {
      projets: Prisma.$ProjetPayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
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
    users<T extends Departement$usersArgs<ExtArgs> = {}>(args?: Subset<T, Departement$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Departement.users
   */
  export type Departement$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
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
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    departementId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    departementId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    nom: string | null
    prenom: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    departementId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    nom: string | null
    prenom: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    departementId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nom: number
    prenom: number
    email: number
    password: number
    role: number
    departementId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    departementId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    departementId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    password?: true
    role?: true
    departementId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    password?: true
    role?: true
    departementId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    password?: true
    role?: true
    departementId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    nom: string
    prenom: string
    email: string
    password: string
    role: $Enums.Role
    departementId: number | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    departementId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    departement?: boolean | User$departementArgs<ExtArgs>
    projets?: boolean | User$projetsArgs<ExtArgs>
    taches?: boolean | User$tachesArgs<ExtArgs>
    partages?: boolean | User$partagesArgs<ExtArgs>
    partagesEnTantQuePartageur?: boolean | User$partagesEnTantQuePartageurArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    departementId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    departement?: boolean | User$departementArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    departementId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    departement?: boolean | User$departementArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    departementId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "prenom" | "email" | "password" | "role" | "departementId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departement?: boolean | User$departementArgs<ExtArgs>
    projets?: boolean | User$projetsArgs<ExtArgs>
    taches?: boolean | User$tachesArgs<ExtArgs>
    partages?: boolean | User$partagesArgs<ExtArgs>
    partagesEnTantQuePartageur?: boolean | User$partagesEnTantQuePartageurArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departement?: boolean | User$departementArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departement?: boolean | User$departementArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      departement: Prisma.$DepartementPayload<ExtArgs> | null
      projets: Prisma.$MembreProjetPayload<ExtArgs>[]
      taches: Prisma.$TacheUtilisateurPayload<ExtArgs>[]
      partages: Prisma.$PartageDocumentPayload<ExtArgs>[]
      partagesEnTantQuePartageur: Prisma.$PartageDocumentPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string
      prenom: string
      email: string
      password: string
      role: $Enums.Role
      departementId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    departement<T extends User$departementArgs<ExtArgs> = {}>(args?: Subset<T, User$departementArgs<ExtArgs>>): Prisma__DepartementClient<$Result.GetResult<Prisma.$DepartementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    projets<T extends User$projetsArgs<ExtArgs> = {}>(args?: Subset<T, User$projetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembreProjetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    taches<T extends User$tachesArgs<ExtArgs> = {}>(args?: Subset<T, User$tachesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TacheUtilisateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    partages<T extends User$partagesArgs<ExtArgs> = {}>(args?: Subset<T, User$partagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartageDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    partagesEnTantQuePartageur<T extends User$partagesEnTantQuePartageurArgs<ExtArgs> = {}>(args?: Subset<T, User$partagesEnTantQuePartageurArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartageDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly nom: FieldRef<"User", 'String'>
    readonly prenom: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly departementId: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.departement
   */
  export type User$departementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.projets
   */
  export type User$projetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.taches
   */
  export type User$tachesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TacheUtilisateur
     */
    select?: TacheUtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TacheUtilisateur
     */
    omit?: TacheUtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TacheUtilisateurInclude<ExtArgs> | null
    where?: TacheUtilisateurWhereInput
    orderBy?: TacheUtilisateurOrderByWithRelationInput | TacheUtilisateurOrderByWithRelationInput[]
    cursor?: TacheUtilisateurWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TacheUtilisateurScalarFieldEnum | TacheUtilisateurScalarFieldEnum[]
  }

  /**
   * User.partages
   */
  export type User$partagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.partagesEnTantQuePartageur
   */
  export type User$partagesEnTantQuePartageurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
    TacheUtilisateur?: boolean | Tache$TacheUtilisateurArgs<ExtArgs>
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
    TacheUtilisateur?: boolean | Tache$TacheUtilisateurArgs<ExtArgs>
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
      TacheUtilisateur: Prisma.$TacheUtilisateurPayload<ExtArgs>[]
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
    TacheUtilisateur<T extends Tache$TacheUtilisateurArgs<ExtArgs> = {}>(args?: Subset<T, Tache$TacheUtilisateurArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TacheUtilisateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Tache.TacheUtilisateur
   */
  export type Tache$TacheUtilisateurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TacheUtilisateur
     */
    select?: TacheUtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TacheUtilisateur
     */
    omit?: TacheUtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TacheUtilisateurInclude<ExtArgs> | null
    where?: TacheUtilisateurWhereInput
    orderBy?: TacheUtilisateurOrderByWithRelationInput | TacheUtilisateurOrderByWithRelationInput[]
    cursor?: TacheUtilisateurWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TacheUtilisateurScalarFieldEnum | TacheUtilisateurScalarFieldEnum[]
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
   * Model TacheUtilisateur
   */

  export type AggregateTacheUtilisateur = {
    _count: TacheUtilisateurCountAggregateOutputType | null
    _avg: TacheUtilisateurAvgAggregateOutputType | null
    _sum: TacheUtilisateurSumAggregateOutputType | null
    _min: TacheUtilisateurMinAggregateOutputType | null
    _max: TacheUtilisateurMaxAggregateOutputType | null
  }

  export type TacheUtilisateurAvgAggregateOutputType = {
    tacheId: number | null
    userId: number | null
  }

  export type TacheUtilisateurSumAggregateOutputType = {
    tacheId: number | null
    userId: number | null
  }

  export type TacheUtilisateurMinAggregateOutputType = {
    tacheId: number | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TacheUtilisateurMaxAggregateOutputType = {
    tacheId: number | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TacheUtilisateurCountAggregateOutputType = {
    tacheId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TacheUtilisateurAvgAggregateInputType = {
    tacheId?: true
    userId?: true
  }

  export type TacheUtilisateurSumAggregateInputType = {
    tacheId?: true
    userId?: true
  }

  export type TacheUtilisateurMinAggregateInputType = {
    tacheId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TacheUtilisateurMaxAggregateInputType = {
    tacheId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TacheUtilisateurCountAggregateInputType = {
    tacheId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TacheUtilisateurAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TacheUtilisateur to aggregate.
     */
    where?: TacheUtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TacheUtilisateurs to fetch.
     */
    orderBy?: TacheUtilisateurOrderByWithRelationInput | TacheUtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TacheUtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TacheUtilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TacheUtilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TacheUtilisateurs
    **/
    _count?: true | TacheUtilisateurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TacheUtilisateurAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TacheUtilisateurSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TacheUtilisateurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TacheUtilisateurMaxAggregateInputType
  }

  export type GetTacheUtilisateurAggregateType<T extends TacheUtilisateurAggregateArgs> = {
        [P in keyof T & keyof AggregateTacheUtilisateur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTacheUtilisateur[P]>
      : GetScalarType<T[P], AggregateTacheUtilisateur[P]>
  }




  export type TacheUtilisateurGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TacheUtilisateurWhereInput
    orderBy?: TacheUtilisateurOrderByWithAggregationInput | TacheUtilisateurOrderByWithAggregationInput[]
    by: TacheUtilisateurScalarFieldEnum[] | TacheUtilisateurScalarFieldEnum
    having?: TacheUtilisateurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TacheUtilisateurCountAggregateInputType | true
    _avg?: TacheUtilisateurAvgAggregateInputType
    _sum?: TacheUtilisateurSumAggregateInputType
    _min?: TacheUtilisateurMinAggregateInputType
    _max?: TacheUtilisateurMaxAggregateInputType
  }

  export type TacheUtilisateurGroupByOutputType = {
    tacheId: number
    userId: number
    createdAt: Date
    updatedAt: Date
    _count: TacheUtilisateurCountAggregateOutputType | null
    _avg: TacheUtilisateurAvgAggregateOutputType | null
    _sum: TacheUtilisateurSumAggregateOutputType | null
    _min: TacheUtilisateurMinAggregateOutputType | null
    _max: TacheUtilisateurMaxAggregateOutputType | null
  }

  type GetTacheUtilisateurGroupByPayload<T extends TacheUtilisateurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TacheUtilisateurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TacheUtilisateurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TacheUtilisateurGroupByOutputType[P]>
            : GetScalarType<T[P], TacheUtilisateurGroupByOutputType[P]>
        }
      >
    >


  export type TacheUtilisateurSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tacheId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tache?: boolean | TacheDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tacheUtilisateur"]>

  export type TacheUtilisateurSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tacheId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tache?: boolean | TacheDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tacheUtilisateur"]>

  export type TacheUtilisateurSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tacheId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tache?: boolean | TacheDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tacheUtilisateur"]>

  export type TacheUtilisateurSelectScalar = {
    tacheId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TacheUtilisateurOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tacheId" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["tacheUtilisateur"]>
  export type TacheUtilisateurInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tache?: boolean | TacheDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TacheUtilisateurIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tache?: boolean | TacheDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TacheUtilisateurIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tache?: boolean | TacheDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TacheUtilisateurPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TacheUtilisateur"
    objects: {
      tache: Prisma.$TachePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      tacheId: number
      userId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tacheUtilisateur"]>
    composites: {}
  }

  type TacheUtilisateurGetPayload<S extends boolean | null | undefined | TacheUtilisateurDefaultArgs> = $Result.GetResult<Prisma.$TacheUtilisateurPayload, S>

  type TacheUtilisateurCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TacheUtilisateurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TacheUtilisateurCountAggregateInputType | true
    }

  export interface TacheUtilisateurDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TacheUtilisateur'], meta: { name: 'TacheUtilisateur' } }
    /**
     * Find zero or one TacheUtilisateur that matches the filter.
     * @param {TacheUtilisateurFindUniqueArgs} args - Arguments to find a TacheUtilisateur
     * @example
     * // Get one TacheUtilisateur
     * const tacheUtilisateur = await prisma.tacheUtilisateur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TacheUtilisateurFindUniqueArgs>(args: SelectSubset<T, TacheUtilisateurFindUniqueArgs<ExtArgs>>): Prisma__TacheUtilisateurClient<$Result.GetResult<Prisma.$TacheUtilisateurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TacheUtilisateur that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TacheUtilisateurFindUniqueOrThrowArgs} args - Arguments to find a TacheUtilisateur
     * @example
     * // Get one TacheUtilisateur
     * const tacheUtilisateur = await prisma.tacheUtilisateur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TacheUtilisateurFindUniqueOrThrowArgs>(args: SelectSubset<T, TacheUtilisateurFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TacheUtilisateurClient<$Result.GetResult<Prisma.$TacheUtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TacheUtilisateur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TacheUtilisateurFindFirstArgs} args - Arguments to find a TacheUtilisateur
     * @example
     * // Get one TacheUtilisateur
     * const tacheUtilisateur = await prisma.tacheUtilisateur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TacheUtilisateurFindFirstArgs>(args?: SelectSubset<T, TacheUtilisateurFindFirstArgs<ExtArgs>>): Prisma__TacheUtilisateurClient<$Result.GetResult<Prisma.$TacheUtilisateurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TacheUtilisateur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TacheUtilisateurFindFirstOrThrowArgs} args - Arguments to find a TacheUtilisateur
     * @example
     * // Get one TacheUtilisateur
     * const tacheUtilisateur = await prisma.tacheUtilisateur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TacheUtilisateurFindFirstOrThrowArgs>(args?: SelectSubset<T, TacheUtilisateurFindFirstOrThrowArgs<ExtArgs>>): Prisma__TacheUtilisateurClient<$Result.GetResult<Prisma.$TacheUtilisateurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TacheUtilisateurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TacheUtilisateurFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TacheUtilisateurs
     * const tacheUtilisateurs = await prisma.tacheUtilisateur.findMany()
     * 
     * // Get first 10 TacheUtilisateurs
     * const tacheUtilisateurs = await prisma.tacheUtilisateur.findMany({ take: 10 })
     * 
     * // Only select the `tacheId`
     * const tacheUtilisateurWithTacheIdOnly = await prisma.tacheUtilisateur.findMany({ select: { tacheId: true } })
     * 
     */
    findMany<T extends TacheUtilisateurFindManyArgs>(args?: SelectSubset<T, TacheUtilisateurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TacheUtilisateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TacheUtilisateur.
     * @param {TacheUtilisateurCreateArgs} args - Arguments to create a TacheUtilisateur.
     * @example
     * // Create one TacheUtilisateur
     * const TacheUtilisateur = await prisma.tacheUtilisateur.create({
     *   data: {
     *     // ... data to create a TacheUtilisateur
     *   }
     * })
     * 
     */
    create<T extends TacheUtilisateurCreateArgs>(args: SelectSubset<T, TacheUtilisateurCreateArgs<ExtArgs>>): Prisma__TacheUtilisateurClient<$Result.GetResult<Prisma.$TacheUtilisateurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TacheUtilisateurs.
     * @param {TacheUtilisateurCreateManyArgs} args - Arguments to create many TacheUtilisateurs.
     * @example
     * // Create many TacheUtilisateurs
     * const tacheUtilisateur = await prisma.tacheUtilisateur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TacheUtilisateurCreateManyArgs>(args?: SelectSubset<T, TacheUtilisateurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TacheUtilisateurs and returns the data saved in the database.
     * @param {TacheUtilisateurCreateManyAndReturnArgs} args - Arguments to create many TacheUtilisateurs.
     * @example
     * // Create many TacheUtilisateurs
     * const tacheUtilisateur = await prisma.tacheUtilisateur.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TacheUtilisateurs and only return the `tacheId`
     * const tacheUtilisateurWithTacheIdOnly = await prisma.tacheUtilisateur.createManyAndReturn({
     *   select: { tacheId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TacheUtilisateurCreateManyAndReturnArgs>(args?: SelectSubset<T, TacheUtilisateurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TacheUtilisateurPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TacheUtilisateur.
     * @param {TacheUtilisateurDeleteArgs} args - Arguments to delete one TacheUtilisateur.
     * @example
     * // Delete one TacheUtilisateur
     * const TacheUtilisateur = await prisma.tacheUtilisateur.delete({
     *   where: {
     *     // ... filter to delete one TacheUtilisateur
     *   }
     * })
     * 
     */
    delete<T extends TacheUtilisateurDeleteArgs>(args: SelectSubset<T, TacheUtilisateurDeleteArgs<ExtArgs>>): Prisma__TacheUtilisateurClient<$Result.GetResult<Prisma.$TacheUtilisateurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TacheUtilisateur.
     * @param {TacheUtilisateurUpdateArgs} args - Arguments to update one TacheUtilisateur.
     * @example
     * // Update one TacheUtilisateur
     * const tacheUtilisateur = await prisma.tacheUtilisateur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TacheUtilisateurUpdateArgs>(args: SelectSubset<T, TacheUtilisateurUpdateArgs<ExtArgs>>): Prisma__TacheUtilisateurClient<$Result.GetResult<Prisma.$TacheUtilisateurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TacheUtilisateurs.
     * @param {TacheUtilisateurDeleteManyArgs} args - Arguments to filter TacheUtilisateurs to delete.
     * @example
     * // Delete a few TacheUtilisateurs
     * const { count } = await prisma.tacheUtilisateur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TacheUtilisateurDeleteManyArgs>(args?: SelectSubset<T, TacheUtilisateurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TacheUtilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TacheUtilisateurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TacheUtilisateurs
     * const tacheUtilisateur = await prisma.tacheUtilisateur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TacheUtilisateurUpdateManyArgs>(args: SelectSubset<T, TacheUtilisateurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TacheUtilisateurs and returns the data updated in the database.
     * @param {TacheUtilisateurUpdateManyAndReturnArgs} args - Arguments to update many TacheUtilisateurs.
     * @example
     * // Update many TacheUtilisateurs
     * const tacheUtilisateur = await prisma.tacheUtilisateur.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TacheUtilisateurs and only return the `tacheId`
     * const tacheUtilisateurWithTacheIdOnly = await prisma.tacheUtilisateur.updateManyAndReturn({
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
    updateManyAndReturn<T extends TacheUtilisateurUpdateManyAndReturnArgs>(args: SelectSubset<T, TacheUtilisateurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TacheUtilisateurPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TacheUtilisateur.
     * @param {TacheUtilisateurUpsertArgs} args - Arguments to update or create a TacheUtilisateur.
     * @example
     * // Update or create a TacheUtilisateur
     * const tacheUtilisateur = await prisma.tacheUtilisateur.upsert({
     *   create: {
     *     // ... data to create a TacheUtilisateur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TacheUtilisateur we want to update
     *   }
     * })
     */
    upsert<T extends TacheUtilisateurUpsertArgs>(args: SelectSubset<T, TacheUtilisateurUpsertArgs<ExtArgs>>): Prisma__TacheUtilisateurClient<$Result.GetResult<Prisma.$TacheUtilisateurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TacheUtilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TacheUtilisateurCountArgs} args - Arguments to filter TacheUtilisateurs to count.
     * @example
     * // Count the number of TacheUtilisateurs
     * const count = await prisma.tacheUtilisateur.count({
     *   where: {
     *     // ... the filter for the TacheUtilisateurs we want to count
     *   }
     * })
    **/
    count<T extends TacheUtilisateurCountArgs>(
      args?: Subset<T, TacheUtilisateurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TacheUtilisateurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TacheUtilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TacheUtilisateurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TacheUtilisateurAggregateArgs>(args: Subset<T, TacheUtilisateurAggregateArgs>): Prisma.PrismaPromise<GetTacheUtilisateurAggregateType<T>>

    /**
     * Group by TacheUtilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TacheUtilisateurGroupByArgs} args - Group by arguments.
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
      T extends TacheUtilisateurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TacheUtilisateurGroupByArgs['orderBy'] }
        : { orderBy?: TacheUtilisateurGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TacheUtilisateurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTacheUtilisateurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TacheUtilisateur model
   */
  readonly fields: TacheUtilisateurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TacheUtilisateur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TacheUtilisateurClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tache<T extends TacheDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TacheDefaultArgs<ExtArgs>>): Prisma__TacheClient<$Result.GetResult<Prisma.$TachePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TacheUtilisateur model
   */
  interface TacheUtilisateurFieldRefs {
    readonly tacheId: FieldRef<"TacheUtilisateur", 'Int'>
    readonly userId: FieldRef<"TacheUtilisateur", 'Int'>
    readonly createdAt: FieldRef<"TacheUtilisateur", 'DateTime'>
    readonly updatedAt: FieldRef<"TacheUtilisateur", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TacheUtilisateur findUnique
   */
  export type TacheUtilisateurFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TacheUtilisateur
     */
    select?: TacheUtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TacheUtilisateur
     */
    omit?: TacheUtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TacheUtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which TacheUtilisateur to fetch.
     */
    where: TacheUtilisateurWhereUniqueInput
  }

  /**
   * TacheUtilisateur findUniqueOrThrow
   */
  export type TacheUtilisateurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TacheUtilisateur
     */
    select?: TacheUtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TacheUtilisateur
     */
    omit?: TacheUtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TacheUtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which TacheUtilisateur to fetch.
     */
    where: TacheUtilisateurWhereUniqueInput
  }

  /**
   * TacheUtilisateur findFirst
   */
  export type TacheUtilisateurFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TacheUtilisateur
     */
    select?: TacheUtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TacheUtilisateur
     */
    omit?: TacheUtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TacheUtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which TacheUtilisateur to fetch.
     */
    where?: TacheUtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TacheUtilisateurs to fetch.
     */
    orderBy?: TacheUtilisateurOrderByWithRelationInput | TacheUtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TacheUtilisateurs.
     */
    cursor?: TacheUtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TacheUtilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TacheUtilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TacheUtilisateurs.
     */
    distinct?: TacheUtilisateurScalarFieldEnum | TacheUtilisateurScalarFieldEnum[]
  }

  /**
   * TacheUtilisateur findFirstOrThrow
   */
  export type TacheUtilisateurFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TacheUtilisateur
     */
    select?: TacheUtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TacheUtilisateur
     */
    omit?: TacheUtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TacheUtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which TacheUtilisateur to fetch.
     */
    where?: TacheUtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TacheUtilisateurs to fetch.
     */
    orderBy?: TacheUtilisateurOrderByWithRelationInput | TacheUtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TacheUtilisateurs.
     */
    cursor?: TacheUtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TacheUtilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TacheUtilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TacheUtilisateurs.
     */
    distinct?: TacheUtilisateurScalarFieldEnum | TacheUtilisateurScalarFieldEnum[]
  }

  /**
   * TacheUtilisateur findMany
   */
  export type TacheUtilisateurFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TacheUtilisateur
     */
    select?: TacheUtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TacheUtilisateur
     */
    omit?: TacheUtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TacheUtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which TacheUtilisateurs to fetch.
     */
    where?: TacheUtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TacheUtilisateurs to fetch.
     */
    orderBy?: TacheUtilisateurOrderByWithRelationInput | TacheUtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TacheUtilisateurs.
     */
    cursor?: TacheUtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TacheUtilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TacheUtilisateurs.
     */
    skip?: number
    distinct?: TacheUtilisateurScalarFieldEnum | TacheUtilisateurScalarFieldEnum[]
  }

  /**
   * TacheUtilisateur create
   */
  export type TacheUtilisateurCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TacheUtilisateur
     */
    select?: TacheUtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TacheUtilisateur
     */
    omit?: TacheUtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TacheUtilisateurInclude<ExtArgs> | null
    /**
     * The data needed to create a TacheUtilisateur.
     */
    data: XOR<TacheUtilisateurCreateInput, TacheUtilisateurUncheckedCreateInput>
  }

  /**
   * TacheUtilisateur createMany
   */
  export type TacheUtilisateurCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TacheUtilisateurs.
     */
    data: TacheUtilisateurCreateManyInput | TacheUtilisateurCreateManyInput[]
  }

  /**
   * TacheUtilisateur createManyAndReturn
   */
  export type TacheUtilisateurCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TacheUtilisateur
     */
    select?: TacheUtilisateurSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TacheUtilisateur
     */
    omit?: TacheUtilisateurOmit<ExtArgs> | null
    /**
     * The data used to create many TacheUtilisateurs.
     */
    data: TacheUtilisateurCreateManyInput | TacheUtilisateurCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TacheUtilisateurIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TacheUtilisateur update
   */
  export type TacheUtilisateurUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TacheUtilisateur
     */
    select?: TacheUtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TacheUtilisateur
     */
    omit?: TacheUtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TacheUtilisateurInclude<ExtArgs> | null
    /**
     * The data needed to update a TacheUtilisateur.
     */
    data: XOR<TacheUtilisateurUpdateInput, TacheUtilisateurUncheckedUpdateInput>
    /**
     * Choose, which TacheUtilisateur to update.
     */
    where: TacheUtilisateurWhereUniqueInput
  }

  /**
   * TacheUtilisateur updateMany
   */
  export type TacheUtilisateurUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TacheUtilisateurs.
     */
    data: XOR<TacheUtilisateurUpdateManyMutationInput, TacheUtilisateurUncheckedUpdateManyInput>
    /**
     * Filter which TacheUtilisateurs to update
     */
    where?: TacheUtilisateurWhereInput
    /**
     * Limit how many TacheUtilisateurs to update.
     */
    limit?: number
  }

  /**
   * TacheUtilisateur updateManyAndReturn
   */
  export type TacheUtilisateurUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TacheUtilisateur
     */
    select?: TacheUtilisateurSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TacheUtilisateur
     */
    omit?: TacheUtilisateurOmit<ExtArgs> | null
    /**
     * The data used to update TacheUtilisateurs.
     */
    data: XOR<TacheUtilisateurUpdateManyMutationInput, TacheUtilisateurUncheckedUpdateManyInput>
    /**
     * Filter which TacheUtilisateurs to update
     */
    where?: TacheUtilisateurWhereInput
    /**
     * Limit how many TacheUtilisateurs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TacheUtilisateurIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TacheUtilisateur upsert
   */
  export type TacheUtilisateurUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TacheUtilisateur
     */
    select?: TacheUtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TacheUtilisateur
     */
    omit?: TacheUtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TacheUtilisateurInclude<ExtArgs> | null
    /**
     * The filter to search for the TacheUtilisateur to update in case it exists.
     */
    where: TacheUtilisateurWhereUniqueInput
    /**
     * In case the TacheUtilisateur found by the `where` argument doesn't exist, create a new TacheUtilisateur with this data.
     */
    create: XOR<TacheUtilisateurCreateInput, TacheUtilisateurUncheckedCreateInput>
    /**
     * In case the TacheUtilisateur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TacheUtilisateurUpdateInput, TacheUtilisateurUncheckedUpdateInput>
  }

  /**
   * TacheUtilisateur delete
   */
  export type TacheUtilisateurDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TacheUtilisateur
     */
    select?: TacheUtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TacheUtilisateur
     */
    omit?: TacheUtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TacheUtilisateurInclude<ExtArgs> | null
    /**
     * Filter which TacheUtilisateur to delete.
     */
    where: TacheUtilisateurWhereUniqueInput
  }

  /**
   * TacheUtilisateur deleteMany
   */
  export type TacheUtilisateurDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TacheUtilisateurs to delete
     */
    where?: TacheUtilisateurWhereInput
    /**
     * Limit how many TacheUtilisateurs to delete.
     */
    limit?: number
  }

  /**
   * TacheUtilisateur without action
   */
  export type TacheUtilisateurDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TacheUtilisateur
     */
    select?: TacheUtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TacheUtilisateur
     */
    omit?: TacheUtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TacheUtilisateurInclude<ExtArgs> | null
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
    userId: number | null
    projetId: number | null
  }

  export type MembreProjetSumAggregateOutputType = {
    userId: number | null
    projetId: number | null
  }

  export type MembreProjetMinAggregateOutputType = {
    userId: number | null
    projetId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MembreProjetMaxAggregateOutputType = {
    userId: number | null
    projetId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MembreProjetCountAggregateOutputType = {
    userId: number
    projetId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MembreProjetAvgAggregateInputType = {
    userId?: true
    projetId?: true
  }

  export type MembreProjetSumAggregateInputType = {
    userId?: true
    projetId?: true
  }

  export type MembreProjetMinAggregateInputType = {
    userId?: true
    projetId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MembreProjetMaxAggregateInputType = {
    userId?: true
    projetId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MembreProjetCountAggregateInputType = {
    userId?: true
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
    userId: number
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
    userId?: boolean
    projetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    projet?: boolean | ProjetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membreProjet"]>

  export type MembreProjetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    projetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    projet?: boolean | ProjetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membreProjet"]>

  export type MembreProjetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    projetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    projet?: boolean | ProjetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membreProjet"]>

  export type MembreProjetSelectScalar = {
    userId?: boolean
    projetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MembreProjetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "projetId" | "createdAt" | "updatedAt", ExtArgs["result"]["membreProjet"]>
  export type MembreProjetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    projet?: boolean | ProjetDefaultArgs<ExtArgs>
  }
  export type MembreProjetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    projet?: boolean | ProjetDefaultArgs<ExtArgs>
  }
  export type MembreProjetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    projet?: boolean | ProjetDefaultArgs<ExtArgs>
  }

  export type $MembreProjetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MembreProjet"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      projet: Prisma.$ProjetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
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
     * // Only select the `userId`
     * const membreProjetWithUserIdOnly = await prisma.membreProjet.findMany({ select: { userId: true } })
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
     * // Create many MembreProjets and only return the `userId`
     * const membreProjetWithUserIdOnly = await prisma.membreProjet.createManyAndReturn({
     *   select: { userId: true },
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
     * // Update zero or more MembreProjets and only return the `userId`
     * const membreProjetWithUserIdOnly = await prisma.membreProjet.updateManyAndReturn({
     *   select: { userId: true },
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
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly userId: FieldRef<"MembreProjet", 'Int'>
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
    userId: number | null
    departementId: number | null
    projetId: number | null
    partageurId: number | null
  }

  export type PartageDocumentSumAggregateOutputType = {
    id: number | null
    documentId: number | null
    userId: number | null
    departementId: number | null
    projetId: number | null
    partageurId: number | null
  }

  export type PartageDocumentMinAggregateOutputType = {
    id: number | null
    documentId: number | null
    userId: number | null
    departementId: number | null
    projetId: number | null
    datePartage: Date | null
    partageurId: number | null
    historique: string | null
  }

  export type PartageDocumentMaxAggregateOutputType = {
    id: number | null
    documentId: number | null
    userId: number | null
    departementId: number | null
    projetId: number | null
    datePartage: Date | null
    partageurId: number | null
    historique: string | null
  }

  export type PartageDocumentCountAggregateOutputType = {
    id: number
    documentId: number
    userId: number
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
    userId?: true
    departementId?: true
    projetId?: true
    partageurId?: true
  }

  export type PartageDocumentSumAggregateInputType = {
    id?: true
    documentId?: true
    userId?: true
    departementId?: true
    projetId?: true
    partageurId?: true
  }

  export type PartageDocumentMinAggregateInputType = {
    id?: true
    documentId?: true
    userId?: true
    departementId?: true
    projetId?: true
    datePartage?: true
    partageurId?: true
    historique?: true
  }

  export type PartageDocumentMaxAggregateInputType = {
    id?: true
    documentId?: true
    userId?: true
    departementId?: true
    projetId?: true
    datePartage?: true
    partageurId?: true
    historique?: true
  }

  export type PartageDocumentCountAggregateInputType = {
    id?: true
    documentId?: true
    userId?: true
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
    userId: number | null
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
    userId?: boolean
    departementId?: boolean
    projetId?: boolean
    datePartage?: boolean
    partageurId?: boolean
    historique?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    user?: boolean | PartageDocument$userArgs<ExtArgs>
    departement?: boolean | PartageDocument$departementArgs<ExtArgs>
    projet?: boolean | PartageDocument$projetArgs<ExtArgs>
    partageur?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partageDocument"]>

  export type PartageDocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    userId?: boolean
    departementId?: boolean
    projetId?: boolean
    datePartage?: boolean
    partageurId?: boolean
    historique?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    user?: boolean | PartageDocument$userArgs<ExtArgs>
    departement?: boolean | PartageDocument$departementArgs<ExtArgs>
    projet?: boolean | PartageDocument$projetArgs<ExtArgs>
    partageur?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partageDocument"]>

  export type PartageDocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    userId?: boolean
    departementId?: boolean
    projetId?: boolean
    datePartage?: boolean
    partageurId?: boolean
    historique?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    user?: boolean | PartageDocument$userArgs<ExtArgs>
    departement?: boolean | PartageDocument$departementArgs<ExtArgs>
    projet?: boolean | PartageDocument$projetArgs<ExtArgs>
    partageur?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partageDocument"]>

  export type PartageDocumentSelectScalar = {
    id?: boolean
    documentId?: boolean
    userId?: boolean
    departementId?: boolean
    projetId?: boolean
    datePartage?: boolean
    partageurId?: boolean
    historique?: boolean
  }

  export type PartageDocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documentId" | "userId" | "departementId" | "projetId" | "datePartage" | "partageurId" | "historique", ExtArgs["result"]["partageDocument"]>
  export type PartageDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    user?: boolean | PartageDocument$userArgs<ExtArgs>
    departement?: boolean | PartageDocument$departementArgs<ExtArgs>
    projet?: boolean | PartageDocument$projetArgs<ExtArgs>
    partageur?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PartageDocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    user?: boolean | PartageDocument$userArgs<ExtArgs>
    departement?: boolean | PartageDocument$departementArgs<ExtArgs>
    projet?: boolean | PartageDocument$projetArgs<ExtArgs>
    partageur?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PartageDocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    user?: boolean | PartageDocument$userArgs<ExtArgs>
    departement?: boolean | PartageDocument$departementArgs<ExtArgs>
    projet?: boolean | PartageDocument$projetArgs<ExtArgs>
    partageur?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PartageDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PartageDocument"
    objects: {
      document: Prisma.$DocumentPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
      departement: Prisma.$DepartementPayload<ExtArgs> | null
      projet: Prisma.$ProjetPayload<ExtArgs> | null
      partageur: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      documentId: number
      userId: number | null
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
    user<T extends PartageDocument$userArgs<ExtArgs> = {}>(args?: Subset<T, PartageDocument$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    departement<T extends PartageDocument$departementArgs<ExtArgs> = {}>(args?: Subset<T, PartageDocument$departementArgs<ExtArgs>>): Prisma__DepartementClient<$Result.GetResult<Prisma.$DepartementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    projet<T extends PartageDocument$projetArgs<ExtArgs> = {}>(args?: Subset<T, PartageDocument$projetArgs<ExtArgs>>): Prisma__ProjetClient<$Result.GetResult<Prisma.$ProjetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    partageur<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly userId: FieldRef<"PartageDocument", 'Int'>
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
   * PartageDocument.user
   */
  export type PartageDocument$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
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
    userId: number | null
    documentId: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
    userId: number | null
    documentId: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    userId: number | null
    message: string | null
    dateNotification: Date | null
    documentId: number | null
    vu: boolean | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    message: string | null
    dateNotification: Date | null
    documentId: number | null
    vu: boolean | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    message: number
    dateNotification: number
    documentId: number
    vu: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
    userId?: true
    documentId?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
    userId?: true
    documentId?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    dateNotification?: true
    documentId?: true
    vu?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    dateNotification?: true
    documentId?: true
    vu?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
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
    userId: number
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
    userId?: boolean
    message?: boolean
    dateNotification?: boolean
    documentId?: boolean
    vu?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    message?: boolean
    dateNotification?: boolean
    documentId?: boolean
    vu?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    message?: boolean
    dateNotification?: boolean
    documentId?: boolean
    vu?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    message?: boolean
    dateNotification?: boolean
    documentId?: boolean
    vu?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "message" | "dateNotification" | "documentId" | "vu", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      document: Prisma.$DocumentPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
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
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly userId: FieldRef<"Notification", 'Int'>
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
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    userId: number | null
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    userId: number | null
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: number | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    userId?: true
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    userId?: true
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: number
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'Int'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionAvgAggregateOutputType = {
    userId: number | null
  }

  export type SessionSumAggregateOutputType = {
    userId: number | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: number | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: number | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionAvgAggregateInputType = {
    userId?: true
  }

  export type SessionSumAggregateInputType = {
    userId?: true
  }

  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _avg?: SessionAvgAggregateInputType
    _sum?: SessionSumAggregateInputType
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: number
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: number
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'Int'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
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
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    prenom: 'prenom',
    email: 'email',
    password: 'password',
    role: 'role',
    departementId: 'departementId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


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


  export const TacheUtilisateurScalarFieldEnum: {
    tacheId: 'tacheId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TacheUtilisateurScalarFieldEnum = (typeof TacheUtilisateurScalarFieldEnum)[keyof typeof TacheUtilisateurScalarFieldEnum]


  export const MembreProjetScalarFieldEnum: {
    userId: 'userId',
    projetId: 'projetId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MembreProjetScalarFieldEnum = (typeof MembreProjetScalarFieldEnum)[keyof typeof MembreProjetScalarFieldEnum]


  export const PartageDocumentScalarFieldEnum: {
    id: 'id',
    documentId: 'documentId',
    userId: 'userId',
    departementId: 'departementId',
    projetId: 'projetId',
    datePartage: 'datePartage',
    partageurId: 'partageurId',
    historique: 'historique'
  };

  export type PartageDocumentScalarFieldEnum = (typeof PartageDocumentScalarFieldEnum)[keyof typeof PartageDocumentScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    message: 'message',
    dateNotification: 'dateNotification',
    documentId: 'documentId',
    vu: 'vu'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


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
    users?: UserListRelationFilter
    partages?: PartageDocumentListRelationFilter
  }

  export type DepartementOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projets?: ProjetOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
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
    users?: UserListRelationFilter
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

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    nom?: StringFilter<"User"> | string
    prenom?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    departementId?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    departement?: XOR<DepartementNullableScalarRelationFilter, DepartementWhereInput> | null
    projets?: MembreProjetListRelationFilter
    taches?: TacheUtilisateurListRelationFilter
    partages?: PartageDocumentListRelationFilter
    partagesEnTantQuePartageur?: PartageDocumentListRelationFilter
    notifications?: NotificationListRelationFilter
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    departementId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    departement?: DepartementOrderByWithRelationInput
    projets?: MembreProjetOrderByRelationAggregateInput
    taches?: TacheUtilisateurOrderByRelationAggregateInput
    partages?: PartageDocumentOrderByRelationAggregateInput
    partagesEnTantQuePartageur?: PartageDocumentOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nom?: StringFilter<"User"> | string
    prenom?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    departementId?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    departement?: XOR<DepartementNullableScalarRelationFilter, DepartementWhereInput> | null
    projets?: MembreProjetListRelationFilter
    taches?: TacheUtilisateurListRelationFilter
    partages?: PartageDocumentListRelationFilter
    partagesEnTantQuePartageur?: PartageDocumentListRelationFilter
    notifications?: NotificationListRelationFilter
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    departementId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    nom?: StringWithAggregatesFilter<"User"> | string
    prenom?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    departementId?: IntNullableWithAggregatesFilter<"User"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
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
    TacheUtilisateur?: TacheUtilisateurListRelationFilter
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
    TacheUtilisateur?: TacheUtilisateurOrderByRelationAggregateInput
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
    TacheUtilisateur?: TacheUtilisateurListRelationFilter
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

  export type TacheUtilisateurWhereInput = {
    AND?: TacheUtilisateurWhereInput | TacheUtilisateurWhereInput[]
    OR?: TacheUtilisateurWhereInput[]
    NOT?: TacheUtilisateurWhereInput | TacheUtilisateurWhereInput[]
    tacheId?: IntFilter<"TacheUtilisateur"> | number
    userId?: IntFilter<"TacheUtilisateur"> | number
    createdAt?: DateTimeFilter<"TacheUtilisateur"> | Date | string
    updatedAt?: DateTimeFilter<"TacheUtilisateur"> | Date | string
    tache?: XOR<TacheScalarRelationFilter, TacheWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TacheUtilisateurOrderByWithRelationInput = {
    tacheId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tache?: TacheOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type TacheUtilisateurWhereUniqueInput = Prisma.AtLeast<{
    tacheId_userId?: TacheUtilisateurTacheIdUserIdCompoundUniqueInput
    AND?: TacheUtilisateurWhereInput | TacheUtilisateurWhereInput[]
    OR?: TacheUtilisateurWhereInput[]
    NOT?: TacheUtilisateurWhereInput | TacheUtilisateurWhereInput[]
    tacheId?: IntFilter<"TacheUtilisateur"> | number
    userId?: IntFilter<"TacheUtilisateur"> | number
    createdAt?: DateTimeFilter<"TacheUtilisateur"> | Date | string
    updatedAt?: DateTimeFilter<"TacheUtilisateur"> | Date | string
    tache?: XOR<TacheScalarRelationFilter, TacheWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "tacheId_userId">

  export type TacheUtilisateurOrderByWithAggregationInput = {
    tacheId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TacheUtilisateurCountOrderByAggregateInput
    _avg?: TacheUtilisateurAvgOrderByAggregateInput
    _max?: TacheUtilisateurMaxOrderByAggregateInput
    _min?: TacheUtilisateurMinOrderByAggregateInput
    _sum?: TacheUtilisateurSumOrderByAggregateInput
  }

  export type TacheUtilisateurScalarWhereWithAggregatesInput = {
    AND?: TacheUtilisateurScalarWhereWithAggregatesInput | TacheUtilisateurScalarWhereWithAggregatesInput[]
    OR?: TacheUtilisateurScalarWhereWithAggregatesInput[]
    NOT?: TacheUtilisateurScalarWhereWithAggregatesInput | TacheUtilisateurScalarWhereWithAggregatesInput[]
    tacheId?: IntWithAggregatesFilter<"TacheUtilisateur"> | number
    userId?: IntWithAggregatesFilter<"TacheUtilisateur"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TacheUtilisateur"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TacheUtilisateur"> | Date | string
  }

  export type MembreProjetWhereInput = {
    AND?: MembreProjetWhereInput | MembreProjetWhereInput[]
    OR?: MembreProjetWhereInput[]
    NOT?: MembreProjetWhereInput | MembreProjetWhereInput[]
    userId?: IntFilter<"MembreProjet"> | number
    projetId?: IntFilter<"MembreProjet"> | number
    createdAt?: DateTimeFilter<"MembreProjet"> | Date | string
    updatedAt?: DateTimeFilter<"MembreProjet"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    projet?: XOR<ProjetScalarRelationFilter, ProjetWhereInput>
  }

  export type MembreProjetOrderByWithRelationInput = {
    userId?: SortOrder
    projetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    projet?: ProjetOrderByWithRelationInput
  }

  export type MembreProjetWhereUniqueInput = Prisma.AtLeast<{
    userId_projetId?: MembreProjetUserIdProjetIdCompoundUniqueInput
    AND?: MembreProjetWhereInput | MembreProjetWhereInput[]
    OR?: MembreProjetWhereInput[]
    NOT?: MembreProjetWhereInput | MembreProjetWhereInput[]
    userId?: IntFilter<"MembreProjet"> | number
    projetId?: IntFilter<"MembreProjet"> | number
    createdAt?: DateTimeFilter<"MembreProjet"> | Date | string
    updatedAt?: DateTimeFilter<"MembreProjet"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    projet?: XOR<ProjetScalarRelationFilter, ProjetWhereInput>
  }, "userId_projetId">

  export type MembreProjetOrderByWithAggregationInput = {
    userId?: SortOrder
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
    userId?: IntWithAggregatesFilter<"MembreProjet"> | number
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
    userId?: IntNullableFilter<"PartageDocument"> | number | null
    departementId?: IntNullableFilter<"PartageDocument"> | number | null
    projetId?: IntNullableFilter<"PartageDocument"> | number | null
    datePartage?: DateTimeFilter<"PartageDocument"> | Date | string
    partageurId?: IntFilter<"PartageDocument"> | number
    historique?: StringNullableFilter<"PartageDocument"> | string | null
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    departement?: XOR<DepartementNullableScalarRelationFilter, DepartementWhereInput> | null
    projet?: XOR<ProjetNullableScalarRelationFilter, ProjetWhereInput> | null
    partageur?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PartageDocumentOrderByWithRelationInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrderInput | SortOrder
    departementId?: SortOrderInput | SortOrder
    projetId?: SortOrderInput | SortOrder
    datePartage?: SortOrder
    partageurId?: SortOrder
    historique?: SortOrderInput | SortOrder
    document?: DocumentOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    departement?: DepartementOrderByWithRelationInput
    projet?: ProjetOrderByWithRelationInput
    partageur?: UserOrderByWithRelationInput
  }

  export type PartageDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    documentId_userId_departementId_projetId?: PartageDocumentDocumentIdUserIdDepartementIdProjetIdCompoundUniqueInput
    AND?: PartageDocumentWhereInput | PartageDocumentWhereInput[]
    OR?: PartageDocumentWhereInput[]
    NOT?: PartageDocumentWhereInput | PartageDocumentWhereInput[]
    documentId?: IntFilter<"PartageDocument"> | number
    userId?: IntNullableFilter<"PartageDocument"> | number | null
    departementId?: IntNullableFilter<"PartageDocument"> | number | null
    projetId?: IntNullableFilter<"PartageDocument"> | number | null
    datePartage?: DateTimeFilter<"PartageDocument"> | Date | string
    partageurId?: IntFilter<"PartageDocument"> | number
    historique?: StringNullableFilter<"PartageDocument"> | string | null
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    departement?: XOR<DepartementNullableScalarRelationFilter, DepartementWhereInput> | null
    projet?: XOR<ProjetNullableScalarRelationFilter, ProjetWhereInput> | null
    partageur?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "documentId_userId_departementId_projetId">

  export type PartageDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrderInput | SortOrder
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
    userId?: IntNullableWithAggregatesFilter<"PartageDocument"> | number | null
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
    userId?: IntFilter<"Notification"> | number
    message?: StringFilter<"Notification"> | string
    dateNotification?: DateTimeFilter<"Notification"> | Date | string
    documentId?: IntFilter<"Notification"> | number
    vu?: BoolFilter<"Notification"> | boolean
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    dateNotification?: SortOrder
    documentId?: SortOrder
    vu?: SortOrder
    document?: DocumentOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: IntFilter<"Notification"> | number
    message?: StringFilter<"Notification"> | string
    dateNotification?: DateTimeFilter<"Notification"> | Date | string
    documentId?: IntFilter<"Notification"> | number
    vu?: BoolFilter<"Notification"> | boolean
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
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
    userId?: IntWithAggregatesFilter<"Notification"> | number
    message?: StringWithAggregatesFilter<"Notification"> | string
    dateNotification?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    documentId?: IntWithAggregatesFilter<"Notification"> | number
    vu?: BoolWithAggregatesFilter<"Notification"> | boolean
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: IntFilter<"Account"> | number
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: IntFilter<"Account"> | number
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: IntWithAggregatesFilter<"Account"> | number
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: IntFilter<"Session"> | number
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: IntFilter<"Session"> | number
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _avg?: SessionAvgOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
    _sum?: SessionSumOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: IntWithAggregatesFilter<"Session"> | number
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type DepartementCreateInput = {
    nom: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projets?: ProjetCreateNestedManyWithoutDepartementInput
    users?: UserCreateNestedManyWithoutDepartementInput
    partages?: PartageDocumentCreateNestedManyWithoutDepartementInput
  }

  export type DepartementUncheckedCreateInput = {
    id?: number
    nom: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projets?: ProjetUncheckedCreateNestedManyWithoutDepartementInput
    users?: UserUncheckedCreateNestedManyWithoutDepartementInput
    partages?: PartageDocumentUncheckedCreateNestedManyWithoutDepartementInput
  }

  export type DepartementUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projets?: ProjetUpdateManyWithoutDepartementNestedInput
    users?: UserUpdateManyWithoutDepartementNestedInput
    partages?: PartageDocumentUpdateManyWithoutDepartementNestedInput
  }

  export type DepartementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projets?: ProjetUncheckedUpdateManyWithoutDepartementNestedInput
    users?: UserUncheckedUpdateManyWithoutDepartementNestedInput
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

  export type UserCreateInput = {
    nom: string
    prenom: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    departement?: DepartementCreateNestedOneWithoutUsersInput
    projets?: MembreProjetCreateNestedManyWithoutUserInput
    taches?: TacheUtilisateurCreateNestedManyWithoutUserInput
    partages?: PartageDocumentCreateNestedManyWithoutUserInput
    partagesEnTantQuePartageur?: PartageDocumentCreateNestedManyWithoutPartageurInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    nom: string
    prenom: string
    email: string
    password: string
    role?: $Enums.Role
    departementId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projets?: MembreProjetUncheckedCreateNestedManyWithoutUserInput
    taches?: TacheUtilisateurUncheckedCreateNestedManyWithoutUserInput
    partages?: PartageDocumentUncheckedCreateNestedManyWithoutUserInput
    partagesEnTantQuePartageur?: PartageDocumentUncheckedCreateNestedManyWithoutPartageurInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departement?: DepartementUpdateOneWithoutUsersNestedInput
    projets?: MembreProjetUpdateManyWithoutUserNestedInput
    taches?: TacheUtilisateurUpdateManyWithoutUserNestedInput
    partages?: PartageDocumentUpdateManyWithoutUserNestedInput
    partagesEnTantQuePartageur?: PartageDocumentUpdateManyWithoutPartageurNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    departementId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projets?: MembreProjetUncheckedUpdateManyWithoutUserNestedInput
    taches?: TacheUtilisateurUncheckedUpdateManyWithoutUserNestedInput
    partages?: PartageDocumentUncheckedUpdateManyWithoutUserNestedInput
    partagesEnTantQuePartageur?: PartageDocumentUncheckedUpdateManyWithoutPartageurNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    nom: string
    prenom: string
    email: string
    password: string
    role?: $Enums.Role
    departementId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
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
    TacheUtilisateur?: TacheUtilisateurCreateNestedManyWithoutTacheInput
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
    TacheUtilisateur?: TacheUtilisateurUncheckedCreateNestedManyWithoutTacheInput
  }

  export type TacheUpdateInput = {
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumTacheStatutFieldUpdateOperationsInput | $Enums.TacheStatut
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projet?: ProjetUpdateOneRequiredWithoutTachesNestedInput
    TacheUtilisateur?: TacheUtilisateurUpdateManyWithoutTacheNestedInput
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
    TacheUtilisateur?: TacheUtilisateurUncheckedUpdateManyWithoutTacheNestedInput
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

  export type TacheUtilisateurCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    tache: TacheCreateNestedOneWithoutTacheUtilisateurInput
    user: UserCreateNestedOneWithoutTachesInput
  }

  export type TacheUtilisateurUncheckedCreateInput = {
    tacheId: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TacheUtilisateurUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tache?: TacheUpdateOneRequiredWithoutTacheUtilisateurNestedInput
    user?: UserUpdateOneRequiredWithoutTachesNestedInput
  }

  export type TacheUtilisateurUncheckedUpdateInput = {
    tacheId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TacheUtilisateurCreateManyInput = {
    tacheId: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TacheUtilisateurUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TacheUtilisateurUncheckedUpdateManyInput = {
    tacheId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembreProjetCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProjetsInput
    projet: ProjetCreateNestedOneWithoutMembresInput
  }

  export type MembreProjetUncheckedCreateInput = {
    userId: number
    projetId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MembreProjetUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjetsNestedInput
    projet?: ProjetUpdateOneRequiredWithoutMembresNestedInput
  }

  export type MembreProjetUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    projetId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembreProjetCreateManyInput = {
    userId: number
    projetId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MembreProjetUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembreProjetUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    projetId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartageDocumentCreateInput = {
    datePartage?: Date | string
    historique?: string | null
    document: DocumentCreateNestedOneWithoutPartagesInput
    user?: UserCreateNestedOneWithoutPartagesInput
    departement?: DepartementCreateNestedOneWithoutPartagesInput
    projet?: ProjetCreateNestedOneWithoutPartagesInput
    partageur: UserCreateNestedOneWithoutPartagesEnTantQuePartageurInput
  }

  export type PartageDocumentUncheckedCreateInput = {
    id?: number
    documentId: number
    userId?: number | null
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
    user?: UserUpdateOneWithoutPartagesNestedInput
    departement?: DepartementUpdateOneWithoutPartagesNestedInput
    projet?: ProjetUpdateOneWithoutPartagesNestedInput
    partageur?: UserUpdateOneRequiredWithoutPartagesEnTantQuePartageurNestedInput
  }

  export type PartageDocumentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    departementId?: NullableIntFieldUpdateOperationsInput | number | null
    projetId?: NullableIntFieldUpdateOperationsInput | number | null
    datePartage?: DateTimeFieldUpdateOperationsInput | Date | string
    partageurId?: IntFieldUpdateOperationsInput | number
    historique?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PartageDocumentCreateManyInput = {
    id?: number
    documentId: number
    userId?: number | null
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
    userId?: NullableIntFieldUpdateOperationsInput | number | null
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
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    userId: number
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
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    dateNotification?: DateTimeFieldUpdateOperationsInput | Date | string
    documentId?: IntFieldUpdateOperationsInput | number
    vu?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationCreateManyInput = {
    id?: number
    userId: number
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
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    dateNotification?: DateTimeFieldUpdateOperationsInput | Date | string
    documentId?: IntFieldUpdateOperationsInput | number
    vu?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: number
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: number
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: number
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: number
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type PartageDocumentListRelationFilter = {
    every?: PartageDocumentWhereInput
    some?: PartageDocumentWhereInput
    none?: PartageDocumentWhereInput
  }

  export type ProjetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
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

  export type TacheUtilisateurListRelationFilter = {
    every?: TacheUtilisateurWhereInput
    some?: TacheUtilisateurWhereInput
    none?: TacheUtilisateurWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MembreProjetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TacheUtilisateurOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    departementId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    departementId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    departementId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    departementId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TacheUtilisateurTacheIdUserIdCompoundUniqueInput = {
    tacheId: number
    userId: number
  }

  export type TacheUtilisateurCountOrderByAggregateInput = {
    tacheId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TacheUtilisateurAvgOrderByAggregateInput = {
    tacheId?: SortOrder
    userId?: SortOrder
  }

  export type TacheUtilisateurMaxOrderByAggregateInput = {
    tacheId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TacheUtilisateurMinOrderByAggregateInput = {
    tacheId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TacheUtilisateurSumOrderByAggregateInput = {
    tacheId?: SortOrder
    userId?: SortOrder
  }

  export type MembreProjetUserIdProjetIdCompoundUniqueInput = {
    userId: number
    projetId: number
  }

  export type MembreProjetCountOrderByAggregateInput = {
    userId?: SortOrder
    projetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MembreProjetAvgOrderByAggregateInput = {
    userId?: SortOrder
    projetId?: SortOrder
  }

  export type MembreProjetMaxOrderByAggregateInput = {
    userId?: SortOrder
    projetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MembreProjetMinOrderByAggregateInput = {
    userId?: SortOrder
    projetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MembreProjetSumOrderByAggregateInput = {
    userId?: SortOrder
    projetId?: SortOrder
  }

  export type DocumentScalarRelationFilter = {
    is?: DocumentWhereInput
    isNot?: DocumentWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ProjetNullableScalarRelationFilter = {
    is?: ProjetWhereInput | null
    isNot?: ProjetWhereInput | null
  }

  export type PartageDocumentDocumentIdUserIdDepartementIdProjetIdCompoundUniqueInput = {
    documentId: number
    userId: number
    departementId: number
    projetId: number
  }

  export type PartageDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    departementId?: SortOrder
    projetId?: SortOrder
    datePartage?: SortOrder
    partageurId?: SortOrder
    historique?: SortOrder
  }

  export type PartageDocumentAvgOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    departementId?: SortOrder
    projetId?: SortOrder
    partageurId?: SortOrder
  }

  export type PartageDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    departementId?: SortOrder
    projetId?: SortOrder
    datePartage?: SortOrder
    partageurId?: SortOrder
    historique?: SortOrder
  }

  export type PartageDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    departementId?: SortOrder
    projetId?: SortOrder
    datePartage?: SortOrder
    partageurId?: SortOrder
    historique?: SortOrder
  }

  export type PartageDocumentSumOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
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
    userId?: SortOrder
    message?: SortOrder
    dateNotification?: SortOrder
    documentId?: SortOrder
    vu?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    documentId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    dateNotification?: SortOrder
    documentId?: SortOrder
    vu?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    dateNotification?: SortOrder
    documentId?: SortOrder
    vu?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    documentId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    userId?: SortOrder
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    userId?: SortOrder
    expires_at?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type ProjetCreateNestedManyWithoutDepartementInput = {
    create?: XOR<ProjetCreateWithoutDepartementInput, ProjetUncheckedCreateWithoutDepartementInput> | ProjetCreateWithoutDepartementInput[] | ProjetUncheckedCreateWithoutDepartementInput[]
    connectOrCreate?: ProjetCreateOrConnectWithoutDepartementInput | ProjetCreateOrConnectWithoutDepartementInput[]
    createMany?: ProjetCreateManyDepartementInputEnvelope
    connect?: ProjetWhereUniqueInput | ProjetWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutDepartementInput = {
    create?: XOR<UserCreateWithoutDepartementInput, UserUncheckedCreateWithoutDepartementInput> | UserCreateWithoutDepartementInput[] | UserUncheckedCreateWithoutDepartementInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartementInput | UserCreateOrConnectWithoutDepartementInput[]
    createMany?: UserCreateManyDepartementInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
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

  export type UserUncheckedCreateNestedManyWithoutDepartementInput = {
    create?: XOR<UserCreateWithoutDepartementInput, UserUncheckedCreateWithoutDepartementInput> | UserCreateWithoutDepartementInput[] | UserUncheckedCreateWithoutDepartementInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartementInput | UserCreateOrConnectWithoutDepartementInput[]
    createMany?: UserCreateManyDepartementInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
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

  export type UserUpdateManyWithoutDepartementNestedInput = {
    create?: XOR<UserCreateWithoutDepartementInput, UserUncheckedCreateWithoutDepartementInput> | UserCreateWithoutDepartementInput[] | UserUncheckedCreateWithoutDepartementInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartementInput | UserCreateOrConnectWithoutDepartementInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDepartementInput | UserUpsertWithWhereUniqueWithoutDepartementInput[]
    createMany?: UserCreateManyDepartementInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDepartementInput | UserUpdateWithWhereUniqueWithoutDepartementInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDepartementInput | UserUpdateManyWithWhereWithoutDepartementInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
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

  export type UserUncheckedUpdateManyWithoutDepartementNestedInput = {
    create?: XOR<UserCreateWithoutDepartementInput, UserUncheckedCreateWithoutDepartementInput> | UserCreateWithoutDepartementInput[] | UserUncheckedCreateWithoutDepartementInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartementInput | UserCreateOrConnectWithoutDepartementInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDepartementInput | UserUpsertWithWhereUniqueWithoutDepartementInput[]
    createMany?: UserCreateManyDepartementInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDepartementInput | UserUpdateWithWhereUniqueWithoutDepartementInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDepartementInput | UserUpdateManyWithWhereWithoutDepartementInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
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

  export type DepartementCreateNestedOneWithoutUsersInput = {
    create?: XOR<DepartementCreateWithoutUsersInput, DepartementUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DepartementCreateOrConnectWithoutUsersInput
    connect?: DepartementWhereUniqueInput
  }

  export type MembreProjetCreateNestedManyWithoutUserInput = {
    create?: XOR<MembreProjetCreateWithoutUserInput, MembreProjetUncheckedCreateWithoutUserInput> | MembreProjetCreateWithoutUserInput[] | MembreProjetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MembreProjetCreateOrConnectWithoutUserInput | MembreProjetCreateOrConnectWithoutUserInput[]
    createMany?: MembreProjetCreateManyUserInputEnvelope
    connect?: MembreProjetWhereUniqueInput | MembreProjetWhereUniqueInput[]
  }

  export type TacheUtilisateurCreateNestedManyWithoutUserInput = {
    create?: XOR<TacheUtilisateurCreateWithoutUserInput, TacheUtilisateurUncheckedCreateWithoutUserInput> | TacheUtilisateurCreateWithoutUserInput[] | TacheUtilisateurUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TacheUtilisateurCreateOrConnectWithoutUserInput | TacheUtilisateurCreateOrConnectWithoutUserInput[]
    createMany?: TacheUtilisateurCreateManyUserInputEnvelope
    connect?: TacheUtilisateurWhereUniqueInput | TacheUtilisateurWhereUniqueInput[]
  }

  export type PartageDocumentCreateNestedManyWithoutUserInput = {
    create?: XOR<PartageDocumentCreateWithoutUserInput, PartageDocumentUncheckedCreateWithoutUserInput> | PartageDocumentCreateWithoutUserInput[] | PartageDocumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PartageDocumentCreateOrConnectWithoutUserInput | PartageDocumentCreateOrConnectWithoutUserInput[]
    createMany?: PartageDocumentCreateManyUserInputEnvelope
    connect?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
  }

  export type PartageDocumentCreateNestedManyWithoutPartageurInput = {
    create?: XOR<PartageDocumentCreateWithoutPartageurInput, PartageDocumentUncheckedCreateWithoutPartageurInput> | PartageDocumentCreateWithoutPartageurInput[] | PartageDocumentUncheckedCreateWithoutPartageurInput[]
    connectOrCreate?: PartageDocumentCreateOrConnectWithoutPartageurInput | PartageDocumentCreateOrConnectWithoutPartageurInput[]
    createMany?: PartageDocumentCreateManyPartageurInputEnvelope
    connect?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type MembreProjetUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MembreProjetCreateWithoutUserInput, MembreProjetUncheckedCreateWithoutUserInput> | MembreProjetCreateWithoutUserInput[] | MembreProjetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MembreProjetCreateOrConnectWithoutUserInput | MembreProjetCreateOrConnectWithoutUserInput[]
    createMany?: MembreProjetCreateManyUserInputEnvelope
    connect?: MembreProjetWhereUniqueInput | MembreProjetWhereUniqueInput[]
  }

  export type TacheUtilisateurUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TacheUtilisateurCreateWithoutUserInput, TacheUtilisateurUncheckedCreateWithoutUserInput> | TacheUtilisateurCreateWithoutUserInput[] | TacheUtilisateurUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TacheUtilisateurCreateOrConnectWithoutUserInput | TacheUtilisateurCreateOrConnectWithoutUserInput[]
    createMany?: TacheUtilisateurCreateManyUserInputEnvelope
    connect?: TacheUtilisateurWhereUniqueInput | TacheUtilisateurWhereUniqueInput[]
  }

  export type PartageDocumentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PartageDocumentCreateWithoutUserInput, PartageDocumentUncheckedCreateWithoutUserInput> | PartageDocumentCreateWithoutUserInput[] | PartageDocumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PartageDocumentCreateOrConnectWithoutUserInput | PartageDocumentCreateOrConnectWithoutUserInput[]
    createMany?: PartageDocumentCreateManyUserInputEnvelope
    connect?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
  }

  export type PartageDocumentUncheckedCreateNestedManyWithoutPartageurInput = {
    create?: XOR<PartageDocumentCreateWithoutPartageurInput, PartageDocumentUncheckedCreateWithoutPartageurInput> | PartageDocumentCreateWithoutPartageurInput[] | PartageDocumentUncheckedCreateWithoutPartageurInput[]
    connectOrCreate?: PartageDocumentCreateOrConnectWithoutPartageurInput | PartageDocumentCreateOrConnectWithoutPartageurInput[]
    createMany?: PartageDocumentCreateManyPartageurInputEnvelope
    connect?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DepartementUpdateOneWithoutUsersNestedInput = {
    create?: XOR<DepartementCreateWithoutUsersInput, DepartementUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DepartementCreateOrConnectWithoutUsersInput
    upsert?: DepartementUpsertWithoutUsersInput
    disconnect?: DepartementWhereInput | boolean
    delete?: DepartementWhereInput | boolean
    connect?: DepartementWhereUniqueInput
    update?: XOR<XOR<DepartementUpdateToOneWithWhereWithoutUsersInput, DepartementUpdateWithoutUsersInput>, DepartementUncheckedUpdateWithoutUsersInput>
  }

  export type MembreProjetUpdateManyWithoutUserNestedInput = {
    create?: XOR<MembreProjetCreateWithoutUserInput, MembreProjetUncheckedCreateWithoutUserInput> | MembreProjetCreateWithoutUserInput[] | MembreProjetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MembreProjetCreateOrConnectWithoutUserInput | MembreProjetCreateOrConnectWithoutUserInput[]
    upsert?: MembreProjetUpsertWithWhereUniqueWithoutUserInput | MembreProjetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MembreProjetCreateManyUserInputEnvelope
    set?: MembreProjetWhereUniqueInput | MembreProjetWhereUniqueInput[]
    disconnect?: MembreProjetWhereUniqueInput | MembreProjetWhereUniqueInput[]
    delete?: MembreProjetWhereUniqueInput | MembreProjetWhereUniqueInput[]
    connect?: MembreProjetWhereUniqueInput | MembreProjetWhereUniqueInput[]
    update?: MembreProjetUpdateWithWhereUniqueWithoutUserInput | MembreProjetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MembreProjetUpdateManyWithWhereWithoutUserInput | MembreProjetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MembreProjetScalarWhereInput | MembreProjetScalarWhereInput[]
  }

  export type TacheUtilisateurUpdateManyWithoutUserNestedInput = {
    create?: XOR<TacheUtilisateurCreateWithoutUserInput, TacheUtilisateurUncheckedCreateWithoutUserInput> | TacheUtilisateurCreateWithoutUserInput[] | TacheUtilisateurUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TacheUtilisateurCreateOrConnectWithoutUserInput | TacheUtilisateurCreateOrConnectWithoutUserInput[]
    upsert?: TacheUtilisateurUpsertWithWhereUniqueWithoutUserInput | TacheUtilisateurUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TacheUtilisateurCreateManyUserInputEnvelope
    set?: TacheUtilisateurWhereUniqueInput | TacheUtilisateurWhereUniqueInput[]
    disconnect?: TacheUtilisateurWhereUniqueInput | TacheUtilisateurWhereUniqueInput[]
    delete?: TacheUtilisateurWhereUniqueInput | TacheUtilisateurWhereUniqueInput[]
    connect?: TacheUtilisateurWhereUniqueInput | TacheUtilisateurWhereUniqueInput[]
    update?: TacheUtilisateurUpdateWithWhereUniqueWithoutUserInput | TacheUtilisateurUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TacheUtilisateurUpdateManyWithWhereWithoutUserInput | TacheUtilisateurUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TacheUtilisateurScalarWhereInput | TacheUtilisateurScalarWhereInput[]
  }

  export type PartageDocumentUpdateManyWithoutUserNestedInput = {
    create?: XOR<PartageDocumentCreateWithoutUserInput, PartageDocumentUncheckedCreateWithoutUserInput> | PartageDocumentCreateWithoutUserInput[] | PartageDocumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PartageDocumentCreateOrConnectWithoutUserInput | PartageDocumentCreateOrConnectWithoutUserInput[]
    upsert?: PartageDocumentUpsertWithWhereUniqueWithoutUserInput | PartageDocumentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PartageDocumentCreateManyUserInputEnvelope
    set?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
    disconnect?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
    delete?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
    connect?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
    update?: PartageDocumentUpdateWithWhereUniqueWithoutUserInput | PartageDocumentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PartageDocumentUpdateManyWithWhereWithoutUserInput | PartageDocumentUpdateManyWithWhereWithoutUserInput[]
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

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MembreProjetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MembreProjetCreateWithoutUserInput, MembreProjetUncheckedCreateWithoutUserInput> | MembreProjetCreateWithoutUserInput[] | MembreProjetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MembreProjetCreateOrConnectWithoutUserInput | MembreProjetCreateOrConnectWithoutUserInput[]
    upsert?: MembreProjetUpsertWithWhereUniqueWithoutUserInput | MembreProjetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MembreProjetCreateManyUserInputEnvelope
    set?: MembreProjetWhereUniqueInput | MembreProjetWhereUniqueInput[]
    disconnect?: MembreProjetWhereUniqueInput | MembreProjetWhereUniqueInput[]
    delete?: MembreProjetWhereUniqueInput | MembreProjetWhereUniqueInput[]
    connect?: MembreProjetWhereUniqueInput | MembreProjetWhereUniqueInput[]
    update?: MembreProjetUpdateWithWhereUniqueWithoutUserInput | MembreProjetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MembreProjetUpdateManyWithWhereWithoutUserInput | MembreProjetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MembreProjetScalarWhereInput | MembreProjetScalarWhereInput[]
  }

  export type TacheUtilisateurUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TacheUtilisateurCreateWithoutUserInput, TacheUtilisateurUncheckedCreateWithoutUserInput> | TacheUtilisateurCreateWithoutUserInput[] | TacheUtilisateurUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TacheUtilisateurCreateOrConnectWithoutUserInput | TacheUtilisateurCreateOrConnectWithoutUserInput[]
    upsert?: TacheUtilisateurUpsertWithWhereUniqueWithoutUserInput | TacheUtilisateurUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TacheUtilisateurCreateManyUserInputEnvelope
    set?: TacheUtilisateurWhereUniqueInput | TacheUtilisateurWhereUniqueInput[]
    disconnect?: TacheUtilisateurWhereUniqueInput | TacheUtilisateurWhereUniqueInput[]
    delete?: TacheUtilisateurWhereUniqueInput | TacheUtilisateurWhereUniqueInput[]
    connect?: TacheUtilisateurWhereUniqueInput | TacheUtilisateurWhereUniqueInput[]
    update?: TacheUtilisateurUpdateWithWhereUniqueWithoutUserInput | TacheUtilisateurUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TacheUtilisateurUpdateManyWithWhereWithoutUserInput | TacheUtilisateurUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TacheUtilisateurScalarWhereInput | TacheUtilisateurScalarWhereInput[]
  }

  export type PartageDocumentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PartageDocumentCreateWithoutUserInput, PartageDocumentUncheckedCreateWithoutUserInput> | PartageDocumentCreateWithoutUserInput[] | PartageDocumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PartageDocumentCreateOrConnectWithoutUserInput | PartageDocumentCreateOrConnectWithoutUserInput[]
    upsert?: PartageDocumentUpsertWithWhereUniqueWithoutUserInput | PartageDocumentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PartageDocumentCreateManyUserInputEnvelope
    set?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
    disconnect?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
    delete?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
    connect?: PartageDocumentWhereUniqueInput | PartageDocumentWhereUniqueInput[]
    update?: PartageDocumentUpdateWithWhereUniqueWithoutUserInput | PartageDocumentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PartageDocumentUpdateManyWithWhereWithoutUserInput | PartageDocumentUpdateManyWithWhereWithoutUserInput[]
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

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
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

  export type TacheUtilisateurCreateNestedManyWithoutTacheInput = {
    create?: XOR<TacheUtilisateurCreateWithoutTacheInput, TacheUtilisateurUncheckedCreateWithoutTacheInput> | TacheUtilisateurCreateWithoutTacheInput[] | TacheUtilisateurUncheckedCreateWithoutTacheInput[]
    connectOrCreate?: TacheUtilisateurCreateOrConnectWithoutTacheInput | TacheUtilisateurCreateOrConnectWithoutTacheInput[]
    createMany?: TacheUtilisateurCreateManyTacheInputEnvelope
    connect?: TacheUtilisateurWhereUniqueInput | TacheUtilisateurWhereUniqueInput[]
  }

  export type TacheUtilisateurUncheckedCreateNestedManyWithoutTacheInput = {
    create?: XOR<TacheUtilisateurCreateWithoutTacheInput, TacheUtilisateurUncheckedCreateWithoutTacheInput> | TacheUtilisateurCreateWithoutTacheInput[] | TacheUtilisateurUncheckedCreateWithoutTacheInput[]
    connectOrCreate?: TacheUtilisateurCreateOrConnectWithoutTacheInput | TacheUtilisateurCreateOrConnectWithoutTacheInput[]
    createMany?: TacheUtilisateurCreateManyTacheInputEnvelope
    connect?: TacheUtilisateurWhereUniqueInput | TacheUtilisateurWhereUniqueInput[]
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

  export type TacheUtilisateurUpdateManyWithoutTacheNestedInput = {
    create?: XOR<TacheUtilisateurCreateWithoutTacheInput, TacheUtilisateurUncheckedCreateWithoutTacheInput> | TacheUtilisateurCreateWithoutTacheInput[] | TacheUtilisateurUncheckedCreateWithoutTacheInput[]
    connectOrCreate?: TacheUtilisateurCreateOrConnectWithoutTacheInput | TacheUtilisateurCreateOrConnectWithoutTacheInput[]
    upsert?: TacheUtilisateurUpsertWithWhereUniqueWithoutTacheInput | TacheUtilisateurUpsertWithWhereUniqueWithoutTacheInput[]
    createMany?: TacheUtilisateurCreateManyTacheInputEnvelope
    set?: TacheUtilisateurWhereUniqueInput | TacheUtilisateurWhereUniqueInput[]
    disconnect?: TacheUtilisateurWhereUniqueInput | TacheUtilisateurWhereUniqueInput[]
    delete?: TacheUtilisateurWhereUniqueInput | TacheUtilisateurWhereUniqueInput[]
    connect?: TacheUtilisateurWhereUniqueInput | TacheUtilisateurWhereUniqueInput[]
    update?: TacheUtilisateurUpdateWithWhereUniqueWithoutTacheInput | TacheUtilisateurUpdateWithWhereUniqueWithoutTacheInput[]
    updateMany?: TacheUtilisateurUpdateManyWithWhereWithoutTacheInput | TacheUtilisateurUpdateManyWithWhereWithoutTacheInput[]
    deleteMany?: TacheUtilisateurScalarWhereInput | TacheUtilisateurScalarWhereInput[]
  }

  export type TacheUtilisateurUncheckedUpdateManyWithoutTacheNestedInput = {
    create?: XOR<TacheUtilisateurCreateWithoutTacheInput, TacheUtilisateurUncheckedCreateWithoutTacheInput> | TacheUtilisateurCreateWithoutTacheInput[] | TacheUtilisateurUncheckedCreateWithoutTacheInput[]
    connectOrCreate?: TacheUtilisateurCreateOrConnectWithoutTacheInput | TacheUtilisateurCreateOrConnectWithoutTacheInput[]
    upsert?: TacheUtilisateurUpsertWithWhereUniqueWithoutTacheInput | TacheUtilisateurUpsertWithWhereUniqueWithoutTacheInput[]
    createMany?: TacheUtilisateurCreateManyTacheInputEnvelope
    set?: TacheUtilisateurWhereUniqueInput | TacheUtilisateurWhereUniqueInput[]
    disconnect?: TacheUtilisateurWhereUniqueInput | TacheUtilisateurWhereUniqueInput[]
    delete?: TacheUtilisateurWhereUniqueInput | TacheUtilisateurWhereUniqueInput[]
    connect?: TacheUtilisateurWhereUniqueInput | TacheUtilisateurWhereUniqueInput[]
    update?: TacheUtilisateurUpdateWithWhereUniqueWithoutTacheInput | TacheUtilisateurUpdateWithWhereUniqueWithoutTacheInput[]
    updateMany?: TacheUtilisateurUpdateManyWithWhereWithoutTacheInput | TacheUtilisateurUpdateManyWithWhereWithoutTacheInput[]
    deleteMany?: TacheUtilisateurScalarWhereInput | TacheUtilisateurScalarWhereInput[]
  }

  export type TacheCreateNestedOneWithoutTacheUtilisateurInput = {
    create?: XOR<TacheCreateWithoutTacheUtilisateurInput, TacheUncheckedCreateWithoutTacheUtilisateurInput>
    connectOrCreate?: TacheCreateOrConnectWithoutTacheUtilisateurInput
    connect?: TacheWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTachesInput = {
    create?: XOR<UserCreateWithoutTachesInput, UserUncheckedCreateWithoutTachesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTachesInput
    connect?: UserWhereUniqueInput
  }

  export type TacheUpdateOneRequiredWithoutTacheUtilisateurNestedInput = {
    create?: XOR<TacheCreateWithoutTacheUtilisateurInput, TacheUncheckedCreateWithoutTacheUtilisateurInput>
    connectOrCreate?: TacheCreateOrConnectWithoutTacheUtilisateurInput
    upsert?: TacheUpsertWithoutTacheUtilisateurInput
    connect?: TacheWhereUniqueInput
    update?: XOR<XOR<TacheUpdateToOneWithWhereWithoutTacheUtilisateurInput, TacheUpdateWithoutTacheUtilisateurInput>, TacheUncheckedUpdateWithoutTacheUtilisateurInput>
  }

  export type UserUpdateOneRequiredWithoutTachesNestedInput = {
    create?: XOR<UserCreateWithoutTachesInput, UserUncheckedCreateWithoutTachesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTachesInput
    upsert?: UserUpsertWithoutTachesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTachesInput, UserUpdateWithoutTachesInput>, UserUncheckedUpdateWithoutTachesInput>
  }

  export type UserCreateNestedOneWithoutProjetsInput = {
    create?: XOR<UserCreateWithoutProjetsInput, UserUncheckedCreateWithoutProjetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjetsInput
    connect?: UserWhereUniqueInput
  }

  export type ProjetCreateNestedOneWithoutMembresInput = {
    create?: XOR<ProjetCreateWithoutMembresInput, ProjetUncheckedCreateWithoutMembresInput>
    connectOrCreate?: ProjetCreateOrConnectWithoutMembresInput
    connect?: ProjetWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProjetsNestedInput = {
    create?: XOR<UserCreateWithoutProjetsInput, UserUncheckedCreateWithoutProjetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjetsInput
    upsert?: UserUpsertWithoutProjetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjetsInput, UserUpdateWithoutProjetsInput>, UserUncheckedUpdateWithoutProjetsInput>
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

  export type UserCreateNestedOneWithoutPartagesInput = {
    create?: XOR<UserCreateWithoutPartagesInput, UserUncheckedCreateWithoutPartagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPartagesInput
    connect?: UserWhereUniqueInput
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

  export type UserCreateNestedOneWithoutPartagesEnTantQuePartageurInput = {
    create?: XOR<UserCreateWithoutPartagesEnTantQuePartageurInput, UserUncheckedCreateWithoutPartagesEnTantQuePartageurInput>
    connectOrCreate?: UserCreateOrConnectWithoutPartagesEnTantQuePartageurInput
    connect?: UserWhereUniqueInput
  }

  export type DocumentUpdateOneRequiredWithoutPartagesNestedInput = {
    create?: XOR<DocumentCreateWithoutPartagesInput, DocumentUncheckedCreateWithoutPartagesInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutPartagesInput
    upsert?: DocumentUpsertWithoutPartagesInput
    connect?: DocumentWhereUniqueInput
    update?: XOR<XOR<DocumentUpdateToOneWithWhereWithoutPartagesInput, DocumentUpdateWithoutPartagesInput>, DocumentUncheckedUpdateWithoutPartagesInput>
  }

  export type UserUpdateOneWithoutPartagesNestedInput = {
    create?: XOR<UserCreateWithoutPartagesInput, UserUncheckedCreateWithoutPartagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPartagesInput
    upsert?: UserUpsertWithoutPartagesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPartagesInput, UserUpdateWithoutPartagesInput>, UserUncheckedUpdateWithoutPartagesInput>
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

  export type UserUpdateOneRequiredWithoutPartagesEnTantQuePartageurNestedInput = {
    create?: XOR<UserCreateWithoutPartagesEnTantQuePartageurInput, UserUncheckedCreateWithoutPartagesEnTantQuePartageurInput>
    connectOrCreate?: UserCreateOrConnectWithoutPartagesEnTantQuePartageurInput
    upsert?: UserUpsertWithoutPartagesEnTantQuePartageurInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPartagesEnTantQuePartageurInput, UserUpdateWithoutPartagesEnTantQuePartageurInput>, UserUncheckedUpdateWithoutPartagesEnTantQuePartageurInput>
  }

  export type DocumentCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<DocumentCreateWithoutNotificationsInput, DocumentUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutNotificationsInput
    connect?: DocumentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
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

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
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

  export type UserCreateWithoutDepartementInput = {
    nom: string
    prenom: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    projets?: MembreProjetCreateNestedManyWithoutUserInput
    taches?: TacheUtilisateurCreateNestedManyWithoutUserInput
    partages?: PartageDocumentCreateNestedManyWithoutUserInput
    partagesEnTantQuePartageur?: PartageDocumentCreateNestedManyWithoutPartageurInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDepartementInput = {
    id?: number
    nom: string
    prenom: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    projets?: MembreProjetUncheckedCreateNestedManyWithoutUserInput
    taches?: TacheUtilisateurUncheckedCreateNestedManyWithoutUserInput
    partages?: PartageDocumentUncheckedCreateNestedManyWithoutUserInput
    partagesEnTantQuePartageur?: PartageDocumentUncheckedCreateNestedManyWithoutPartageurInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDepartementInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDepartementInput, UserUncheckedCreateWithoutDepartementInput>
  }

  export type UserCreateManyDepartementInputEnvelope = {
    data: UserCreateManyDepartementInput | UserCreateManyDepartementInput[]
  }

  export type PartageDocumentCreateWithoutDepartementInput = {
    datePartage?: Date | string
    historique?: string | null
    document: DocumentCreateNestedOneWithoutPartagesInput
    user?: UserCreateNestedOneWithoutPartagesInput
    projet?: ProjetCreateNestedOneWithoutPartagesInput
    partageur: UserCreateNestedOneWithoutPartagesEnTantQuePartageurInput
  }

  export type PartageDocumentUncheckedCreateWithoutDepartementInput = {
    id?: number
    documentId: number
    userId?: number | null
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

  export type UserUpsertWithWhereUniqueWithoutDepartementInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutDepartementInput, UserUncheckedUpdateWithoutDepartementInput>
    create: XOR<UserCreateWithoutDepartementInput, UserUncheckedCreateWithoutDepartementInput>
  }

  export type UserUpdateWithWhereUniqueWithoutDepartementInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutDepartementInput, UserUncheckedUpdateWithoutDepartementInput>
  }

  export type UserUpdateManyWithWhereWithoutDepartementInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutDepartementInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    nom?: StringFilter<"User"> | string
    prenom?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    departementId?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
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
    userId?: IntNullableFilter<"PartageDocument"> | number | null
    departementId?: IntNullableFilter<"PartageDocument"> | number | null
    projetId?: IntNullableFilter<"PartageDocument"> | number | null
    datePartage?: DateTimeFilter<"PartageDocument"> | Date | string
    partageurId?: IntFilter<"PartageDocument"> | number
    historique?: StringNullableFilter<"PartageDocument"> | string | null
  }

  export type DepartementCreateWithoutUsersInput = {
    nom: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projets?: ProjetCreateNestedManyWithoutDepartementInput
    partages?: PartageDocumentCreateNestedManyWithoutDepartementInput
  }

  export type DepartementUncheckedCreateWithoutUsersInput = {
    id?: number
    nom: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projets?: ProjetUncheckedCreateNestedManyWithoutDepartementInput
    partages?: PartageDocumentUncheckedCreateNestedManyWithoutDepartementInput
  }

  export type DepartementCreateOrConnectWithoutUsersInput = {
    where: DepartementWhereUniqueInput
    create: XOR<DepartementCreateWithoutUsersInput, DepartementUncheckedCreateWithoutUsersInput>
  }

  export type MembreProjetCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    projet: ProjetCreateNestedOneWithoutMembresInput
  }

  export type MembreProjetUncheckedCreateWithoutUserInput = {
    projetId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MembreProjetCreateOrConnectWithoutUserInput = {
    where: MembreProjetWhereUniqueInput
    create: XOR<MembreProjetCreateWithoutUserInput, MembreProjetUncheckedCreateWithoutUserInput>
  }

  export type MembreProjetCreateManyUserInputEnvelope = {
    data: MembreProjetCreateManyUserInput | MembreProjetCreateManyUserInput[]
  }

  export type TacheUtilisateurCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    tache: TacheCreateNestedOneWithoutTacheUtilisateurInput
  }

  export type TacheUtilisateurUncheckedCreateWithoutUserInput = {
    tacheId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TacheUtilisateurCreateOrConnectWithoutUserInput = {
    where: TacheUtilisateurWhereUniqueInput
    create: XOR<TacheUtilisateurCreateWithoutUserInput, TacheUtilisateurUncheckedCreateWithoutUserInput>
  }

  export type TacheUtilisateurCreateManyUserInputEnvelope = {
    data: TacheUtilisateurCreateManyUserInput | TacheUtilisateurCreateManyUserInput[]
  }

  export type PartageDocumentCreateWithoutUserInput = {
    datePartage?: Date | string
    historique?: string | null
    document: DocumentCreateNestedOneWithoutPartagesInput
    departement?: DepartementCreateNestedOneWithoutPartagesInput
    projet?: ProjetCreateNestedOneWithoutPartagesInput
    partageur: UserCreateNestedOneWithoutPartagesEnTantQuePartageurInput
  }

  export type PartageDocumentUncheckedCreateWithoutUserInput = {
    id?: number
    documentId: number
    departementId?: number | null
    projetId?: number | null
    datePartage?: Date | string
    partageurId: number
    historique?: string | null
  }

  export type PartageDocumentCreateOrConnectWithoutUserInput = {
    where: PartageDocumentWhereUniqueInput
    create: XOR<PartageDocumentCreateWithoutUserInput, PartageDocumentUncheckedCreateWithoutUserInput>
  }

  export type PartageDocumentCreateManyUserInputEnvelope = {
    data: PartageDocumentCreateManyUserInput | PartageDocumentCreateManyUserInput[]
  }

  export type PartageDocumentCreateWithoutPartageurInput = {
    datePartage?: Date | string
    historique?: string | null
    document: DocumentCreateNestedOneWithoutPartagesInput
    user?: UserCreateNestedOneWithoutPartagesInput
    departement?: DepartementCreateNestedOneWithoutPartagesInput
    projet?: ProjetCreateNestedOneWithoutPartagesInput
  }

  export type PartageDocumentUncheckedCreateWithoutPartageurInput = {
    id?: number
    documentId: number
    userId?: number | null
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

  export type NotificationCreateWithoutUserInput = {
    message: string
    dateNotification?: Date | string
    vu?: boolean
    document: DocumentCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: number
    message: string
    dateNotification?: Date | string
    documentId: number
    vu?: boolean
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
  }

  export type DepartementUpsertWithoutUsersInput = {
    update: XOR<DepartementUpdateWithoutUsersInput, DepartementUncheckedUpdateWithoutUsersInput>
    create: XOR<DepartementCreateWithoutUsersInput, DepartementUncheckedCreateWithoutUsersInput>
    where?: DepartementWhereInput
  }

  export type DepartementUpdateToOneWithWhereWithoutUsersInput = {
    where?: DepartementWhereInput
    data: XOR<DepartementUpdateWithoutUsersInput, DepartementUncheckedUpdateWithoutUsersInput>
  }

  export type DepartementUpdateWithoutUsersInput = {
    nom?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projets?: ProjetUpdateManyWithoutDepartementNestedInput
    partages?: PartageDocumentUpdateManyWithoutDepartementNestedInput
  }

  export type DepartementUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projets?: ProjetUncheckedUpdateManyWithoutDepartementNestedInput
    partages?: PartageDocumentUncheckedUpdateManyWithoutDepartementNestedInput
  }

  export type MembreProjetUpsertWithWhereUniqueWithoutUserInput = {
    where: MembreProjetWhereUniqueInput
    update: XOR<MembreProjetUpdateWithoutUserInput, MembreProjetUncheckedUpdateWithoutUserInput>
    create: XOR<MembreProjetCreateWithoutUserInput, MembreProjetUncheckedCreateWithoutUserInput>
  }

  export type MembreProjetUpdateWithWhereUniqueWithoutUserInput = {
    where: MembreProjetWhereUniqueInput
    data: XOR<MembreProjetUpdateWithoutUserInput, MembreProjetUncheckedUpdateWithoutUserInput>
  }

  export type MembreProjetUpdateManyWithWhereWithoutUserInput = {
    where: MembreProjetScalarWhereInput
    data: XOR<MembreProjetUpdateManyMutationInput, MembreProjetUncheckedUpdateManyWithoutUserInput>
  }

  export type MembreProjetScalarWhereInput = {
    AND?: MembreProjetScalarWhereInput | MembreProjetScalarWhereInput[]
    OR?: MembreProjetScalarWhereInput[]
    NOT?: MembreProjetScalarWhereInput | MembreProjetScalarWhereInput[]
    userId?: IntFilter<"MembreProjet"> | number
    projetId?: IntFilter<"MembreProjet"> | number
    createdAt?: DateTimeFilter<"MembreProjet"> | Date | string
    updatedAt?: DateTimeFilter<"MembreProjet"> | Date | string
  }

  export type TacheUtilisateurUpsertWithWhereUniqueWithoutUserInput = {
    where: TacheUtilisateurWhereUniqueInput
    update: XOR<TacheUtilisateurUpdateWithoutUserInput, TacheUtilisateurUncheckedUpdateWithoutUserInput>
    create: XOR<TacheUtilisateurCreateWithoutUserInput, TacheUtilisateurUncheckedCreateWithoutUserInput>
  }

  export type TacheUtilisateurUpdateWithWhereUniqueWithoutUserInput = {
    where: TacheUtilisateurWhereUniqueInput
    data: XOR<TacheUtilisateurUpdateWithoutUserInput, TacheUtilisateurUncheckedUpdateWithoutUserInput>
  }

  export type TacheUtilisateurUpdateManyWithWhereWithoutUserInput = {
    where: TacheUtilisateurScalarWhereInput
    data: XOR<TacheUtilisateurUpdateManyMutationInput, TacheUtilisateurUncheckedUpdateManyWithoutUserInput>
  }

  export type TacheUtilisateurScalarWhereInput = {
    AND?: TacheUtilisateurScalarWhereInput | TacheUtilisateurScalarWhereInput[]
    OR?: TacheUtilisateurScalarWhereInput[]
    NOT?: TacheUtilisateurScalarWhereInput | TacheUtilisateurScalarWhereInput[]
    tacheId?: IntFilter<"TacheUtilisateur"> | number
    userId?: IntFilter<"TacheUtilisateur"> | number
    createdAt?: DateTimeFilter<"TacheUtilisateur"> | Date | string
    updatedAt?: DateTimeFilter<"TacheUtilisateur"> | Date | string
  }

  export type PartageDocumentUpsertWithWhereUniqueWithoutUserInput = {
    where: PartageDocumentWhereUniqueInput
    update: XOR<PartageDocumentUpdateWithoutUserInput, PartageDocumentUncheckedUpdateWithoutUserInput>
    create: XOR<PartageDocumentCreateWithoutUserInput, PartageDocumentUncheckedCreateWithoutUserInput>
  }

  export type PartageDocumentUpdateWithWhereUniqueWithoutUserInput = {
    where: PartageDocumentWhereUniqueInput
    data: XOR<PartageDocumentUpdateWithoutUserInput, PartageDocumentUncheckedUpdateWithoutUserInput>
  }

  export type PartageDocumentUpdateManyWithWhereWithoutUserInput = {
    where: PartageDocumentScalarWhereInput
    data: XOR<PartageDocumentUpdateManyMutationInput, PartageDocumentUncheckedUpdateManyWithoutUserInput>
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

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: IntFilter<"Notification"> | number
    userId?: IntFilter<"Notification"> | number
    message?: StringFilter<"Notification"> | string
    dateNotification?: DateTimeFilter<"Notification"> | Date | string
    documentId?: IntFilter<"Notification"> | number
    vu?: BoolFilter<"Notification"> | boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: IntFilter<"Account"> | number
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: IntFilter<"Session"> | number
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type PartageDocumentCreateWithoutDocumentInput = {
    datePartage?: Date | string
    historique?: string | null
    user?: UserCreateNestedOneWithoutPartagesInput
    departement?: DepartementCreateNestedOneWithoutPartagesInput
    projet?: ProjetCreateNestedOneWithoutPartagesInput
    partageur: UserCreateNestedOneWithoutPartagesEnTantQuePartageurInput
  }

  export type PartageDocumentUncheckedCreateWithoutDocumentInput = {
    id?: number
    userId?: number | null
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
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutDocumentInput = {
    id?: number
    userId: number
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
    users?: UserCreateNestedManyWithoutDepartementInput
    partages?: PartageDocumentCreateNestedManyWithoutDepartementInput
  }

  export type DepartementUncheckedCreateWithoutProjetsInput = {
    id?: number
    nom: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutDepartementInput
    partages?: PartageDocumentUncheckedCreateNestedManyWithoutDepartementInput
  }

  export type DepartementCreateOrConnectWithoutProjetsInput = {
    where: DepartementWhereUniqueInput
    create: XOR<DepartementCreateWithoutProjetsInput, DepartementUncheckedCreateWithoutProjetsInput>
  }

  export type MembreProjetCreateWithoutProjetInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProjetsInput
  }

  export type MembreProjetUncheckedCreateWithoutProjetInput = {
    userId: number
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
    TacheUtilisateur?: TacheUtilisateurCreateNestedManyWithoutTacheInput
  }

  export type TacheUncheckedCreateWithoutProjetInput = {
    id?: number
    titre: string
    description?: string | null
    deadline?: Date | string | null
    statut: $Enums.TacheStatut
    createdAt?: Date | string
    updatedAt?: Date | string
    TacheUtilisateur?: TacheUtilisateurUncheckedCreateNestedManyWithoutTacheInput
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
    user?: UserCreateNestedOneWithoutPartagesInput
    departement?: DepartementCreateNestedOneWithoutPartagesInput
    partageur: UserCreateNestedOneWithoutPartagesEnTantQuePartageurInput
  }

  export type PartageDocumentUncheckedCreateWithoutProjetInput = {
    id?: number
    documentId: number
    userId?: number | null
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
    users?: UserUpdateManyWithoutDepartementNestedInput
    partages?: PartageDocumentUpdateManyWithoutDepartementNestedInput
  }

  export type DepartementUncheckedUpdateWithoutProjetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutDepartementNestedInput
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

  export type TacheUtilisateurCreateWithoutTacheInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTachesInput
  }

  export type TacheUtilisateurUncheckedCreateWithoutTacheInput = {
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TacheUtilisateurCreateOrConnectWithoutTacheInput = {
    where: TacheUtilisateurWhereUniqueInput
    create: XOR<TacheUtilisateurCreateWithoutTacheInput, TacheUtilisateurUncheckedCreateWithoutTacheInput>
  }

  export type TacheUtilisateurCreateManyTacheInputEnvelope = {
    data: TacheUtilisateurCreateManyTacheInput | TacheUtilisateurCreateManyTacheInput[]
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

  export type TacheUtilisateurUpsertWithWhereUniqueWithoutTacheInput = {
    where: TacheUtilisateurWhereUniqueInput
    update: XOR<TacheUtilisateurUpdateWithoutTacheInput, TacheUtilisateurUncheckedUpdateWithoutTacheInput>
    create: XOR<TacheUtilisateurCreateWithoutTacheInput, TacheUtilisateurUncheckedCreateWithoutTacheInput>
  }

  export type TacheUtilisateurUpdateWithWhereUniqueWithoutTacheInput = {
    where: TacheUtilisateurWhereUniqueInput
    data: XOR<TacheUtilisateurUpdateWithoutTacheInput, TacheUtilisateurUncheckedUpdateWithoutTacheInput>
  }

  export type TacheUtilisateurUpdateManyWithWhereWithoutTacheInput = {
    where: TacheUtilisateurScalarWhereInput
    data: XOR<TacheUtilisateurUpdateManyMutationInput, TacheUtilisateurUncheckedUpdateManyWithoutTacheInput>
  }

  export type TacheCreateWithoutTacheUtilisateurInput = {
    titre: string
    description?: string | null
    deadline?: Date | string | null
    statut: $Enums.TacheStatut
    createdAt?: Date | string
    updatedAt?: Date | string
    projet: ProjetCreateNestedOneWithoutTachesInput
  }

  export type TacheUncheckedCreateWithoutTacheUtilisateurInput = {
    id?: number
    titre: string
    description?: string | null
    projetId: number
    deadline?: Date | string | null
    statut: $Enums.TacheStatut
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TacheCreateOrConnectWithoutTacheUtilisateurInput = {
    where: TacheWhereUniqueInput
    create: XOR<TacheCreateWithoutTacheUtilisateurInput, TacheUncheckedCreateWithoutTacheUtilisateurInput>
  }

  export type UserCreateWithoutTachesInput = {
    nom: string
    prenom: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    departement?: DepartementCreateNestedOneWithoutUsersInput
    projets?: MembreProjetCreateNestedManyWithoutUserInput
    partages?: PartageDocumentCreateNestedManyWithoutUserInput
    partagesEnTantQuePartageur?: PartageDocumentCreateNestedManyWithoutPartageurInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTachesInput = {
    id?: number
    nom: string
    prenom: string
    email: string
    password: string
    role?: $Enums.Role
    departementId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projets?: MembreProjetUncheckedCreateNestedManyWithoutUserInput
    partages?: PartageDocumentUncheckedCreateNestedManyWithoutUserInput
    partagesEnTantQuePartageur?: PartageDocumentUncheckedCreateNestedManyWithoutPartageurInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTachesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTachesInput, UserUncheckedCreateWithoutTachesInput>
  }

  export type TacheUpsertWithoutTacheUtilisateurInput = {
    update: XOR<TacheUpdateWithoutTacheUtilisateurInput, TacheUncheckedUpdateWithoutTacheUtilisateurInput>
    create: XOR<TacheCreateWithoutTacheUtilisateurInput, TacheUncheckedCreateWithoutTacheUtilisateurInput>
    where?: TacheWhereInput
  }

  export type TacheUpdateToOneWithWhereWithoutTacheUtilisateurInput = {
    where?: TacheWhereInput
    data: XOR<TacheUpdateWithoutTacheUtilisateurInput, TacheUncheckedUpdateWithoutTacheUtilisateurInput>
  }

  export type TacheUpdateWithoutTacheUtilisateurInput = {
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumTacheStatutFieldUpdateOperationsInput | $Enums.TacheStatut
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projet?: ProjetUpdateOneRequiredWithoutTachesNestedInput
  }

  export type TacheUncheckedUpdateWithoutTacheUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    projetId?: IntFieldUpdateOperationsInput | number
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumTacheStatutFieldUpdateOperationsInput | $Enums.TacheStatut
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutTachesInput = {
    update: XOR<UserUpdateWithoutTachesInput, UserUncheckedUpdateWithoutTachesInput>
    create: XOR<UserCreateWithoutTachesInput, UserUncheckedCreateWithoutTachesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTachesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTachesInput, UserUncheckedUpdateWithoutTachesInput>
  }

  export type UserUpdateWithoutTachesInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departement?: DepartementUpdateOneWithoutUsersNestedInput
    projets?: MembreProjetUpdateManyWithoutUserNestedInput
    partages?: PartageDocumentUpdateManyWithoutUserNestedInput
    partagesEnTantQuePartageur?: PartageDocumentUpdateManyWithoutPartageurNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTachesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    departementId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projets?: MembreProjetUncheckedUpdateManyWithoutUserNestedInput
    partages?: PartageDocumentUncheckedUpdateManyWithoutUserNestedInput
    partagesEnTantQuePartageur?: PartageDocumentUncheckedUpdateManyWithoutPartageurNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutProjetsInput = {
    nom: string
    prenom: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    departement?: DepartementCreateNestedOneWithoutUsersInput
    taches?: TacheUtilisateurCreateNestedManyWithoutUserInput
    partages?: PartageDocumentCreateNestedManyWithoutUserInput
    partagesEnTantQuePartageur?: PartageDocumentCreateNestedManyWithoutPartageurInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProjetsInput = {
    id?: number
    nom: string
    prenom: string
    email: string
    password: string
    role?: $Enums.Role
    departementId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    taches?: TacheUtilisateurUncheckedCreateNestedManyWithoutUserInput
    partages?: PartageDocumentUncheckedCreateNestedManyWithoutUserInput
    partagesEnTantQuePartageur?: PartageDocumentUncheckedCreateNestedManyWithoutPartageurInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProjetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjetsInput, UserUncheckedCreateWithoutProjetsInput>
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

  export type UserUpsertWithoutProjetsInput = {
    update: XOR<UserUpdateWithoutProjetsInput, UserUncheckedUpdateWithoutProjetsInput>
    create: XOR<UserCreateWithoutProjetsInput, UserUncheckedCreateWithoutProjetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjetsInput, UserUncheckedUpdateWithoutProjetsInput>
  }

  export type UserUpdateWithoutProjetsInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departement?: DepartementUpdateOneWithoutUsersNestedInput
    taches?: TacheUtilisateurUpdateManyWithoutUserNestedInput
    partages?: PartageDocumentUpdateManyWithoutUserNestedInput
    partagesEnTantQuePartageur?: PartageDocumentUpdateManyWithoutPartageurNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProjetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    departementId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taches?: TacheUtilisateurUncheckedUpdateManyWithoutUserNestedInput
    partages?: PartageDocumentUncheckedUpdateManyWithoutUserNestedInput
    partagesEnTantQuePartageur?: PartageDocumentUncheckedUpdateManyWithoutPartageurNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
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

  export type UserCreateWithoutPartagesInput = {
    nom: string
    prenom: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    departement?: DepartementCreateNestedOneWithoutUsersInput
    projets?: MembreProjetCreateNestedManyWithoutUserInput
    taches?: TacheUtilisateurCreateNestedManyWithoutUserInput
    partagesEnTantQuePartageur?: PartageDocumentCreateNestedManyWithoutPartageurInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPartagesInput = {
    id?: number
    nom: string
    prenom: string
    email: string
    password: string
    role?: $Enums.Role
    departementId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projets?: MembreProjetUncheckedCreateNestedManyWithoutUserInput
    taches?: TacheUtilisateurUncheckedCreateNestedManyWithoutUserInput
    partagesEnTantQuePartageur?: PartageDocumentUncheckedCreateNestedManyWithoutPartageurInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPartagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPartagesInput, UserUncheckedCreateWithoutPartagesInput>
  }

  export type DepartementCreateWithoutPartagesInput = {
    nom: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projets?: ProjetCreateNestedManyWithoutDepartementInput
    users?: UserCreateNestedManyWithoutDepartementInput
  }

  export type DepartementUncheckedCreateWithoutPartagesInput = {
    id?: number
    nom: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projets?: ProjetUncheckedCreateNestedManyWithoutDepartementInput
    users?: UserUncheckedCreateNestedManyWithoutDepartementInput
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

  export type UserCreateWithoutPartagesEnTantQuePartageurInput = {
    nom: string
    prenom: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    departement?: DepartementCreateNestedOneWithoutUsersInput
    projets?: MembreProjetCreateNestedManyWithoutUserInput
    taches?: TacheUtilisateurCreateNestedManyWithoutUserInput
    partages?: PartageDocumentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPartagesEnTantQuePartageurInput = {
    id?: number
    nom: string
    prenom: string
    email: string
    password: string
    role?: $Enums.Role
    departementId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projets?: MembreProjetUncheckedCreateNestedManyWithoutUserInput
    taches?: TacheUtilisateurUncheckedCreateNestedManyWithoutUserInput
    partages?: PartageDocumentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPartagesEnTantQuePartageurInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPartagesEnTantQuePartageurInput, UserUncheckedCreateWithoutPartagesEnTantQuePartageurInput>
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

  export type UserUpsertWithoutPartagesInput = {
    update: XOR<UserUpdateWithoutPartagesInput, UserUncheckedUpdateWithoutPartagesInput>
    create: XOR<UserCreateWithoutPartagesInput, UserUncheckedCreateWithoutPartagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPartagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPartagesInput, UserUncheckedUpdateWithoutPartagesInput>
  }

  export type UserUpdateWithoutPartagesInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departement?: DepartementUpdateOneWithoutUsersNestedInput
    projets?: MembreProjetUpdateManyWithoutUserNestedInput
    taches?: TacheUtilisateurUpdateManyWithoutUserNestedInput
    partagesEnTantQuePartageur?: PartageDocumentUpdateManyWithoutPartageurNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPartagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    departementId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projets?: MembreProjetUncheckedUpdateManyWithoutUserNestedInput
    taches?: TacheUtilisateurUncheckedUpdateManyWithoutUserNestedInput
    partagesEnTantQuePartageur?: PartageDocumentUncheckedUpdateManyWithoutPartageurNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
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
    users?: UserUpdateManyWithoutDepartementNestedInput
  }

  export type DepartementUncheckedUpdateWithoutPartagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projets?: ProjetUncheckedUpdateManyWithoutDepartementNestedInput
    users?: UserUncheckedUpdateManyWithoutDepartementNestedInput
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

  export type UserUpsertWithoutPartagesEnTantQuePartageurInput = {
    update: XOR<UserUpdateWithoutPartagesEnTantQuePartageurInput, UserUncheckedUpdateWithoutPartagesEnTantQuePartageurInput>
    create: XOR<UserCreateWithoutPartagesEnTantQuePartageurInput, UserUncheckedCreateWithoutPartagesEnTantQuePartageurInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPartagesEnTantQuePartageurInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPartagesEnTantQuePartageurInput, UserUncheckedUpdateWithoutPartagesEnTantQuePartageurInput>
  }

  export type UserUpdateWithoutPartagesEnTantQuePartageurInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departement?: DepartementUpdateOneWithoutUsersNestedInput
    projets?: MembreProjetUpdateManyWithoutUserNestedInput
    taches?: TacheUtilisateurUpdateManyWithoutUserNestedInput
    partages?: PartageDocumentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPartagesEnTantQuePartageurInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    departementId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projets?: MembreProjetUncheckedUpdateManyWithoutUserNestedInput
    taches?: TacheUtilisateurUncheckedUpdateManyWithoutUserNestedInput
    partages?: PartageDocumentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
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

  export type UserCreateWithoutNotificationsInput = {
    nom: string
    prenom: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    departement?: DepartementCreateNestedOneWithoutUsersInput
    projets?: MembreProjetCreateNestedManyWithoutUserInput
    taches?: TacheUtilisateurCreateNestedManyWithoutUserInput
    partages?: PartageDocumentCreateNestedManyWithoutUserInput
    partagesEnTantQuePartageur?: PartageDocumentCreateNestedManyWithoutPartageurInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: number
    nom: string
    prenom: string
    email: string
    password: string
    role?: $Enums.Role
    departementId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projets?: MembreProjetUncheckedCreateNestedManyWithoutUserInput
    taches?: TacheUtilisateurUncheckedCreateNestedManyWithoutUserInput
    partages?: PartageDocumentUncheckedCreateNestedManyWithoutUserInput
    partagesEnTantQuePartageur?: PartageDocumentUncheckedCreateNestedManyWithoutPartageurInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
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

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departement?: DepartementUpdateOneWithoutUsersNestedInput
    projets?: MembreProjetUpdateManyWithoutUserNestedInput
    taches?: TacheUtilisateurUpdateManyWithoutUserNestedInput
    partages?: PartageDocumentUpdateManyWithoutUserNestedInput
    partagesEnTantQuePartageur?: PartageDocumentUpdateManyWithoutPartageurNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    departementId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projets?: MembreProjetUncheckedUpdateManyWithoutUserNestedInput
    taches?: TacheUtilisateurUncheckedUpdateManyWithoutUserNestedInput
    partages?: PartageDocumentUncheckedUpdateManyWithoutUserNestedInput
    partagesEnTantQuePartageur?: PartageDocumentUncheckedUpdateManyWithoutPartageurNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    nom: string
    prenom: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    departement?: DepartementCreateNestedOneWithoutUsersInput
    projets?: MembreProjetCreateNestedManyWithoutUserInput
    taches?: TacheUtilisateurCreateNestedManyWithoutUserInput
    partages?: PartageDocumentCreateNestedManyWithoutUserInput
    partagesEnTantQuePartageur?: PartageDocumentCreateNestedManyWithoutPartageurInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: number
    nom: string
    prenom: string
    email: string
    password: string
    role?: $Enums.Role
    departementId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projets?: MembreProjetUncheckedCreateNestedManyWithoutUserInput
    taches?: TacheUtilisateurUncheckedCreateNestedManyWithoutUserInput
    partages?: PartageDocumentUncheckedCreateNestedManyWithoutUserInput
    partagesEnTantQuePartageur?: PartageDocumentUncheckedCreateNestedManyWithoutPartageurInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departement?: DepartementUpdateOneWithoutUsersNestedInput
    projets?: MembreProjetUpdateManyWithoutUserNestedInput
    taches?: TacheUtilisateurUpdateManyWithoutUserNestedInput
    partages?: PartageDocumentUpdateManyWithoutUserNestedInput
    partagesEnTantQuePartageur?: PartageDocumentUpdateManyWithoutPartageurNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    departementId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projets?: MembreProjetUncheckedUpdateManyWithoutUserNestedInput
    taches?: TacheUtilisateurUncheckedUpdateManyWithoutUserNestedInput
    partages?: PartageDocumentUncheckedUpdateManyWithoutUserNestedInput
    partagesEnTantQuePartageur?: PartageDocumentUncheckedUpdateManyWithoutPartageurNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    nom: string
    prenom: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    departement?: DepartementCreateNestedOneWithoutUsersInput
    projets?: MembreProjetCreateNestedManyWithoutUserInput
    taches?: TacheUtilisateurCreateNestedManyWithoutUserInput
    partages?: PartageDocumentCreateNestedManyWithoutUserInput
    partagesEnTantQuePartageur?: PartageDocumentCreateNestedManyWithoutPartageurInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: number
    nom: string
    prenom: string
    email: string
    password: string
    role?: $Enums.Role
    departementId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projets?: MembreProjetUncheckedCreateNestedManyWithoutUserInput
    taches?: TacheUtilisateurUncheckedCreateNestedManyWithoutUserInput
    partages?: PartageDocumentUncheckedCreateNestedManyWithoutUserInput
    partagesEnTantQuePartageur?: PartageDocumentUncheckedCreateNestedManyWithoutPartageurInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departement?: DepartementUpdateOneWithoutUsersNestedInput
    projets?: MembreProjetUpdateManyWithoutUserNestedInput
    taches?: TacheUtilisateurUpdateManyWithoutUserNestedInput
    partages?: PartageDocumentUpdateManyWithoutUserNestedInput
    partagesEnTantQuePartageur?: PartageDocumentUpdateManyWithoutPartageurNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    departementId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projets?: MembreProjetUncheckedUpdateManyWithoutUserNestedInput
    taches?: TacheUtilisateurUncheckedUpdateManyWithoutUserNestedInput
    partages?: PartageDocumentUncheckedUpdateManyWithoutUserNestedInput
    partagesEnTantQuePartageur?: PartageDocumentUncheckedUpdateManyWithoutPartageurNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjetCreateManyDepartementInput = {
    id?: number
    nom: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateManyDepartementInput = {
    id?: number
    nom: string
    prenom: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartageDocumentCreateManyDepartementInput = {
    id?: number
    documentId: number
    userId?: number | null
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

  export type UserUpdateWithoutDepartementInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projets?: MembreProjetUpdateManyWithoutUserNestedInput
    taches?: TacheUtilisateurUpdateManyWithoutUserNestedInput
    partages?: PartageDocumentUpdateManyWithoutUserNestedInput
    partagesEnTantQuePartageur?: PartageDocumentUpdateManyWithoutPartageurNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDepartementInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projets?: MembreProjetUncheckedUpdateManyWithoutUserNestedInput
    taches?: TacheUtilisateurUncheckedUpdateManyWithoutUserNestedInput
    partages?: PartageDocumentUncheckedUpdateManyWithoutUserNestedInput
    partagesEnTantQuePartageur?: PartageDocumentUncheckedUpdateManyWithoutPartageurNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutDepartementInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
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
    user?: UserUpdateOneWithoutPartagesNestedInput
    projet?: ProjetUpdateOneWithoutPartagesNestedInput
    partageur?: UserUpdateOneRequiredWithoutPartagesEnTantQuePartageurNestedInput
  }

  export type PartageDocumentUncheckedUpdateWithoutDepartementInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    projetId?: NullableIntFieldUpdateOperationsInput | number | null
    datePartage?: DateTimeFieldUpdateOperationsInput | Date | string
    partageurId?: IntFieldUpdateOperationsInput | number
    historique?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PartageDocumentUncheckedUpdateManyWithoutDepartementInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    projetId?: NullableIntFieldUpdateOperationsInput | number | null
    datePartage?: DateTimeFieldUpdateOperationsInput | Date | string
    partageurId?: IntFieldUpdateOperationsInput | number
    historique?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MembreProjetCreateManyUserInput = {
    projetId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TacheUtilisateurCreateManyUserInput = {
    tacheId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartageDocumentCreateManyUserInput = {
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
    userId?: number | null
    departementId?: number | null
    projetId?: number | null
    datePartage?: Date | string
    historique?: string | null
  }

  export type NotificationCreateManyUserInput = {
    id?: number
    message: string
    dateNotification?: Date | string
    documentId: number
    vu?: boolean
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type MembreProjetUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projet?: ProjetUpdateOneRequiredWithoutMembresNestedInput
  }

  export type MembreProjetUncheckedUpdateWithoutUserInput = {
    projetId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembreProjetUncheckedUpdateManyWithoutUserInput = {
    projetId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TacheUtilisateurUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tache?: TacheUpdateOneRequiredWithoutTacheUtilisateurNestedInput
  }

  export type TacheUtilisateurUncheckedUpdateWithoutUserInput = {
    tacheId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TacheUtilisateurUncheckedUpdateManyWithoutUserInput = {
    tacheId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartageDocumentUpdateWithoutUserInput = {
    datePartage?: DateTimeFieldUpdateOperationsInput | Date | string
    historique?: NullableStringFieldUpdateOperationsInput | string | null
    document?: DocumentUpdateOneRequiredWithoutPartagesNestedInput
    departement?: DepartementUpdateOneWithoutPartagesNestedInput
    projet?: ProjetUpdateOneWithoutPartagesNestedInput
    partageur?: UserUpdateOneRequiredWithoutPartagesEnTantQuePartageurNestedInput
  }

  export type PartageDocumentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: IntFieldUpdateOperationsInput | number
    departementId?: NullableIntFieldUpdateOperationsInput | number | null
    projetId?: NullableIntFieldUpdateOperationsInput | number | null
    datePartage?: DateTimeFieldUpdateOperationsInput | Date | string
    partageurId?: IntFieldUpdateOperationsInput | number
    historique?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PartageDocumentUncheckedUpdateManyWithoutUserInput = {
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
    user?: UserUpdateOneWithoutPartagesNestedInput
    departement?: DepartementUpdateOneWithoutPartagesNestedInput
    projet?: ProjetUpdateOneWithoutPartagesNestedInput
  }

  export type PartageDocumentUncheckedUpdateWithoutPartageurInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    departementId?: NullableIntFieldUpdateOperationsInput | number | null
    projetId?: NullableIntFieldUpdateOperationsInput | number | null
    datePartage?: DateTimeFieldUpdateOperationsInput | Date | string
    historique?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PartageDocumentUncheckedUpdateManyWithoutPartageurInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    departementId?: NullableIntFieldUpdateOperationsInput | number | null
    projetId?: NullableIntFieldUpdateOperationsInput | number | null
    datePartage?: DateTimeFieldUpdateOperationsInput | Date | string
    historique?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationUpdateWithoutUserInput = {
    message?: StringFieldUpdateOperationsInput | string
    dateNotification?: DateTimeFieldUpdateOperationsInput | Date | string
    vu?: BoolFieldUpdateOperationsInput | boolean
    document?: DocumentUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    dateNotification?: DateTimeFieldUpdateOperationsInput | Date | string
    documentId?: IntFieldUpdateOperationsInput | number
    vu?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    dateNotification?: DateTimeFieldUpdateOperationsInput | Date | string
    documentId?: IntFieldUpdateOperationsInput | number
    vu?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartageDocumentCreateManyDocumentInput = {
    id?: number
    userId?: number | null
    departementId?: number | null
    projetId?: number | null
    datePartage?: Date | string
    partageurId: number
    historique?: string | null
  }

  export type NotificationCreateManyDocumentInput = {
    id?: number
    userId: number
    message: string
    dateNotification?: Date | string
    vu?: boolean
  }

  export type PartageDocumentUpdateWithoutDocumentInput = {
    datePartage?: DateTimeFieldUpdateOperationsInput | Date | string
    historique?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutPartagesNestedInput
    departement?: DepartementUpdateOneWithoutPartagesNestedInput
    projet?: ProjetUpdateOneWithoutPartagesNestedInput
    partageur?: UserUpdateOneRequiredWithoutPartagesEnTantQuePartageurNestedInput
  }

  export type PartageDocumentUncheckedUpdateWithoutDocumentInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    departementId?: NullableIntFieldUpdateOperationsInput | number | null
    projetId?: NullableIntFieldUpdateOperationsInput | number | null
    datePartage?: DateTimeFieldUpdateOperationsInput | Date | string
    partageurId?: IntFieldUpdateOperationsInput | number
    historique?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PartageDocumentUncheckedUpdateManyWithoutDocumentInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
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
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutDocumentInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    dateNotification?: DateTimeFieldUpdateOperationsInput | Date | string
    vu?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationUncheckedUpdateManyWithoutDocumentInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    dateNotification?: DateTimeFieldUpdateOperationsInput | Date | string
    vu?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MembreProjetCreateManyProjetInput = {
    userId: number
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
    userId?: number | null
    departementId?: number | null
    datePartage?: Date | string
    partageurId: number
    historique?: string | null
  }

  export type MembreProjetUpdateWithoutProjetInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjetsNestedInput
  }

  export type MembreProjetUncheckedUpdateWithoutProjetInput = {
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembreProjetUncheckedUpdateManyWithoutProjetInput = {
    userId?: IntFieldUpdateOperationsInput | number
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
    TacheUtilisateur?: TacheUtilisateurUpdateManyWithoutTacheNestedInput
  }

  export type TacheUncheckedUpdateWithoutProjetInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumTacheStatutFieldUpdateOperationsInput | $Enums.TacheStatut
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TacheUtilisateur?: TacheUtilisateurUncheckedUpdateManyWithoutTacheNestedInput
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
    user?: UserUpdateOneWithoutPartagesNestedInput
    departement?: DepartementUpdateOneWithoutPartagesNestedInput
    partageur?: UserUpdateOneRequiredWithoutPartagesEnTantQuePartageurNestedInput
  }

  export type PartageDocumentUncheckedUpdateWithoutProjetInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    departementId?: NullableIntFieldUpdateOperationsInput | number | null
    datePartage?: DateTimeFieldUpdateOperationsInput | Date | string
    partageurId?: IntFieldUpdateOperationsInput | number
    historique?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PartageDocumentUncheckedUpdateManyWithoutProjetInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    departementId?: NullableIntFieldUpdateOperationsInput | number | null
    datePartage?: DateTimeFieldUpdateOperationsInput | Date | string
    partageurId?: IntFieldUpdateOperationsInput | number
    historique?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TacheUtilisateurCreateManyTacheInput = {
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TacheUtilisateurUpdateWithoutTacheInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTachesNestedInput
  }

  export type TacheUtilisateurUncheckedUpdateWithoutTacheInput = {
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TacheUtilisateurUncheckedUpdateManyWithoutTacheInput = {
    userId?: IntFieldUpdateOperationsInput | number
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