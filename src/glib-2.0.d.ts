/**
 * GLib.d.ts
 *
 */
declare module 'GLib' {
    export const ANALYZER_ANALYZING:number
    export const ASCII_DTOSTR_BUF_SIZE:number
    export const BIG_ENDIAN:number
    export const CSET_A_2_Z:string
    export const CSET_DIGITS:string
    export const CSET_a_2_z:string
    export const DATALIST_FLAGS_MASK:number
    export const DATE_BAD_DAY:number
    export const DATE_BAD_JULIAN:number
    export const DATE_BAD_YEAR:number
    export const DIR_SEPARATOR:number
    export const DIR_SEPARATOR_S:string
    export const E:number
    export const GINT16_FORMAT:string
    export const GINT16_MODIFIER:string
    export const GINT32_FORMAT:string
    export const GINT32_MODIFIER:string
    export const GINT64_FORMAT:string
    export const GINT64_MODIFIER:string
    export const GINTPTR_FORMAT:string
    export const GINTPTR_MODIFIER:string
    export const GNUC_FUNCTION:string
    export const GNUC_PRETTY_FUNCTION:string
    export const GSIZE_FORMAT:string
    export const GSIZE_MODIFIER:string
    export const GSSIZE_FORMAT:string
    export const GSSIZE_MODIFIER:string
    export const GUINT16_FORMAT:string
    export const GUINT32_FORMAT:string
    export const GUINT64_FORMAT:string
    export const GUINTPTR_FORMAT:string
    export const HAVE_GINT64:number
    export const HAVE_GNUC_VARARGS:number
    export const HAVE_GNUC_VISIBILITY:number
    export const HAVE_GROWING_STACK:number
    export const HAVE_ISO_VARARGS:number
    export const HOOK_FLAG_USER_SHIFT:number
    export const IEEE754_DOUBLE_BIAS:number
    export const IEEE754_FLOAT_BIAS:number
    export const KEY_FILE_DESKTOP_GROUP:string
    export const KEY_FILE_DESKTOP_KEY_ACTIONS:string
    export const KEY_FILE_DESKTOP_KEY_CATEGORIES:string
    export const KEY_FILE_DESKTOP_KEY_COMMENT:string
    export const KEY_FILE_DESKTOP_KEY_DBUS_ACTIVATABLE:string
    export const KEY_FILE_DESKTOP_KEY_EXEC:string
    export const KEY_FILE_DESKTOP_KEY_FULLNAME:string
    export const KEY_FILE_DESKTOP_KEY_GENERIC_NAME:string
    export const KEY_FILE_DESKTOP_KEY_GETTEXT_DOMAIN:string
    export const KEY_FILE_DESKTOP_KEY_HIDDEN:string
    export const KEY_FILE_DESKTOP_KEY_ICON:string
    export const KEY_FILE_DESKTOP_KEY_KEYWORDS:string
    export const KEY_FILE_DESKTOP_KEY_MIME_TYPE:string
    export const KEY_FILE_DESKTOP_KEY_NAME:string
    export const KEY_FILE_DESKTOP_KEY_NOT_SHOW_IN:string
    export const KEY_FILE_DESKTOP_KEY_NO_DISPLAY:string
    export const KEY_FILE_DESKTOP_KEY_ONLY_SHOW_IN:string
    export const KEY_FILE_DESKTOP_KEY_PATH:string
    export const KEY_FILE_DESKTOP_KEY_STARTUP_NOTIFY:string
    export const KEY_FILE_DESKTOP_KEY_STARTUP_WM_CLASS:string
    export const KEY_FILE_DESKTOP_KEY_TERMINAL:string
    export const KEY_FILE_DESKTOP_KEY_TRY_EXEC:string
    export const KEY_FILE_DESKTOP_KEY_TYPE:string
    export const KEY_FILE_DESKTOP_KEY_URL:string
    export const KEY_FILE_DESKTOP_KEY_VERSION:string
    export const KEY_FILE_DESKTOP_TYPE_APPLICATION:string
    export const KEY_FILE_DESKTOP_TYPE_DIRECTORY:string
    export const KEY_FILE_DESKTOP_TYPE_LINK:string
    export const LITTLE_ENDIAN:number
    export const LN10:number
    export const LN2:number
    export const LOG_2_BASE_10:number
    export const LOG_DOMAIN:number
    export const LOG_FATAL_MASK:number
    export const LOG_LEVEL_USER_SHIFT:number
    export const MAJOR_VERSION:number
    export const MAXINT16:number
    export const MAXINT32:number
    export const MAXINT64:number
    export const MAXINT8:number
    export const MAXUINT16:number
    export const MAXUINT32:number
    export const MAXUINT64:number
    export const MAXUINT8:number
    export const MICRO_VERSION:number
    export const MININT16:number
    export const MININT32:number
    export const MININT64:number
    export const MININT8:number
    export const MINOR_VERSION:number
    export const MODULE_SUFFIX:string
    export const OPTION_REMAINING:string
    export const PDP_ENDIAN:number
    export const PI:number
    export const PI_2:number
    export const PI_4:number
    export const POLLFD_FORMAT:string
    export const PRIORITY_DEFAULT:number
    export const PRIORITY_DEFAULT_IDLE:number
    export const PRIORITY_HIGH:number
    export const PRIORITY_HIGH_IDLE:number
    export const PRIORITY_LOW:number
    export const SEARCHPATH_SEPARATOR:number
    export const SEARCHPATH_SEPARATOR_S:string
    export const SIZEOF_LONG:number
    export const SIZEOF_SIZE_T:number
    export const SIZEOF_SSIZE_T:number
    export const SIZEOF_VOID_P:number
    export const SOURCE_CONTINUE:boolean
    export const SOURCE_REMOVE:boolean
    export const SQRT2:number
    export const STR_DELIMITERS:string
    export const SYSDEF_AF_INET:number
    export const SYSDEF_AF_INET6:number
    export const SYSDEF_AF_UNIX:number
    export const SYSDEF_MSG_DONTROUTE:number
    export const SYSDEF_MSG_OOB:number
    export const SYSDEF_MSG_PEEK:number
    export const TIME_SPAN_DAY:number
    export const TIME_SPAN_HOUR:number
    export const TIME_SPAN_MILLISECOND:number
    export const TIME_SPAN_MINUTE:number
    export const TIME_SPAN_SECOND:number
    export const UNICHAR_MAX_DECOMPOSITION_LENGTH:number
    export const URI_RESERVED_CHARS_GENERIC_DELIMITERS:string
    export const URI_RESERVED_CHARS_SUBCOMPONENT_DELIMITERS:string
    export const USEC_PER_SEC:number
    export const VA_COPY_AS_ARRAY:number
    export const VERSION_MIN_REQUIRED:number
    export const WIN32_MSG_HANDLE:number
    export function access(filename: string, mode: number):number
    export function ascii_digit_value(c: number):number
    export function ascii_dtostr(buffer: string, buf_len: number, d: number):string
    export function ascii_formatd(buffer: string, buf_len: number, format: string, d: number):string
    export function ascii_strcasecmp(s1: string, s2: string):number
    export function ascii_strdown(str: string, len: number):string
    export function ascii_strncasecmp(s1: string, s2: string, n: number):number
    export function ascii_strtod(nptr: string, endptr: string):number
    export function ascii_strtoll(nptr: string, endptr: string, base: number):number
    export function ascii_strtoull(nptr: string, endptr: string, base: number):number
    export function ascii_strup(str: string, len: number):string
    export function ascii_tolower(c: number):number
    export function ascii_toupper(c: number):number
    export function ascii_xdigit_value(c: number):number
    export function assert_warning(log_domain: string, file: string, line: number, pretty_function: string, expression: string):void
    export function assertion_message(domain: string, file: string, line: number, func: string, message: string):void
    export function assertion_message_cmpnum(domain: string, file: string, line: number, func: string, expr: string, arg1: number, cmp: string, arg2: number, numtype: number):void
    export function assertion_message_cmpstr(domain: string, file: string, line: number, func: string, expr: string, arg1: string, cmp: string, arg2: string):void
    export function assertion_message_error(domain: string, file: string, line: number, func: string, expr: string, error: any, error_domain: any, error_code: number):void
    export function assertion_message_expr(domain: string, file: string, line: number, func: string, expr: string):void
    export function atexit(func: any):void
    export function atomic_int_add(atomic: number, val: number):number
    export function atomic_int_and(atomic: number, val: number):number
    export function atomic_int_compare_and_exchange(atomic: number, oldval: number, newval: number):boolean
    export function atomic_int_dec_and_test(atomic: number):boolean
    export function atomic_int_exchange_and_add(atomic: number, val: number):number
    export function atomic_int_get(atomic: number):number
    export function atomic_int_inc(atomic: number):void
    export function atomic_int_or(atomic: number, val: number):number
    export function atomic_int_set(atomic: number, newval: number):void
    export function atomic_int_xor(atomic: number, val: number):number
    export function atomic_pointer_add(atomic: any, val: number):number
    export function atomic_pointer_and(atomic: any, val: number):number
    export function atomic_pointer_compare_and_exchange(atomic: any, oldval: any, newval: any):boolean
    export function atomic_pointer_get(atomic: any):any
    export function atomic_pointer_or(atomic: any, val: number):number
    export function atomic_pointer_set(atomic: any, newval: any):void
    export function atomic_pointer_xor(atomic: any, val: number):number
    export function base64_decode(text: string, out_len: number):number[]
    export function base64_decode_inplace(text: number[], out_len: number):number
    export function base64_decode_step(in_: number[], len: number, out: number[], state: number, save: number):number
    export function base64_encode(data: number[], len: number):string
    export function base64_encode_close(break_lines: boolean, out: number[], state: number, save: number):number
    export function base64_encode_step(in_: number[], len: number, break_lines: boolean, out: number[], state: number, save: number):number
    export function basename(file_name: string):string
    export function bit_lock(address: number, lock_bit: number):void
    export function bit_nth_lsf(mask: number, nth_bit: number):number
    export function bit_nth_msf(mask: number, nth_bit: number):number
    export function bit_storage(number: number):number
    export function bit_trylock(address: number, lock_bit: number):boolean
    export function bit_unlock(address: number, lock_bit: number):void
    export function bookmark_file_error_quark():any
    export function build_filename(first_element: string, ...args: any[]):string
    export function build_filenamev(args: string[]):string
    export function build_path(separator: string, first_element: string, ...args: any[]):string
    export function build_pathv(separator: string, args: string[]):string
    export function byte_array_free(array: number[], free_segment: boolean):number
    export function byte_array_free_to_bytes(array: number[]):any
    export function byte_array_new():number[]
    export function byte_array_new_take(data: number[], len: number):number[]
    export function byte_array_unref(array: number[]):void
    export function chdir(path: string):number
    export function check_version(required_major: number, required_minor: number, required_micro: number):string
    export function checksum_type_get_length(checksum_type: ChecksumType):number
    export function child_watch_add(pid: any, function_: any, data: any):number
    export function child_watch_add_full(priority: number, pid: any, function_: any, data: any, notify: any):number
    export function child_watch_source_new(pid: any):any
    export function clear_error():void
    export function clear_pointer(pp: any, destroy: any):void
    export function close(fd: number):boolean
    export function compute_checksum_for_bytes(checksum_type: ChecksumType, data: any):string
    export function compute_checksum_for_data(checksum_type: ChecksumType, data: number[], length: number):string
    export function compute_checksum_for_string(checksum_type: ChecksumType, str: string, length: number):string
    export function compute_hmac_for_data(digest_type: ChecksumType, key: number[], key_len: number, data: number, length: number):string
    export function compute_hmac_for_string(digest_type: ChecksumType, key: number[], key_len: number, str: string, length: number):string
    export function convert(str: string, len: number, to_codeset: string, from_codeset: string, bytes_read: number, bytes_written: number):string
    export function convert_error_quark():any
    export function convert_with_fallback(str: string, len: number, to_codeset: string, from_codeset: string, fallback: string, bytes_read: number, bytes_written: number):string
    export function convert_with_iconv(str: string, len: number, converter: any, bytes_read: number, bytes_written: number):string
    export function datalist_clear(datalist: any):void
    export function datalist_foreach(datalist: any, func: any, user_data: any):void
    export function datalist_get_data(datalist: any, key: string):any
    export function datalist_get_flags(datalist: any):number
    export function datalist_id_dup_data(datalist: any, key_id: any, dup_func: any, user_data: any):any
    export function datalist_id_get_data(datalist: any, key_id: any):any
    export function datalist_id_remove_no_notify(datalist: any, key_id: any):any
    export function datalist_id_replace_data(datalist: any, key_id: any, oldval: any, newval: any, destroy: any, old_destroy: any):boolean
    export function datalist_id_set_data_full(datalist: any, key_id: any, data: any, destroy_func: any):void
    export function datalist_init(datalist: any):void
    export function datalist_set_flags(datalist: any, flags: number):void
    export function datalist_unset_flags(datalist: any, flags: number):void
    export function dataset_destroy(dataset_location: any):void
    export function dataset_foreach(dataset_location: any, func: any, user_data: any):void
    export function dataset_id_get_data(dataset_location: any, key_id: any):any
    export function dataset_id_remove_no_notify(dataset_location: any, key_id: any):any
    export function dataset_id_set_data_full(dataset_location: any, key_id: any, data: any, destroy_func: any):void
    export function date_get_days_in_month(month: DateMonth, year: any):number
    export function date_get_monday_weeks_in_year(year: any):number
    export function date_get_sunday_weeks_in_year(year: any):number
    export function date_is_leap_year(year: any):boolean
    export function date_strftime(s: string, slen: number, format: string, date: any):number
    export function date_time_compare(dt1: any, dt2: any):number
    export function date_time_equal(dt1: any, dt2: any):boolean
    export function date_time_hash(datetime: any):number
    export function date_valid_day(day: any):boolean
    export function date_valid_dmy(day: any, month: DateMonth, year: any):boolean
    export function date_valid_julian(julian_date: number):boolean
    export function date_valid_month(month: DateMonth):boolean
    export function date_valid_weekday(weekday: DateWeekday):boolean
    export function date_valid_year(year: any):boolean
    export function dcgettext(domain: string, msgid: string, category: number):string
    export function dgettext(domain: string, msgid: string):string
    export function dir_make_tmp(tmpl: any):any
    export function direct_equal(v1: any, v2: any):boolean
    export function direct_hash(v: any):number
    export function dngettext(domain: string, msgid: string, msgid_plural: string, n: number):string
    export function double_equal(v1: any, v2: any):boolean
    export function double_hash(v: any):number
    export function dpgettext(domain: string, msgctxtid: string, msgidoffset: number):string
    export function dpgettext2(domain: string, context: string, msgid: string):string
    export function environ_getenv(envp: string[], variable: string):string
    export function environ_setenv(envp: string[], variable: string, value: string, overwrite: boolean):string[]
    export function environ_unsetenv(envp: string[], variable: string):string[]
    export function file_error_from_errno(err_no: number):FileError
    export function file_error_quark():any
    export function file_get_contents(filename: any, contents: number[], length: number):boolean
    export function file_open_tmp(tmpl: any, name_used: any):number
    export function file_read_link(filename: string):string
    export function file_set_contents(filename: any, contents: number[], length: number):boolean
    export function file_test(filename: string, test: FileTest):boolean
    export function filename_display_basename(filename: string):string
    export function filename_display_name(filename: string):string
    export function filename_from_uri(uri: string, hostname: string):any
    export function filename_from_utf8(utf8string: string, len: number, bytes_read: number, bytes_written: number):number[]
    export function filename_to_uri(filename: string, hostname: string):string
    export function filename_to_utf8(opsysstring: string, len: number, bytes_read: number, bytes_written: number):string
    export function find_program_in_path(program: string):string
    export function format_size(size: number):string
    export function format_size_for_display(size: number):string
    export function format_size_full(size: number, flags: FormatSizeFlags):string
    export function fprintf(file: any, format: string, ...args: any[]):number
    export function free(mem: any):void
    export function get_application_name():string
    export function get_charset(charset: string):boolean
    export function get_codeset():string
    export function get_current_dir():string
    export function get_current_time(result: any):void
    export function get_environ():string[]
    export function get_filename_charsets(charsets: string):boolean
    export function get_home_dir():string
    export function get_host_name():string
    export function get_language_names():string[]
    export function get_locale_variants(locale: string):string[]
    export function get_monotonic_time():number
    export function get_num_processors():number
    export function get_prgname():string
    export function get_real_name():string
    export function get_real_time():number
    export function get_system_config_dirs():string[]
    export function get_system_data_dirs():string[]
    export function get_tmp_dir():string
    export function get_user_cache_dir():string
    export function get_user_config_dir():string
    export function get_user_data_dir():string
    export function get_user_name():string
    export function get_user_runtime_dir():string
    export function get_user_special_dir(directory: UserDirectory):string
    export function getenv(variable: string):string
    export function hash_table_add(hash_table: any, key: any):boolean
    export function hash_table_contains(hash_table: any, key: any):boolean
    export function hash_table_destroy(hash_table: any):void
    export function hash_table_insert(hash_table: any, key: any, value: any):boolean
    export function hash_table_lookup_extended(hash_table: any, lookup_key: any, orig_key: any, value: any):boolean
    export function hash_table_remove(hash_table: any, key: any):boolean
    export function hash_table_remove_all(hash_table: any):void
    export function hash_table_replace(hash_table: any, key: any, value: any):boolean
    export function hash_table_size(hash_table: any):number
    export function hash_table_steal(hash_table: any, key: any):boolean
    export function hash_table_steal_all(hash_table: any):void
    export function hash_table_unref(hash_table: any):void
    export function hook_destroy(hook_list: any, hook_id: number):boolean
    export function hook_destroy_link(hook_list: any, hook: any):void
    export function hook_free(hook_list: any, hook: any):void
    export function hook_insert_before(hook_list: any, sibling: any, hook: any):void
    export function hook_prepend(hook_list: any, hook: any):void
    export function hook_unref(hook_list: any, hook: any):void
    export function hostname_is_ascii_encoded(hostname: string):boolean
    export function hostname_is_ip_address(hostname: string):boolean
    export function hostname_is_non_ascii(hostname: string):boolean
    export function hostname_to_ascii(hostname: string):string
    export function hostname_to_unicode(hostname: string):string
    export function iconv(converter: any, inbuf: string, inbytes_left: number, outbuf: string, outbytes_left: number):number
    export function idle_add(function_: any, data: any):number
    export function idle_add_full(priority: number, function_: any, data: any, notify: any):number
    export function idle_remove_by_data(data: any):boolean
    export function idle_source_new():any
    export function int64_equal(v1: any, v2: any):boolean
    export function int64_hash(v: any):number
    export function int_equal(v1: any, v2: any):boolean
    export function int_hash(v: any):number
    export function intern_static_string(string: string):string
    export function intern_string(string: string):string
    export function io_add_watch(channel: any, condition: IOCondition, func: any, user_data: any):number
    export function io_add_watch_full(channel: any, priority: number, condition: IOCondition, func: any, user_data: any, notify: any):number
    export function io_channel_error_from_errno(en: number):IOChannelError
    export function io_channel_error_quark():any
    export function io_create_watch(channel: any, condition: IOCondition):any
    export function key_file_error_quark():any
    export function listenv():string[]
    export function locale_from_utf8(utf8string: string, len: number, bytes_read: number, bytes_written: number):string
    export function locale_to_utf8(opsysstring: string, len: number, bytes_read: number, bytes_written: number):string
    export function log(log_domain: string, log_level: LogLevelFlags, format: string, ...args: any[]):void
    export function log_default_handler(log_domain: string, log_level: LogLevelFlags, message: string, unused_data: any):void
    export function log_remove_handler(log_domain: string, handler_id: number):void
    export function log_set_always_fatal(fatal_mask: LogLevelFlags):LogLevelFlags
    export function log_set_default_handler(log_func: any, user_data: any):any
    export function log_set_fatal_mask(log_domain: string, fatal_mask: LogLevelFlags):LogLevelFlags
    export function log_set_handler(log_domain: string, log_levels: LogLevelFlags, log_func: any, user_data: any):number
    export function log_set_handler_full(log_domain: string, log_levels: LogLevelFlags, log_func: any, user_data: any, destroy: any):number
    export function logv(log_domain: string, log_level: LogLevelFlags, format: string, args: any):void
    export function main_context_default():any
    export function main_context_get_thread_default():any
    export function main_context_ref_thread_default():any
    export function main_current_source():any
    export function main_depth():number
    export function malloc(n_bytes: number):any
    export function malloc0(n_bytes: number):any
    export function malloc0_n(n_blocks: number, n_block_bytes: number):any
    export function malloc_n(n_blocks: number, n_block_bytes: number):any
    export function markup_collect_attributes(element_name: string, attribute_names: string, attribute_values: string, error: any, first_type: MarkupCollectType, first_attr: string, ...args: any[]):boolean
    export function markup_error_quark():any
    export function markup_escape_text(text: string, length: number):string
    export function markup_printf_escaped(format: string, ...args: any[]):string
    export function markup_vprintf_escaped(format: string, args: any):string
    export function mem_is_system_malloc():boolean
    export function mem_profile():void
    export function mem_set_vtable(vtable: any):void
    export function memdup(mem: any, byte_size: number):any
    export function mkdir_with_parents(pathname: string, mode: number):number
    export function mkdtemp(tmpl: any):string
    export function mkdtemp_full(tmpl: any, mode: number):string
    export function mkstemp(tmpl: any):number
    export function mkstemp_full(tmpl: any, flags: number, mode: number):number
    export function nullify_pointer(nullify_location: any):void
    export function on_error_query(prg_name: string):void
    export function on_error_stack_trace(prg_name: string):void
    export function once_init_enter(location: any):boolean
    export function once_init_leave(location: any, result: number):void
    export function option_error_quark():any
    export function parse_debug_string(string: string, keys: any[], nkeys: number):number
    export function path_get_basename(file_name: string):string
    export function path_get_dirname(file_name: string):string
    export function path_is_absolute(file_name: string):boolean
    export function path_skip_root(file_name: string):string
    export function pattern_match(pspec: any, string_length: number, string: string, string_reversed: string):boolean
    export function pattern_match_simple(pattern: string, string: string):boolean
    export function pattern_match_string(pspec: any, string: string):boolean
    export function pointer_bit_lock(address: any, lock_bit: number):void
    export function pointer_bit_trylock(address: any, lock_bit: number):boolean
    export function pointer_bit_unlock(address: any, lock_bit: number):void
    export function poll(fds: any, nfds: number, timeout: number):number
    export function prefix_error(err: any, format: string, ...args: any[]):void
    export function print(format: string, ...args: any[]):void
    export function printerr(format: string, ...args: any[]):void
    export function printf(format: string, ...args: any[]):number
    export function printf_string_upper_bound(format: string, args: any):number
    export function propagate_error(dest: any, src: any):void
    export function propagate_prefixed_error(dest: any, src: any, format: string, ...args: any[]):void
    export function qsort_with_data(pbase: any, total_elems: number, size: number, compare_func: any, user_data: any):void
    export function quark_from_static_string(string: string):any
    export function quark_from_string(string: string):any
    export function quark_to_string(quark: any):string
    export function quark_try_string(string: string):any
    export function random_double():number
    export function random_double_range(begin: number, end: number):number
    export function random_int():number
    export function random_int_range(begin: number, end: number):number
    export function random_set_seed(seed: number):void
    export function realloc(mem: any, n_bytes: number):any
    export function realloc_n(mem: any, n_blocks: number, n_block_bytes: number):any
    export function regex_check_replacement(replacement: string, has_references: boolean):boolean
    export function regex_error_quark():any
    export function regex_escape_nul(string: string, length: number):string
    export function regex_escape_string(string: string[], length: number):string
    export function regex_match_simple(pattern: string, string: string, compile_options: RegexCompileFlags, match_options: RegexMatchFlags):boolean
    export function regex_split_simple(pattern: string, string: string, compile_options: RegexCompileFlags, match_options: RegexMatchFlags):string[]
    export function reload_user_special_dirs_cache():void
    export function return_if_fail_warning(log_domain: string, pretty_function: string, expression: string):void
    export function rmdir(filename: string):number
    export function sequence_move(src: any, dest: any):void
    export function sequence_move_range(dest: any, begin: any, end: any):void
    export function sequence_remove(iter: any):void
    export function sequence_remove_range(begin: any, end: any):void
    export function sequence_set(iter: any, data: any):void
    export function sequence_swap(a: any, b: any):void
    export function set_application_name(application_name: string):void
    export function set_error(err: any, domain: any, code: number, format: string, ...args: any[]):void
    export function set_error_literal(err: any, domain: any, code: number, message: string):void
    export function set_prgname(prgname: string):void
    export function set_print_handler(func: any):any
    export function set_printerr_handler(func: any):any
    export function setenv(variable: string, value: string, overwrite: boolean):boolean
    export function shell_error_quark():any
    export function shell_parse_argv(command_line: string, argcp: number, argvp: string[]):boolean
    export function shell_quote(unquoted_string: string):string
    export function shell_unquote(quoted_string: string):string
    export function slice_alloc(block_size: number):any
    export function slice_alloc0(block_size: number):any
    export function slice_copy(block_size: number, mem_block: any):any
    export function slice_free1(block_size: number, mem_block: any):void
    export function slice_free_chain_with_offset(block_size: number, mem_chain: any, next_offset: number):void
    export function slice_get_config(ckey: SliceConfig):number
    export function slice_get_config_state(ckey: SliceConfig, address: number, n_values: number):number
    export function slice_set_config(ckey: SliceConfig, value: number):void
    export function snprintf(string: string, n: number, format: string, ...args: any[]):number
    export function source_remove(tag: number):boolean
    export function source_remove_by_funcs_user_data(funcs: any, user_data: any):boolean
    export function source_remove_by_user_data(user_data: any):boolean
    export function source_set_name_by_id(tag: number, name: string):void
    export function spaced_primes_closest(num: number):number
    export function spawn_async(working_directory: string, argv: string[], envp: string[], flags: SpawnFlags, child_setup: any, user_data: any, child_pid: any):boolean
    export function spawn_async_with_pipes(working_directory: string, argv: string[], envp: string[], flags: SpawnFlags, child_setup: any, user_data: any, child_pid: any, standard_input: number, standard_output: number, standard_error: number):boolean
    export function spawn_check_exit_status(exit_status: number):boolean
    export function spawn_close_pid(pid: any):void
    export function spawn_command_line_async(command_line: string):boolean
    export function spawn_command_line_sync(command_line: string, standard_output: number[], standard_error: number[], exit_status: number):boolean
    export function spawn_error_quark():any
    export function spawn_exit_error_quark():any
    export function spawn_sync(working_directory: string, argv: string[], envp: string[], flags: SpawnFlags, child_setup: any, user_data: any, standard_output: number[], standard_error: number[], exit_status: number):boolean
    export function sprintf(string: string, format: string, ...args: any[]):number
    export function stpcpy(dest: string, src: string):string
    export function str_equal(v1: any, v2: any):boolean
    export function str_has_prefix(str: string, prefix: string):boolean
    export function str_has_suffix(str: string, suffix: string):boolean
    export function str_hash(v: any):number
    export function str_is_ascii(str: string):boolean
    export function str_match_string(search_term: string, potential_hit: string, accept_alternates: boolean):boolean
    export function str_to_ascii(str: string, from_locale: string):string
    export function str_tokenize_and_fold(string: string, translit_locale: string, ascii_alternates: string[]):string[]
    export function strcanon(string: string, valid_chars: string, substitutor: number):string
    export function strcasecmp(s1: string, s2: string):number
    export function strchomp(string: string):string
    export function strchug(string: string):string
    export function strcmp0(str1: string, str2: string):number
    export function strcompress(source: string):string
    export function strconcat(string1: string, ...args: any[]):string
    export function strdelimit(string: string, delimiters: string, new_delimiter: number):string
    export function strdown(string: string):string
    export function strdup(str: string):string
    export function strdup_printf(format: string, ...args: any[]):string
    export function strdup_vprintf(format: string, args: any):string
    export function strdupv(str_array: string):string[]
    export function strerror(errnum: number):string
    export function strescape(source: string, exceptions: string):string
    export function strfreev(str_array: string):void
    export function string_new(init: string):any
    export function string_new_len(init: string, len: number):any
    export function string_sized_new(dfl_size: number):any
    export function strip_context(msgid: string, msgval: string):string
    export function strjoin(separator: string, ...args: any[]):string
    export function strjoinv(separator: string, str_array: string):string
    export function strlcat(dest: string, src: string, dest_size: number):number
    export function strlcpy(dest: string, src: string, dest_size: number):number
    export function strncasecmp(s1: string, s2: string, n: number):number
    export function strndup(str: string, n: number):string
    export function strnfill(length: number, fill_char: number):string
    export function strreverse(string: string):string
    export function strrstr(haystack: string, needle: string):string
    export function strrstr_len(haystack: string, haystack_len: number, needle: string):string
    export function strsignal(signum: number):string
    export function strsplit(string: string, delimiter: string, max_tokens: number):string[]
    export function strsplit_set(string: string, delimiters: string, max_tokens: number):string[]
    export function strstr_len(haystack: string, haystack_len: number, needle: string):string
    export function strtod(nptr: string, endptr: string):number
    export function strup(string: string):string
    export function strv_contains(strv: string, str: string):boolean
    export function strv_get_type():any
    export function strv_length(str_array: string):number
    export function test_add_data_func(testpath: string, test_data: any, test_func: any):void
    export function test_add_data_func_full(testpath: string, test_data: any, test_func: any, data_free_func: any):void
    export function test_add_func(testpath: string, test_func: any):void
    export function test_add_vtable(testpath: string, data_size: number, test_data: any, data_setup: any, data_test: any, data_teardown: any):void
    export function test_assert_expected_messages_internal(domain: string, file: string, line: number, func: string):void
    export function test_bug(bug_uri_snippet: string):void
    export function test_bug_base(uri_pattern: string):void
    export function test_build_filename(file_type: TestFileType, first_path: string, ...args: any[]):string
    export function test_create_case(test_name: string, data_size: number, test_data: any, data_setup: any, data_test: any, data_teardown: any):any
    export function test_create_suite(suite_name: string):any
    export function test_expect_message(log_domain: string, log_level: LogLevelFlags, pattern: string):void
    export function test_fail():void
    export function test_failed():boolean
    export function test_get_dir(file_type: TestFileType):string
    export function test_get_filename(file_type: TestFileType, first_path: string, ...args: any[]):string
    export function test_get_root():any
    export function test_incomplete(msg: string):void
    export function test_init(argc: number, argv: string, ...args: any[]):void
    export function test_log_set_fatal_handler(log_func: any, user_data: any):void
    export function test_log_type_name(log_type: TestLogType):string
    export function test_maximized_result(maximized_quantity: number, format: string, ...args: any[]):void
    export function test_message(format: string, ...args: any[]):void
    export function test_minimized_result(minimized_quantity: number, format: string, ...args: any[]):void
    export function test_queue_destroy(destroy_func: any, destroy_data: any):void
    export function test_queue_free(gfree_pointer: any):void
    export function test_rand_double():number
    export function test_rand_double_range(range_start: number, range_end: number):number
    export function test_rand_int():number
    export function test_rand_int_range(begin: number, end: number):number
    export function test_run():number
    export function test_run_suite(suite: any):number
    export function test_set_nonfatal_assertions():void
    export function test_skip(msg: string):void
    export function test_subprocess():boolean
    export function test_timer_elapsed():number
    export function test_timer_last():number
    export function test_timer_start():void
    export function test_trap_assertions(domain: string, file: string, line: number, func: string, assertion_flags: number, pattern: string):void
    export function test_trap_fork(usec_timeout: number, test_trap_flags: TestTrapFlags):boolean
    export function test_trap_has_passed():boolean
    export function test_trap_reached_timeout():boolean
    export function test_trap_subprocess(test_path: string, usec_timeout: number, test_flags: TestSubprocessFlags):void
    export function thread_error_quark():any
    export function thread_exit(retval: any):void
    export function thread_pool_get_max_idle_time():number
    export function thread_pool_get_max_unused_threads():number
    export function thread_pool_get_num_unused_threads():number
    export function thread_pool_set_max_idle_time(interval: number):void
    export function thread_pool_set_max_unused_threads(max_threads: number):void
    export function thread_pool_stop_unused_threads():void
    export function thread_self():any
    export function thread_yield():void
    export function time_val_from_iso8601(iso_date: string, time_: any):boolean
    export function timeout_add(interval: number, function_: any, data: any):number
    export function timeout_add_full(priority: number, interval: number, function_: any, data: any, notify: any):number
    export function timeout_add_seconds(interval: number, function_: any, data: any):number
    export function timeout_add_seconds_full(priority: number, interval: number, function_: any, data: any, notify: any):number
    export function timeout_source_new(interval: number):any
    export function timeout_source_new_seconds(interval: number):any
    export function trash_stack_height(stack_p: any):number
    export function trash_stack_push(stack_p: any, data_p: any):void
    export function try_malloc(n_bytes: number):any
    export function try_malloc0(n_bytes: number):any
    export function try_malloc0_n(n_blocks: number, n_block_bytes: number):any
    export function try_malloc_n(n_blocks: number, n_block_bytes: number):any
    export function try_realloc(mem: any, n_bytes: number):any
    export function try_realloc_n(mem: any, n_blocks: number, n_block_bytes: number):any
    export function ucs4_to_utf16(str: number, len: number, items_read: number, items_written: number):number
    export function ucs4_to_utf8(str: number, len: number, items_read: number, items_written: number):string
    export function unichar_break_type(c: number):UnicodeBreakType
    export function unichar_combining_class(uc: number):number
    export function unichar_compose(a: number, b: number, ch: number):boolean
    export function unichar_decompose(ch: number, a: number, b: number):boolean
    export function unichar_digit_value(c: number):number
    export function unichar_fully_decompose(ch: number, compat: boolean, result: number, result_len: number):number
    export function unichar_get_mirror_char(ch: number, mirrored_ch: number):boolean
    export function unichar_get_script(ch: number):UnicodeScript
    export function unichar_isalnum(c: number):boolean
    export function unichar_isalpha(c: number):boolean
    export function unichar_iscntrl(c: number):boolean
    export function unichar_isdefined(c: number):boolean
    export function unichar_isdigit(c: number):boolean
    export function unichar_isgraph(c: number):boolean
    export function unichar_islower(c: number):boolean
    export function unichar_ismark(c: number):boolean
    export function unichar_isprint(c: number):boolean
    export function unichar_ispunct(c: number):boolean
    export function unichar_isspace(c: number):boolean
    export function unichar_istitle(c: number):boolean
    export function unichar_isupper(c: number):boolean
    export function unichar_iswide(c: number):boolean
    export function unichar_iswide_cjk(c: number):boolean
    export function unichar_isxdigit(c: number):boolean
    export function unichar_iszerowidth(c: number):boolean
    export function unichar_to_utf8(c: number, outbuf: string):number
    export function unichar_tolower(c: number):number
    export function unichar_totitle(c: number):number
    export function unichar_toupper(c: number):number
    export function unichar_type(c: number):UnicodeType
    export function unichar_validate(ch: number):boolean
    export function unichar_xdigit_value(c: number):number
    export function unicode_canonical_decomposition(ch: number, result_len: number):number
    export function unicode_canonical_ordering(string: number, len: number):void
    export function unicode_script_from_iso15924(iso15924: number):UnicodeScript
    export function unicode_script_to_iso15924(script: UnicodeScript):number
    export function unix_error_quark():any
    export function unix_fd_add(fd: number, condition: IOCondition, function_: any, user_data: any):number
    export function unix_fd_add_full(priority: number, fd: number, condition: IOCondition, function_: any, user_data: any, notify: any):number
    export function unix_fd_source_new(fd: number, condition: IOCondition):any
    export function unix_open_pipe(fds: number, flags: number):boolean
    export function unix_set_fd_nonblocking(fd: number, nonblock: boolean):boolean
    export function unix_signal_add(signum: number, handler: any, user_data: any):number
    export function unix_signal_add_full(priority: number, signum: number, handler: any, user_data: any, notify: any):number
    export function unix_signal_source_new(signum: number):any
    export function unlink(filename: string):number
    export function unsetenv(variable: string):void
    export function uri_escape_string(unescaped: string, reserved_chars_allowed: string, allow_utf8: boolean):string
    export function uri_list_extract_uris(uri_list: string):string[]
    export function uri_parse_scheme(uri: string):string
    export function uri_unescape_segment(escaped_string: string, escaped_string_end: string, illegal_characters: string):string
    export function uri_unescape_string(escaped_string: string, illegal_characters: string):string
    export function usleep(microseconds: number):void
    export function utf16_to_ucs4(str: number, len: number, items_read: number, items_written: number):number
    export function utf16_to_utf8(str: number, len: number, items_read: number, items_written: number):string
    export function utf8_casefold(str: string, len: number):string
    export function utf8_collate(str1: string, str2: string):number
    export function utf8_collate_key(str: string, len: number):string
    export function utf8_collate_key_for_filename(str: string, len: number):string
    export function utf8_find_next_char(p: string, end: string):string
    export function utf8_find_prev_char(str: string, p: string):string
    export function utf8_get_char(p: string):number
    export function utf8_get_char_validated(p: string, max_len: number):number
    export function utf8_normalize(str: string, len: number, mode: NormalizeMode):string
    export function utf8_offset_to_pointer(str: string, offset: number):string
    export function utf8_pointer_to_offset(str: string, pos: string):number
    export function utf8_prev_char(p: string):string
    export function utf8_strchr(p: string, len: number, c: number):string
    export function utf8_strdown(str: string, len: number):string
    export function utf8_strlen(p: string, max: number):number
    export function utf8_strncpy(dest: string, src: string, n: number):string
    export function utf8_strrchr(p: string, len: number, c: number):string
    export function utf8_strreverse(str: string, len: number):string
    export function utf8_strup(str: string, len: number):string
    export function utf8_substring(str: string, start_pos: number, end_pos: number):string
    export function utf8_to_ucs4(str: string, len: number, items_read: number, items_written: number):number
    export function utf8_to_ucs4_fast(str: string, len: number, items_written: number):number
    export function utf8_to_utf16(str: string, len: number, items_read: number, items_written: number):number
    export function utf8_validate(str: number[], max_len: number, end: string):boolean
    export function variant_get_gtype():any
    export function variant_is_object_path(string: string):boolean
    export function variant_is_signature(string: string):boolean
    export function variant_parse(type: any, text: string, limit: string, endptr: string):any
    export function variant_parse_error_print_context(error: any, source_str: string):string
    export function variant_parse_error_quark():any
    export function variant_parser_get_error_quark():any
    export function variant_type_checked_(arg0: string):any
    export function variant_type_string_is_valid(type_string: string):boolean
    export function variant_type_string_scan(string: string, limit: string, endptr: string):boolean
    export function vasprintf(string: string, format: string, args: any):number
    export function vfprintf(file: any, format: string, args: any):number
    export function vprintf(format: string, args: any):number
    export function vsnprintf(string: string, n: number, format: string, args: any):number
    export function vsprintf(string: string, format: string, args: any):number
    export function warn_message(domain: string, file: string, line: number, func: string, warnexpr: string):void
    export enum BookmarkFileError {
        INVALID_URI,
        INVALID_VALUE,
        APP_NOT_REGISTERED,
        URI_NOT_FOUND,
        READ,
        UNKNOWN_ENCODING,
        WRITE,
        FILE_NOT_FOUND,
    }
    export enum ChecksumType {
        MD5,
        SHA1,
        SHA256,
        SHA512,
    }
    export enum ConvertError {
        NO_CONVERSION,
        ILLEGAL_SEQUENCE,
        FAILED,
        PARTIAL_INPUT,
        BAD_URI,
        NOT_ABSOLUTE_PATH,
        NO_MEMORY,
    }
    export enum DateDMY {
        DAY,
        MONTH,
        YEAR,
    }
    export enum DateMonth {
        BAD_MONTH,
        JANUARY,
        FEBRUARY,
        MARCH,
        APRIL,
        MAY,
        JUNE,
        JULY,
        AUGUST,
        SEPTEMBER,
        OCTOBER,
        NOVEMBER,
        DECEMBER,
    }
    export enum DateWeekday {
        BAD_WEEKDAY,
        MONDAY,
        TUESDAY,
        WEDNESDAY,
        THURSDAY,
        FRIDAY,
        SATURDAY,
        SUNDAY,
    }
    export enum ErrorType {
        UNKNOWN,
        UNEXP_EOF,
        UNEXP_EOF_IN_STRING,
        UNEXP_EOF_IN_COMMENT,
        NON_DIGIT_IN_CONST,
        DIGIT_RADIX,
        FLOAT_RADIX,
        FLOAT_MALFORMED,
    }
    export enum FileError {
        EXIST,
        ISDIR,
        ACCES,
        NAMETOOLONG,
        NOENT,
        NOTDIR,
        NXIO,
        NODEV,
        ROFS,
        TXTBSY,
        FAULT,
        LOOP,
        NOSPC,
        NOMEM,
        MFILE,
        NFILE,
        BADF,
        INVAL,
        PIPE,
        AGAIN,
        INTR,
        IO,
        PERM,
        NOSYS,
        FAILED,
    }
    export enum IOChannelError {
        FBIG,
        INVAL,
        IO,
        ISDIR,
        NOSPC,
        NXIO,
        OVERFLOW,
        PIPE,
        FAILED,
    }
    export enum IOError {
        NONE,
        AGAIN,
        INVAL,
        UNKNOWN,
    }
    export enum IOStatus {
        ERROR,
        NORMAL,
        EOF,
        AGAIN,
    }
    export enum KeyFileError {
        UNKNOWN_ENCODING,
        PARSE,
        NOT_FOUND,
        KEY_NOT_FOUND,
        GROUP_NOT_FOUND,
        INVALID_VALUE,
    }
    export enum MarkupError {
        BAD_UTF8,
        EMPTY,
        PARSE,
        UNKNOWN_ELEMENT,
        UNKNOWN_ATTRIBUTE,
        INVALID_CONTENT,
        MISSING_ATTRIBUTE,
    }
    export enum NormalizeMode {
        DEFAULT,
        NFD,
        DEFAULT_COMPOSE,
        NFC,
        ALL,
        NFKD,
        ALL_COMPOSE,
        NFKC,
    }
    export enum OnceStatus {
        NOTCALLED,
        PROGRESS,
        READY,
    }
    export enum OptionArg {
        NONE,
        STRING,
        INT,
        CALLBACK,
        FILENAME,
        STRING_ARRAY,
        FILENAME_ARRAY,
        DOUBLE,
        INT64,
    }
    export enum OptionError {
        UNKNOWN_OPTION,
        BAD_VALUE,
        FAILED,
    }
    export enum RegexError {
        COMPILE,
        OPTIMIZE,
        REPLACE,
        MATCH,
        INTERNAL,
        STRAY_BACKSLASH,
        MISSING_CONTROL_CHAR,
        UNRECOGNIZED_ESCAPE,
        QUANTIFIERS_OUT_OF_ORDER,
        QUANTIFIER_TOO_BIG,
        UNTERMINATED_CHARACTER_CLASS,
        INVALID_ESCAPE_IN_CHARACTER_CLASS,
        RANGE_OUT_OF_ORDER,
        NOTHING_TO_REPEAT,
        UNRECOGNIZED_CHARACTER,
        POSIX_NAMED_CLASS_OUTSIDE_CLASS,
        UNMATCHED_PARENTHESIS,
        INEXISTENT_SUBPATTERN_REFERENCE,
        UNTERMINATED_COMMENT,
        EXPRESSION_TOO_LARGE,
        MEMORY_ERROR,
        VARIABLE_LENGTH_LOOKBEHIND,
        MALFORMED_CONDITION,
        TOO_MANY_CONDITIONAL_BRANCHES,
        ASSERTION_EXPECTED,
        UNKNOWN_POSIX_CLASS_NAME,
        POSIX_COLLATING_ELEMENTS_NOT_SUPPORTED,
        HEX_CODE_TOO_LARGE,
        INVALID_CONDITION,
        SINGLE_BYTE_MATCH_IN_LOOKBEHIND,
        INFINITE_LOOP,
        MISSING_SUBPATTERN_NAME_TERMINATOR,
        DUPLICATE_SUBPATTERN_NAME,
        MALFORMED_PROPERTY,
        UNKNOWN_PROPERTY,
        SUBPATTERN_NAME_TOO_LONG,
        TOO_MANY_SUBPATTERNS,
        INVALID_OCTAL_VALUE,
        TOO_MANY_BRANCHES_IN_DEFINE,
        DEFINE_REPETION,
        INCONSISTENT_NEWLINE_OPTIONS,
        MISSING_BACK_REFERENCE,
        INVALID_RELATIVE_REFERENCE,
        BACKTRACKING_CONTROL_VERB_ARGUMENT_FORBIDDEN,
        UNKNOWN_BACKTRACKING_CONTROL_VERB,
        NUMBER_TOO_BIG,
        MISSING_SUBPATTERN_NAME,
        MISSING_DIGIT,
        INVALID_DATA_CHARACTER,
        EXTRA_SUBPATTERN_NAME,
        BACKTRACKING_CONTROL_VERB_ARGUMENT_REQUIRED,
        INVALID_CONTROL_CHAR,
        MISSING_NAME,
        NOT_SUPPORTED_IN_CLASS,
        TOO_MANY_FORWARD_REFERENCES,
        NAME_TOO_LONG,
        CHARACTER_VALUE_TOO_LARGE,
    }
    export enum SeekType {
        CUR,
        SET,
        END,
    }
    export enum ShellError {
        BAD_QUOTING,
        EMPTY_STRING,
        FAILED,
    }
    export enum SliceConfig {
        ALWAYS_MALLOC,
        BYPASS_MAGAZINES,
        WORKING_SET_MSECS,
        COLOR_INCREMENT,
        CHUNK_SIZES,
        CONTENTION_COUNTER,
    }
    export enum SpawnError {
        FORK,
        READ,
        CHDIR,
        ACCES,
        PERM,
        TOO_BIG,
        _2BIG,
        NOEXEC,
        NAMETOOLONG,
        NOENT,
        NOMEM,
        NOTDIR,
        LOOP,
        TXTBUSY,
        IO,
        NFILE,
        MFILE,
        INVAL,
        ISDIR,
        LIBBAD,
        FAILED,
    }
    export enum TestFileType {
        DIST,
        BUILT,
    }
    export enum TestLogType {
        NONE,
        ERROR,
        START_BINARY,
        LIST_CASE,
        SKIP_CASE,
        START_CASE,
        STOP_CASE,
        MIN_RESULT,
        MAX_RESULT,
        MESSAGE,
        START_SUITE,
        STOP_SUITE,
    }
    export enum ThreadError {
        THREAD_ERROR_AGAIN,
    }
    export enum TimeType {
        STANDARD,
        DAYLIGHT,
        UNIVERSAL,
    }
    export enum TokenType {
        EOF,
        LEFT_PAREN,
        RIGHT_PAREN,
        LEFT_CURLY,
        RIGHT_CURLY,
        LEFT_BRACE,
        RIGHT_BRACE,
        EQUAL_SIGN,
        COMMA,
        NONE,
        ERROR,
        CHAR,
        BINARY,
        OCTAL,
        INT,
        HEX,
        FLOAT,
        STRING,
        SYMBOL,
        IDENTIFIER,
        IDENTIFIER_NULL,
        COMMENT_SINGLE,
        COMMENT_MULTI,
    }
    export enum TraverseType {
        IN_ORDER,
        PRE_ORDER,
        POST_ORDER,
        LEVEL_ORDER,
    }
    export enum UnicodeBreakType {
        MANDATORY,
        CARRIAGE_RETURN,
        LINE_FEED,
        COMBINING_MARK,
        SURROGATE,
        ZERO_WIDTH_SPACE,
        INSEPARABLE,
        NON_BREAKING_GLUE,
        CONTINGENT,
        SPACE,
        AFTER,
        BEFORE,
        BEFORE_AND_AFTER,
        HYPHEN,
        NON_STARTER,
        OPEN_PUNCTUATION,
        CLOSE_PUNCTUATION,
        QUOTATION,
        EXCLAMATION,
        IDEOGRAPHIC,
        NUMERIC,
        INFIX_SEPARATOR,
        SYMBOL,
        ALPHABETIC,
        PREFIX,
        POSTFIX,
        COMPLEX_CONTEXT,
        AMBIGUOUS,
        UNKNOWN,
        NEXT_LINE,
        WORD_JOINER,
        HANGUL_L_JAMO,
        HANGUL_V_JAMO,
        HANGUL_T_JAMO,
        HANGUL_LV_SYLLABLE,
        HANGUL_LVT_SYLLABLE,
        CLOSE_PARANTHESIS,
        CONDITIONAL_JAPANESE_STARTER,
        HEBREW_LETTER,
        REGIONAL_INDICATOR,
    }
    export enum UnicodeScript {
        INVALID_CODE,
        COMMON,
        INHERITED,
        ARABIC,
        ARMENIAN,
        BENGALI,
        BOPOMOFO,
        CHEROKEE,
        COPTIC,
        CYRILLIC,
        DESERET,
        DEVANAGARI,
        ETHIOPIC,
        GEORGIAN,
        GOTHIC,
        GREEK,
        GUJARATI,
        GURMUKHI,
        HAN,
        HANGUL,
        HEBREW,
        HIRAGANA,
        KANNADA,
        KATAKANA,
        KHMER,
        LAO,
        LATIN,
        MALAYALAM,
        MONGOLIAN,
        MYANMAR,
        OGHAM,
        OLD_ITALIC,
        ORIYA,
        RUNIC,
        SINHALA,
        SYRIAC,
        TAMIL,
        TELUGU,
        THAANA,
        THAI,
        TIBETAN,
        CANADIAN_ABORIGINAL,
        YI,
        TAGALOG,
        HANUNOO,
        BUHID,
        TAGBANWA,
        BRAILLE,
        CYPRIOT,
        LIMBU,
        OSMANYA,
        SHAVIAN,
        LINEAR_B,
        TAI_LE,
        UGARITIC,
        NEW_TAI_LUE,
        BUGINESE,
        GLAGOLITIC,
        TIFINAGH,
        SYLOTI_NAGRI,
        OLD_PERSIAN,
        KHAROSHTHI,
        UNKNOWN,
        BALINESE,
        CUNEIFORM,
        PHOENICIAN,
        PHAGS_PA,
        NKO,
        KAYAH_LI,
        LEPCHA,
        REJANG,
        SUNDANESE,
        SAURASHTRA,
        CHAM,
        OL_CHIKI,
        VAI,
        CARIAN,
        LYCIAN,
        LYDIAN,
        AVESTAN,
        BAMUM,
        EGYPTIAN_HIEROGLYPHS,
        IMPERIAL_ARAMAIC,
        INSCRIPTIONAL_PAHLAVI,
        INSCRIPTIONAL_PARTHIAN,
        JAVANESE,
        KAITHI,
        LISU,
        MEETEI_MAYEK,
        OLD_SOUTH_ARABIAN,
        OLD_TURKIC,
        SAMARITAN,
        TAI_THAM,
        TAI_VIET,
        BATAK,
        BRAHMI,
        MANDAIC,
        CHAKMA,
        MEROITIC_CURSIVE,
        MEROITIC_HIEROGLYPHS,
        MIAO,
        SHARADA,
        SORA_SOMPENG,
        TAKRI,
        BASSA_VAH,
        CAUCASIAN_ALBANIAN,
        DUPLOYAN,
        ELBASAN,
        GRANTHA,
        KHOJKI,
        KHUDAWADI,
        LINEAR_A,
        MAHAJANI,
        MANICHAEAN,
        MENDE_KIKAKUI,
        MODI,
        MRO,
        NABATAEAN,
        OLD_NORTH_ARABIAN,
        OLD_PERMIC,
        PAHAWH_HMONG,
        PALMYRENE,
        PAU_CIN_HAU,
        PSALTER_PAHLAVI,
        SIDDHAM,
        TIRHUTA,
        WARANG_CITI,
        AHOM,
        ANATOLIAN_HIEROGLYPHS,
        HATRAN,
        MULTANI,
        OLD_HUNGARIAN,
        SIGNWRITING,
    }
    export enum UnicodeType {
        CONTROL,
        FORMAT,
        UNASSIGNED,
        PRIVATE_USE,
        SURROGATE,
        LOWERCASE_LETTER,
        MODIFIER_LETTER,
        OTHER_LETTER,
        TITLECASE_LETTER,
        UPPERCASE_LETTER,
        SPACING_MARK,
        ENCLOSING_MARK,
        NON_SPACING_MARK,
        DECIMAL_NUMBER,
        LETTER_NUMBER,
        OTHER_NUMBER,
        CONNECT_PUNCTUATION,
        DASH_PUNCTUATION,
        CLOSE_PUNCTUATION,
        FINAL_PUNCTUATION,
        INITIAL_PUNCTUATION,
        OTHER_PUNCTUATION,
        OPEN_PUNCTUATION,
        CURRENCY_SYMBOL,
        MODIFIER_SYMBOL,
        MATH_SYMBOL,
        OTHER_SYMBOL,
        LINE_SEPARATOR,
        PARAGRAPH_SEPARATOR,
        SPACE_SEPARATOR,
    }
    export enum UserDirectory {
        DIRECTORY_DESKTOP,
        DIRECTORY_DOCUMENTS,
        DIRECTORY_DOWNLOAD,
        DIRECTORY_MUSIC,
        DIRECTORY_PICTURES,
        DIRECTORY_PUBLIC_SHARE,
        DIRECTORY_TEMPLATES,
        DIRECTORY_VIDEOS,
        N_DIRECTORIES,
    }
    export enum VariantClass {
        BOOLEAN,
        BYTE,
        INT16,
        UINT16,
        INT32,
        UINT32,
        INT64,
        UINT64,
        HANDLE,
        DOUBLE,
        STRING,
        OBJECT_PATH,
        SIGNATURE,
        VARIANT,
        MAYBE,
        ARRAY,
        TUPLE,
        DICT_ENTRY,
    }
    export enum VariantParseError {
        FAILED,
        BASIC_TYPE_EXPECTED,
        CANNOT_INFER_TYPE,
        DEFINITE_TYPE_EXPECTED,
        INPUT_NOT_AT_END,
        INVALID_CHARACTER,
        INVALID_FORMAT_STRING,
        INVALID_OBJECT_PATH,
        INVALID_SIGNATURE,
        INVALID_TYPE_STRING,
        NO_COMMON_TYPE,
        NUMBER_OUT_OF_RANGE,
        NUMBER_TOO_BIG,
        TYPE_ERROR,
        UNEXPECTED_TOKEN,
        UNKNOWN_KEYWORD,
        UNTERMINATED_STRING_CONSTANT,
        VALUE_EXPECTED,
    }
    export enum AsciiType{
        ALNUM,
        ALPHA,
        CNTRL,
        DIGIT,
        GRAPH,
        LOWER,
        PRINT,
        PUNCT,
        SPACE,
        UPPER,
        XDIGIT,
    }
    export enum FileTest{
        IS_REGULAR,
        IS_SYMLINK,
        IS_DIR,
        IS_EXECUTABLE,
        EXISTS,
    }
    export enum FormatSizeFlags{
        DEFAULT,
        LONG_FORMAT,
        IEC_UNITS,
    }
    export enum HookFlagMask{
        ACTIVE,
        IN_CALL,
        MASK,
    }
    export enum IOCondition{
        IN,
        OUT,
        PRI,
        ERR,
        HUP,
        NVAL,
    }
    export enum IOFlags{
        APPEND,
        NONBLOCK,
        IS_READABLE,
        IS_WRITABLE,
        IS_WRITEABLE,
        IS_SEEKABLE,
        MASK,
        GET_MASK,
        SET_MASK,
    }
    export enum KeyFileFlags{
        NONE,
        KEEP_COMMENTS,
        KEEP_TRANSLATIONS,
    }
    export enum LogLevelFlags{
        FLAG_RECURSION,
        FLAG_FATAL,
        LEVEL_ERROR,
        LEVEL_CRITICAL,
        LEVEL_WARNING,
        LEVEL_MESSAGE,
        LEVEL_INFO,
        LEVEL_DEBUG,
        LEVEL_MASK,
    }
    export enum MarkupCollectType{
        INVALID,
        STRING,
        STRDUP,
        BOOLEAN,
        TRISTATE,
        OPTIONAL,
    }
    export enum MarkupParseFlags{
        DO_NOT_USE_THIS_UNSUPPORTED_FLAG,
        TREAT_CDATA_AS_TEXT,
        PREFIX_ERROR_POSITION,
        IGNORE_QUALIFIED,
    }
    export enum OptionFlags{
        NONE,
        HIDDEN,
        IN_MAIN,
        REVERSE,
        NO_ARG,
        FILENAME,
        OPTIONAL_ARG,
        NOALIAS,
    }
    export enum RegexCompileFlags{
        CASELESS,
        MULTILINE,
        DOTALL,
        EXTENDED,
        ANCHORED,
        DOLLAR_ENDONLY,
        UNGREEDY,
        RAW,
        NO_AUTO_CAPTURE,
        OPTIMIZE,
        FIRSTLINE,
        DUPNAMES,
        NEWLINE_CR,
        NEWLINE_LF,
        NEWLINE_CRLF,
        NEWLINE_ANYCRLF,
        BSR_ANYCRLF,
        JAVASCRIPT_COMPAT,
    }
    export enum RegexMatchFlags{
        ANCHORED,
        NOTBOL,
        NOTEOL,
        NOTEMPTY,
        PARTIAL,
        NEWLINE_CR,
        NEWLINE_LF,
        NEWLINE_CRLF,
        NEWLINE_ANY,
        NEWLINE_ANYCRLF,
        BSR_ANYCRLF,
        BSR_ANY,
        PARTIAL_SOFT,
        PARTIAL_HARD,
        NOTEMPTY_ATSTART,
    }
    export enum SpawnFlags{
        DEFAULT,
        LEAVE_DESCRIPTORS_OPEN,
        DO_NOT_REAP_CHILD,
        SEARCH_PATH,
        STDOUT_TO_DEV_NULL,
        STDERR_TO_DEV_NULL,
        CHILD_INHERITS_STDIN,
        FILE_AND_ARGV_ZERO,
        SEARCH_PATH_FROM_ENVP,
        CLOEXEC_PIPES,
    }
    export enum TestSubprocessFlags{
        STDIN,
        STDOUT,
        STDERR,
    }
    export enum TestTrapFlags{
        SILENCE_STDOUT,
        SILENCE_STDERR,
        INHERIT_STDIN,
    }
    export enum TraverseFlags{
        LEAVES,
        NON_LEAVES,
        ALL,
        MASK,
        LEAFS,
        NON_LEAFS,
    }
}