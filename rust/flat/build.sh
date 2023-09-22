cargo build --release --target aarch64-linux-android # arm64-v8a
cargo build --release --target armv7-linux-androideabi  # armeabi-v7a
cargo build --release --target i686-linux-android  # x86

mkdir -p ../../android/app/src/main/jniLibs
mkdir -p ../../android/app/src/main/jniLibs/arm64-v8a/
mkdir -p ../../android/app/src/main/jniLibs/armeabi-v7a/
mkdir -p ../../android/app/src/main/jniLibs/x86/

cp ./target/aarch64-linux-android/release/libflat.so ../../android/app/src/main/jniLibs/arm64-v8a/
cp ./target/armv7-linux-androideabi/release/libflat.so ../../android/app/src/main/jniLibs/armeabi-v7a/
cp ./target/i686-linux-android/release/libflat.so ../../android/app/src/main/jniLibs/x86/
